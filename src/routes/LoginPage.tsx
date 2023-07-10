import React, { useState } from "react";
import "../css/LoginPage.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, { message: "A senha inserida está incorreta" }),
});

type LoginFormData = z.infer<typeof schema>;
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
  });
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <form
        onSubmit={handleSubmit((data) => {
          console.warn(data);
          console.error(errors);
        })}
      >
        <div className="mb-3">
          <label htmlFor="user" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            id="user"
            type="text"
            className="form-control"
          />
          {errors && <p className="text-danger">{errors.email?.message}</p>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="form-label">
            Senha
          </label>
          <div className="input-group mb3">
            <input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              aria-label="Senha"
              aria-describedby="button-addon2"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="btn btn-outline-secondary"
            >
              {showPassword ? "Esconder" : "Mostrar"}
            </button>
          </div>

          {errors && <p className="text-danger">{errors.password?.message}</p>}
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
