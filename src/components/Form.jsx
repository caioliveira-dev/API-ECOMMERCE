import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormState } from "../hooks/FormState";
import { addEmployee, editEmployee, employeeByID } from "../service/localstorage";

export const Form = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const { inputValues, onChange, Default, setForm } = FormState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if(id) {
        const employee = employeeByID(id);
        setForm(employee)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const onSubmit = (e) => {
    e.preventDefault();
    id ? editEmployee(id, inputValues) : addEmployee(inputValues);
    setShowAlert(true);
    Default();

    setTimeout(() => {
        setShowAlert(false);
    }, 4000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
        <h1>{id ? "Editar" : "Criar"} Funcionario</h1>
      </div>

      {
        showAlert && (
            <div className="px-5">
                <div className="alert alert-success" role="alert">
                    Finalizado com sucesso.
                </div>
            </div>
        )
      }

      <div className="card border-primary p-5 m-5">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label mt-2" htmlFor="name">
              Nome Completo:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={inputValues.name}
              onChange={onChange}
              placeholder="Digite o nome"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="email">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={inputValues.email}
              onChange={onChange}
              placeholder="Digite o email"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="address">
              Endereço:
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={inputValues.address}
              onChange={onChange}
              placeholder="Digite o endereço"
            />
          </div>

          <div className="form-group">
            <label className="form-label mt-2" htmlFor="phone">
              Telefone:
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={inputValues.phone}
              onChange={onChange}
              placeholder="Digite o telefone"
            />
          </div>

          <div className="d-grip gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary">
              Finalizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
