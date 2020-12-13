import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

const IssueCard = ({ issue }) => {
    const classes = useStyles();
    return (
        <Card className={clsx(classes.root, "hoverable")}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {issue.Type[0]}
                    </Avatar>
                }
                title={issue.Type}
                subheader={issue.DOR}
            />
            <CardContent>
                <Typography>
                    <div className="container">
                        <div className="container">
                            <div>Category:{issue.Category}</div>
                        </div>
                    </div>
                </Typography>
                <Typography>
                    <div>Reporting place: {issue.Locality}</div>
                </Typography>
                <Typography>
                    <div className="container">
                        <div className="container">
                            <div>Status: {issue.Status}</div>
                        </div>
                    </div>
                </Typography>
                <Typography>
                    <div>Date of Closure: {issue.DOC}</div>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default IssueCard;
