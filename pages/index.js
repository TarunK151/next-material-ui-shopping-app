import ProductCard from "../components/ProductCard";
import { Box, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Cart from '../components/Cart'
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/products');
  const data = await res.json();

  return {props: {products: data}}
}

const useStyles = makeStyles({
  root: {
    margin: '120px auto',
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1440px'
  },
  content: {
    flexBasis: '75%'
  },
  cart: {
    display: 'flex',
    margin: '0 0 0 15px',
    alignSelf: 'flex-start'
  }
})

export default function Home({products}) {
  const classes = useStyles();
  const tracker = products.map((item) => {
    return {
      id: item.id,
      image: item.images[0].src,
      title: item.title,
      price: item.variants[0].price,
      numbers: 0
    }
  });

  const [basket, setBasket] = useState(tracker);

  const addProduct = (productid) => {
    setBasket(basket.map((item) => {
      if(item.id === productid){
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          numbers: ++item.numbers
        }
      }
        
      else
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          numbers: item.numbers
        }
    }))
    console.log(basket,'offf');
  }

  const removeProduct = (productid) => {
    setBasket(basket.map((item) => {
      if(item.id === productid)
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          numbers: --item.numbers
        }
      else
        return {
          id: item.id,
          image: item.image,
          title: item.title,
          price: item.price,
          numbers: item.numbers
        }
    }))
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={4}>
          {products.map(product => <Grid item xs={12} sm={6} md={4} key={product.id}> 
            <ProductCard data={product} addProduct={addProduct}/> 
          </Grid>)}
        </Grid>
      </div>
      <Box display={{ xs: 'none', sm: 'none', md: 'block' }} style={{flex: 'auto'}}>
        <div className={classes.cart}>
          <Cart datas={products} basketItems={basket.filter((e) => {
            return e.numbers > 0
          })} removeProduct={removeProduct}></Cart>
        </div>
      </Box>
    </div>
  )
}
