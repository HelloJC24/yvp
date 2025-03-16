import { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import StartConversation from "./components/StartConversation";

const HomeScreen = lazy(() => import("./screens/home"));
const AboutUsScreen = lazy(() => import("./screens/about"));
const ContactUsScreen = lazy(() => import("./screens/contact"));
const ComingSoonScreen = lazy(() => import("./screens/coming_soon"));
const ArticlesScreen = lazy(() => import("./screens/articles"));
const GivingsScreen = lazy(() => import("./screens/givings"));
const CareersScreen = lazy(() => import("./screens/careers"));
const BlogScreen = lazy(() => import("./screens/blogs"));
const MentoringScreen = lazy(() => import("./screens/mentoring"));
const UpcomingEventsScreen = lazy(() => import("./screens/upcoming_events"));
const BusinessScreen = lazy(() => import("./screens/business"));
const AvailablePosition = lazy(() => import("./screens/available_position"));
const TestimonialsScreen = lazy(() => import("./screens/testimonials"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
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
          <Route path="/available-position" element={<AvailablePosition />} />
          <Route path="/testimonials" element={<TestimonialsScreen />} />
        </Routes>
      </Suspense>

      <StartConversation />

      <Footer />
    </Router>
  );
}

export default App;
