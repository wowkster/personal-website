import './App.css';
import Background from './Background';
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Background/>
      <Jumbotron/>
    </div>
  );
}

export default App;
