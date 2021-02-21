import { makeStyles, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        padding: '10px'
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

    </Paper> );
}
 
export default Cart;