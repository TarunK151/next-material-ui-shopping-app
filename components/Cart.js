import { makeStyles, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '10px',
        flexDirection: 'column'
    },
    cartColumnName: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px 10px',
        borderBottom: '2px solid black'
    },
    cartTotal: {
        display: 'flex',
        justifyContent: 'space-evenly',
        borderTop: '2px solid black',
        margin: '5px 10px',
        backgroundColor: theme.palette.primary.main
    }
}));

const Cart = () => {
    const classes = useStyles();

    return ( <Paper className={classes.root}>
        <Typography variant='h5'>
            Cart 
            <IconButton aria-label="cart">
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        </Typography>
        <div className={classes.cartColumnName}>
            <Typography variant='button'>
                item
            </Typography>
            <Typography variant='button'>
                price
            </Typography>
            <Typography variant='button'>
                quantity
            </Typography>
        </div>

        <div className={classes.cartTotal}>
            <Typography variant='h6'>
                Total
            </Typography>
            <Typography variant='h6'>
                253.2
            </Typography>
        </div>
    </Paper> );
}
 
export default Cart;