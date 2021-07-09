import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App({ children }) {
  return (
    <Router>
      { children }
    </Router>
  );
}
