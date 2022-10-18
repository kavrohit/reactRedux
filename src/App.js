import React from 'react'
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ArrayContainer from './components/ArrayContainer';
// import CackeContainer from './components/CackeContainer'
// import Container from './components/Container';

// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';
// import UserContainer from './components/UserContainer';
// import NumStore from './Redux/NumStore';

function App() {
  return (
    <>
    <Provider store={store}>
    <div className='App'>
      <ArrayContainer/>
    </div>
    </Provider>
    </>
  );
}
export default App;