import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const ProductCard = ({data}) => {
    const classes = useStyles();

    console.log(data);

    return (
        <Card className={classes.root}>
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
                    <Typography variant='subtitle2' style={{flexBasis: '90%', wordBreak: 'break-word'}}>
                        {data.title}
                    </Typography>
                    <Typography variant='subtitle2' style={{flex: 'auto'}}>
                        {data.variants[0].price}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="secondary">
                        Add to cart
                    </Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;