import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="font-text">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
