import firebase from 'firebase/app';
import 'firebase/firestore';
import {useFirestore, useFirebaseApp} from 'reactfire'


export const oneParamCall = (refFire,table,param,paramValue,condition) => {
    
    
    const datav = refFire
    .collection(table).where(param, condition, paramValue)
    .onSnapshot((snapshot) =>{
      const total = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(total)
      return () =>datav()
    })

}
