import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { uselogout } from '../hooks/useLogout'
import { useDispatch, useSelector } from "react-redux";
export default function NavBar() {

// const [user,setUser]=useState(null)

let user=useSelector((state)=>{
    console.log('info is',state.user)
    return state.user
  })

useEffect(()=>{
    // setUser(JSON.parse(localStorage.getItem('user')) )
    console.log(user)
    user=JSON.parse(localStorage.getItem('user')) 
},[])

const {logout}=uselogout()

async function  handleLogout(){

    logout()
}

  return (
    <>
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>


{user.email && ( 
     <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">{user.email}</a>
            <Link to="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline" onClick={handleLogout}>Logout</Link>
            
        </div>)}
        {!user.email && 
        (  <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(111) NO user</a>
            <Link to="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
            <Link to="/signup" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Sign Up</Link>
        </div>)}
      

    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
              
                <li>
                    <Link to="/edit1" className="text-gray-900 dark:text-white hover:underline">ADD Data</Link>
                </li>

                <li>
                    <Link to="/mydata" className="text-gray-900 dark:text-white hover:underline">MY Data</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}
