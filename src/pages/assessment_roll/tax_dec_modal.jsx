import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { height, maxHeight } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%", // Optional: Set a maximum width to prevent it from becoming too large on wider screens
  width: "80", // Adjust this value as needed
  height: "95vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const icons = {
  "Add Taxdec": <CreateNewFolderOutlinedIcon sx={{ fontSize: 28 }} />,
};

export default function TaxDecModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            TAX DECLARATION
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            nostrum eum, voluptatibus libero ipsum harum blanditiis, deserunt
            temporibus quasi soluta sequi placeat fugit, voluptatem dolorum
            nulla reprehenderit tempora quia excepturi.\ Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatum nostrum eum,
            voluptatibus libero ipsum harum blanditiis, deserunt temporibus
            quasi soluta sequi placeat fugit, voluptatem dolorum nulla
            reprehenderit tempora quia excepturi.\ Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum nostrum eum, voluptatibus
            libero ipsum harum blanditiis, deserunt temporibus quasi soluta
            sequi placeat fugit, voluptatem dolorum nulla reprehenderit tempora
            quia excepturi.\ Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatum nostrum eum, voluptatibus libero ipsum harum
            blanditiis, deserunt temporibus quasi soluta sequi placeat fugit,
            voluptatem dolorum nulla reprehenderit tempora quia excepturi.\
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
