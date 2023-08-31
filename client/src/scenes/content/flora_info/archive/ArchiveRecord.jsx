import { Box, Button, Card, Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getFloraInfos, updateToArchive } from "../../../../actions/flora_info/FloraInfoAction";
import { Archive, Height, Remove, RemoveCircle } from "@mui/icons-material";
import FloraInfoPreviewModal from "../../../layout/flora_info/add_flora_info/FloraInfoPreviewModal";
import FloraEditModal from "../../../layout/flora_info/add_flora_info/FloraEditModal";

const ArchiveRecord = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    getFloraInfos(setSearchResult);
  }, [searchResult]);

  const handleArchive = (e, index) => {
    e.preventDefault()
    const archive = false
    updateToArchive(index, archive)
  }
  return (
    <>
    <Typography mt={10} variant='h5' sx={{textAlign: 'center', fontWeight: 600, color: "#009C4C"}}>Flora Archive</Typography>
     
      <Grid container spacing={2} mt={2}>
        {searchResult.map((index) => {
          return (
            index.isArchived === true ?
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
                <Stack direction='row-reverse'>
                  <Tooltip title='Remove From Archive'>
                    <IconButton onClick={(e) => handleArchive(e, index)}>
                      <RemoveCircle style={{color: 'red', boxShadow: "2px 4px 5px 4px rbg(5, 7, 7)"}}/>  
                    </IconButton>
                  </Tooltip>
                </Stack>
                
                
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
          : <></>
          );
        })}
      </Grid>
    </>
  );
};

export default ArchiveRecord;
