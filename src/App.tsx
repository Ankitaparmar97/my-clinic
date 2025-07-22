// import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import { useTheme } from '@mui/material/styles';

function App() {
  const theam = useTheme();
  const phoneNumber = '919426549472';
  const message = 'Hello!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img
          src="whatsapp.png"
          style={{
            position: 'fixed',
            bottom: '100px',
            left: '40px',
            fontSize: '50px',
            // padding: '10px 20px',
            // backgroundColor: 'red',
            color: theam.palette.primary.light,
            // border: 'none',
            // borderRadius: '5px',
            zIndex: 1000,
          }}
        ></img>
      </a>
      <a href={`tel:${phoneNumber}`}>
        <img
          src="telephone.png"
          style={{
            position: 'fixed',
            bottom: '40px',
            left: '40px',
            fontSize: '50px',
            // padding: '10px 20px',
            // backgroundColor: 'red',
            color: theam.palette.primary.light,
            // border: 'none',
            // borderRadius: '5px',
            zIndex: 1000,
          }}
        ></img>
      </a>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <Banner />
        <Header />
      </div>
      <Nav />
    </>
  );
}

export default App;
