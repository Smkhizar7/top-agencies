import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './confiq/Router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
