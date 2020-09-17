
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      width:'1024px',
      height:'918px'
   },
   bg: {
      backgroundColor: '#000',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',

   },
   txt: {
      color: '#fff',
      margin: '0 auto',
      backgroundColor: '#000',
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },


}));

export default useStyles;
