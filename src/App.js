import logo from './logo.svg';
import './styles/nav.css';
import UserTable from './components/UserTable'

function App() {
  return (
    <div className="App">

      <div className="nav">
        <p className="nav__brand-name" >Archimydes Challenge</p>
      </div>

      <div className="body pt-12">
        <UserTable/>
      </div>
    </div>
  );
}

export default App;
