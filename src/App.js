
import './App.css';
import AddDetails from './Components/AddDetails';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Components/store/rootReducer';

function App() {
  const store=createStore(rootReducer);
  return (
    <Provider store={store}>
     <AddDetails/>
    </Provider>
  );
}

export default App;
