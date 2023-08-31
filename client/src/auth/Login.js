import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { login } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
import SnackbarMessage from "../components/SnackbarMessage";
import FloraLogo from "../assets/fLORA.png";
import ModalComponent from "../components/ModalComponent";
import { KeyRounded, closeRounded } from "@mui/icons-material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(open);
  };

  const [err, setErr] = useState(null);
  const [succeed, setSucceed] = useState(null);

  const [snackbarSuccess, setSnackBarSuccess] = useState(false);
  const [snackbarError, setSnackBarError] = useState(false);

  const handleSnackbarOpenSuccess = () => {
    setSnackBarSuccess(true);
  };

  const handleSnackbarOpenError = () => {
    setSnackBarError(true);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login(
      username,
      password,
      navigate,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError
    );
  };
  return (
    <Fragment>
      <SnackbarMessage
        message={err}
        open={snackbarError}
        handleClose={setSnackBarError}
        severity='error'
      />
      <SnackbarMessage
        message={succeed}
        open={snackbarSuccess}
        handleClose={setSnackBarSuccess}
        severity='success'
      />

      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 0,
          background: "transparent",
          height: "100vh",
        }}>
        <ModalComponent open={open}>
          <Stack direction='row-reverse'>
            <IconButton onClick={handleClose}>
              <closeRounded />
            </IconButton>
          </Stack>
          <Typography mt={2} variant='h6' fontWeight={600}>
            Type this credential
          </Typography>
          <Stack flexDirection='column' spacing={2}>
            <Stack alignItems='center' spacing={1}>
              <Typography sx={{ fontWeight: 600 }}>Username:</Typography>
              <Typography>admin</Typography>
            </Stack>
            <Stack alignItems='center' spacing={2}>
              <Typography sx={{ fontWeight: 600 }}>Password:</Typography>
              <Typography>admin</Typography>
            </Stack>
          </Stack>
        </ModalComponent>

        <Card
          elevation={0}
          component='form'
          onSubmit={loginSubmit}
          sx={{
            width: { xs: "100%", md: 500 },
            background: "transparent",
          }}>
          <Card
            className='sub-bg'
            sx={{
              position: "relative",
              p: 5,
              m: 2,
            }}>
            <Box sx={{ position: "absolute", right: 2, top: 2 }}>
              <Tooltip title='Open to show a given credential'>
                <IconButton onClick={handleOpen}>
                  <KeyRounded />
                </IconButton>
              </Tooltip>
            </Box>
            <Stack justifyContent='center' alignItems='center'>
              <img
                src={FloraLogo}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </Stack>
            <Stack spacing={2} mt={3} mb={2}>
              <TextField
                required
                label='Username'
                type='text'
                name='username'
                id='username'
                autoComplete='username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                required
                label='Password'
                type='password'
                name='password'
                id='password'
                autoComplete='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
            <Stack spacing={2}>
              <Button
                id='login'
                sx={{ textTransform: "capitalize", boxShadow: 0 }}
                className='btn-bg'
                fullWidth
                variant='contained'
                type='submit'>
                Login
              </Button>
            </Stack>
          </Card>
        </Card>
      </Card>
    </Fragment>
  );
};

export default Login;
