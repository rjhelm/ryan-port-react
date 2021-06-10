import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './contact.module.css';

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formState));
    };

    const handleChange = (e) => {
        const eventName = e.target.name;
        const value = e.target.value;


        switch (eventName) {
            case "name":
                return setFormState((state) => ({
                    ...state,
                    name: value,
                }));
            case "email":
                return setFormState((state) => ({
                    ...state,
                    email: value,
                }));
            case "message":
                return setFormState((state) => ({
                    ...state,
                    message: value,
                }));
            default:
                return console.log("Value Did Not Match");
        }
    };
    const useStyles = makeStyles((theme) => ({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "50vh",
            },
            "& #message": {
                height: "10vh",
                justifyContent: "start",
            },
            "& #name, #email": {
                height: "2.5vh",
                justifyContent: "start",
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className={styles.form}>
            <h1>Let's Chat</h1>
            <br />
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="name" variant="outlined" label="Your Name" name="name" type="text" value={formState.name} onChange={handleChange} />

                <TextField id="email" variant="outlined" label="Your Email Address" name="email" type="email" value={formState.email} onChange={handleChange} />

                <TextField 
                    id="message" 
                    variant="outlined" 
                    label="Your Message" 
                    name="message" 
                    type="text" 
                    multiline rows="4" 
                    value={formState.message} 
                    onChange={handleChange} />

                    <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>
    );
}
    export default Form;