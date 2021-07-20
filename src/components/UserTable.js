import {FiChevronDown, FiPlus} from 'react-icons/fi';
import {BiTrashAlt} from 'react-icons/bi';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import {open} from '../redux/modals';

const UserTable = () =>{
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.users);
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
                <tr key={i} className="border-b cursor-pointer transition-all duration-300 hover:bg-gray-50 ">
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.name}</td>
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.email}</td>
                  <td className="p-3 px-5 text-xs md:text-sm font-bold">{user.role}</td>
                  <td className="p-3 px-5 flex items-center justify-start">
                    <button className="mt-1"><BiTrashAlt/></button>
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