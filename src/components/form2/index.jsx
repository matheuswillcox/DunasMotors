import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styled";

function Form2() {
  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    telefone: yup.string().required("Campo obrigatório"),
    sugestao: yup.string().required("Campo obrigatório"),
    terms: yup.boolean().isTrue("Você não aceitou os termos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const singUp = (data) => {
    return console.log(data);
  };

  return (
    <Container>
      <div className="boxForm" onSubmit={handleSubmit(singUp)}>
        <h4 className="solicitar">SOLICITAR PROPOSTA</h4>
        <form className="formulario">
          <input
            placeholder="Nome"
            type="text"
            {...register("nome")}
          />
          {errors.nome && <span className="error"> {errors.nome.message}</span>}
          <input
            placeholder="Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <span className="error"> {errors.email.message}</span>
          )}
          <input placeholder="Telefone" type="text" {...register("telefone")} />
          <div>
            <input
              className="sugestao"
              placeholder="Sugestão"
              type="text"
              {...register("sugestao")}
            />
          </div>
          <div className="checkBox">
            <div className="divCheck">
              <input className="box" type="checkbox" {...register("terms")} />
              <span className="span">
                Aceito receber comunicação via e-mail
              </span>
            </div>
            <div className="divCheck">
              <input type="checkbox" {...register("terms")} />
              <span className="span">
                Aceito receber comunicação via celular
              </span>
            </div>
            <div className="divCheck">
              <input type="checkbox" {...register("terms")} />
              <span className="span">
                Declaro que li e concordo com os termos da Política de
                Privacidade
              </span>
            </div>
          </div>
          <button className="button"> Enviar </button>
        </form>
      </div>
    </Container>
  );
}

export default Form2;
