import React, { Fragment } from "react";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { HospitalState } from "../context/HospitalProvider";
import PositionFormModal from "../scenes/layout/admin/position/PositionFormModal";
import PositionEditModal from "../scenes/layout/admin/position/PositionEditModal";
import PositionReadMoreModal from "../scenes/layout/admin/position/PositionReadMoreModal";

const PositionComponent = ({
  title,
  icon,
  roles,
  position,
  modalTitle,
  initial,
  formTitle,
  editorial,
  EditorialSuccessMessage,
  CreatedSuccessMessage,
}) => {
  const { searchResult } = HospitalState();
  return (
    <>
      <Stack
        spacing={1}
        alignItems='center'
        direction='row'
        sx={{ mt: 4, mb: 2 }}>
        {icon}
        <Typography variant='h6'>{title}</Typography>
      </Stack>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              {initial}
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Department
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Shift
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Contact No.
            </TableCell>
            <TableCell
              color='primary'
              sx={{ fontWeight: 600, fontSize: "17px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchResult.map((index) => (
            <Fragment key={index._id}>
              {index.role === roles && (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}>
                  <TableCell component='th' scope='row'>
                    {`${index.firstName} ${index.middleName} ${index.lastName}`}
                    {"    "}
                    {`${index.extensionName}` === null
                      ? ""
                      : `${index.extensionName}`}
                  </TableCell>

                  <TableCell component='th' scope='row'>
                    {index.department}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {index.shift}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    {index.contact}
                  </TableCell>
                  <TableCell component='th' scope='row'>
                    <Stack direction='row' alignItems='center'>
                      <PositionEditModal
                        index={index}
                        position={position}
                        editorial={editorial}
                        EditorialSuccessMessage={EditorialSuccessMessage}
                      />
                      <PositionReadMoreModal
                        index={index}
                        modalTitle={modalTitle}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
      <Box
        sx={{
          position: "sticky",
          bottom: 2,
          display: "flex",
          flexDirection: "row-reverse",
        }}>
        <PositionFormModal
          roles={roles}
          formTitle={formTitle}
          CreatedSuccessMessage={CreatedSuccessMessage}
        />
      </Box>
    </>
  );
};

export default PositionComponent;
