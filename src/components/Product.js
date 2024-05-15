import React from "react";
import {Card} from "react-bootstrap";
import Rating from "./Rating";

function Product({product}) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}><Card.Img src={product.image} /></a>    

      <Card.Body>
      <a href={`/product/${product._id}`}>
      <Card.Title as= 'div'>
        <strong>{product.name}</strong>
      </Card.Title>
      </a>
      <Card.Text as='div'>
        <div className="my-3">
          {product.rating} from {product.numReviews} reviews
        </div>
      </Card.Text>

      <Card.Text as='h3'>
        <div className="my-3">
         ${product.price}
        </div>
      </Card.Text>
      <Rating value ={product.rating}text ={`${product.numReviews}reviews`} color ={'#f8e825'}/>    {/*the rating value takes 3 arguments as props */}
      </Card.Body>
    </Card>
  )
}

export default Product;

// we need to create the card through boostrap create product id ,image etc, note the template literal to insert the value of product._id ``
