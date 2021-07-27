import { Carousel, Image } from 'react-bootstrap'

function SlideInfoComponent() {
    const dataSlide = [1, 2, 3, 4, 5, 6, 7]
    return (
        <Carousel>
            {
                dataSlide.map((item, index) =>
                    <Carousel.Item key={index}>
                        <Image
                            className="d-block w-100 img-fluid"
                            src={`../images/office/${item}.jpg`}
                            style={{ objectFit: 'cover', objectPosition: 'top', width: '500px', height: '400px' }}
                            alt={index}
                        />
                    </Carousel.Item>
                )
            }
        </Carousel>
    )
}

export default SlideInfoComponent