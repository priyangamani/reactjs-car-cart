
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  menuButton: {
      marginRight: theme.spacing(2),
  },
  shopping: {
      height: 30,
      width: 30,
  },
  toolbar: {
      backgroundColor: '#000'
  }
}));

export default useStyles;