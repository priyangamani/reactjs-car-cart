import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      margin:'0 auto',
      marginTop:50,
    },
    container: {
      width: '100%',
    },
    paper: {
      alignItems: "center",
      justifyContent: "center",
    },
    modelName: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flex: 1,
      display: "flex",
      fontSize:'22px',
      margin: 5,
    },
    paperGrid: {
      margin: 12,

    },
    fontColor:{
      color:'#fff',
      fontSize:16,
      backgroundColor:'#333'
    },
    amountVal:{
      fontSize:20,
      color:'#333',
      marginLeft:5,
      margin: 5,
    }
  }));

  export  default useStyles;