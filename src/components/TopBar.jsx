import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ToggleDarkMode from "./ToggleDarkMode";
import { Avatar, Container, Switch, useMediaQuery } from "@mui/material";
import MaterialUISwitch from "./ToggleSwitch";
import logo from "../images/logo.png";
import { deepOrange, red } from "@mui/material/colors";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useTheme } from "@mui/material/styles";
import HomeData from "../Pages/Home/HomeData";
export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [title, setTitle] = React.useState("Calculator");
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { darkMode, handleThemeChange } = React.useContext(ThemeContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const history = useNavigate();
  const params = useParams();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  React.useEffect(() => {
    if (params) {
      const paramValue = HomeData.findIndex((e) => e.params == params.calcname);
      setTitle(HomeData[paramValue].name);
    }
  }, [params]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" enableColorOnDark>
        <Container maxWidth={matches?'auto':'sm'}>
          <Toolbar>
            <Box
              onClick={() => {
                history("/home");
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingY: 1,
                cursor: "pointer",
              }}
            >
              <Avatar
                src={logo}
                sx={{ width: { sx: 35, md: 45 }, height: { sx: 35, md: 45 } }}
              />
              <Typography
                variant={matches ? "h6" : "button"}
                sx={{ marginLeft: 2 }}
              >
                {title}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex" } }}>
              <MaterialUISwitch
                onChange={() => handleThemeChange()}
                defaultChecked={  JSON.parse(localStorage.getItem("darkMode")) || false}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
