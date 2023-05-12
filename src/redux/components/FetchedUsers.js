import { useSelector } from "react-redux"
import usersSlice from "../users/usersSlice"
const FetchedUsers = () =>{
const {users,isLoading,error} = useSelector((store) =>store.users)
if(isLoading){
    <div>Loading...</div>
} 
if(error){
    <div>An error occured...XXX...</div>
} 

return (
    <div>
        <ul>
        {users.map((users)=>{ 
            return <li key={Math.random}>{users.firstname} aka {users.lastname}</li>

            })}

        </ul>
            
    </div>
  )
}

export default FetchedUsers ;