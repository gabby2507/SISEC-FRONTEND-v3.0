import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './certificate.css';
// import logo from './img/Emblema.png';
import UNIELITE from './img/EmblemaElite.png';

// Função para converter números para palavras em tuga
const numberToWords = (num) => {
    const words = [
        "Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez",
        "Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Vinte"
    ];

    if (num >= 0 && num <= 20) {
        return words[num];
    } else {
        return num.toString();
    }
};



const Certificate = ({ studentName, biNumber, directorName, courseName, startDate, endDate, grade }) => {
    
    const generatePDF = () => {
        const input = document.getElementById('certificate');
        const button = document.getElementById('generate-pdf-button');
        button.style.display = 'none';  // Oculta o botão ao gerar PDF

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
        
            const imgWidth = 210; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save("certificado.pdf");

            button.style.display = 'block';  
        });
    };

    const currentDate = new Date().toLocaleDateString();  
    const gradeInWords = numberToWords(parseInt(grade));  

    return (
        <div>
        <div id="certificate" className="certificate">
            <img src={UNIELITE} alt="Logo da UNI-ELITE" className="logo"/>
            {/* <img src={UNIELITE} alt="Logo da UNI-ELITE" className="logo"/> */}
            <h2>UNIVERSIDADE ELITE</h2>
            <div className='DiplomaC'>Diploma</div>
            <div className="certificate-details">
                <p>
                    Eu, <strong>{directorName}</strong>, 
                    <br />
                    Reitor da Universidade Elite,
                    <br />
                    faço saber que
                    <br />
                    <strong id="nometamanho">{studentName}</strong>, 
                    <br />
                    com o número de BI <strong>{biNumber}</strong>,
                    <br />
                    tendo frequentado a <strong>Faculdade de Ciências</strong>, 
                    <br />
                    concluiu, de <strong>{startDate}</strong> a <strong>{endDate}</strong>,
                    <br />
                    o curso de <strong>{courseName}</strong>,
                    <br />
                    pelo que, em conformidade com as disposições legais em vigor, lhe mandei passar o 
                    presente Diploma em que o(a) declaro habilitado(a) com o grau de <strong>Licenciatura </strong>
                    com a classificação de <strong>{grade} ({gradeInWords})</strong> valores.
                    <br />
                </p>
                <p  > Maputo, {currentDate}</p>
            </div>

            <div className="signature-section">
                <p className='line1 line' >________________________</p>
                <p className='line1' >O Reitor</p>
                <p className='line2 line' >_________________________</p>
                <p className='line2' >O Director da Faculdade</p>
            </div>

            
        </div>
        <button id="generate-pdf-button" onClick={generatePDF}>Gerar PDF</button>
        </div>
    );
};

export default Certificate;
