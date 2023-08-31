import {
  Button,
  Card,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { createNewFlora } from "../../../../actions/flora_info/FloraInfoAction";

const AddFloraInfo = () => {
  const [err, setErr] = useState(null);
  const [succeed, setSucceed] = useState(null);
  const [snackbarSuccess, setSnackBarSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(false);
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [localName, setLocalName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [genus, setGenus] = useState("");
  const [order, setOrder] = useState("");
  const [uses, setUses] = useState("");
  const [className, setClassName] = useState("");
  const [kind, setKind] = useState("");
  const [province, setProvince] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [barangay, setBarangay] = useState("");
  const [leafImage, setLeafImage] = useState("");
  const [fruitImage, setFruitImage] = useState("");
  const [flowerImage, setFlowerImage] = useState("");
  const [description, setDescription] = useState("");
  const [phylum, setPhylum] = useState("");

  // Profile Image container
  const [profileImageContainer, setProfileImageContainer] = useState(null);

  // Leaf Image container
  const [leafImageContainer, setLeafImageContainer] = useState(null);

  // Flower Image container
  const [flowerImageContainer, setFlowerImageContainer] = useState(null);

  // Fruit Image container
  const [fruitImageContainer, setFruitImageContainer] = useState(null);

  const [snackbarError, setSnackBarError] = useState(false);

  const handleSnackbarOpenSuccess = () => {
    setSnackBarSuccess(true);
  };

  const handleSnackbarOpenError = () => {
    setSnackBarError(true);
  };

  const handleProfileImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProfileImage(reader.result);
      setProfileImageContainer(reader.result);
    };
  };

  const handleLeafImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setLeafImage(reader.result);
      setLeafImageContainer(reader.result);
    };
  };

  const handleFlowerImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFlowerImage(reader.result);
      setFlowerImageContainer(reader.result);
    };
  };

  const handleFruitImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFruitImage(reader.result);
      setFruitImageContainer(reader.result);
    };
  };

  const handleCreateFloraInfo = (e) => {
    e.preventDefault();
    createNewFlora(
      profileImage,
      commonName,
      scientificName,
      localName,
      familyName,
      speciesName,
      genus,
      order,
      uses,
      className,
      kind,
      province,
      municipality,
      barangay,
      leafImage,
      fruitImage,
      flowerImage,
      description,
      phylum,
      setErr,
      setSucceed,
      handleSnackbarOpenSuccess,
      handleSnackbarOpenError,
      setProfileImage,
      setCommonName,
      setScientificName,
      setLocalName,
      setFamilyName,
      setSpeciesName,
      setGenus,
      setOrder,
      setUses,
      setClassName,
      setKind,
      setProvince,
      setMunicipality,
      setBarangay,
      setLeafImage,
      setFruitImage,
      setFlowerImage,
      setDescription,
      setPhylum,
      setProfileImageContainer,
      setLeafImageContainer,
      setFlowerImageContainer,
      setFruitImageContainer
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
      <Stack
        spacing={3}
        direction='row'
        component='form'
        onChange={handleCreateFloraInfo}>
        <Stack>
          <Stack spacing={2}>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Common Name'
                variant='outlined'
                onChange={(e) => setCommonName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Scientific Name'
                variant='outlined'
                onChange={(e) => setScientificName(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Local Name'
                variant='outlined'
                onChange={(e) => setLocalName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Family'
                variant='outlined'
                onChange={(e) => setFamilyName(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Species'
                variant='outlined'
                onChange={(e) => setSpeciesName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Genus'
                variant='outlined'
                onChange={(e) => setGenus(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Order'
                variant='outlined'
                onChange={(e) => setOrder(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Uses'
                variant='outlined'
                onChange={(e) => setUses(e.target.value)}
              />
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <TextField
                sx={{ width: "150px" }}
                onChange={handleProfileImageContainer}
                required
                id='pic'
                size='small'
                type='file'
                label='Set Profile'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                  ),
                }}
              />
              {profileImageContainer === null ? (
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed gray",
                    borderRadius: 2,
                    height: "150px",
                    width: "150",
                    borderRadius: "5px",
                  }}>
                  <Stack
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'>
                    <AddPhotoAlternateOutlined />
                    <Typography variant='body2'>NO PICTURE YET</Typography>
                  </Stack>
                </Card>
              ) : (
                <img
                  src={profileImageContainer}
                  alt='pic'
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
            <Stack spacing={2}>
              <TextField
                sx={{ width: "150px" }}
                onChange={handleLeafImageContainer}
                required
                id='pic'
                size='small'
                type='file'
                label='Set Profile'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                  ),
                }}
              />
              {leafImageContainer === null ? (
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed gray",
                    borderRadius: 2,
                    height: "150px",
                    width: "150",
                    borderRadius: "5px",
                  }}>
                  <Stack
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'>
                    <AddPhotoAlternateOutlined />
                    <Typography variant='body2'>NO PICTURE YET</Typography>
                  </Stack>
                </Card>
              ) : (
                <img
                  src={leafImageContainer}
                  alt='pic'
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>

        {/* /////////////////////////// */}

        <Stack>
          <Stack spacing={2}>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Class'
                variant='outlined'
                onChange={(e) => setClassName(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Kind'
                variant='outlined'
                onChange={(e) => setKind(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Province'
                variant='outlined'
                onChange={(e) => setProvince(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Municipality'
                variant='outlined'
                onChange={(e) => setMunicipality(e.target.value)}
              />
            </Stack>
            <Stack spacing={2} direction='row' alignItems='center'>
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Barangay'
                variant='outlined'
                onChange={(e) => setBarangay(e.target.value)}
              />
              <TextField
                required
                fullWidth
                size='small'
                type='text'
                label='Phylum'
                variant='outlined'
                onChange={(e) => setPhylum(e.target.value)}
              />
            </Stack>
            <TextField
              required
              label='Description'
              placeholder='Description'
              multiline
              fullWidth
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={2}>
              <TextField
                sx={{ width: "150px" }}
                onChange={handleFlowerImageContainer}
                required
                id='pic'
                size='small'
                type='file'
                label='Set Profile'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                  ),
                }}
              />
              {flowerImageContainer === null ? (
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed gray",
                    borderRadius: 2,
                    height: "150px",
                    width: "150",
                    borderRadius: "5px",
                  }}>
                  <Stack
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'>
                    <AddPhotoAlternateOutlined />
                    <Typography variant='body2'>NO PICTURE YET</Typography>
                  </Stack>
                </Card>
              ) : (
                <img
                  src={flowerImageContainer}
                  alt='pic'
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
            <Stack spacing={2}>
              <TextField
                sx={{ width: "150px" }}
                onChange={handleFruitImageContainer}
                required
                id='pic'
                size='small'
                type='file'
                label='Set Profile'
                variant='outlined'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' sx={{ p: 0, m: 0 }} />
                  ),
                }}
              />
              {fruitImageContainer === null ? (
                <Card
                  elevation={0}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed gray",
                    borderRadius: 2,
                    height: "150px",
                    width: "150",
                    borderRadius: "5px",
                  }}>
                  <Stack
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'>
                    <AddPhotoAlternateOutlined />
                    <Typography variant='body2'>NO PICTURE YET</Typography>
                  </Stack>
                </Card>
              ) : (
                <img
                  src={fruitImageContainer}
                  alt='pic'
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='row-reverse'>
        <Button
          type='submit'
          variant='contained'
          backgroundColor='success'
          sx={{ textTransform: "capitalize" }}>
          Submit
        </Button>
      </Stack>
      {/* col2 */}
    </Fragment>
  );
};

export default AddFloraInfo;
