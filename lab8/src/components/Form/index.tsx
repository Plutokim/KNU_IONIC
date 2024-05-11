import { ChangeEvent, ReactElement, useState } from "react";

type Employee = {
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

const EmployeeForm = ({
  onSubmit,
}: {
  onSubmit: (employee: Employee) => void;
}): ReactElement => {
  const [employee, setEmployee] = useState<Employee>(defaultEmployee);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }));
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">Табельний номер</label>
      <input
        type="text"
        name="id"
        value={employee.name}
        onChange={handleInputChange}
      />
      <label htmlFor="name">ПІБ</label>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleInputChange}
      />
      <label htmlFor="gender">Стать</label>
      <input
        type="text"
        name="gender"
        value={employee.gender}
        onChange={handleInputChange}
      />
      <label htmlFor="birthdate">Дата народження</label>
      <input
        type="date"
        name="birthdate"
        value={employee.birthdate.toISOString().slice(0, 10)}
        onChange={handleInputChange}
      />
      <label htmlFor="position">Посада</label>
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleInputChange}
      />
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
