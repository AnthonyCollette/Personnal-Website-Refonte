import Container from "./Container";
import Form from "./Form";
import Triangle from "./Triangle";

const Contact = () => {
    return (
        <div className="contact">
            <Triangle />
            <Container>
                <h2>Me contacter</h2>
                <p>Besoin d'un coup de pouce pour votre projet ? En tant que graphiste et développeur freelance, je suis là pour vous aider à concrétiser vos idées. Utilisez le formulaire ci-dessous pour me faire signe, et je vous répondrai au plus vite.</p>
                <Form />
            </Container>
        </div>
    );
};

export default Contact;