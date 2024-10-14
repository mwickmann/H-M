import { Carousel } from 'react-responsive-carousel';
import '/src/index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ImageCarousel() {
return (
    <Carousel>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage1.png`}
       alt="Picture-Car" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage2.png`}
       alt="Picture-RedBullCar" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage4.png`}
      alt="Picture-RedBullCar" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage7.png`}
      alt="Picture-RedBullCar" />
    </div>
    <div>
      <img src={`http://localhost:5187/images/frontPage/frontpage8.png`}
      alt="Picture-RedBullCar" />
    </div>


  </Carousel>
);
}

export default ImageCarousel;