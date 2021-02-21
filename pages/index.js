import ProductCard from "../components/ProductCard";
import { Box, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Cart from '../components/Cart'

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

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={4}>
          {products.map(product => <Grid item xs={12} sm={6} md={4} > 
            <ProductCard key={product.id} data={product} /> 
          </Grid>)}
        </Grid>
      </div>
      <Box display={{ xs: 'none', sm: 'none', md: 'block' }} style={{flex: 'auto'}}>
        <div className={classes.cart}>
          <Cart></Cart>
        </div>
      </Box>
    </div>
  )
}
