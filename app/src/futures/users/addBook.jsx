import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "./users.api"
import { useNavigate } from "react-router-dom"

export const AddBook = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name:"",
        salary:50000
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addUser(user))
        .unwrap()
        .then(() => {
            navigate("/")
        })
    }
    
    
   


    return <>

     <h3>AddBook</h3>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter name"
        value = {user.name} onChange={e => setUser({...user, name:e.target.value})} />
        <input type="number" placeholder="enter salary"
        value={user.salary} onChange={e => setUser({...user, salary:e.target.value})} />
        <button>add</button>



     </form>
    </>
}