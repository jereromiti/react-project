//  Firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADaq584G0zpN9NdVaTCn9nXUuLH3rkokc",
  authDomain: "react-coder-c0c1f.firebaseapp.com",
  projectId: "react-coder-c0c1f",
  storageBucket: "react-coder-c0c1f.appspot.com",
  messagingSenderId: "898650514488",
  appId: "1:898650514488:web:6781eaab2abc4db57f32cd",
  measurementId: "G-11WGMDP5GM",
};

//1.  Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

//2. getData
async function getData() {
  const productsRef = collection(db, "products");
  //async await
  const documentSnapshot = await getDocs(productsRef);
  const documents = documentSnapshot.docs;
  const docsData = documents.map(
    (item) => {
    return { ...item.data(), id: item.id };
  });
  return docsData;
}

//3. getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

//4. getCategoryData
async function getCategoryData() {
  const productsRef = collection(db, "products");
  //
  const q = query(productsRef, where("category", "==", "mouse"));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;
  

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

// named export
export { getData, getProductData, getCategoryData };
