import './App.css';
import Elastic from './components/Elastic';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Practice from './components/Practice';
import Prepare from './components/Prepare';
import Ready from './components/Ready';
import Respons from './components/Respons';
import Responsive from './components/ResponsiveSlider';
import Sliderp from './components/Sliderp';
import Subjects from './components/Subjects';

function App() {
  return (
    <div>
        <Navbar />
        <Notes />
        <Subjects />
        <Prepare />
        <Ready />
        {/* <Sliderp /> */}
        <Footer />
        {/* <Practice /> */}
        {/* <Elastic /> */}
        {/* <Responsive /> */}
        {/* <Respons /> */}
        
    </div>
  );
}

export default App;
