import React from 'react';


function Product(props){
    console.log(props);
    
    return(
        <div>
            <h1>{props.product.name}</h1>
            <p>
                {props.product.description}
               <br/> {props.product.price}
            </p>


        </div>
    )

}



export default Product;
