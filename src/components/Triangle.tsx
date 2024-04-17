import triangle from "../assets/images/triangle.svg"

type Props = {
    width: number,
}

const Triangle = ({ width }: Props) => {

    return (
        <img src={triangle} alt="Triangle décoratif" className="triangle" style={{width: width+'px'}} />
    );
};

export default Triangle;