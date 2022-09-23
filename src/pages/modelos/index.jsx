import Carrossel from "../../components/carousel";
import Form from "../../components/form";
import { Container } from "./styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

const Modelos = ({model, type}) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 480,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  function openModal() {
    setOpen(true);
  }



  return (
    <div>
      <Container>
        <div className="titleTop">
          <h2 className="title">{type} {model}</h2>
          <p className="pButton" onClick={()=>setOpen(true)}>ESPECIFICAÇÕES TÉCNICAS</p>
        </div>
        <div className="center">
          <Form />
          <Carrossel model={model}  />
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ESPECIFICAÇÕES TÉCNICAS"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              <img  src={require(`../../data/${type}${model}/img.png`)} alt="" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Voltar</Button>
        </DialogActions>
      </Dialog>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        </Box>
      </Modal>
      </Container>
    </div>
  );
};

export default Modelos;
