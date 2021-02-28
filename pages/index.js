import ProductCard from "../components/ProductCard";
import { Box, List, ListItem, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Cart from '../components/Cart'
import { useState, useEffect, useRef } from "react";
import  Head from 'next/head';
import jsonData from '../data/products.json'

export const getStaticProps = async () => {
  return {props: {products: jsonData.products}}
}

const useStyles = makeStyles({
  root: {
    margin: '120px auto',
    padding: '0 16px',
    maxWidth: '1440px'
  },
  cart: {
    margin: '0 auto 15px',
    maxWidth: '500px'
  }
})

export default function Home({products}) {
  const classes = useStyles();
  const stateRef = useRef();

  const tracker = products.map((item) => {
    return {
      id: item.id,
      image: item.images[0].src,
      title: item.title,
      price: parseFloat(item.variants[0].price),
      numbers: 0
    }
  });

  const [basket, setBasket] = useState(tracker);

  stateRef.current = basket;

  useEffect(() => {
    const data = localStorage.getItem('cart-items');
    if(data){
      setBasket(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart-items', JSON.stringify(basket));
  });

  const modifyProductQuantity = (productid, val) => {
    setBasket(stateRef.current.map((item) => {
      if(item.id === productid){
        item.numbers = item.numbers + val;
      }

      return item;
    }))
  }

  return (
    <>
    <Head><title>Shopping site</title></Head>
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={9}>
          <Grid container spacing={4} >
            {products.map(product => <Grid item xs={12} sm={6} md={4} key={product.id}> 
              <ProductCard data={product} modifyProductQuantity={modifyProductQuantity}/> 
            </Grid>)}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className={classes.cart}>
            <Cart basketItems={basket.filter((e) => {
              return e.numbers > 0
            })} modifyProductQuantity={modifyProductQuantity}></Cart>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}