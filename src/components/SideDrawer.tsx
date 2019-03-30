import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";
import PropTypes from "prop-types";
import React, { Component } from "react";

const styles = () => ({
  list: {
    width: 250
  }
});

interface State {
  isOpen: boolean;
}

class SideDrawer extends Component<{}, State> {
  public static propTypes: any;

  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  public render() {
    // @ts-ignore
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button={true} key="About" component="a" href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h5">About</Typography>}
            />
          </ListItem>
          <ListItem button={true} key="Skill" component="a" href="skill">
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h5">Skill</Typography>}
            />
          </ListItem>
          <ListItem button={true} key="Contact" component="a" href="contact">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="h5">Contact</Typography>}
            />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Button
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
