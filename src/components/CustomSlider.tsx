import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {
    images: Array<{
        src: string,
        alt: string
    }>,
}

const CustomSlider = ({ images }: Props) => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    }

    return (
        <Slider {...settings}>
            {images && images.map((image) => {
                return <div key={image.alt}><img src={image.src} alt={image.alt} /></div>
            })}
        </Slider>
    );
};

export default CustomSlider;