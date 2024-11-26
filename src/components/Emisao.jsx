import React, { useState } from 'react';
import './Emisao.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";




// Função simulando a consulta na base de dados


const Emisao = () => {
    const [identifierType, setIdentifierType] = useState('studentNumber');
    const [identifier, setIdentifier] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [showCertificateForm, setShowCertificateForm] = useState(false);
    const navigate = useNavigate()
    const [studentNumber, setStudentNumber] = useState(null);
    const n=99;



    const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(studentNumber);
     
      axios.post("http://localhost:8989/api/student-data", {
        student_number: studentNumber,
      }).then(function (response) {
        console.log(response.data)
        
        console.log(n)
        localStorage.setItem('sisecToken',response.data.data.token)
        //localStorage.setItem('studentData',JSON.stringify(response.data))
        const student = JSON.stringify(response.data.data);
        localStorage.setItem('studentData',student)
        navigate("/certificateForm")
        console.log(n)
      })
        // .catch(function (error) {
        //     alert('Login nao autorizado!')
        // });
      };

    const handleEmitir = () => {
        alert("Certificado emitido com sucesso!");
    };

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
                        
                        onChange={(e) => setStudentNumber(e.target.value)}
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
