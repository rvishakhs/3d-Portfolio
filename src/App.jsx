import { BrowserRouter } from "react-router-dom";

import {Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact} from "./components";


const App = () => {

  return (

  <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        {/* Navbar section */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
        {/* Main Sections */}
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
        {/* Contact Form   */}
          <div className="relative z-0">
            <Contact />
          </div>
      </div>
  </BrowserRouter>
  )
}

export default App
