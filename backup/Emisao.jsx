import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Emisao.css";
import prof from "./img/prof.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
// import baseUrl from "../server/baseUrl";

// const Login = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [showPassword, setShowPassword] = useState(false);
// const [rememberMe, setRememberMe] = useState(false);
const navigate = useNavigate();
const [studentNumber, setStudentNumber] = useState("");
const handleSubmit = (event) => {
  event.preventDefault();


  axios.post('http://localhost:2050/api/student-data', {
    student_number: studentNumber,

  })
  .then(function (response) {

    console.log(response.data);
    if(response.data.message =='Login do usuário com sucesso.'){
      localStorage.setItem('sisecToken',response.data.data.token)
      console.log(response.data.data)
      navigate("/home");
    }
  })
  .catch(function (error) {
    alert('Login nao autorizado!')
  });

};

//Autenticacao

return (
    <div className="form-container">
        {!showCertificateForm ? (
            <form onSubmit={handleSubmit} className="emission-form">
                <div htmlFor="identifierType" className="labelE">Escolha o tipo de identificação:</div>
                <select 
                    id="identifierType"
                    value={identifierType} 
                    onChange={(e) => setIdentifierType(e.target.value)}
                    required
                    className="input-select"
                >
                    <option value="studentNumber">Número de Estudante</option>
                    <option value="biNumber">Número de BI</option>
                </select>

                <input
                    type="text"
                    placeholder={identifierType === 'studentNumber' ? "Número do Estudante" : "Número de BI"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    className="input-fieldE"
                />

                <button type="submit" className="submit-buttonE">Avançar</button>
            </form>
        ) : (
            <CertificateForm 
                studentData={studentData} 
                handleEmitir={handleEmitir} 
            />
        )}
    </div>
);

};

export default Emisao;
