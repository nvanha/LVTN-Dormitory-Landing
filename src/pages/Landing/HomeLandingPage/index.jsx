import {
  About, Contact, Details, Header, Home, Summarize,
} from './section';

const HomeLandingPage = () => (
  <div className="home-landing-page--wrapper">
    <Header />
    <Home />
    <Summarize />
    <Details />
    <About />
    <Contact />
  </div>
);

export default HomeLandingPage;
