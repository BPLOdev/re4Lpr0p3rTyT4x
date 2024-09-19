import * as React from "react";
import '../assessment_roll/tax_dec_modal.scss'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { height, maxHeight } from "@mui/system";
import { Padding } from "@mui/icons-material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%", // Optional: Set a maximum width to prevent it from becoming too large on wider screens
  width: "50%", // Adjust this value as needed
  height: "95vh",
  overflowY: 'auto',
  bgcolor: "background.paper",
  borderRadius: '10px',
  boxShadow: 24,
};

const boxStyle = {
  display: 'flex',
  justifyContent: 'space-between', 
  gap: '10px', 
  mb: '5px'
};


const icons = {
  "Add Taxdec": <CreateNewFolderOutlinedIcon sx={{ fontSize: 28 }} />,
};

export default function TaxDecModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: "rgba(69, 116, 204)",
          color: "white",
          maxWidth: "100%",
          width: "140px",
          height: "43px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CreateNewFolderOutlinedIcon sx={{ fontSize: 25, mr: 1 }} />
        Add Taxdec
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{display: 'flex', justifyContent: 'center', margin: 0, p: 1.5, backgroundColor: "rgba(69, 116, 204)", flexShrink: 0,}}>
            <Typography variant="h6" component="h2" sx={{color: '#ffffff'}}>
              TAX DECLARATION OF REAL PROPERTY
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 0, p: 3}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
              <TextField id="outlined-basic" label="T.D. No." variant="outlined" />
              <TextField id="outlined-basic" label="Property Identification No." variant="outlined" />
            </Box>

            <fieldset>
            <legend>OWNER INFORMATION</legend>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="last Name" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Middle Name" variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Address" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="TIN No." variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Telephone No." variant="outlined" />
              </Box>
              <fieldset>
              <legend>ADMINISTRATOR / BENEFICIAL USER</legend>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="last Name" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Middle Name" variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Address" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="TIN No." variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Telephone No." variant="outlined" />
              </Box>
              </fieldset>
            </fieldset>


            <fieldset>
              <legend>PROPERTY INFORMATION</legend>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Number and Street" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Barangay/District" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Municipality & Province/City" variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="OCT/TCT/CLOA No.." variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Survey No." variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="CCT" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Lot No" variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Date" variant="outlined" />
                <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Block No." variant="outlined" />
              </Box>
              <fieldset>
              <legend>BOUNDARIES</legend>
              <Box sx={boxStyle}>
                <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="LAND" />
                <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="BUILDING" />
                <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="MACHINERY" />
                <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="OTHER" />
              </Box>
              </fieldset>
              <legend>TAXABILITY</legend>
              <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="TAXABLE" />
              <FormControlLabel sx={{flexGrow: 1}} control={<Checkbox />} label="EXEMPT" />
            </fieldset>

            <fieldset>
              <legend>CLASSIFICATION</legend>
              <TextField sx={{flexGrow: 1, width: '6vw'}} id="outlined-basic" label="Classification" variant="outlined" />
              <TextField sx={{flexGrow: 1, width: '5vw'}} id="outlined-basic" label="Area" variant="outlined" />
              <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Market Value" variant="outlined" />
              <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Actual Use" variant="outlined" />
              <TextField sx={{flexGrow: 1, width: '5vw'}} id="outlined-basic" label="Level" variant="outlined" />
              <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Assessed Value" variant="outlined" />
              </fieldset>

            <fieldset className="cancels">
              <legend className="cancels">CANCELS</legend>
              <Box sx={boxStyle}>
              <TextField sx={{flexGrow: 1, width: '6vw'}} id="outlined-basic" label="Cancels T.D. No." variant="outlined" />
              <TextField sx={{flexGrow: 1, width: '5vw'}} id="outlined-basic" label="Owner" variant="outlined" />
              </Box>
              <Box sx={boxStyle}>
              <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Previous A.V. Php" variant="outlined" />
              <TextField sx={{flexGrow: 1}} id="outlined-basic" label="Property Index Number" variant="outlined" />
              </Box>
              <Box sx={{boxStyle}}>
              <TextField sx={{width: '100%'}} id="outlined-multiline-flexible" label="Memoranda" multiline maxRows={4} />
              </Box>
            </fieldset>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
