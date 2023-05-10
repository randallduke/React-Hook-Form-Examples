import { useForm } from "react-hook-form";
import * as Yup from "yup";
import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1 className="app-title">Bufex Form Example</h1>
      <section className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="section-header">React Hook Form</h2>
          <div className="section-item">
            <span className="left">
              <label>User Name : </label>
            </span>
            <span className="right">
              <input
                {...register("userName", { required: true })}
                placeholder="User Name"
              />
              {errors.userName && <p>User Name is required.</p>}
            </span>
          </div>
          <div className="section-item small-top-margin">
            <label>Password : </label>
            <input
              type="password"
              {...register("password", { required: true, pattern: /^.{8,}$/ })}
              placeholder="Password"
            />
            {errors.password && (
              <p>Password is required & must be at least 8 characters.</p>
            )}
          </div>
          <div className="section-item small-top-margin">
            <label>Bufex Email : </label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@bufex+\.com$/
              })}
              placeholder="Email"
            />
            {errors.email && <p>Please enter a valid email @bufex.com.</p>}
          </div>
          <div className="section-item small-top-margin">
            <label>Cell Phone : </label>
            <input
              {...register("cellPhone", {
                required: true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
              })}
              placeholder="555-555-5555"
            />
            {errors.cellPhone && (
              <p>Please enter a valid phone number xxx-xxx-xxxx.</p>
            )}
          </div>
          <div className="section-item small-top-margin">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}
