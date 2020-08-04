import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import success from '../../../../assets/img/Success.png';


const useStyles = makeStyles((theme) => ({

    alert: {

        textAlign: 'center',
        width: '70%',
        margin: 'auto',

    },

    head: {

        marginTop: '-30px',
        color: 'black',
        fontSize: '1.3em'
    },

    text: {
        width: '80%',
        margin: 'auto',
        marginTop: '-10px',
        marginBottom: '20px'
    },
    btn: {
        width: '80%',
        backgroundColor: "rgb(103,161,2)"
    }



}));

const Success = (props) => {
    const classes = useStyles();
    return (


        <
        div className = { classes.alert } >
        <
        img src = { success }
        /> <
        h2 className = { classes.head } > { props.head } < /h2> <
        p className = { classes.text } > { props.text } < /p> <
        Button className = { classes.btn }
        variant = "contained" > { props.btn } < /Button> <
        /div>
    );
};

export default Success;