import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';

function App() {

  useEffect(() => {
    fetch('./courseData.JSON')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
