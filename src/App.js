import logo from './logo.svg';
import './App.css';

import Address from './component/profile/Address';
import Fullname from './component/profile/Fullname';
import ProfilePhoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
    <Fullname/>
    <ProfilePhoto/>
    <Address/>

    </div>
  );
}

export default App;
