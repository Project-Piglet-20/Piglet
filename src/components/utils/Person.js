// import React from 'react';

// const Person = ({ people, content }) => {
//     const personList = people.map((person) => {
//         return (
//             <div className="col s12 m4" key={person.id} style={{minWidth: '260px'}}>
//                 <div className="icon-block">
//                     <div className="card z-depth-5" style={{ maxWidth: '260px' }}>
//                         <div className="card-image waves-effect waves-block waves-light">
//                             <img
//                                 className="activator"
//                                 src={person.img}
//                                 alt={person.name}
//                             />
//                         </div>
//                         <div className="card-content">
//                             <span className="card-title activator grey-text text-darken-4">
//                                 <h5>
//                                     {person.name}
//                                     <i className="material-icons right">
//                                         more_vert
//                                     </i>
//                                 </h5>
//                             </span>
//                             <br />
//                             <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Quisque ullamcorper pretium
//                                 ornare. In iaculis, nulla vel feugiat efficitur.
//                             </p>
//                         </div>
//                         <div className="card-reveal">
//                             <span className="card-title grey-text text-darken-4">
//                                 <h5>
//                                     {person.name}
//                                     <i className="material-icons right">close</i>
//                                 </h5>
//                             </span>
//                             <p>
//                                 { content }
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     });
//     return <div>{personList}</div>;
// };

// export default Person;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'fit-content',
        minWidth: window.innerWidth
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    },
    gridContainer: {
        paddingLeft: '10px',
        paddingRight: '30px',
        paddingTop: '30px'
    }
}));

const Person = ({ people, content }) => {
    const classes = useStyles();

    const personList = people.map((person) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={person.name} style={{width: '100%', padding: '20px', minWidth: '300px', maxWidth: '360px'}}>
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img
                                // className="activator"
                                src={person.img}
                                alt={person.name}
                            />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                <h5>
                                    {person.name}
                                    <i className="material-icons right">
                                        more_vert
                                    </i>
                                </h5>
                            </span>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque ullamcorper pretium
                                ornare. In iaculis, nulla vel feugiat efficitur.
                            </p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">
                                <h5>
                                    {person.name}
                                    <i className="material-icons right">close</i>
                                </h5>
                            </span>
                            <p>
                                { content }
                            </p>
                        </div>
                    </div>
                {/* <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                            >
                                {person.name[0]}
                            </Avatar>
                        }
                        title={person.name}
                    />
                    <CardMedia className={classes.media} image={person.img} />
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Aliquam ultrices sagittis orci
                            a scelerisque.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography>Contact: {person.number}</Typography>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>{content}</Typography>
                        </CardContent>
                    </Collapse>
                </Card> */}
            </Grid>
        );
    });

    return (
        <Grid className={classes.gridContainer}>
            {personList}
        </Grid>
    );
};

export default Person;
