import React, { useState, useEffect } from 'react';
// import products from '../../product'
import { Row,Col } from 'react-bootstrap'
import Product from '../Product'
import axios from 'axios'


function HomeScreen() {
  const [products, setProducts]= useState([])
  useEffect(()=>{
    async function fetchProducts(){
      const {data}=await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }
      fetchProducts()
  },[])


  return (
    <div>
      <h1 className='text-center'>Latest products</h1>
      <Row>
        {products.map((product)=>(
        <Col key ={product._id}sm={12} md={6} lg={4} xl={3}>                                            
          {/* <h3>{product.name}</h3> */}
        <Product product = {product}/>              {/* loading Product.js  file, and passing product as props */}
        </Col>


        ))}


      </Row>
    </div>
  )
}

export default HomeScreen
