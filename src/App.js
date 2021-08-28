import "./App.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./components/TextField";

function App() {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Preencha esse campo"),
    email: Yup.string().email("Email inválido").required("Preencha esse campo"),
    celular: Yup.string().required("Preencha esse campo"),
    empresa: Yup.string().required("Preencha esse campo"),
    mensagem: Yup.string().required("Preencha esse campo"),
  });
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: "",
          email: "",
          celular: "",
          empresa: "",
          locale: "",
          mensagem: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <section className="contact-area">
            <div className="contact-area__form">
              {console.log(formik.values)}
              <Form id="contact-form" action="">
                <TextField
                  className="form-name inputTextField"
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Para começar, qual seu nome?"
                  required
                />
                <TextField
                  className="form-email inputTextField"
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="Seu email"
                  required
                />
                <TextField
                  className="form-celular inputTextField"
                  type="phone"
                  name="celular"
                  id="contact-celular"
                  placeholder="Seu celular"
                  required
                  maxength="15"
                />
                <TextField
                  className="form-empresa inputTextField"
                  type="text"
                  name="empresa"
                  id="contact-empresa"
                  placeholder="Sua empresa"
                  required
                />
                <select
                  name="locale"
                  className="form-locale selected input"
                  id="contact-locale"
                >
                  <option value="First">Sua região</option>
                  <option value="19271906">América do Norte</option>
                  <option value="19271908">Argentina</option>
                  <option value="19271904">Ásia</option>
                  <option value="19271911">Brasil</option>
                  <option value="19271909">Chile</option>
                  <option value="19271907">Colombia</option>
                  <option value="19271905">Europa</option>
                  <option value="19271910">México</option>
                </select>
                <TextField
                  className="form-mensagem textarea"
                  name="mensagem"
                  id="contact-mensagem"
                  cols="30"
                  rows="5"
                  placeholder="Deixe uma mensagem:"
                  required
                  spellCheck="false"
                ></TextField>
                <button className="form-submit cta-submit" type="submit">
                  enviar
                </button>
                <div className="checkbox-agree">
                  <input
                    className="agree-contat inputTextField"
                    type="checkbox"
                    name="agree"
                    id="agree-contact"
                    required
                  />
                  <p className="checkbox-agree">
                    Ao me cadastrar concordo em receber novidades sobre
                    e-commerce, varejo e eventos relacionados à Corebiz
                  </p>
                </div>
              </Form>
              {/* <div className="contact-form-success-msg is-hidden">
            <p>
              Seus dados foram enviados e em breve nosso time retornará seu
              contato.
            </p>
          </div> */}
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}

export default App;
