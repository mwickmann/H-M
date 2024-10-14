import { Carousel } from 'react-responsive-carousel';
import '/src/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel() {
return (
    <Carousel autoPlay={true}nterval={3000} transitionTime={500} showThumbs={false} showStatus={false} infiniteLoop={true} stopOnHover={false} swipeable={true} emulateTouch={true} >
    <div>
      <img src={`http://localhost:5187/images/frontPage/ticketssale.png`}
       alt="Special Event 2024" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage1.png`}
       alt="Picture-Mercedes-Car" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/l.png`}
      alt="Picture-Lewis Hamilton" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage8.png`}
      alt="Picture-McLaren" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage7.png`}
      alt="Picture-Max-Verstappen" />
    </div>



  </Carousel>
);
}

export default ImageCarousel;