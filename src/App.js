import './App.css';
import { Fragment, useState, useEffect  } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home'

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    if(JSON.parse(localStorage.getItem('isLoggeduser')) !== null) {
      return JSON.parse(localStorage.getItem('isLoggedUser')).isLogged
    } else {
      return false;
    }
  })

  console.log(loggedIn)

  useEffect(() => {
    const storedLoggedUserData = JSON.parse(localStorage.getItem
      ('isLoggedUser'))
      if(storedLoggedUserData !== null){
        if(storedLoggedUserData.isLogged === true){
          setLoggedIn(true)
        }
      }
  },[])

  const loginHandler = (user, password) => {
    const loggedUser = localStorage.setItem('isLoggedUser', JSON.stringify({
      username: user,
      isLogged: true
    }))
    setLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedUser')
    setLoggedIn()
  }


  return (
    <Fragment>
      <MainHeader isAuthenticated={loggedIn}/>
      <main>
        {!loggedIn && <Login onLogin={loginHandler}/>}
        {loggedIn && <Home/>}
      </main>
    </Fragment>
  );
}

export default App;
