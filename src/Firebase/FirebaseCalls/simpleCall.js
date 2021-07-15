import firebase from 'firebase/app';
import 'firebase/firestore';
import {useFirestore, useFirebaseApp} from 'reactfire'

import {useEffect} from 'react'

const firebase = useFirebaseApp();
 const refFire = useFirestore();
  useEffect(() =>{
    const datav = refFire
    .collection('enrollments').where('anteriority', '==', 'No')
    .onSnapshot((snapshot) =>{
      const total = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(total)
      console.log('ª')
      return () =>datav()
    })
  },[refFire])