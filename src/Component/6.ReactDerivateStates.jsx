import React, { useState } from 'react'

const ReactDerivateStates = () => {

    // increase product quantity and then choose it and then update product it as it will not work
    // because the product is products state and in selectProduct is no the same
    // no solve instead of storing a new product, we store only its ID.

    const [products, setProducts] = useState([
        {id : 1 , title : "black shirt", quantity : 1},
        {id : 2 , title : "red shirt", quantity : 31},
        {id : 3 , title : "blue shirt", quantity : 2},
        {id : 4 , title : "brown shirt", quantity : 9},
    ]);

    const [selectProduct, setSelectProduct] = useState();
    // const [selectId, setSelectId] = useState(null);
        // const selectedProduct =  products.find((p)=> p.id === selectId);

    const increment = (id) => {
        setProducts((prev)=>{
            return prev.map((product)=>{
                if(product.id === id){
                    return {...prev, quantity : product.quantity + 1}
                }else{
                    return product;
                }
            });
        })
    }

    const handleChoose = (id) => {
        const product = products.find((p)=> p.id === id);
        setSelectProduct(product);
    }

    // const handleChoose = (id) => {
    //     setSelectId(id);
    // }


  return (
    <div>
        <h4>All Products</h4>
        {products.map((product)=>(
            <div>
            <span>
                {product.title}
                <button onClick={()=>handleChoose(product.id)}>Choose</button>
            </span>
            <div>
                <button>-</button>
                <span>{product.quantity}</span>
                <button onClick={()=>increment(product.id)}>+</button>
            </div>
            </div>
        ))}
        <h4>Selected Products</h4>
        <span>{setSelectProduct.title}</span>
        <span>{setSelectProduct.quantity}</span>
        {/* <span>{selectedProduct?.title}</span>
        <span>{selectedProduct?.quantity}</span> */}
    </div>
  )
}

export default ReactDerivateStates


// moral -- if one state effect another one, just store it's id , instead of creating a new object inside