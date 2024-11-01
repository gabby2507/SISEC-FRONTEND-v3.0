import React, { useState, useEffect } from 'react';
import './History.css'; 
// Exemplo de dados simulados para o histórico de diplomas
const fetchDiplomaHistory = () => {
  return [
    {
      studentName: "Fernando Chavele",
      courseName: "Engenharia Informática",
      grade: "19",
      issueDate: "2024-06-25"
    },
    {
      studentName: "Ana Sousa",
      courseName: "Arquitetura",
      grade: "18",
      issueDate: "2023-12-15"
    },
    {
      studentName: "Carlos Silva",
      courseName: "Medicina",
      grade: "20",
      issueDate: "2022-11-10"
    }
  ];
};

function DiplomaHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        // Carregar histórico dos diplomas
        const historyData = fetchDiplomaHistory();
        setHistory(historyData);
    }, []);

    return (
        <div className="form-container">
            <h1>Histórico de Diplomas</h1>
            {history.length === 0 ? (
                <p>Ainda não há diplomas emitidos.</p>
            ) : (
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Nome do Estudante</th>
                            <th>Curso</th>
                            <th>Nota</th>
                            <th>Data de Emissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((diploma, index) => (
                            <tr key={index}>
                                <td>{diploma.studentName}</td>
                                <td>{diploma.courseName}</td>
                                <td>{diploma.grade}</td>
                                <td>{diploma.issueDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DiplomaHistory;
