import OnlinePlayerDisplay from './components/OnlinePlayerDisplay';
import OnlinePlayersDetail from './components/OnlinePlayersDetail';
import './assets/css/common.css';

function App() {
  return (
    <div className="container">
      <OnlinePlayerDisplay />
      <OnlinePlayersDetail />
    </div>
  );
}

export default App;
