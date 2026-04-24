import { db } from "./firebase.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// Add
// Read
export async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "Clothes"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export async function fetchImages(){
  const querySnapshot = await getDocs(collection(db, "LandingPageImages"));
  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}
// Update
// Delete