import { arrayUnion, doc, updateDoc } from "firebase/firestore"; 
import { db } from "./db";

async function storeEmail(email: string): Promise<boolean> {
  try {
    const docRef = doc(db, 'petals_studio', 'subscribers');
    await updateDoc(docRef, { emails: arrayUnion(email) });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default storeEmail;
