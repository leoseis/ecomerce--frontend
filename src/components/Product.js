import React from "react";
import {Card} from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({product}) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}><Card.Img src={product.image} /></Link>    

      <Card.Body>
      <Link to={`/product/${product._id}`}>
      <Card.Title as= 'div'>
        <strong>{product.name}</strong>
      </Card.Title>
      </Link>

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
