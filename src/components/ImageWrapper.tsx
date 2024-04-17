type Props = {
    children: React.ReactNode,
}

const ImageWrapper = ({ children }: Props) => {

    return (
        <div className='imageWrapper'>
            {children}
        </div>
    );
};

export default ImageWrapper;