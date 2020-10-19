import React, { useState } from 'react'
import { db } from '../../firebase';
import ProgressBar from '../Progress/ProgressBar';
function InsertProducts() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const fileTypes = ['image/png', 'image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && fileTypes.includes(selected.type)) {
            handleSubmit();
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please select an image (jpeg/png)');

        }
        console.log(selected)
    }

    //Submit form
    const handleSubmit = (e) => {


        db.collection('products').add({
            title: title,
            price: price,
            description: description
        }).then(() => {
            console.log("SUBMITTED")
        }).catch((error) => {
            console.log(error)
        })
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div>
            <form onSubmit={changeHandler}>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <textarea placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}  ></textarea>
                <input type="file" onChange={changeHandler} />

                <div className="file__output">
                    {error && <div>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default InsertProducts
