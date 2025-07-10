import LandingPage from "./pages/LandingPage";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import ArticlesPage from "./pages/ArticlesPage";
import SignUp from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route path="/articles" element={ <ArticlesPage/> } />
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/login" element={ <LogInPage/> } />
          <Route path="/terms" element={ <TermsAndConditionsPage/> } />
          <Route path="/privacy" element={ <PrivacyPolicyPage/> } />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={ <NotFoundPage/> } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
