import React, {useState} from "react";
import axios from 'axios';


function user(){

    const [values, setValues] = useState({
        UserType: "",
        Username: "",
        password: "",
        
      });
  
      const handleAddData = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value});
      } 

      const user = (e) => {
        e.preventDefault();
        let userData = {
            UserType: values.UserType,
            Username: values.Username,
            password: values.password,      
        }

        console.log(userData);
           
   axios.post("http://localhost:30036/user", userData )
      .then(() => {
        alert("User Data  Inserted successfully");
      })
      
      .catch((error) => {
        console.log(error);
      })

    }

    return(
       <div >
           
           
           <div>
 
 <form className="form">
     <label>User Type(Seller/Customer)</label>
    
        <input
            // class="form-field-inv"
          type="text"
          placeholder="type"
          name="type"
          onChange={handleAddData}
          value={values.UserType}
  />

  <label>User Name</label>
       <input
          // class="form-field-inv"
           type="text"
           placeholder="name"
           name="name"
           onChange={handleAddData}
           value={values.username}
  />

    <label>password</label>
        <input
        // class="form-field-inv"
        type="text"
        placeholder="password"
       name="password"
       onChange={handleAddData}
       value={values.password}
  />
        
        
       <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
             Clear
        </button>
      <button class="form-field submit-inv" onClick={user}  type="submit">
             Login
      </button>

   </form>

  </div>





       </div>
    )
}

export default user;