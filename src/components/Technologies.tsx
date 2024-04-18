import html from '../assets/images/logos/html.png'
import css from '../assets/images/logos/css3.png'
import js from '../assets/images/logos/javascript.png'
import sass from '../assets/images/logos/sass.png'
import react from '../assets/images/logos/react.png'
import vue from '../assets/images/logos/Vue.png'
import photoshop from '../assets/images/logos/photoshop.png'
import illustrator from '../assets/images/logos/illustrator.png'
import xd from '../assets/images/logos/xd.png'
import figma from '../assets/images/logos/figma.png'
import typescript from '../assets/images/logos/typescript.png'
import CustomSlider from './CustomSlider';
import Container from './Container'

const Technologies = () => {

    const images = [{
        src: html,
        alt: 'Logo de HTML5'
    }, {
        src: css,
        alt: 'Logo de CSS3'
    }, {
        src: sass,
        alt: 'Logo de SASS',
    }, {
        src: js,
        alt: 'Logo de JavaScript',
    }, {
        src: typescript,
        alt: 'Logo de Typescript',
    }, {
        src: react,
        alt: 'Logo de React',
    }, {
        src: vue,
        alt: 'Logo de VueJS',
    }, {
        src: photoshop,
        alt: 'Logo de Photoshop',
    }, {
        src: illustrator,
        alt: "Logo d'Illustrator",
    }, {
        src: xd,
        alt: "Logo de Xd",
    }, {
        src: figma,
        alt: "Logo de Figma",
    }]

    return (
        <div className="technologies">
            <Container>
                <CustomSlider images={images} />
            </Container>
        </div>
    );
};

export default Technologies;