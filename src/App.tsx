import './App.css';
import Header2 from './components/Header2';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Header />
        <Header2 />
      </div>
      <Nav />
    </>
  );
}

export default App;
