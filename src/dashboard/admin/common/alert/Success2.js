import React from 'react';
import { Button,Grid, makeStyles } from '@material-ui/core';
import success from '../../../../assets/img/Success.png';


const useStyles = makeStyles((theme) => ({ 

    alert: {

        textAlign: 'center',
        width:'70%',
        margin:'auto',
        
    },

    head:{

        marginTop:'-30px',
        color:'black',
        fontSize:'1.3em'
    },

    text:{
        width:'80%',
        margin:'auto',
        marginTop:'-10px',
        marginBottom:'20px'
    },
    btn1:{
        width:"100%",
        backgroundColor:"rgb(103,161,2)",
        marginRight:'20px'
    },
    btn2:{
        width:"100%",
        backgroundColor:"rgb(8,37,100)"
    }



}));

const Success2 = (props) => {
    const classes = useStyles();
    return (

        
         <div className={classes.alert}>
             <img src={success}/>
             <h2 className={classes.head}>{props.head}</h2>
             <p className={classes.text}>{props.text}</p>
             <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
            <Button className={classes.btn1} variant="contained">{props.firstbtn}</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
             <Button className={classes.btn2} variant="contained" color="primary">{props.secondbtn}</Button>
             </Grid>
             </Grid>
             </div>
    );
};

export default Success2;