import React from 'react'
import useFirestore from '../../Hooks/useFirestore';

function ViewProducts() {
    const { docs } = useFirestore('products');
    console.log(docs);
    return (
        <div>
            {docs && docs.map(doc => (
                <div className="" key={doc.id}>
                    <img src={doc.url} alt="" />
                </div>
            ))}
        </div>
    )
}

export default ViewProducts
