import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styled";
import emailjs from "emailjs-com";
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

function Form2() {
  const schema = yup.object().shape({
    nome: yup.string().required("nome"),
    email: yup.string().email().required("email"),
    telefone: yup.string().required("telefone"),
    sugestao: yup.string().required("sugestão"),
    terms: yup.boolean(),
    terms2: yup.boolean(),
    terms3: yup.boolean().isTrue().required(),
  });

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


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function sendForm(data) {
    console.log(data);

    emailjs
      .send("service_k4grc56", "template_7p99ma7", data, "solklG0BWBjrlim0r")
      .then(
        function (response) {
          //console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          //console.log('FAILED...', error);
        }
      );
  }

  return (
    <Container>
      <div className="boxForm">
        <h4 style={{ "font-family": "Eurostile" }} className="solicitar">
          CONTATO
        </h4>
        <form onSubmit={handleSubmit(sendForm)} className="formulario">
          <div className="formLeft">
            <div className="errorForm">
              <p className="pForm">Nome</p>
              {errors.nome && (
                <span className="error">{"(Este campo é obrigatório)"}</span>
              )}
            </div>
            <input className="inputLeft" type="text" {...register("nome")} />
            <div className="errorForm">
              <p className="pForm">Email</p>
              {errors.email && (
                <span className="error">{"(Este campo é obrigatório)"}</span>
              )}
            </div>
            <input className="inputLeft" type="text" {...register("email")} />
            <div className="errorForm">
              <p className="pForm">Telefone</p>
              {errors.telefone && (
                <span className="error">{"(Este campo é obrigatório)"}</span>
              )}
            </div>
            <input
              className="inputLeft"
              type="text"
              {...register("telefone")}
            />

            <div className="checkBox">
              <div className="divCheck">
                <input className="box" type="checkbox" {...register("terms")} />
                <span className="span">
                  Aceito receber comunicação via e-mail
                </span>
              </div>
              <div className="divCheck">
                <input type="checkbox" {...register("terms2")} />
                <span className="span">
                  Aceito receber comunicação via celular
                </span>
              </div>
              <div className="divCheck">
                <input type="checkbox" {...register("terms3")} />
                <div className="divCheckTerm">
                  <span className="span">
                    Declaro que li e concordo com os termos da <p style={{cursor: "pointer"}} onClick={openModal}><u>Política de
                    Privacidade</u></p>
                  </span>
                  <div className="errorTerms">
                    {errors.terms3 && (
                      <span className="error">
                        {
                          "(É obrigatório aceitar os termos de Política de privacidade)"
                        }
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formRight">
            <div className="comentario">
              <div className="errorForm">
                <p className="pForm">Comentário</p>
                {errors.sugestao && (
                  <span className="error">{"(Este campo é obrigatório)"}</span>
                )}
              </div>
              <input
                className="sugestao"
                type="text"
                {...register("sugestao")}
              />
            </div>
            <button style={{ "font-family": "Eurostile" }} className="button">
              {" "}
              Enviar{" "}
            </button>
          </div>
        </form>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Política de privacidade dos Dados"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            A DUNAS MOTORS COMÉRCIO E REPRESENTAÇÕES LTDA compromete-se com a
            integral segurança de todos os dados dos clientes, respeitando a
            privacidade e a segurança das informações que possa ter acesso em
            virtude da relação comercial para faturamento, meios de pagamento,
            endereço de entrega do produto, eventuais cobranças, jamais sendo
            fornecidas a terceiros, optando inclusive por não coletar dados por
            essa plataforma, direcionando o cliente para contato direto com os
            colaboradores da empresa, que atuarão em total observância a Lei
            Geral de Proteção de Dados – Lei nº 13.709/2018, que regulamenta o
            trato de dados pessoais de clientes por parte de empresas públicas e
            privadas.
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
  );
}

export default Form2;
