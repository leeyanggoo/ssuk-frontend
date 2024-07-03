import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeProvider from './styles/ThemeProvider';

import Layout from './components/Layout';

// pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              element={<Dashboard />}
              index
            />
            <Route
              element={<Login />}
              path='/login'
            />
            <Route
              element={<Signup />}
              path='/signup'
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
