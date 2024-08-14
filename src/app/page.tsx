import NoSSR from "./components/NoSSR";
import Navigation from "./components/Navigation";
import dynamic from "next/dynamic";


const MouseFollower = dynamic(()=> import('./components/MouseFollower'))
const Header = dynamic(()=> import('./pages/Header'),{ loading : ()=> <p> Loading ...</p>})
const AboutMe = dynamic(()=> import('./pages/AboutMe'))
const WorkExperience = dynamic(()=> import('./pages/WorkExperience'))
const Education = dynamic(()=> import('./pages/Education'))
const Contact = dynamic(()=> import('./pages/Contact'))
const Skills = dynamic(()=> import('./pages/Skills'))
const Languages = dynamic(()=> import('./pages/Languages'))
const Resume = dynamic(()=> import('./pages/Resume'))
const Projects = dynamic(()=> import('./pages/Projects'))
const Photography = dynamic(()=> import ('./pages/Photography'))
const Certifications = dynamic(()=> import('./pages/Certifications'))

export default function Home() {
  return (
       <div className="place-content-center place-items-center bg-white dark:bg-black dark:text-white">
       <MouseFollower />
       
       <Header />
      <AboutMe />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-12">
        <WorkExperience />
        <Education />
        </div> 
        <Projects />
        <Certifications />
        <Skills />
        <Languages />
         <Resume /> 
        <Photography />
        <Contact />

    


      <NoSSR>
          <Navigation />
        </NoSSR>
      </div>
    
  );
}
