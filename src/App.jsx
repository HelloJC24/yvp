import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AboutUsScreen from "./screens/about";
import ArticlesScreen from "./screens/articles";
import BlogScreen from "./screens/blogs";
import BusinessScreen from "./screens/business";
import CareersScreen from "./screens/careers";
import ComingSoonScreen from "./screens/coming_soon";
import ContactUsScreen from "./screens/contact";
import GivingsScreen from "./screens/givings";
import HomeScreen from "./screens/home";
import MentoringScreen from "./screens/mentoring";
import UpcomingEventsScreen from "./screens/upcoming_events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUsScreen />} />
        <Route path="/contact-us" element={<ContactUsScreen />} />
        <Route path="/coming-soon" element={<ComingSoonScreen />} />
        <Route path="/articles" element={<ArticlesScreen />} />
        <Route path="/givings" element={<GivingsScreen />} />
        <Route path="/careers" element={<CareersScreen />} />
        <Route path="/blogs" element={<BlogScreen />} />
        <Route path="/mentoring" element={<MentoringScreen />} />
        <Route path="/upcoming-event" element={<UpcomingEventsScreen />} />
        <Route path="/business" element={<BusinessScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
