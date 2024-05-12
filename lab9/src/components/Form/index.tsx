import { ChangeEvent, ReactElement, useState } from "react";
import withValidators, {
  WithInjectedValidators,
} from "../../hocs/withValidators";

export type Employee = {
  id: number;
  name: string;
  gender: string;
  birthdate: Date;
  position: string;
  education: string[];
};

const defaultEmployee: Employee = {
  id: 0,
  name: "",
  gender: "",
  birthdate: new Date(),
  position: "",
  education: [""],
};

type Props = {
  initialEmployee?: Employee;
  onSubmit: (employee: Employee) => void;
} & WithInjectedValidators;

const EmployeeForm = ({
  initialEmployee = defaultEmployee,
  onSubmit,
  validateDate,
  validateGender,
}: Props): ReactElement => {
  const [employee, setEmployee] = useState<Employee>(initialEmployee);
  const [dateErr, setDateErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
  };
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const date = new Date(value);
    setEmployee((prevEmployee) => ({ ...prevEmployee, birthdate: date }));
    if (!validateDate(date)) {
      setDateErr(true);
      return;
    }
    setDateErr(false);
  };
  const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, gender: value }));
    if (!validateGender(value)) {
      setGenderErr(true);
      return;
    }
    setGenderErr(false);
  };

  const handleEducationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [_, index] = name.split("-");
    const education = employee.education;
    education[parseInt(index)] = value;
    setEmployee((prevEmployee) => ({ ...prevEmployee, education }));
  };
  const handleAddEducation = () => {
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      education: [...prevEmployee.education, ""],
    }));
  };
  const handleRemoveEducation = (index: number) => {
    const education = employee.education.filter((_, i) => i !== index);
    setEmployee((prevEmployee) => ({ ...prevEmployee, education }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(employee);
    setEmployee(defaultEmployee);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "30px" }}
    >
      <div>
        <label htmlFor="id">Табельний номер</label>
        <input
          type="text"
          name="id"
          value={employee.id}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="name">ПІБ</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Стать</label>
        <input
          type="text"
          name="gender"
          value={employee.gender}
          onChange={handleGenderChange}
          required
        />
        {genderErr && <p>Не валідна стать</p>}
      </div>
      <div>
        <label htmlFor="birthdate">Дата народження</label>
        <input
          type="date"
          name="birthdate"
          value={employee.birthdate.toISOString().slice(0, 10)}
          onChange={handleDateChange}
          required
        />
        {dateErr && <p>Не валідна дата</p>}
      </div>
      <div>
        <label htmlFor="position">Посада</label>
        <input
          type="text"
          name="position"
          value={employee.position}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <button onClick={handleAddEducation} type="button">
          Add education
        </button>
        <div>
          {employee.education.map((education, index) => (
            <div key={`education-${index}`}>
              <label htmlFor={`education-${index}`}>Дані про освіту</label>
              <input
                type="text"
                name={`education-${index}`}
                value={education}
                onChange={handleEducationChange}
              />
              <button
                onClick={() => handleRemoveEducation(index)}
                type="button"
              >
                Remove education
              </button>
            </div>
          ))}
        </div>
      </div>
      {!dateErr && !genderErr && (
        <button type="submit" style={{ padding: "5px", width: "10%" }}>
          Submit
        </button>
      )}
    </form>
  );
};

export default withValidators(EmployeeForm);
