import {useState, useEffect} from 'react';
import {db, storage, timestamp} from '../firebase';


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = db.collection(collection);
        db.collection(collection).orderBy('createdAt','desc').onSnapshot((snap)=>{
                let documents =[];
                snap.forEach(doc=> {
                    documents.push({...doc.data(), id:doc.id})
                });
                setDocs(documents)
        })

        //unsubscribe from collection
        return () => unsub();
    }, [collection])

    return {docs};
}

export default useFirestore;