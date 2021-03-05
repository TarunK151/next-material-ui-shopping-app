import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        padding: 10,
        margin: '0 auto'
    },
    productDescription: {
        display: 'flex',
        height: '70px',
        maxHeight: '70px',
        overflow: 'hidden'
    }
});

const ProductCard = ({data, modifyProductQuantity, basketItem}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link href={`/products/${data.handle}`} style={{textDecoration: 'none'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={data.title}
                        height="300px"
                        image={data.images[0].src}
                        title={data.title}
                        style={{objectFit: 'contain'}}
                    />
                    <CardContent className={classes.productDescription}>
                        <Typography variant='subtitle2' style={{flexBasis: '90%', wordBreak: 'break-word',
                        color: 'black'}}>
                            {data.title}
                        </Typography>
                        <Typography variant='subtitle2' style={{flex: 'auto', color: 'black'}}>
                            {data.variants[0].price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {basketItem[0].numbers <= 0 && <Button variant="contained" size="small" 
                color="secondary" onClick={() => modifyProductQuantity(data.id, 1)}>
                    Add to cart
                </Button>}
                {basketItem[0].numbers > 0 && <ButtonGroup variant="contained" color="secondary" 
                size="small" aria-label="product button">
                    <Button onClick={() => modifyProductQuantity(data.id, -1)}>-</Button>
                    <Button>{basketItem[0].numbers}</Button>
                    <Button onClick={() => modifyProductQuantity(data.id, 1)}>+</Button>
                </ButtonGroup>}
            </CardActions>
        </Card>
    );
};

export default ProductCard;