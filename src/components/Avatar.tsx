import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import AvatarImage from "../static/images/avatar/me.png";

const styles = {
  avatar: {
    height: 25,
    width: 25
  }
};

function ImageAvatars(props: any) {
  const { classes } = props;
  return (
    <Grid container={true} justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={AvatarImage} className={classes.avatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
