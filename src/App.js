import { BrowserRouter as Router } from 'react-router-dom';

import NavigationRoutes from './routes/NavigationRoutes';

import './App.css';

function App() {
  return (
    <Router>
      <NavigationRoutes />
    </Router>
  );
}

export default App;