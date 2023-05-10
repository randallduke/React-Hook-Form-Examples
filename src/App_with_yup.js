import "./App.css";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

function AppWithYup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    alert(data);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <section>
          <label>Enter username</label>
          <input type="text" placeholder="username" {...register("username")} />
          <span>{errors.username?.message}</span>
        </section>
        {/* Age */}
        <section>
          <label>Enter age</label>
          <input type="number" placeholder="age" {...register("age")} />
          <span>{errors.age?.message}</span>
        </section>
        {/* Submit button */}
        <section>
          <input type="submit" />
        </section>
      </form>
    </div>
  );
}
export default AppWithYup;
