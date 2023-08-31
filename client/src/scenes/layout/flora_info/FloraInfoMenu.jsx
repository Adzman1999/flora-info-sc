import React, { useState } from "react";
import {
  Button,
  Card,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import { Archive, House, MagnifyingGlass, Plus } from "phosphor-react";
import { Menu, MenuOpenRounded } from "@mui/icons-material";
import FloraInfoFormModal from "./add_flora_info/FloraInfoFormModal";
import QueryView from "../../content/flora_info/query/QueryView";

const FloraInfoMenu = ({ handleChange }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleTabs = (tab) => {
    if (tab === 0 || tab === 1 || tab === 2) {
      handleChange(tab);
      handleClose();
    }
  };
  return (
    <>
      <Tooltip title='Open Menu'>
        <IconButton className='sub-text-color' onClick={handleOpen}>
          <Menu sx={{ color: "#2FBC49", fontSize: "25px" }} />
        </IconButton>
      </Tooltip>

      <Drawer
        anchor='right'
        open={open}
        onClose={handleClose}
        variant='temporary'
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            background: "transparent",
            boxShadow: 0,
          },
        }}>
        <Card
          className='sub-bg'
          sx={{
            width: 257,
            height: "100vh",
            p: 3,
            overflowX: "hidden",
            overflowY: "scroll",
            "::-webkit-scrollbar ": {
              width: "0px",
            },
            m: 1,
          }}>
          <Stack spacing={2}>
            <Button
              onClick={() => handleTabs(0)}
              variant='contained'
              startIcon={<House />}>
              Home
            </Button>
            <FloraInfoFormModal />
            <Button
              onClick={() => handleTabs(1)}
              variant='contained'
              startIcon={<MagnifyingGlass />}>
              Query
            </Button>
            <Button
              onClick={() => handleTabs(2)}
              variant='contained'
              startIcon={<Archive />}>
              Archive
            </Button>
          </Stack>
        </Card>
      </Drawer>
    </>
  );
};

export default FloraInfoMenu;
