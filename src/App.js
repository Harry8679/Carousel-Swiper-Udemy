import './App.css';
import EnhancedCarousel from './components/EnhancedCarousel';
// import CustomCarousel from './components/CustomCarousel';
// import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* <CustomCarousel /> */}
      {/* <ImageGallery /> */}
      <EnhancedCarousel />
    </div>
  );
}

export default App;
