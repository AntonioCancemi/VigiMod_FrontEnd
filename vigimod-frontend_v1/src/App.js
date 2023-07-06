import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import SellerPage from "./pages/SellerPage";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import NotFound from "./pages/NotFound";
import Ad from "./components/Ad";
import AdList from "./components/AdList";
import AdPage from "./pages/AdPage";

function App() {
  return (
    <AuthProvider>
      <Container fluid>
        <Row>
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/*" element={<NotFound />} />
              <Route path="/seller/:sellerId" element={<SellerPage />} />
              <Route path="/ad/:adId" element={<AdPage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Router>
        </Row>
      </Container>
    </AuthProvider>
  );
}

export default App;
