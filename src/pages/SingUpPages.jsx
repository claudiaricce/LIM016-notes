import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import FormInput from "./../components/FormInput";
import Footer from "./../components/Footer"

export default function LogInPages() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [   
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "El correo no es válido",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password 6 carácteres, incluye 1 letra, 1 número y 1 carácter especial!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,6}$`,
      required: true,
    }    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div id="template" className="templateLogin">
      <div className="container">
      <div className="titulo">
          <h1 className="title">LABNOTES</h1>
          <img className="logo2" src="/img/notas.png" alt=""/>
        </div>
        <div id="Logo" className="containerLogin">
        <p >Tomar notas nunca fue tan sencillo</p>
          <figure><img className="imagenFondo" src="/img/anotar-rbg.png" alt=""></img></figure>
        </div>
        
      </div>
      <div id="login" className="containerForm">
        
        <div id="login" className="login">
          <section>
            <p className="title">Regístrate</p>
            <div className="center">
              <form onSubmit={handleSubmit}>
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <p>¿Has Olvidado la Contraseña?</p>
                  <button>Regístrate</button>
                </form> 
            </div>                
           
            <p>O Inicia Sessión Con:</p>
            <div style={{fontSize:"2em", color: "#2A3F88", textAlign: "center"}}>           
              <FontAwesomeIcon icon={faGoogle} /> {" "}
            </div>
            <p>¿No tienes una cuenta? <a>Registrate</a></p>            
          </section>           
        </div>
      </div>     
    </div>
     <Footer />
     </>
    )
}