import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import app from "./config"

const db = getFirestore(app)



export const getItems = async () => { 
    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []

    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    })

    return items
}

export const filterByCategory = async (category) => {

    const q = query(collection(db, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const filterItems = []

querySnapshot.forEach((doc) => {
  filterItems.push(doc.data())
})
return filterItems
}

export const getItem = async (id) => {
const docRef = doc(db, "items", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return docSnap.data();
} else {
  console.log("No such document!");
}
}