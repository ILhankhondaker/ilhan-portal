import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../Images/sl1.JPG'
import slide2 from '../../Images/sl2.JPG'
import slide3 from '../../Images/sl3.JPG'
import './Slider.css'

function CarouselFadeExample() {
    return (
        <div className='mt-5'>
            <h1 className='text-center heading font-bold text-5xl m-2'>Word's From Our Partner </h1>
            <p className='text-center'>Successful partners and users are the torchbearer of our endless effort to offer the best possible service.</p>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mt-5"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mt-5"
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100  mt-5"
                        src={slide3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default CarouselFadeExample;