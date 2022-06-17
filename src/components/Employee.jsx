import { useNavigate } from 'react-router-dom';
import { deleteEmployee, getEmployees } from '../service/localstorage';

export const Employee = ({employee, setEmployees}) => {
  const {id, name, email, address, phone} = employee;
  const navigate = useNavigate();
  const RMEmployee = () => {
    deleteEmployee(id);
    setEmployees(getEmployees());
  }
  return (
    <tr>
        <th>{name}</th>
        <th>{email}</th>
        <th>{address}</th>
        <th>{phone}</th>
        <th>
            <div className="d-flex gap-3">
                <span role="button" className="badge bg-success" onClick={() => navigate(`/edit-employee/${id}`)}>
                    Edit
                </span>
                <span role="button" className="badge bg-danger" onClick={() => RMEmployee()}>
                    Delete
                </span>
            </div>
        </th>
    </tr>
  )
}
