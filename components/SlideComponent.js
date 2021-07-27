import { Carousel, Image } from 'react-bootstrap'

function SlideComponent() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src="../images/slide1.jpg" className="img-fluid w-100" style={{ objectFit: 'cover', objectPosition: 'center', height: '500px' }}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="../images/pelantikan.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="../images/gunung_kerbau.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Gunung Kerbau</h3>
                    <p>Menikmati Safari Kala Senja</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default SlideComponent