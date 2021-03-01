import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        alignItems: 'center'
    }
})

const Header = () => {
    const classes = useStyles();
    return ( 
        <AppBar >
            <Toolbar className={classes.root}>
                <Typography variant='h5'>Apparel Shopping site</Typography>
                <Typography variant='h6'>T-shirts, Sweatshirts</Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;