// import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Banner />
        <Header />
      </div>
      <Nav />
    </>
  );
}

export default App;
