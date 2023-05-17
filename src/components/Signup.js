import {React,useState} from 'react'
import {auth} from "../Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Signup = () => {
    
    const [email,setEmail] =useState('')
    const [password,setpassword]= useState('')

    //signup//

    const signup= (e)=>{
     e.preventDefault();
     createUserWithEmailAndPassword(auth,email,password)
     .then((useCredential)=>{
         console.log(useCredential)
         alert("Signup SuccessFul")
     }).catch((err)=>{
        console.log(err)
        alert("please enter the email id and password")
     })
    }
  return (
    <div className='container'> 
      <form>
        <h1>Create An Account</h1>
      <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <input type="password" placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={signup}>Signup</button>
      </form>

    </div>
  )
}

export default Signup
