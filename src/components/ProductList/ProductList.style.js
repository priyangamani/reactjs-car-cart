
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    productList: {
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch'

 },
 productListitem: {
    listStyle: 'none',
    width: '32%',
 },

 searchBar: {
   alignItems: 'right',
},
textField:{
   color:'#333',
   fontSize:'24px'
},
right: {
   marginLeft: 'auto'
 }

}));

export default useStyles;
