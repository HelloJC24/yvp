import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsScreen from "./screens/about";
import ContactUsScreen from "./screens/contact";
import HomeScreen from "./screens/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUsScreen />} />
        <Route path="/contact-us" element={<ContactUsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
