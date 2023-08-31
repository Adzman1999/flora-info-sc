import React, { useEffect, useState } from "react";
import SnackbarMessage from "../../../../components/SnackbarMessage";
import ModalComponent from "../../../../components/ModalComponent";
import {
  Box,
  CircularProgress,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AddPhotoAlternateOutlined, Close } from "@mui/icons-material";
import { updateFloraInfo } from "../../../../actions/flora_info/FloraInfoAction";

const FloraEditModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
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
      setProfileImage(reader.result || index.profileImage);
      setProfileImageContainer(reader.result);
    };
  };

  const handleLeafImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setLeafImage(reader.result || index.leafImage);
      setLeafImageContainer(reader.result);
    };
  };

  const handleFlowerImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFlowerImage(reader.result || index.flowerImage);
      setFlowerImageContainer(reader.result);
    };
  };

  const handleFruitImageContainer = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFruitImage(reader.result || index.fruitImage);
      setFruitImageContainer(reader.result);
    };
  };

  const handleUpdateFloraInfo = (e) => {
    e.preventDefault();
    updateFloraInfo(
      setLoading,
      index,
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
      setProfileImageContainer,
      setLeafImageContainer,
      setFlowerImageContainer,
      setFruitImageContainer
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
            size='small'
            fullWidth
            onClick={handleOpen}
            variant='contained'
            sx={{
              textTransform: "capitalize",
              color: "white",
              background: "#2FBC49",
            }}>
            Edit
          </Button>
        }
        mdWidth={600}>
        <Card
          elevation={0}
          sx={{ background: "transparent" }}
          component='form'
          onSubmit={handleUpdateFloraInfo}>
          <Stack spacing={2} mb={1} mt={2}>
            <Stack
              spacing={2}
              direction='row'
              alignItems='center'
              justifyContent='space-between'>
              <Typography
                color='primary'
                variant='h5'
                sx={{ fontWeight: 600, color: "#009C4C" }}>
                Edit Flora Info
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
                  <img
                    src={profileImageContainer || index.profileImage}
                    alt='pic'
                    style={{
                      width: "258px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                </Stack>

                <Stack spacing={2}>
                  <TextField
                    onChange={handleLeafImageContainer}
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
                  <img
                    src={leafImageContainer || index.leafImage}
                    alt='pic'
                    style={{
                      width: "258px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Common Name'
                    variant='outlined'
                    value={commonName || index.commonName}
                    onChange={(e) => setCommonName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Scientific Name'
                    variant='outlined'
                    value={scientificName || index.scientificName}
                    onChange={(e) => setScientificName(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Local Name'
                    variant='outlined'
                    value={localName || index.localName}
                    onChange={(e) => setLocalName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Family'
                    variant='outlined'
                    value={familyName || index.familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Species'
                    variant='outlined'
                    value={speciesName || index.speciesName}
                    onChange={(e) => setSpeciesName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Genus'
                    variant='outlined'
                    value={genus || index.genus}
                    onChange={(e) => setGenus(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Order'
                    variant='outlined'
                    value={order || index.order}
                    onChange={(e) => setOrder(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Uses'
                    variant='outlined'
                    value={uses || index.uses}
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

                  <img
                    src={flowerImageContainer || index.flowerImage}
                    alt='pic'
                    style={{
                      width: "258px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
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

                  <img
                    src={fruitImageContainer || index.fruitImage}
                    alt='pic'
                    style={{
                      width: "258px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Class'
                    variant='outlined'
                    value={className || index.className}
                    onChange={(e) => setClassName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Kind'
                    variant='outlined'
                    value={kind || index.kind}
                    onChange={(e) => setKind(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Province'
                    variant='outlined'
                    value={province || index.province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Municipality'
                    variant='outlined'
                    value={municipality || index.municipality}
                    onChange={(e) => setMunicipality(e.target.value)}
                  />
                </Stack>
                <Stack spacing={2} direction='row' alignItems='center'>
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Barangay'
                    variant='outlined'
                    value={barangay || index.barangay}
                    onChange={(e) => setBarangay(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    size='small'
                    type='text'
                    label='Phylum'
                    variant='outlined'
                    value={phylum || index.phylum}
                    onChange={(e) => setPhylum(e.target.value)}
                  />
                </Stack>
              </Stack>
            </Stack>

            {/* ////////////////////////////////////////// */}
            <Stack
              spacing={2}
              sx={{ display: nextOpen3 === true ? "block" : "none" }}>
              <TextField
                label='Flora Description'
                multiline
                fullWidth
                rows={1.5}
                value={description || index.description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                label='Leaf Description'
                multiline
                fullWidth
                rows={1.5}
                value={leafDescription || index.leafDescription}
                onChange={(e) => setLeafDescription(e.target.value)}
              />
              <TextField
                label='Flower Description'
                multiline
                fullWidth
                rows={1.5}
                value={flowerDescription || index.flowerDescription}
                onChange={(e) => setFlowerDescription(e.target.value)}
              />
              <TextField
                label='Fruit Description'
                multiline
                fullWidth
                rows={1.5}
                value={fruitDescription || index.fruitDescription}
                onChange={(e) => setFruitDescription(e.target.value)}
              />
              <Stack spacing={2} direction='row' alignItems='center'>
                <FormControl sx={{ width: "100%" }} size='small'>
                  <InputLabel id='select-host-type'>FLora Type</InputLabel>
                  <Select
                    labelId='select-hos-type'
                    id='select-hos-type'
                    label='Hospitalization Plan'
                    value={floraType || index.floraType}
                    onChange={(e) => setFloraType(e.target.value)}>
                    <MenuItem value='Actinomorphic'>Actinomorphic</MenuItem>
                    <MenuItem value='Zygomorphic'>Zygomorphic</MenuItem>
                    <MenuItem value='Asymmetrical'>Asymmetrical</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  size='small'
                  label='English Name'
                  fullWidth
                  value={english || index.english}
                  onChange={(e) => setEnglish(e.target.value)}
                />
                <TextField
                  size='small'
                  label='Leaf Kind'
                  fullWidth
                  value={leafKind || index.leafKind}
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
                    height: "100%",
                    width: "100%",
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

export default FloraEditModal;
