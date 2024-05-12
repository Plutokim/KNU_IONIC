import { ReactElement, useState } from "react";
import EmployeeForm, { Employee } from "../Form";

const EmployeeItem = ({
  e,
  onSubmit,
}: {
  e: Employee;
  onSubmit: () => void;
}): ReactElement => {
  const [edit, setEdit] = useState(false);
  const onEditSubmit = () => {
    onSubmit();
    setEdit(false);
  };
  if (edit) return <EmployeeForm initialEmployee={e} onSubmit={onEditSubmit} />;
  return (
    <div>
      <p>Табельний номер {e.id}</p>
      <p>ПІБ {e.name}</p>
      <p>Стать {e.gender}</p>
      <p>Дата народження {e.birthdate.toISOString().slice(0, 10)}</p>
      <p>Посада {e.position}</p>
      <p>
        {e.education.map((ed) => (
          <div>Освіта: {ed}</div>
        ))}
      </p>
      <button onClick={() => setEdit(true)}>Редагувати</button>
    </div>
  );
};

export default EmployeeItem;
