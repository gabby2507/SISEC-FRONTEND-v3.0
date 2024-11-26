import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Certificate from './certificate';  // Importa o componente de certificado
import './CertificateForm.css';

const CertificateForm = ({ studentData }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(studentData || {}); // Inicia com os dados do estudante ou vazio
    const [isCertificateGenerated, setIsCertificateGenerated] = useState(false);  // Para controlar a exibição do certificado
    const studentdados = JSON.parse(localStorage.getItem('studentData'));
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        // console.log(9);
        // console.log(formData);
        localStorage.setItem('studentData', JSON.stringify(updatedData)); // Armazena no localStorage
    };

    const handleEmitirCertificado = () => {
        setIsCertificateGenerated(true);  // Exibe o certificado
    };

    return (
        <div className="container">
            {!isCertificateGenerated ? (
                <form className="certificate-form">
                    <div className="certificate-title">Dados do(a) Estudante</div>

                    <label className="label">Nome do Estudante:</label>
                    <input
                        type="text"
                        name="studentName"
                        value={studentdados.nome}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nome do Estudante"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Número do BI:</label>
                    <input
                        type="text"
                        name="biNumber"
                        value={studentdados.BI}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Número do BI"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Faculdade:</label>
                    <input
                        type="text"
                        name="faculName"
                        value={studentdados.faculdade}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nome da Faculdade"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Curso:</label>
                    <input
                        type="text"
                        name="courseName"
                        value={studentdados.curso}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nome do Curso"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Data de Início:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={studentdados.dataInicio}
                        onChange={handleInputChange}
                        className="input-field"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Data de Conclusão:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={studentdados.dataFim}
                        onChange={handleInputChange}
                        className="input-field"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Classificação:</label>
                    <input
                        type="text"
                        name="grade"
                        value={studentdados.mediaGlobal}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nota Final"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Director da Faculdade:</label>
                    <input
                        type="text"
                        name="directorName"
                        value={studentdados.nomeDirector}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nome do Director"
                        readOnly // Campo somente leitura
                    />

                    <label className="label">Nome do Reitor:</label>
                    <input
                        type="text"
                        name="chancellorName"
                        value={studentdados.nomeReitor}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Nome do Reitor"
                        readOnly // Campo somente leitura
                    />

                    <div className="button-container">
                        <button type="button" className="submit-button" onClick={handleEmitirCertificado}>
                            Emitir Certificado
                        </button>
                    </div>
                </form>
            ) : (
                <Certificate
                    studentName={studentdados.nome}
                    biNumber={studentdados.BI}
                    directorName={studentdados.nomeDirector}
                    courseName={studentdados.curso}
                    startDate={studentdados.dataInicio}
                    endDate={studentdados.dataFim}
                    grade={studentdados.mediaGlobal}
                    reitorName = {studentdados.nomeReitor}
                />
            )}
        </div>
    );
};

export default CertificateForm;
