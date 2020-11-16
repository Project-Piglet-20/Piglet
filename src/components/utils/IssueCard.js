import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 360,
        minWidth: 'fit-content'
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

const IssueCard = ({ issue }) => {
    const classes = useStyles();
    const sub_header = (
        <span>
            <i className="material-icons left">today</i>
            <p style={{ verticalAlign: 'center' }}>{issue.DOR}</p>
        </span>
    );
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar
                        aria-label="recipe"
                        className={clsx(classes.avatar, 'teal accent-3')}
                    >
                        {issue.id}
                    </Avatar>
                }
                title={issue.Type}
                subheader={sub_header}
                style={{ textAlign: 'left' }}
                className="amber lighten-2"
            />
            <Divider />
            <CardContent className="yellow lighten-2">
                <p style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>
                        <i className="material-icons left">search</i>Category:
                    </span>
                    {issue.Category}
                </p>
                <p style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>
                        <i className="material-icons left">place</i>Reporting
                        place:
                    </span>
                    {issue.Locality}
                </p>
                <p style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>
                        <i className="material-icons left">done_all</i>Status:
                    </span>
                    {issue.Status}
                </p>
                <p style={{ textAlign: 'left' }}>
                    <span style={{ fontWeight: 'bold' }}>
                        <i className="material-icons left">date_range</i>Date of
                        Closure:
                    </span>
                    {issue.DOC}
                </p>
            </CardContent>
        </Card>
    );
};

export default IssueCard;
