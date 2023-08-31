import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import { searchFloraInfo } from "../../../../actions/flora_info/FloraInfoAction";
import FloraInfoPreviewModal from "../../../layout/flora_info/add_flora_info/FloraInfoPreviewModal";
import FloraEditModal from "../../../layout/flora_info/add_flora_info/FloraEditModal";
import { MagnifyingGlass } from "phosphor-react";

const QueryView = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    searchFloraInfo(search, setSearchResult, setLoading);
  };

  return (
    <>
      <Stack
        mt={7}
        component='form'
        onSubmit={handleSearch}
        justifyContent='center'
        alignItems='center'
        sx={{
          position: "sticky",
          top: 7,
          zIndex: 100,
          pt: 2,
        }}>
        <TextField
          fullWidth
          placeholder='Search here...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Button
                  variant='contained'
                  type='submit'
                  sx={{
                    width: "37px",
                    height: "37px",
                    maxWidth: "37px",
                    maxHeight: "37px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2FBC49",
                  }}>
                  <MagnifyingGlass />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {searchResult.length === 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <Stack spacing={1} alignItems='center' direction='row'>
            <MagnifyingGlass
              style={{ fontSize: "1.5rem", fontWeight: 600, color: "#2FBC49" }}
            />
            <Typography variant='h5' sx={{ fontWeight: 600, color: "#2FBC49" }}>
              SEARCH ANYTHING ABOUT FLORA
            </Typography>
          </Stack>
        </Box>
      )}
      {loading === true ? (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          <CircularProgress disableShrink />
        </Box>
      ) : (
        <Grid container spacing={2} mt={10}>
          {searchResult.map((index) => (
            <Grid item md={3} xs={12}>
              <Card>
                <img
                  src={index.profileImage}
                  style={{
                    width: "100%",
                    height: "30vh",
                    objectFit: "cover",
                  }}
                />
                <Box p={2}>
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

                  <Stack mt={2} spacing={2} alignItems='center' direction='row'>
                    <FloraEditModal index={index} />
                    <FloraInfoPreviewModal index={index} />
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default QueryView;
