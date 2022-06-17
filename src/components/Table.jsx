import React, { useEffect, useState } from "react";
import { getEmployees } from "../service/localstorage";
import { Employee } from "./Employee";

export const Table = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);
  return (
    <>
      <h1 className="my-5 text-center">FUNCIONARIOS ATIVOS</h1>

      {employees.length > 0 ? (
        <div className="card bg-secondary p-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
                {employees.map(employee => <Employee employee={employee} setEmployees={setEmployees} key={employee.id}/>)}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>Sem Funcionarios</h3>
      )}
    </>
  );
};
