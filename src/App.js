import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar,Catergory,Slider } from './components';
import { Login,SignUp } from './containers';
import AppRouter from './confiq/Router';

function App() {
  return (
    <>
    {/* <NavBar/> */}
    {/* <Catergory/> */}
    <AppRouter/>
    {/* <Login/> */}
    {/* <Slider/> */}
    {/* <SignUp/> */}
                
    </>
  );
}

export default App;
