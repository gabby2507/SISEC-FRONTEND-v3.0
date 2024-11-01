import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import './ParentComponent.css';

const ParentComponent = () => {
    const [studentData, setStudentData] = useState({
        studentName: '',
        faculName: '',
        courseName: '',
        endDate: '',
        grade: '',
        directorName: '',
        chancellorName: '',
    });

    useEffect(() => {
        // Recupera os dados do localStorage
        const storedData = localStorage.getItem('studentData');
        if (storedData) {
            setStudentData(JSON.parse(storedData));
        }
    }, []);

    const handleEmitirPDF = () => {
        const doc = new jsPDF('portrait', 'pt', 'a4'); // Define o tamanho A4
        const { studentName, faculName, courseName, endDate, grade, directorName, chancellorName } = studentData;
        const currentDate = new Date().toLocaleDateString();

        // Geração do PDF
        doc.setFontSize(20);
        doc.text("UNIVERSIDADE EDUARDO MONDLANE", 40, 40);
        doc.setFontSize(16);
        doc.text("Diploma", 40, 80);
        doc.setFontSize(12);
        doc.text(`Eu, ${directorName}, Director da Faculdade de ${faculName},`, 40, 120);
        doc.text(`faço saber que ${studentName}, concluiu o curso de ${courseName}`, 40, 140);
        doc.text(`em ${endDate}, com a classificação de ${grade} valores.`, 40, 160);
        doc.text(`Maputo, ${currentDate}`, 40, 200);
        doc.text(`Reitor: ${chancellorName}`, 40, 220);

        doc.save('certificado.pdf'); // Salva o PDF
        // Não deve haver alertas aqui
    };

    return (
        <div className="parent-component">
            <h2>Diploma</h2>
            <div className="diploma">
                <h3>UNIVERSIDADE EDUARDO MONDLANE</h3>
                <h4>Diploma</h4>
                <p>Eu, {studentData.directorName}, Director da Faculdade de {studentData.faculName},</p>
                <p>faço saber que {studentData.studentName}, concluiu o curso de {studentData.courseName}</p>
                <p>em {studentData.endDate}, com a classificação de {studentData.grade} valores.</p>
                <p>Maputo, {new Date().toLocaleDateString()}</p>
                <p>Reitor: {studentData.chancellorName}</p>
            </div>

            <div className="button-container">
                <button type="button" onClick={handleEmitirPDF} className="generate-pdf-button">
                    Gerar PDF
                </button>
            </div>
        </div>
    );
};

export default ParentComponent;
