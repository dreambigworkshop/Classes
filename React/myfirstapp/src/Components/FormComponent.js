import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
  const [serverData, setServerData] = useState([])

  useEffect(()=> {
    getDataFromJsonServer()
  }, [])

  const getDataFromJsonServer = async() => {
    console.log('Above Await')
    let res = await axios.get('http://localhost:5000/customers')
    saveDataToServer(res.data)
    console.log('Below Await', res.data)
    setServerData([...res.data])
  }
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
    // cookies,,

    // cookies.set('name', values.name)
    // cookies.set('password', values.password)
    // console.log('Name', cookies.get('name'))
    // console.log('Password', cookies.get('password'))

    // localStoratge
    // localStorage.setItem('formData', JSON.stringify(formData))
    // console.log(JSON.parse(localStorage.getItem('formData')))

    // JSON server
    
    saveDataToServer(values)
    oldFormData.push(values);
    setFormData([...oldFormData]);
    // console.log(formData);
  };
  const saveDataToServer = async (data) => {
      let res = await axios.post('http://localhost:5000/customers/', data)
      // getDataFromJsonServer()
      console.log(res)
  }
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
          {serverData &&
            serverData.map((fd, key) => (
              <li key={key}>
                {fd.show.name} : {fd.show.language} : <img src={`${fd.show.image.medium}`} height={250} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
