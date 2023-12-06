import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign :"center",
  marginTop : "3rem",
};

export default function InModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box marginRight="3rem">
      <Button onClick={handleOpen} variant="contained">
        出勤
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            出社形態を選択してください。
          </Typography>
          <Button sx={{ marginRight: "1rem" }} variant="contained">
            出社
          </Button>
          <Button variant="contained">在宅</Button>
        </Box>
      </Modal>
    </Box>
  );
}