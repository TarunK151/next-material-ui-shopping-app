import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: 10
    },
    productDescription: {
        display: 'flex',
        height: '70px',
        maxHeight: '70px',
        overflow: 'hidden'
    }
});

const ProductCard = ({data, addProduct}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link href={`/products/${data.id}`} style={{textDecoration: 'none'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
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
                <Button variant="contained" size="small" color="secondary" onClick={() => addProduct(data.id)}>
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;