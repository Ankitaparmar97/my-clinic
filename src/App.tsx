// import './App.css';
import Header2 from './components/Header';
import Header from './components/Banner';
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
