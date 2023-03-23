import React,{useState,useRef} from 'react'
import Forminput from './component/Forminput'
import "./App.css"
const App = () => {
  const[values,setValues]=useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs=[
    {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username", 
    errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
    label:"Username",
    pattern:"^[A-Za-z0-9]{3,16}$",
    required:true

  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be valid Email address",
    label:"Email"

  },   {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessage:"",
    label:"Birthday"

  },{
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include at least 1 letter,1 number and 1 special characters!",
    label:"Password",
    pattern:"^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,20}",
    required:true,

  } , {
    id:5, 
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Password don't match",
    label:"Confirm Password",
    pattern:values.password,
    required:true

  }




]
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    

  }
  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit} action="">
        <h1>Register</h1>

        {
          inputs.map((input)=>(
             <Forminput key={input.id} placeholder="Username" {...input} onChange={onChange} value={values[input.name]}/>
          ))
        }
       

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
