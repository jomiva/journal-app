import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { setError, RemoveError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
 
  const [formValues, handleInputChange] = useForm({
    name: "Jose Valera",
    email: "nando@gmail.com",
    password: "123456888",
    password2: "123456888",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(name, email, password, password2);
    // dispatch(startLoginEmailPassword(email, password));
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("el nombre es requerido"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email no valido"));
      return false;
    } else if (password !== password2 || password < 5) {
      dispatch(setError("son diferentes y debe tener 6 caracteres"));
      return false;
    }
    dispatch(RemoveError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
      </form>
      <Link className="link" to="/auth/login">
        Already registered?
      </Link>
    </>
  );
};
