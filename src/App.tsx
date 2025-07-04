import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import SignUp from "./pages/SignUpPage";
import LogIn from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
