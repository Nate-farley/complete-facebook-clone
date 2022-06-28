
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar.js';
import Feed from './Feed';


function App() {
  return (
    <div className="app">
      
  

    <Header /> 

    <div className="app__body">
      <Sidebar />
      <Feed />
     {/* app body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
      

    </div>
  );
}

export default App;
