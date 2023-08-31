import React, { Fragment, useState } from "react";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { login } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
import SnackbarMessage from "../components/SnackbarMessage";
import FloraLogo from "../assets/fLORA.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        <Card
          component='form'
          onSubmit={loginSubmit}
          sx={{
            width: { xs: "100%", md: 500 },
            boxShadow: 0,
            background: "transparent",
          }}>
          <Card
            className='sub-bg'
            sx={{
              boxShadow: 0,
              p: 5,
              m: 2,
            }}>
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
                value='admin'
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                value='admin'
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
