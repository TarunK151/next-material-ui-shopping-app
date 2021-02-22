import { makeStyles } from '@material-ui/core';
import ProductDetails from '../../components/ProductDetails'
import  Head from 'next/head';

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8000/products');
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: {id: product.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:8000/products/' + id);
    const data = await res.json();

    return {
        props: {product: data}
    }
}

const useStyles = makeStyles({
    root: {
        margin: '120px auto',
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1440px'
    }
})

const ProductDetailsPage = ({product}) => {
    const classes = useStyles();

    return ( 
        <>
        <Head><title>{product.title}</title></Head>
        <div className={classes.root}>
            <ProductDetails data={product}></ProductDetails>
        </div>
        </>
     );
}
 
export default ProductDetailsPage;