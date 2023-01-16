import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel2.scss"

function Carrusel2() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.fayerwayer.com/resizer/L1AgX59JPtT49_5iqdcIsAqkjuU=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VBRF4I3YM5G63AU637TTONVARE.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://www.fayerwayer.com/resizer/L1AgX59JPtT49_5iqdcIsAqkjuU=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VBRF4I3YM5G63AU637TTONVARE.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.fayerwayer.com/resizer/L1AgX59JPtT49_5iqdcIsAqkjuU=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VBRF4I3YM5G63AU637TTONVARE.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel2;