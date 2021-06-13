import React, { useState } from "react";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const taskInitial = {
  tast: "",
  data: "",
  isFinished: "",
};
export default function FormComponent() {
  const [values, setValues] = useState(initialValues);
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    // console.log(e)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const submitData = (e) => {
    e.preventDefault();
    setValues(initialValues);
    let oldFormData = formData;
    oldFormData.push(values);
    setFormData([...oldFormData]);
    console.log(formData);
  };
  return (
    <div>
      <form className="form" onSubmit={submitData}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="results">
        <ul>
          {formData &&
            formData.map((fd, key) => (
              <li key={key}>
                {fd.name} : {fd.email} : {fd.password}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
