import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Homepage from "./assets/components/pages/Homepage";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */} 
      <Homepage />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
