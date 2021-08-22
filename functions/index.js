
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// eslint-disable-next-line no-unused-vars
const db = admin.firestore();
// eslint-disable
exports.addFollowing = functions.firestore.document("following/{userUid}/userFollowing/{profileId}")
  .onCreate(async (snapshot, context)=> {
    const following = snapshot.data()
    console.log({ following })
    try {
      const userDoc = await db.collection('users').doc(context.params.userUid).get()
      const batch = db.batch()
      batch.set(db.collection('following').doc(context.params.profileId).collection('userFollowers').doc(context.params.userUid)
        , {
          displayName: userDoc.data().displayName,
          photoURL: userDoc.data().photoURL,
          uid: userDoc.id
        })
      batch.update(db.collection('users').doc(context.params.profileId), {
        followerCount: firebase.firestore.FieldValue.increment(1)
      })

      return await batch.commit()
    } catch (error) {
      return console.log(error)
    }
  })
