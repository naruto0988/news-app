import './App.css';
import HomePage from './HomePage'
// import Login from './components/login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        {!isAuthenticated && <div><h1> News Login</h1><button onClick={() => { loginWithRedirect() }}>Login</button></div>}
        {isAuthenticated && <HomePage />}
      </div>

    </>
  );
}

export default App;
