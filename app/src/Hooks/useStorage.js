import {useState, useEffect} from 'react';
import {db, storage, timestamp} from '../firebase';

const useStorage = (file) => {
const [url, setUrl] = useState(0);
const [error, setError] = useState(0);
const [progress, setProgress] = useState(0);

useEffect(() => {
    //Reference to file in firebase
    const storageRef = storage.ref(file.name);
    const collectionRef = db.collection('products');

    storageRef.put(file).on('state_changed', (snap)=> {
        let percentage = (snap.bytesTransferred/snap.totalBytes) * 100;
        setProgress(percentage);
    },(err) => {
        setError(err);
    }, async() => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({url, createdAt})
        setUrl(url)
    });
}, [file]);

return {progress, url, error}
}

export default useStorage;