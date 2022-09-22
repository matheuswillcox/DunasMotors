import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styled";
import emailjs from "emailjs-com";

function Form2() {
  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
    sugestao: yup.string().required("Campo obrigatório"),
    terms: yup.boolean().isTrue("Você não aceitou os termos"),
    terms2: yup.boolean().isTrue("Você não aceitou os termos"),
    terms3: yup.boolean().isTrue("Você não aceitou os termos"),
  });

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
            <input
              className="inputLeft"
              placeholder="Nome"
              type="text"
              {...register("nome")}
            />
            {errors.nome && (
              <span className="error"> {errors.nome.message}</span>
            )}
            <input
              className="inputLeft"
              placeholder="Email"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <span className="error"> {errors.email.message}</span>
            )}
            <input
              className="inputLeft"
              placeholder="Telefone"
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
                <span className="span">
                  Declaro que li e concordo com os termos da Política de
                  Privacidade
                </span>
              </div>
            </div>
          </div>
          <div className="formRight">
            <div>
              <input
                className="sugestao"
                placeholder="Sugestão"
                type="text"
                {...register("sugestao")}
              />
            </div>
            <button  style={{ "font-family": "Eurostile" }} className="button"> Enviar </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Form2;
