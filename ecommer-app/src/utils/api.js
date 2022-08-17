import { doc, getDoc, getDocs, getFirestore, collection, query, where } from "firebase/firestore";

export const getItem = (id) => {

    return new Promise((resolve) => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        resolve(getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    return { id: snapshot.id, ...snapshot.data() };
                }
            }))
            .catch((err) => {
                console.log(err);
            })
    })
}

export const getCategory = (categoryId) => {

    return new Promise((resolve) => {
        if (categoryId) {
            const db = getFirestore();
            const itemsCollectionQuery = query(collection(db, "items"), where('categoryId', '==', categoryId));

            resolve(getDocs(itemsCollectionQuery)
                .then((snapshot) => {
                    return snapshot.docs.map(
                        (doc) => ({ id: doc.id, ...doc.data() })
                    );
                }))
                .catch((err) => {
                    console.log(err);
                })
        } else {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");

            resolve(getDocs(itemsCollection)
                .then((snapshot) => {
                    return snapshot.docs.map(
                        (doc) => ({ id: doc.id, ...doc.data() })
                    );
                }))
                .catch((err) => {
                    console.log(err);
                })
        }
    })
}