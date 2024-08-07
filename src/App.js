import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MainDashboard from './components/MainDashBoard/MainDashboard';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Header className="header"/>
        <SideBar className="sidebar"/>
        <MainDashboard className="main"/>
      </div>
    </div>
  );
}

export default App;
