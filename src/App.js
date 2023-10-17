import './App.css';
// import 'antd/dist/antd.css';
import AppHeader from './Component/AppHeader';
import SideMenu from './Component/SideMenu';
import PageContent from './Component/PageContent'
function App() {
  return (<div className="App">
    <AppHeader/>
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
      </div>
  </div>);
}

export default App;
