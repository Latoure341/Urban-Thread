import { db } from "./firebase.js";
import { getDocs, collection } from "firebase/firestore";

// Add
// Read
export async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "Clothes"));
  const items = [];

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ":", doc.data());
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Update
// Delete