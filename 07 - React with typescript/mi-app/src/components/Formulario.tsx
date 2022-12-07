import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Formulario = () => {
  const { formulario, handleChange } = useForm<FormData>({
    email: "federicotomadin@gmail.com",
    name: "Fede",
    age: 20,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="form-label">Email</label>
        <input
          type="email"
          placeholder={formulario.email}
          className="form-control"
          name="email"
          value={formulario.email}
          onChange={(ev) => handleChange(ev)}
        />

        <div className="mb-3">
          <label htmlFor="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formulario.name}
            onChange={(ev) => handleChange(ev)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={formulario.age}
            onChange={(ev) => handleChange(ev)}
          />
        </div>
      </div>

      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Formulario;
