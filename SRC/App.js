import foto from './foto.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-foto" alt="Foto de perfil" />
        <p>
          Yasmin Meirelles 
        </p>
        <a className="App-link" href="https://github.com/Eduardo-GAlves" target="_blank" rel="noopener noreferrer">
          Visite meu Github
        </a>
      </header>
    </div>
  );
}
export default App;
