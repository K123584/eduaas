import Sidebar from './components/Sidebar';
import './App.css';
import SidebarRoute from './components/SidebarRoute';

function App() {
  return (
    <div className="App">
      <div className="SidebarDisplay">
        {/* <HeaderBar /> */}
        <SidebarRoute />
      </div>
    </div>
  );
}

export default App;
