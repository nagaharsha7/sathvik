import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/Layout';

// Pages
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { DestinationDetails } from './pages/DestinationDetails';
import { BudgetPlanner } from './pages/BudgetPlanner';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { AiPlanner } from './pages/AiPlanner';
import { PlaceholderPage } from './pages/PlaceholderPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="explore/:id" element={<DestinationDetails />} />
              <Route path="budget" element={<BudgetPlanner />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="ai-planner" element={<AiPlanner />} />
              
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              
              {/* Placeholders for other pages */}
              <Route path="hotels" element={<PlaceholderPage title="Hotels & Stays" />} />
              <Route path="activities" element={<PlaceholderPage title="Activities & Tours" />} />
              <Route path="about" element={<PlaceholderPage title="About TravelSync" />} />
              <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
              
              {/* Fallback */}
              <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
