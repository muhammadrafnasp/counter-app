import './App.css';
import Counter from './components/Counter';

function App() {

  return (
    <div className='App'>
    <header className="App-header">
<nav class="navbar navbar-light bg-primary">
  <a class="navbar-brand" href="#">
    Counter App
  </a>
</nav>
            <Counter/>
      </header>
      </div>
  );
}

export default App;
