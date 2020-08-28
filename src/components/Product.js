import React from 'react';
import Shoes from "../shoes.json"
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    avatar: {
        backgroundColor: blue[500],
    },
    link: {
        textDecoration: 'none'
    }
}));


export default function Product() {
    const classes = useStyles();

    return (
        <div className="container mt-1">
            <h1 className="text-center text-primary">Shoes Store</h1>
            <div className="row">
                {Object.keys(Shoes).map((keyName, ind) => {
                    const shoe = Shoes[keyName];
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5" key={ind}>
                            <Link
                                className="link"
                                to={`/ProductDetails/${keyName}`}>
                                <Card className={classes.root}>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}> S </Avatar>
                                        }
                                        title={shoe.name}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={shoe.img}
                                        title={shoe.name}
                                    />
                                   <h3>Price {shoe.price}</h3> 
                                </Card>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
