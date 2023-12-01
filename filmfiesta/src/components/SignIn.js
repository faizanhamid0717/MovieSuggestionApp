import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginSuccess,setLoginSuccess]=useState(false)

  const [signUpData,setSignUpData]=useState({
     name:"",
     email:"",
     password:"",
     gender:""
  })

  const [signInData,setSignInData]=useState({
    name:"",
    password:""
  })
  const navigate=useNavigate()
  

  const handelChange=(e)=>{
      const {name,value} = e.target
      setSignUpData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      setSignInData((prevData)=>({
        ...prevData,
        [name]:value
      }))
      // console.log("signUp data",signUpData)
  }

  const handelSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("signUpUser",JSON.stringify(signUpData))
    console.log("signUpData",signUpData)
    alert("SignUp Successfully")
  };

  const handleSignIn=(e)=>{
   e.preventDefault()
   const storedData=JSON.parse(localStorage.getItem("signUpUser"))

   if(storedData && storedData.email === signInData.email && storedData.password === signInData.password){
         setLoginSuccess(true)
        alert("SignIn Successful")
        return
        
   }else{
    alert("Login Failed invalid email or password")
   }
  }

  useEffect(()=>{
    if(loginSuccess){
      navigate("/movies")
    }
  },[loginSuccess,navigate])

  const handleToggle = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="sign-in-container">
      <div className="background-image">
        <div className="top-row">
          <Link className="logo" to={`/`}> <div >FilmFiesta</div></Link>
        </div>

        <div className="center-content">
          <div className="transparent-div">
            {isSignUp ? (
              <form onSubmit={handelSignUp}> 
                <h1 >SignUp</h1>
                <label>Name:</label>
                <input type="text" name="name" value={signUpData.name} onChange={handelChange}/>

                <label>Email:</label>
                <input type="email" name="email" value={signUpData.email} onChange={handelChange}/>

                <label>Password:</label>
                <input type="password" name="password" value={signUpData.password} onChange={handelChange} />

                <label>Gender:</label>
                <select name="gender" value={signUpData.gender} onChange={handelChange}>
                  <option value="">select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <button type="submit">Sign Up</button>

                <p>Already have an account?  <Link to="" onClick={handleToggle}>
                    Sign In
                  </Link></p>
              </form>
            ) : (
              <form onSubmit={handleSignIn}>
                <h1 >SignIn</h1>
                <label>Email:</label>
                <input type="email" name="email" value={signInData.email} onChange={handelChange}/>

                <label>Password:</label>
                <input type="password" name="password" value={signInData.password} onChange={handelChange} />

                <button type="submit">Sign In</button>

                <p>Don't have an account?  <Link to="" onClick={handleToggle}>
                    Sign Up
                  </Link></p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
