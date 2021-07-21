import {FiChevronDown, FiPlus} from 'react-icons/fi';
import {BiTrashAlt} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {open, setUpdateState} from '../redux/modals';
import { populateUsers } from '../redux/users';

async function getAllUsers(){
  try{
    const res = await fetch(`http://localhost:3003/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const users = await res.json();
    
    // return courses array if the response status is true
    // else throw an error
    if(users?.status === true){
      return users.data
    }else{
      return [];
    } 
  }catch(err){
    return [];
  }
}

const UserTable = () =>{
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users);

  function handleUserClick(user){
    dispatch(open('updateUser'));
    dispatch(setUpdateState(user));
  }

  // put the users in the table
  useEffect(() => {
    Promise.resolve(getAllUsers())
    .then( result =>{
      console.log(result)
      dispatch(populateUsers(result));
    })

  }, []);

  return(
    <div>
      <div className="px-4 py-2 md:py-4 flex items-center justify-between ">
        <h1 className="text-lg md:text-2xl font-semibold">Users</h1>
        <button className="flex items-center rounded text-white text-sm md:text-lg bg-green-400 hover:bg-green-300 py-2 px-4" onClick={() => dispatch(open('createUser'))}><span className="mt-1"><FiPlus/></span><span className="pl-1" >Create User</span> </button>
      </div>

      <div className="px-3 py-2 md:py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">

          <thead className="">
            <tr className="border-b">
                <th className="text-left p-3 px-5 text-xs md:text-sm font-normal">NAME</th>
                <th className="text-left p-3 px-5 text-xs md:text-sm font-normal"><p className="flex items-center"> <span className="pr-1">EMAIL</span> <FiChevronDown/></p></th>
                <th className="text-left p-3 px-5 text-xs md:text-sm font-normal"><p className="flex items-center"> <span className="pr-1">ROLE</span>  <FiChevronDown/></p></th>
                <th className="text-left p-3 px-5 text-xs md:text-sm font-normal">ACTIONS</th>
            </tr>
          </thead>

          <tbody>

            {
              users.map( (user, i) => (
                <tr onClick={() => handleUserClick(user)}  key={i} className="border-b cursor-pointer transition-all duration-300 hover:bg-gray-50 ">
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.name}</td>
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.email}</td>
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.role}</td>
                  <td className="p-1 px-5 flex items-center justify-start">
                    <button className="mt-1 p-2 rounded-full hover:bg-gray-200"><BiTrashAlt/></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;