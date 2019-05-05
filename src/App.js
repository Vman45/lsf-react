import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'App.css';

import Dictionary from 'components/Dictionary';
import Dashboard from 'components/Dashboard';

export default function App() {
  return (
    <Router>
      <Dashboard />
      <Route path="/dictionary" exact component={Dictionary} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Router>
  );
}
