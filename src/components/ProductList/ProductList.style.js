
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

}));

export default useStyles;
