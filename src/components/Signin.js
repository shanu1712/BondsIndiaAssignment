import {React,useState,useEffect} from 'react'
import {auth} from "../Firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    
    const navigate= useNavigate()
    const [email,setEmail] =useState('')
    const [password,setpassword]= useState('')


    const signin= (e)=>{
     e.preventDefault();
     signInWithEmailAndPassword(auth,email,password)
     .then((useCredential)=>{
        // console.log(useCredential)
        //alert(`Signin Successful ${email}`)
        navigate("/products")
     }).catch((err)=>{
        console.log(err)
        alert("Account doesnot exist ,Please create an Account")
     })
    }


    
  return (
    <div className='container'> 
      <form>
        <h1>Login</h1>

      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
    
      <button onClick={signin}>Signin</button>
      </form>

    </div>
  )
}

export default Signin
