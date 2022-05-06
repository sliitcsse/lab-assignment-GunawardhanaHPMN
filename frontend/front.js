import React, {useState} from "react";
import axios from 'axios';


function Client(){

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        type:""
      });
  
      const handleAddData = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value});
      } 

      const client = (e) => {
        e.preventDefault();
        let clientData = {
            name: values.name,
            email: values.email,
            password: values.password,
            username: values.username,
            type: values.type       
        }

        console.log(clientData);
           
   axios.post("http://localhost:3000/client", clientData )
      .then(() => {
        alert("Inserted successfully");
      })
      
      .catch((error) => {
        console.log(error);
      })

    }

    return(
       <div >
           
           
           <div>
 
 <form className="form">
     <label>Name</label>
    
        <input
            // class="form-field-inv"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleAddData}
          value={values.clientname}
  />

  <label>Email</label>
       <input
          // class="form-field-inv"
           type="text"
           placeholder="Email"
           name="email"
           onChange={handleAddData}
           value={values.clientemail}
  />

    <label>password</label>
        <input
        // class="form-field-inv"
        type="text"
        placeholder="Password"
       name="password"
       onChange={handleAddData}
       value={values.password}
  />
        
        <label>User Name</label>
        <input
        // class="form-field-inv"
          type="text"
          placeholder="username"
          name="username"
          onChange={handleAddData}
          value={values.username}
  />
   
   <label>Type</label>
        <input
        // class="form-field-inv"
          type="text"
          placeholder="Type"
          name="type"
          onChange={handleAddData}
          value={values.type}
  />

       <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
             Clear
        </button>
      <button class="form-field submit-inv" onClick={client}  type="submit">
             Submit
      </button>

   </form>

  </div>





       </div>
    )
}

export default Client;