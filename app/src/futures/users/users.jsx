import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api"
import { NavLink, Outlet } from "react-router-dom"

export const Users = () => {

    const users = useSelector(state => state.accounts)
    const status = useSelector(state => state.status)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())

    }, [])
    
    return <>
     <nav>
        <NavLink to = "/add">Add Book</NavLink>
        
      </nav>
      
    <table className="salary-table">
        <thead>
            <tr>
                <th>name</th>
                <th>salary</th>
            </tr>
            </thead>
        <tbody>
            {
                users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.salary}</td>
                </tr>)
            }
        </tbody>
    </table>
    <Outlet
          />
    
   
    </>

}