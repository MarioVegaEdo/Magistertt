import firebase from 'firebase/app';
import 'firebase/firestore';
import {useFirestore, useFirebaseApp} from 'reactfire'


export const simpleCall = (refFire,table) => {
    
    const datav = refFire
    .collection(table)
    .onSnapshot((snapshot) =>{
      const total = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
     console.log(total)
      return () =>datav()
      //return total
    })

}