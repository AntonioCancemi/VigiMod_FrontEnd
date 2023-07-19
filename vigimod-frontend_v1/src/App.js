import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider, useAuth } from "./auth/AuthProvider";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SellerPage from "./pages/SellerPage";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import NotFound from "./pages/NotFound";
import AdPage from "./pages/AdPage";
import SearchPage from "./pages/SearchPage";
import { useContext } from "react";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";

function App() {
  const { authData } = useContext(AuthContext);
  console.log(authData ? authData : "noauth");
  return (
    <Container fluid className="main-box p-0 ">
      <Row className="mx-0">
        <Router>
          <Sidebar />
          {authData ? (
            <Routes>
              <Route path="/search/:id" element={<SearchPage />} />
              <Route path="/seller/:sellerId" element={<SellerPage />} />
              <Route path="/ad" element={<AdPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          )}
        </Router>
      </Row>
    </Container>
  );
}

export default App;
