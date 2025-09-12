import AboutUs from './AboutUs';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Carouselicon from './CarouselIcon';

function HomePage() {
  return (
    <div>
      <Carouselicon />
      <div>
        <AboutUs />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <ContactUs />
      </div>
    </div>
  );
}

export default HomePage;
