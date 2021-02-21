import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return ( <footer className="site-footer" style={{position: 'fixed', height: '100px',
        left: 0, bottom: 0, width: '100%', textAlign: 'center', padding: '20px'}}>
        
        <Paper style={{height: '60px'}}>
            <Typography style={{lineHeight: '60px'}}>Sweatshirt shoping site ©</Typography>
        </Paper>
        
    </footer> );
}
 
export default Footer;