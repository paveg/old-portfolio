//@flow
import "../App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AboutIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";
import MailIcon from "@material-ui/icons/Mail";

const styles = () => ({
    list: {
        width: 250
    }
});

interface State {
    isOpen: boolean;
}

class SideDrawer extends Component<{}, State> {
    static propTypes: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        // @ts-ignore
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button key="Home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="About">
                        <ListItemIcon>
                            <AboutIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button key="Works">
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Works" />
                    </ListItem>
                    <ListItem button key="Contact">
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </div>
        );

        return (
            <div>
                <Button
                    variant="flat"
                    color="inherit"
                    className={classes.button}
                    onClick={this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </Button>
                <Drawer
                    anchor="left"
                    open={this.state.isOpen}
                    onClose={this.toggleDrawer(false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }

    private toggleDrawer = (isOpen: boolean) => () => {
        this.setState({
            ["isOpen"]: isOpen
        });
    };
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(SideDrawer);
