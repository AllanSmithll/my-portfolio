import Sidebar from "./components/Sidebar.jsx";
import MainContext from "./components/MainContent.jsx";

import "./styles/components/app.sass"
import AboutContainer from "./components/AboutContainer";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <div id='portfolio'>
      <h1>Allan Amâncio</h1>
      <Sidebar />
      <MainContent />
    </div>
)}

export default App
