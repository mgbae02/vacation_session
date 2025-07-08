import './App.css';
import { Login } from './pages/Signup/component/Login';
import { Signup } from './pages/Signup/component/Signup';
import { Main } from './pages/main/main';
import { Announcement } from './pages/announcement/announcement';

function App() {
  return (
    <div className="App">
      {/* <Signup />
      <Login /> */}

      {/* <Main /> */}
      <Announcement />
    </div>
  );
}

export default App;
