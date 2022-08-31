import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <nav className="App-navbar">
            <ul>
                <li><a href="pages/news.html">NEWS</a></li>
                <li><a href="pages/tour.html">TOUR</a></li>
                <li><a href="pages/merch.html">MERCH</a></li>
                <li><a href="pages/music.html">MUSIC</a></li>            
            </ul>
        </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
