import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel2.scss"

function Carrusel2() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://kilometrosquecuentan.goodyear.eu/wp-content/uploads/2017/06/madrid-mirador-gran-via.jpg"
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
          src="https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2019/11/08103504/vistas-desde-cerro-tio-pio.jpg"
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
          src="https://media.istockphoto.com/id/453100565/es/foto/vista-a%C3%A9rea-de-gran-v%C3%ADa-madrid-espa%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=AeAXbsCOD8QI3E1fOCQQxpt9ivW8sWbvaAun2NFE9fU="
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