import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetcher } from "../users/usersSlice";

const FetchedUsers = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetcher())
    },[dispatch])
const {users,isLoading,error} = useSelector((store) =>store.users)
console.log(users);
if(isLoading){
   return <div>Loading...</div>
} 
if(error){
    return <div>An error occured...XXX...</div>
} 

if(users.results){return (
    <div>
        <ul>
        {users.results.map((user)=>{ 
            return <li key={Math.random()}>{user.name.first} aka {user.name.last}</li>

            })}

        </ul>
            
    </div>
  )}
}

export default FetchedUsers ;