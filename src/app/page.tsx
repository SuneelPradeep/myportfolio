import Image from "next/image";
import Header from "./pages/Header";
import Ingredients from "./components/Ingredients";
import NoSSR from "./components/NoSSR";
import Navigation from "./components/Navigation";
import MouseFollower from "./components/MouseFollower";
import AboutMe from "./pages/AboutMe";
import WorkExperience from "./pages/WorkExperience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";

export default function Home() {
  return (
       <div className="place-content-center place-items-center bg-white dark:bg-black dark:text-white">
       <MouseFollower />
      <Header />
      <AboutMe />
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-12">
        <WorkExperience />
        <Education />
        </div> 
        <Skills />
        <Contact />

    


      <NoSSR>
          <Navigation />
        </NoSSR>
      </div>
    
  );
}
