import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
    paper: {
      padding: "1.5rem",
      marginTop: "2rem",
      marginBottom: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: theme.gridColor,
      border: theme.border,
      [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
        padding: "0rem"
      }
    },
    sign:{
      display:"flex", 
      flexDirection: "column",
      justifyContent:"center",
      [theme.breakpoints.down("sm")]: {
        fontSize:"80%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"60%"
      },
    },
    button: {
      margin: "1rem",
      background: theme.headerColor,
      [theme.breakpoints.down("sm")]: {
        fontSize:"90%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize:"80%"
      },
    },
    contacts:{
      padding:"1.5rem 1rem 1rem 1rem",
      marginTop:"1rem", 
      backgroundColor:"#56516a",
      [theme.breakpoints.down("sm")]: {
        marginTop:"1rem",
        paddingBottom:"0"
      },
    },
    call_us:{
      display:"flex",
      flexDirection:"column",
      borderLeft: "6px solid #d1e486",
      padding:"1rem 3rem",
      [theme.breakpoints.down("sm")]: {
        borderLeft: "none",
        borderBottom: "6px solid #d1e486",
        alignItems:"center",
        padding:"1rem 1rem",
      },
    },
    call_us_header:{
      fontSize:"130%",
      color:"#d1e486",
      marginBottom:"2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize:"110%",
      },
    },
    write_us:{
      display:"flex",
      flexDirection:"column",
      borderLeft: "6px solid #f9abb0",
      padding:"1rem 3rem",
      [theme.breakpoints.down("sm")]: {
        borderLeft: "none",
        borderBottom: "6px solid #f9abb0",
        alignItems:"center",
        padding:"1rem 1rem",
      },
    },
    write_us_header:{
      fontSize:"130%",
      color:"#f9abb0",
      marginBottom:"2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize:"110%",
      },
    },
    application:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      borderLeft: "6px solid #a3ddea",
      padding:"1rem",
      [theme.breakpoints.down("sm")]: {
        borderLeft: "none",
        borderBottom: "6px solid #a3ddea",
        marginBottom:"0rem"
      },
    },
    application_header:{
      fontSize:"130%",
      color:"#a3ddea",
      marginBottom:"2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize:"110%",
      },
    },
    box:{
      fontSize:"110%",
      color:"white",
      margin:".5rem 0",
      [theme.breakpoints.down("sm")]: {
        fontSize:"100%",
      },
    },
    map:{
      height:"500px",
      width:"500px",
      border: theme.border,
      [theme.breakpoints.down("sm")]: {
        height:"250px",
        width:"250px",
      },
    },
    find_us_here:{
      fontSize:"150%",
      marginTop:"2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize:"120%",
        marginTop:"1rem",
      },
    },
    auth_to_make_order:{
      fontSize:"140%",
      marginTop:"2rem",
      color:"gray",
      cursor:"pointer",
      [theme.breakpoints.down("sm")]: {
        fontSize:"110%",
        marginTop:"1rem",
      },
    }
  }));

  export default styles