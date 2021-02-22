import { makeStyles, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '10px',
        flexDirection: 'column'
    },
    cartColumn: {
        display: 'flex',
        margin: '5px 10px',
        justifyContent: 'space-evenly',
        borderBottom: '2px solid black'
    },
    cartRow: {
        display: 'flex',
        borderBottom: '2px solid black',
        margin: '5px 0'
    },
    cartItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    cartTotal: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '5px 10px',
        backgroundColor: theme.palette.primary.main
    }
}));

const Cart = ({datas, basketItems, removeProduct}) => {
    const classes = useStyles();

    return ( <Paper className={classes.root}>
        <Typography variant='h5'>
            Cart 
            <IconButton aria-label="cart">
                <Badge badgeContent={basketItems.length} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Typography>
        <div className={classes.cartColumn} >
            <Typography variant='button' >
                item
            </Typography>
            <Typography variant='button' >
                price
            </Typography>
            <Typography variant='button' >
                quantity
            </Typography>
        </div>
        {basketItems.map((item) => <div className={classes.cartRow} key={item.id}>
            <div className={classes.cartItem} style={{flex: '1 0 auto'}}>
                <img src={item.image} style={{width: '60px', height: '60px', alignSelf: 'center'}} />
                <p style={{width: '80px', fontSize: '12px', textAlign: 'center', alignSelf: 'center',
                wordBreak: 'break-word'}}>{item.title} </p>
            </div>
            <b style={{flex: '1 0 auto'}}>{item.price}</b>
            <div className={classes.cartItem} style={{flex: '1 0 auto'}}>
                <p style={{textAlign: 'center'}}>{item.numbers}</p>
                <Button variant="contained" size="small"
                 style={{fontSize: '16px'}} onClick={() => removeProduct(item.id)}>-</Button>
            </div>
        </div> )}
        <div className={classes.cartTotal}>
            <Typography variant='h6'>
                Total
            </Typography>
            <Typography variant='h6'>
                {basketItems.reduce((a, b) => a + (b.price * b.numbers), 0).toFixed(2)}
            </Typography>
        </div>
    </Paper> );
}
 
export default Cart;