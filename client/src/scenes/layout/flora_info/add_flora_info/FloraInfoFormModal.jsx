import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  CircularProgress,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Plus } from "phosphor-react";
import { AddPhotoAlternateOutlined, Close } from "@mui/icons-material";
import { createNewFlora } from "../../../../actions/flora_info/FloraInfoAction";

const FloraInfoFormModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [err, setErr] = useState(null);
  const [succeed, setSucceed] = useState(null);
  const [snackbarSuccess, setSnackBarSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
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
  const [leafImage, setLeafImage] = useState(null);
  const [fruitImage, setFruitImage] = useState(null);
  const [flowerImage, setFlowerImage] = useState(null);
  const [description, setDescription] = useState("");
  const [english, setEnglish] = useState("");
  const [leafKind, setLeafKind] = useState("");
  const [phylum, setPhylum] = useState("");
  const [floraType, setFloraType] = useState("");
  const [leafDescription, setLeafDescription] = useState("");
  const [flowerDescription, setFlowerDescription] = useState("");
  const [fruitDescription, setFruitDescription] = useState("");

  const [nextOpen1, setNextOpen1] = useState(true);
  const [nextOpen2, setNextOpen2] = useState(false);
  const [nextOpen3, setNextOpen3] = useState(false);

  const handleOpenNext1 = () => {
    setNextOpen1(true);
    setNextOpen2(false);
    setNextOpen3(false);
  };
  const handleOpenNext2 = () => {
    setNextOpen1(false);
    setNextOpen2(true);
    setNextOpen3(false);
  };
  const handleOpenNext3 = () => {
    setNextOpen1(false);
    setNextOpen2(false);
    setNextOpen3(true);
  };

  // Profile Image container
  const [profileImageContainer, setProfileImageContainer] = useState(null);

  // Leaf Image container
  const [leafImageContainer, setLeafImageContainer] = useState(null);

  // Flower Image container
  const [flowerImageContainer, setFlowerImageContainer] = useState(null);

  // Fruit Image container
  const [fruitImageContainer, setFruitImageContainer] = useState(null);

  const [snackbarError, setSnackBarError] = useState(false);

  const [loading, setLoading] = useState(false);

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
      setLoading,
      english,
      leafKind,
      floraType,
      leafDescription,
      flowerDescription,
      fruitDescription,
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
      setFruitImageContainer,
      setEnglish,
      setLeafKind,
      setFloraType,
      setLeafDescription,
      setFlowerDescription,
      setFruitDescription
    );
    handleClose();
  };

  return (
    <>
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

      <ModalComponent
        open={open}
        buttonName={
          <Button
            fullWidth
            onClick={handleOpen}
            variant='contained'
            startIcon={<Plus />}>
            Add Flora Info
          </Button>
        }
        mdWidth={600}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleCreateFloraInfo}>
          <Stack spacing={2} mb={1} mt={2}>
            <Stack
              spacing={2}
              direction='row'
              alignItems='center'
              justifyContent='space-between'>
              <Typography
                variant='h5'
                sx={{ fontWeight: 600, color: "#009C4C" }}>
                Add Flora Info
              </Typography>
              <IconButton onClick={handleClose}>
                {" "}
                <Close sx={{ color: "#009C4C" }} />{" "}
              </IconButton>
            </Stack>

            <Stack
              spacing={2}
              sx={{ display: nextOpen1 === true ? "block" : "none" }}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <Stack spacing={2}>
                  <TextField
                    onChange={handleProfileImageContainer}
                    required
                    id='pic'
                    size='small'
                    type='file'
                    label='Set Profile Picture'
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
                        width: "258px",
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
                        width: "258px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Stack>

                <Stack spacing={2}>
                  <TextField
                    onChange={handleLeafImageContainer}
                    required
                    id='pic'
                    size='small'
                    type='file'
                    label='Set Leaf Picture'
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
                        width: "258px",
                        height: "150px",
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
                        width: "258px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Stack>
              </Stack>
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
            </Stack>

            {/* ///////////////////////// */}

            <Stack
              spacing={2}
              sx={{ display: nextOpen2 === true ? "block" : "none" }}>
              <Stack spacing={2} direction='row' alignItems='center'>
                <Stack spacing={2}>
                  <TextField
                    onChange={handleFlowerImageContainer}
                    id='pic'
                    size='small'
                    type='file'
                    label='Set Flower Picture'
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
                        width: "258px",
                        height: "150px",
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
                        width: "258px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Stack>
                <Stack spacing={2}>
                  <TextField
                    onChange={handleFruitImageContainer}
                    id='pic'
                    size='small'
                    type='file'
                    label='Set Fruit Picture'
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
                        width: "258px",
                        height: "150px",
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
                        width: "258px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Stack>
              </Stack>

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
              </Stack>
            </Stack>

            <Stack
              spacing={2}
              sx={{ display: nextOpen3 === true ? "block" : "none" }}>
              <TextField
                required
                label='Flora Description'
                multiline
                fullWidth
                rows={1.5}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                required
                label='Leaf Description'
                multiline
                fullWidth
                rows={1.5}
                onChange={(e) => setLeafDescription(e.target.value)}
              />
              <TextField
                label='Flower Description'
                multiline
                fullWidth
                rows={1.5}
                onChange={(e) => setFlowerDescription(e.target.value)}
              />
              <TextField
                label='Fruit Description'
                multiline
                fullWidth
                rows={1.5}
                onChange={(e) => setFruitDescription(e.target.value)}
              />
              <Stack spacing={2} direction='row' alignItems='center'>
                <FormControl sx={{ width: "100%" }} size='small'>
                  <InputLabel id='select-host-type'>FLora Type</InputLabel>
                  <Select
                    required
                    labelId='select-hos-type'
                    id='select-hos-type'
                    value={floraType}
                    label='Hospitalization Plan'
                    onChange={(e) => setFloraType(e.target.value)}>
                    <MenuItem value='Actinomorphic'>Actinomorphic</MenuItem>
                    <MenuItem value='Zygomorphic'>Zygomorphic</MenuItem>
                    <MenuItem value='Asymmetrical'>Asymmetrical</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  required
                  size='small'
                  label='English Name'
                  fullWidth
                  onChange={(e) => setEnglish(e.target.value)}
                />
                <TextField
                  required
                  size='small'
                  label='Leaf Kind'
                  fullWidth
                  onChange={(e) => setLeafKind(e.target.value)}
                />
              </Stack>
            </Stack>
            {/* ////////////////////////////////////////// */}

            <Stack direction='row-reverse' spacing={2} alignItems='center'>
              <Button
                onClick={handleOpenNext3}
                id='sign-up'
                className='btn-bg'
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                  display: nextOpen2 === true ? "flex" : "none",
                }}>
                next
              </Button>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <CircularProgress sx={{ color: "#009C4C" }} />
                </Box>
              ) : (
                <Button
                  type='submit'
                  variant='contained'
                  sx={{
                    textTransform: "capitalize",
                    boxShadow: 0,
                    display: nextOpen3 === true ? "flex" : "none",
                  }}>
                  Submit
                </Button>
              )}

              <Button
                onClick={handleOpenNext2}
                id='sign-up'
                className='btn-bg'
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                  display: nextOpen3 === true ? "flex" : "none",
                }}>
                Prev
              </Button>
              <Button
                onClick={handleOpenNext1}
                id='sign-up'
                className='btn-bg'
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                  display: nextOpen2 === true ? "flex" : "none",
                }}>
                Prev
              </Button>

              <Button
                onClick={handleOpenNext2}
                id='sign-up'
                className='btn-bg'
                variant='contained'
                sx={{
                  textTransform: "capitalize",
                  boxShadow: 0,
                  display: nextOpen1 === true ? "flex" : "none",
                }}>
                next
              </Button>
            </Stack>
          </Stack>
        </Card>
      </ModalComponent>
    </>
  );
};

export default FloraInfoFormModal;
