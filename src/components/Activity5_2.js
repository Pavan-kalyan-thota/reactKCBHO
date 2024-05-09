import { useState } from "react";

function Activity5_2({products}){
    const [productList, setProducts] = useState(products);

    function addProduct(){
        setProducts(prev => prev.concat({id: Date.now(), title: "New Product", price: 15.99}));
    }

    return <>
        <button onClick={addProduct}>Add</button>
        <ul>
            {productList.map(product => 
                <li key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </li>
            )}
        </ul>
    </>;
}

export default Activity5_2;