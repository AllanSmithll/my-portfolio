import AboutMe from "./components/AboutMe";
import HabilitiesContainer from './components/HabilitiesContainer';
import Sidebar from "./components/Sidebar.jsx";
import MainContext from "./components/MainContext";

import "./styles/components/app.sass"

function App() {
  return (
    <div id='portfolio'>
      <h1>Allan Amâncio</h1>
      <Sidebar />
      <MainContext />
      <AboutMe/>
      <HabilitiesContainer/>
    </div>
)}

export default App
