import React, { useState } from "react";
import { PersonOutlined, AccountCircleOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import FloraInfoMenu from "../scenes/layout/flora_info/FloraInfoMenu";
import FloraLogo from "../assets/fLORA.png";

const Header = ({ setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = useState(null);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position='fixed' className='sub-bg' sx={{ background: "white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}>
            <img
              src={FloraLogo}
              style={{ width: "80px", objectFit: "contain" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <>
              <FloraInfoMenu handleChange={handleChange} />
            </>
            <Tooltip title='Open Profile'>
              <IconButton
                onClick={handleProfileMenuOpen}
                className='btn-no-bg'
                size='large'
                aria-label='show 4 new mails'>
                <AccountCircleOutlined
                  sx={{ color: "#2FBC49", fontSize: "25px" }}
                />
              </IconButton>
            </Tooltip>
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
              onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <a
                href='/'
                onClick={handleLogout}
                style={{ textDecoration: "none" }}>
                <MenuItem>Logout</MenuItem>
              </a>
            </Menu>

            {/* <Tooltip title='Open Setting'>
              <IconButton
                className='btn-no-bg'
                size='large'
                edge='end'
                aria-haspopup='true'>
                <SettingsOutlined fontSize='small' sx={{ color: "#2FBC49" }} />
              </IconButton>
            </Tooltip> */}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
