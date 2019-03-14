import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {
    createStyles,
    Theme,
    withStyles,
    WithStyles
} from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CodeIcon from "@material-ui/icons/Code";
import MoreIcon from "@material-ui/icons/MoreVert";
import SideDrawer from "./SideDrawer";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%"
        },
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 0
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        sectionDesktop: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        },
        sectionMobile: {
            display: "flex",
            [theme.breakpoints.up("md")]: {
                display: "none"
            }
        }
    });

export interface Props extends WithStyles<typeof styles> {}

interface State {
    anchorEl: null | HTMLElement;
    mobileMoreAnchorEl: null | HTMLElement;
}

class PrimaryAppBar extends React.Component<Props, State> {
    state: State = {
        anchorEl: null,
        mobileMoreAnchorEl: null
    };

    handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton
                        color="inherit"
                        href={"https://github.com/paveg"}
                    >
                        <CodeIcon />
                    </IconButton>
                    <p>GitHub</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Open drawer"
                        >
                            <SideDrawer />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
                            Portofolio
                        </Typography>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                color="inherit"
                                href={"https://github.com/paveg"}
                            >
                                <CodeIcon />
                            </IconButton>
                            <IconButton
                                aria-owns={
                                    isMenuOpen ? "material-appbar" : undefined
                                }
                                aria-haspopup="true"
                                onClick={this.handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-haspopup="true"
                                onClick={this.handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

(PrimaryAppBar as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(PrimaryAppBar);
