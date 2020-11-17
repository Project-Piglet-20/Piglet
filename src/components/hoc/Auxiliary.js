import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import clsx from 'clsx';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1
    },
    gridroot: {
        flexGrow: 1,
        paddingBottom: '12vh'
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    appFooter: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            left: drawerWidth
        },
        top: 'auto',
        bottom: 0
    },
    grow: {
        flexGrow: 1
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto'
    }
}));

const Auxiliary = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [toHide, settoHide] = React.useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        settoHide(!toHide);
    };

    const drawer = (
        <div>
            <div
                className={(classes.toolbar, 'white-text')}
                style={{ backgroundColor: '#009688' }}
            >
                <div
                    style={{
                        fontSize: '20px',
                        height: '55px',
                        textAlign: 'center',
                        paddingTop: '15px'
                    }}
                    hidden={toHide}
                >
                    PIGLET
                </div>
                <div style={{ height: '64px' }} hidden={!toHide}></div>
            </div>
            <Divider />
            <List style={{ padding: '10px' }}>
                <div style={{ paddingBottom: '15px', paddingTop: '20px' }}>
                    <Link to="/home">
                        <ListItem
                            button
                            key="Home"
                            className="waves-effect waves-light btn red accent-3 white-text"
                        >
                            <i className="material-icons left">home</i>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                </div>
                <div style={{ paddingBottom: '15px', paddingTop: '10px' }}>
                    <Link to="/about">
                        <ListItem
                            button
                            key="About"
                            className="waves-effect waves-light btn red accent-3 white-text"
                        >
                            <i className="material-icons left">contact_page</i>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                </div>
                <div style={{ paddingBottom: '15px', paddingTop: '10px' }}>
                    <Link to="/">
                        <ListItem
                            button
                            key="Report"
                            className="waves-effect waves-light btn red accent-3 white-text"
                        >
                            <i className="material-icons left">description</i>
                            <ListItemText primary="Report" />
                        </ListItem>
                    </Link>
                </div>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar style={{ backgroundColor: '#009688' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap hidden={!toHide}>
                            PIGLET
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav
                    className={classes.drawer}
                    style={{ backgroundColor: '#b2dfdb', height: '10px' }}
                >
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={
                                theme.direction === 'rtl' ? 'right' : 'left'
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content} style={{left: 0}}>
                    <div className={classes.toolbar} />
                    <div className={classes.gridroot}>{props.children}</div>
                </main>
            </div>
            <br />
            <Divider />
            <AppBar
                position="fixed"
                className={classes.appFooter}
                style={{ backgroundColor: 'teal' }}
            >
                <Toolbar style={{ height: '30px' }}>
                    <p> © 2020 Copyright </p>
                    <Link
                        color="secondary"
                        aria-label="add"
                        className={clsx(
                            classes.fabButton,
                            'btn-floating btn-large waves-effect waves-light red'
                        )}
                        to="/"
                    >
                        <i className="material-icons">add</i>
                    </Link>
                    <div className={classes.grow} />
                    <p className="black-text">
                        DISCLAIMER: Data displayed here is for testing purpose
                        only!
                    </p>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(Auxiliary);
