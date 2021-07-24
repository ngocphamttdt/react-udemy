import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/fireStoreService";

export default function useFirestoreDoc({ query, data, deps, shouldExecute = true }) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(!shouldExecute) return;
    dispatch(asyncActionStart())
    const unsubscribe = query().onSnapshot(
      snapShot => {
        if(!snapShot.exists){
          dispatch(asyncActionError({code: 'not-found', message: 'Could not find document'}))
         
          return
        }
        data(dataFromSnapshot(snapShot))
        
        dispatch(asyncActionFinish())
      },
      error => dispatch(asyncActionError())
    )
    return () => {
      unsubscribe()
    }
  }, deps) //eslint-disable-line 

}