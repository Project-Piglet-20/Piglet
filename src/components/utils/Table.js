import React from 'react';
import IssueCard from './IssueCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px'
    }
});

export default function Table(props) {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
        >
            {props.issueList.map((issue) => (
                <Grid item xs={12} sm={6} md={4}>
                    <IssueCard issue={issue} />
                </Grid>
            ))}
        </Grid>
    );
}