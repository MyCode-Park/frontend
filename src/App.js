import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './Screens/LandingPage/LandingPage';
import MyNotes from './Screens/MyNotes/MyNotes';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} ></Route>
          <Route path="/login" element={<LoginScreen />} ></Route>
          <Route path="/register" element={<RegisterScreen />} ></Route>
          <Route path="/mynotes" element={<MyNotes />} ></Route>
        </Routes>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
