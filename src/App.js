import logo from './logo.svg';
import './styles/nav.css';
import UserTable from './components/UserTable';
import Modal from 'react-modal';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {BiArrowBack} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';



function App() {
  return (
    <div className="App">

      <div className="nav">
        <p className="nav__brand-name" >Archimydes Challenge</p>
      </div>

      <div className="body pt-12">
        <UserTable/>
      </div>
      <CreateUser/>
      <UpdateUser/>
    </div>
  );
}

export default App;
