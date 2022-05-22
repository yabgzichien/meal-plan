import { db } from "../firebase";
import { addDoc, collection, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const addToPlan = async (uid, planData) =>{
    console.log(planData)
    // detects if the same plan data is already there
    //await addDoc(collection(db, 'plans', uid, 'plans'), planData)
    await setDoc(doc(db, 'plans', uid, 'plans', planData.mealId), planData, { merge: true })
}

const deletePlan = async (uid, mealId) => {
   await deleteDoc(doc(db, 'plans', uid, 'plans', mealId))
}

const fetchPlans = async (uid) =>{
    const plansArray = []
    await getDocs(collection(db, 'plans', uid, 'plans')).then(snapshot=>{
        snapshot.docs.map(doc=>{
            plansArray.push(doc.data())
        })
    })

    return plansArray
}

const getUserData = async (uid) =>{
    let variable;
    await getDoc(doc(db, 'users', uid)).then(res=>{
        variable = res.data()
    })
    return variable
}



export { addToPlan, fetchPlans, getUserData, deletePlan }