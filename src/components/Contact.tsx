import Container from "./Container";
import Form from "./Form";
import Triangle from "./Triangle";

const Contact = () => {
    return (
        <div className="contact">
            <Triangle width={700} />
            <Container>
                <h2>Me contacter</h2>
                <Form />
            </Container>
        </div>
    );
};

export default Contact;