import React, { useState } from 'react'
import { db, storage, timestamp } from '../../firebase';
import ProgressBar from '../Progress/ProgressBar';
function InsertProducts() {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const fileTypes = ['image/png', 'image/jpeg'];

    //Handle image changes
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && fileTypes.includes(selected.type)) {
            setFile(selected);
            setError('')

        } else {
            setFile(null);
            setError('Please select an image (jpeg/png)');
        }

    }

    //Submit form
    const handleSubmit = (e) => {
        //Reference to file in firebase
        const storageRef = storage.ref(file.name);
        const collectionRef = db.collection('products');
        const uploadTask = storageRef.put(file);

        uploadTask.on("state_changed", (snapshot) => {

            //Progress Function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
        }, (error) => {
            console.log(error);
        }, () => {
            const createdAt = timestamp();
            storageRef.getDownloadURL().then(url => {
                collectionRef.add({
                    createdAt, title: title, image: url, rating: 1, price: price
                });

                setProgress(0);
                setTitle("");
                setFile(null);
                setPrice("");
                setDescription("");

            })


        })
        // db.collection('products').add({
        //     title: title,
        //     price: price,
        //     description: description
        // }).then(() => {
        //     console.log("SUBMITTED")
        // }).catch((error) => {
        //     console.log(error)
        // })
        // setTitle("");
        // setPrice("");
        // setDescription("");
    }

    return (
        <div>

            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="file" onChange={changeHandler} />
            <progress value={progress} max="100" />
            <button onClick={handleSubmit}>Save</button>

        </div>
    )
}

export default InsertProducts
