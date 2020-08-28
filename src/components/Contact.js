import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    button: {
        margin: theme.spacing(1),
        width: '100%'
    },
    root2: {
        display: 'flex',
        marginTop: '30px',
        boxShadow: '-7px 3px 18px 0px rgba(95,24,201,1)',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(75),
            height: theme.spacing(25),
        },
    },
}));


function Contact() {
    const classes = useStyles();

    return (
        <>
            <h1 className="text-center text-primary my-3">Contact Page</h1>
            <div className="container">
                <div className="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="Shoes Store Map" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2401224769837!2d67.02734041500258!3d24.855647184056316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e714fb96eb7%3A0xa3f199753e609348!2sRegal%20Shoe%20Store!5e0!3m2!1sen!2s!4v1598443189052!5m2!1sen!2s" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                        <TextField
                            id="standard-full-width"
                            label="First Name"
                            style={{ margin: 8 }}
                            placeholder="Enter your First name"

                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Last Name"
                            style={{ margin: 8 }}
                            placeholder="Enter your Last name"

                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="standard-full-width"
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Enter your Email"

                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            id="standard-full-width"
                            label="Address"
                            style={{ margin: 8 }}
                            placeholder="Enter your Address"

                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                        >
                            Send
                                </Button>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                        <Paper variant="outlined" square>
                        <h1 className="pt-5 text-primary">Email :</h1>
                        <h2 className="text-primary small">Hamzayousuf121@gmail.com</h2>
                    </Paper>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                        <Paper variant="outlined" square >
                        <h1 className="pt-5 text-primary">Contact No :</h1>
                        <h1 className="text-primary small">03142316028</h1>

                    </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact
