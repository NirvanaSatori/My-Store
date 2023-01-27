import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/cart'>
          <Cart/>
        </Route>
      </div>
    </BrowserRouter>
   
      )
}

export default App;
