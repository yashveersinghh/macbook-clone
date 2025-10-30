import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Showcase from './components/Showcase';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Performance from './components/Performance';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Highlights />
      <Footer />
    </main>
  )
}

export default App