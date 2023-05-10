import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.css";

function AppWithYup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h1 className="app-title">Bufex Form Example</h1>
      <section className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="section-header">React Hook Form</h2>
          <div className="section-item">
              <label>User Name : </label>
              <input
                {...register("userName")}
                placeholder="User Name"
              />
              <p>{errors.userName?.message}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Password : </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            <p>{errors.password?.message}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Bufex Email : </label>
            <input
              {...register("email")}
              placeholder="Email"
            />
            <p>{errors.email?.message}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Cell Phone : </label>
            <input
              {...register("cellPhone")}
              placeholder="555-555-5555"
            />
            <p>{errors.cellPhone?.message}</p>
          </div>
          <div className="section-item small-top-margin">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default AppWithYup;
