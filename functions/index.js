
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);


const db = admin.firestore();

// exports.addFollowing = functions.
//     firestore.
//     document("following/{userUid}/userFollowing/{profileId}")
//     .onCreate(async (snapshot, context) => {
//       const following = snapshot.data();
//       console.log({following});
//       try {
//         console.log("go here");
//         const userDoc = await db.collection("users")
//             .doc(context.params.userUid)
//             .get();

//         const batch = db.batch();

//         batch.set(db.collection("following")
//             .doc(context.params.profileId).collection("userFollowers")
//             .doc(context.params.userUid)
//         , {
//           displayName: userDoc.data().displayName,
//           photoURL: userDoc.data().photoURL,
//           uid: userDoc.id,
//         });

//         batch.update(db.collection("users").doc(context.params.profileId), {
//           followerCount: admin.firestore.FieldValue.increment(1),
//         });
//         return await batch.commit();
//       } catch (error) {
//         return console.log(error);
//       }
//     });

// exports.removeFollowing = functions.
//     firestore.
//     document("following/{userUid}/userFollowing/{profileId}")
//     .onDelete(async (snapshot, context) => {
//       const batch = db.batch();
//       batch.delete(db.collection("following")
//           .doc(context.params.profileId).collection("userFollowers")
//           .doc(context.params.userUid));

//       batch.update(db.collection("users").doc(context.params.profileId),
//           {
//             followerCount: admin.firestore.FieldValue.increment(-1),
//           });
//       console.log("go to deleted");
//       try {
//         return await batch.commit();
//       } catch (error) {
//         return console.log(error);
//       }
//     });

exports.eventUpdated = functions.firestore
    .document("events/{eventId}")
    .onUpdate(async (snapshot, context) => {
      const before = snapshot.before.data();
      const after = snapshot.after.data();
      if (before.attendees.length < after.attendees.length) {
        // eslint-disable-next-line max-len
        const attendeeJoined = after.attendees
            // eslint-disable-next-line max-len
            .filter((item1) => !before.attendees.some((item2)=> item2.id === item1.id))[0];
        console.log({attendeeJoined});
        try {
          const followerDocs = await db.collection("following")
              .doc(attendeeJoined.id)
              .collection("userFollowers").get();
          followerDocs.forEach((doc) =>{
            admin.database().ref(`/posts/${doc.id}`
                // eslint-disable-next-line max-len
                .push(newPost(attendeeJoined, "joined-event", context.params.eventId)));
          });
        } catch (error) {
          return console.log(error);
        }
      }
      if (before.attendees.length > after.attendees.length) {
        // eslint-disable-next-line max-len
        const attendeeLeft = before.attendees
            // eslint-disable-next-line max-len
            .filter((item1) => !after.attendees.some((item2)=> item2.id === item1.id))[0];
        console.log({attendeeLeft});
        try {
          const followerDocs = await db.collection("following")
              .doc(attendeeLeft.id)
              .collection("userFollowers").get();
          followerDocs.forEach((doc) =>{
            admin.database().ref(`/posts/${doc.id}`
                // eslint-disable-next-line max-len
                .push(newPost(attendeeLeft, "left-event", context.params.eventId)));
          });
        } catch (error) {
          return console.log(error);
        }
      }
      return console.log("finished");
    });

// eslint-disable-next-line require-jsdoc
function newPost(user, code, eventId) {
  return {
    photoURL: user.photoURL,
    date: admin.database.ServerValue.TIMESTAMP,
    code,
    displayName: user.displayName,
    eventId,
    userUid: user.id,
  };
}
