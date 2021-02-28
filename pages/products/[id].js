import { makeStyles } from '@material-ui/core';
import ProductDetails from '../../components/ProductDetails'
import  Head from 'next/head';
import jsonData from '../../data/products.json'

export const getStaticPaths = async () => {
    const paths = jsonData.products.map(product => {
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
    const data = jsonData.products.filter((e) => 
    e.id.toString() === context.params.id);

    return {
        props: {product: data[0]}
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