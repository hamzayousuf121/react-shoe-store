import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: 'center'
    },
});

export default function Footer() {
    const classes = useStyles();
    return (
        <BottomNavigation
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Design and Developed By Hamza Yousuf" />
        </BottomNavigation>
    );
}
