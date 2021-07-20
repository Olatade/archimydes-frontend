import './styles/nav.css';
import UserTable from './components/UserTable';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


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
