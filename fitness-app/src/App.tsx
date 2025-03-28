
import './App.css';
import FitnessBody from './Components/Body/FitnessBody';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="w-full h-full bg-[#0f1624]">
      <NavBar/>
      <FitnessBody/>
      <Footer/>
    </div>
  );
}

export default App;
