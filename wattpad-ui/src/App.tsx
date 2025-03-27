
import './index.css';
import NavBar from './Components/NavBar/NavBar';
import TopBody from './Components/BodyComponents/TopBody';
import MidBody from './Components/BodyComponents/MidBody';
import Footer from './Components/Footer/Footer';
import CenterBody from './Components/BodyComponents/CenterBody';
import BottomBody from './Components/BodyComponents/BottomBody';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <TopBody/>
      <MidBody/>
      <CenterBody/>
      <BottomBody/>
      <Footer/>
    </div>
  );
}

export default App;
