import {ref, set, push, onValue, remove, update} from "firebase/database"
import { getDatabase } from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase"
import Toastify from "./toastify";


export const addUser = (info) => {
    const db = getDatabase(firebase);
    const userRef= ref(db, "users/")
    const newUserRef = push(userRef)
    set(newUserRef,{
        username: info.username,
        phoneNumber: info.phoneNumber,
        gender: info.gender
    })
    Toastify("User Added")
}


export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [contactList, setContactList] = useState();

    useEffect(()=>{
        const db = getDatabase(firebase);
        const userRef= ref(db, "users/")
        onValue(userRef, (snapshot)=>{
            const data = snapshot.val()
            const userArray = []

            for (let id in data){
                userArray.push({id, ...data[id]})
            }

            setContactList(userArray)
            setIsLoading(false)
        })
    }, [])

    return {isLoading,contactList}
}

export const deleteUser = (id) => {
    const db = getDatabase(firebase);
    remove(ref(db, "users/" + id))
    Toastify("User Deleted")
}

export const editUser = (info) => {
    const db = getDatabase(firebase);
    const updates = {};
    updates["users/" + info.id] = info;

    return update(ref(db), updates);

}