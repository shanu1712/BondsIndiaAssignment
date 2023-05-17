import {React,useEffect,useState} from 'react'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
const Signout = () => {
    const [authUser,setauthUser] =useState(null)

    const navigate =useNavigate()
    useEffect(()=>{
        const listen =onAuthStateChanged(auth,(user)=>{
            if(user){
                setauthUser(user)
            }else{
                setauthUser(null)
            }
            
        })
        return ()=>{
            listen()
        }
        
    },[])

    //signout//

    const usersignout=()=>{
        signOut(auth).then(()=>{
            console.log("signout successful")
            
            alert(`signed Out ${authUser.email}`)
            navigate("/")
        }).catch(error=>{
            console.log(error)
            alert("You are signed out ,Please signin again")
            navigate("/")
        })
    }
  return (
    
    <div>
      <button onClick={usersignout}>Signout</button>
    </div>
  )
}

export default Signout
