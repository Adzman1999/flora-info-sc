import React, { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ModalComponent from "../../../../components/ModalComponent";
import BackBtn from "../../../../components/BackBtn";
import FloraEditModal from "./FloraEditModal";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const FloraInfoPreviewModal = ({ index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose1 = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [expanded1, setExpanded1] = useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const [expanded3, setExpanded3] = useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        fullWidth
        size='small'
        variant='contained'
        sx={{
          textTransform: "capitalize",
          color: "white",
          background: "#2FBC49",
        }}>
        View
      </Button>
      <ModalComponent open={open} mdWidth={800}>
        <BackBtn handleClose={handleClose1} />
        <Stack spacing={2} mt={6}>
          <Stack
            direction='row'
            spacing={2}>
            <img
              src={index.profileImage}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "2px",
              }}
            />
            <Stack spacing={2} direction='row'>
              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Common Name
                  </Typography>
                  <Typography>{index.commonName}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Scientific Name
                  </Typography>
                  <Typography>{index.scientificName}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Local Name
                  </Typography>
                  <Typography>{index.localName}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Family
                  </Typography>
                  <Typography>{index.familyName}</Typography>
                </Stack>
              </Stack>


              <Stack spacing={2}>
              <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    English Name
                  </Typography>
                  <Typography>{index.english}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Flora Type
                  </Typography>
                  <Typography>{index.floraType}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Leaf Kind
                  </Typography>
                  <Typography>{index.leafKind}</Typography>
                </Stack>
            </Stack>
            </Stack>
          </Stack>

          <Button
            variant='outlined'
            fullWidth
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className='btn-no-bg'
            onClick={handleExpandClick}>
            <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
              Flora Description
            </Typography>
            {expanded === true ? (
              <KeyboardArrowUp sx={{ color: "#2FBC49" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#2FBC49" }} />
            )}
          </Button>
          <Collapse
            in={expanded}
            timeout='auto'
            unmountOnExit
            sx={{
              maxHeight: "150px",
              overflowX: { xs: "shown", md: "hidden" },
              height: "100%",
              "::-webkit-scrollbar ": {
                width: "3px",
                height: { xs: "3px", md: "0px" },
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2FBC49",
              },
            }}>
            <Typography>{index.description}</Typography>
          </Collapse>

          {/* //////////////////////////////////// */}
          <Button
            variant='outlined'
            fullWidth
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className='btn-no-bg'
            onClick={handleExpandClick1}>
            <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
              Leaf Description
            </Typography>
            {expanded1 === true ? (
              <KeyboardArrowUp sx={{ color: "#2FBC49" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#2FBC49" }} />
            )}
          </Button>
          <Collapse
            in={expanded1}
            timeout='auto'
            unmountOnExit
            sx={{
              maxHeight: "150px",
              overflowX: { xs: "shown", md: "hidden" },
              height: "100%",
              "::-webkit-scrollbar ": {
                width: "3px",
                height: { xs: "3px", md: "0px" },
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2FBC49",
              },
            }}>
            <Typography>{index.leafDescription}</Typography>
          </Collapse>


          {/* //////////////////////////////////// */}
          <Button
            variant='outlined'
            fullWidth
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className='btn-no-bg'
            onClick={handleExpandClick2}>
            <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
              Flower Description
            </Typography>
            {expanded2 === true ? (
              <KeyboardArrowUp sx={{ color: "#2FBC49" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#2FBC49" }} />
            )}
          </Button>
          <Collapse
            in={expanded2}
            timeout='auto'
            unmountOnExit
            sx={{
              maxHeight: "150px",
              overflowX: { xs: "shown", md: "hidden" },
              height: "100%",
              "::-webkit-scrollbar ": {
                width: "3px",
                height: { xs: "3px", md: "0px" },
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2FBC49",
              },
            }}>
            <Typography>{index.flowerDescription}</Typography>
          </Collapse>


          {/* //////////////////////////////////// */}
          <Button
            variant='outlined'
            fullWidth
            sx={{
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className='btn-no-bg'
            onClick={handleExpandClick3}>
            <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
              Fruit Description
            </Typography>
            {expanded3 === true ? (
              <KeyboardArrowUp sx={{ color: "#2FBC49" }} />
            ) : (
              <KeyboardArrowDown sx={{ color: "#2FBC49" }} />
            )}
          </Button>
          <Collapse
            in={expanded3}
            timeout='auto'
            unmountOnExit
            sx={{
              maxHeight: "150px",
              overflowX: { xs: "shown", md: "hidden" },
              height: "100%",
              "::-webkit-scrollbar ": {
                width: "3px",
                height: { xs: "3px", md: "0px" },
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2FBC49",
              },
            }}>
            <Typography>{index.fruitDescription}</Typography>
          </Collapse>


          {/* ///////////////////// */}
          <Box
            sx={{
              maxHeight: "200px",
              overflowX: { xs: "shown", md: "hidden" },
              height: "100%",
              "::-webkit-scrollbar ": {
                width: "3px",
                height: { xs: "3px", md: "0px" },
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#2FBC49",
              },
            }}>
            <Stack
              direction='row'
              spacing={4}
              justifyContent='center'
              alignItems='center'
              sx={{
                maxHeight: "200px",
                overflowX: "shown",
                height: "100%",
                "::-webkit-scrollbar ": {
                  width: "0px",
                },
              }}>
              <img
                src={index.leafImage}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "2px",
                }}
              />
              <img
                src={index.fruitImage}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "2px",
                }}
              />
              <img
                src={index.flowerImage}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "2px",
                }}
              />
            </Stack>

            <Stack
              direction='row'
              spacing={4}
              justifyContent='center'
              alignItems='center'>
              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Species
                  </Typography>
                  <Typography>{index.speciesName}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Genus
                  </Typography>
                  <Typography>{index.genus}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Order
                  </Typography>
                  <Typography>{index.order}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Uses
                  </Typography>
                  <Typography>{index.uses}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Class
                  </Typography>
                  <Typography>{index.className}</Typography>
                </Stack>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Kind
                  </Typography>
                  <Typography>{index.kind}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Phylum
                  </Typography>
                  <Typography>{index.phylum}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Province
                  </Typography>
                  <Typography>{index.province}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Municipality
                  </Typography>
                  <Typography>{index.municipality}</Typography>
                </Stack>
                <Stack spacing={1} alignItems='center' direction='row'>
                  <Typography sx={{ fontWeight: 600, color: "#2FBC49" }}>
                    Barangay
                  </Typography>
                  <Typography>{index.barangay}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </ModalComponent>
    </>
  );
};

export default FloraInfoPreviewModal;
