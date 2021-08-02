import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Header from './Pages/Header';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useEffect } from 'react'


function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log("The user is the authorize user >>>>", authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
