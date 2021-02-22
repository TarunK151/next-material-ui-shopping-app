import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useState } from "react";
import { NativeSelect } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        maxWidth: '1440px',
        height: 'auto',
        width: '100%',
        padding: '10% 5%'
    },
    product: {
        borderRight: '1px solid black',
        padding: '5%'
    },
    details: {
    }
})

const ProductDetails = ({data}) => {
    const classes = useStyles();

    const [variant, setVariant] = useState(0);

    return ( 
        <Card className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={12} md={8} >
                    <CardActionArea className={classes.product}>
                        <CardMedia 
                            component='img'
                            alt={data.handle}
                            height='auto'
                            image={data.images[0].src}
                            title={data.title}
                        />
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <CardActions>
                        <CardContent className={classes.details}>
                            <Typography variant='h5' style={{fontSize: '32px'}}>
                                {data.title}
                            </Typography>
                            <br/>
                            <Typography variant='body1' style={{fontWeight: 'bold'}}>
                                {data.body_html.replace( /(<([^>]+)>)/ig, '')}
                            </Typography>
                            <br/>
                            <Typography variant='subtitle2' style={{fontSize: '16px'}}>
                                Vendor: {data.vendor}
                            </Typography>
                            <br/>
                            <Typography variant='h5'>
                                Variant &nbsp;&nbsp;&nbsp;
                                <NativeSelect
                                onChange={(e) => setVariant(e.target.options.selectedIndex)}
                                style={{width: 'auto'}}>{data.options[0].values.map((val,i) => 
                                    <option value={val} key={data.variants[i].id}>{val}</option>)}
                                </NativeSelect>
                            </Typography>
                            <br/>
                            <Typography variant='subtitle2' style={{fontSize: '18px'}}>
                                Available: {data.variants[variant].available? 'Yes': 'No'} &nbsp;&nbsp;&nbsp;
                                Price: {data.variants[variant].price}
                            </Typography>
                        </CardContent>

                    </CardActions>
                </Grid>
            </Grid>
        </Card> 
    );
}
 
export default ProductDetails;