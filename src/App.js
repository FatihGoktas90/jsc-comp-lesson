import logo from './logo.svg';  
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';


function App() {
  const age = 30;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <p>Age:{age}</p>
        <ClassComp old={age} car="BMW"/>
        <FuncComp old={age+age} color="yellow"/>
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
