import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from "../Rating";
import axios from 'axios';

function ProductScreen() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: </strong>${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color='#f8e825'
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description: </strong>{product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;