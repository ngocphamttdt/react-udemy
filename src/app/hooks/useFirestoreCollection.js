import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/fireStoreService";

export default function useFirestoreCollection({ query, data, deps }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncActionStart())
    const unsubscribe = query().onSnapshot(
      snapShot => {
        const docs = snapShot.docs.map(doc => dataFromSnapshot(doc))
        data(docs)
        dispatch(asyncActionFinish())
      },
      error => dispatch(asyncActionError(error))
    )
    return () => {
      unsubscribe()
    }
  }, deps) //eslint-disable-line 

}