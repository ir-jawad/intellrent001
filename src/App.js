import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationRoutes from './routes/NavigationRoutes';
import MiniHeader from './components/MiniHeader';

function App() {
  return (
    <Router>
      <MiniHeader />
      <NavigationRoutes />
    </Router>
  );
}

export default App;