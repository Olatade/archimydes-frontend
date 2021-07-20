import logo from './logo.svg';
import './styles/nav.css';
import UserTable from './components/UserTable';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#f0f0f0'
  },
};

function App() {
  return (
    <div className="App">

      <div className="nav">
        <p className="nav__brand-name" >Archimydes Challenge</p>
      </div>

      <div className="body pt-12">
        <UserTable/>
      </div>
      <Modal isOpen={true} style={customStyles}>
        <div>
          the form goes here
        </div>
      </Modal>
    </div>
  );
}

export default App;
