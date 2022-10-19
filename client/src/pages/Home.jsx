import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Sponser from "../components/Sponser";
import EventList from "../components/EventList";
import CoordinatorList from "../components/CoordinatorList"
import About from "../pages/About"


function Home() {
  return (
    <div className="homepage background-pattern">
      <Hero />
      <Timeline />
      <Sponser />
      <EventList />
      <CoordinatorList />
      <About />
    </div>
  );
}

export default Home;
