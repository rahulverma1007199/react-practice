import { useState } from "react";
import FormInput from "../formInput/FormInput";
import "./form.scss";

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Your Username",
      label: "USERNAME",
      errorMessage : "Please Add Username ",
      pattern : "^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$",
      require:true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Your Email",
      label: "EMAIL",
      errorMessage : "Please Add Email Address ",
      pattern : "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
      require:true
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Your Password",
      label: "PASSWORD",
      errorMessage : "Please Type Password ",
      require:true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "CONFIRM PASSWORD",
      pattern : values.password,
      errorMessage : "Password is not matched",
      require:true
    },
  ];

  console.log(values);
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value});
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>A Dynamic Form</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
