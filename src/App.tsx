import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import Articles from "./pages/Articles";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
