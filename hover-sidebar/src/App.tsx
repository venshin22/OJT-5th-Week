
import './App.css';
import Footer from './Components/Footer';
import Sidebar from './Components/SideBar';
import Body1 from './Elements/Body/Body1';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Sidebar/>
      <Body1/>
      <Footer/>
    </div>
  );
}

export default App;
