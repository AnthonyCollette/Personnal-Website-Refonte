import emailjs from '@emailjs/browser';
import { FormEvent, useRef, useState } from 'react';

const Form = () => {
    const form = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const consentRef = useRef<HTMLInputElement>(null)
    const serviceId: string = (process.env.REACT_APP_SERVICE_ID as string)
    const templateId: string = (process.env.REACT_APP_TEMPLATE_ID as string)
    const publicKey: string = (process.env.REACT_APP_PUBLIC_KEY as string)
    const [emailSent, setEmailSent] = useState(false)
    const [success, setSuccess] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [consentError, setConsentError] = useState(false)
    const validateEmail = (email: String) => {
        return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    }

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setNameError(false)
        setEmailError(false)
        setMessageError(false)
        setConsentError(false)

        if (form.current !== null) {

            let formIsValid = true

            if ((typeof nameRef?.current?.value === 'string' && nameRef?.current?.value?.length < 3) || typeof nameRef?.current?.value !== 'string') {
                setNameError(true)
                formIsValid = false
            }

            if ((typeof emailRef?.current?.value === 'string' && !validateEmail(emailRef?.current?.value)) || typeof nameRef?.current?.value !== 'string') {
                setEmailError(true)
                formIsValid = false
            }

            if ((typeof messageRef?.current?.value === 'string' && messageRef?.current?.value?.length < 3) || typeof messageRef?.current?.value !== 'string') {
                setMessageError(true)
                formIsValid = false
            }

            if ((!consentRef?.current?.checked)) {
                setConsentError(true)
                formIsValid = false
            }
            if (formIsValid) {
                emailjs
                    .sendForm(serviceId, templateId, form.current, {
                        publicKey: publicKey,
                    })
                .then(
                    () => {
                        form?.current?.reset();
                        setEmailSent(true)
                        setSuccess(true)
                    },
                    (error) => {
                        setEmailSent(true)
                        setSuccess(false)
                    },
                );
            }
        }
    };
    return (<>
        {!emailSent && <form ref={form} onSubmit={sendEmail}>
            <div className={nameError ? 'form-group error' : 'form-group'}>
                <label htmlFor="name">Nom</label>
                <input type='text' ref={nameRef} name='user_name' placeholder='Votre nom' />
                {nameError && <p>Merci de renseigner votre nom</p>}
            </div>
            <div className={emailError ? 'form-group error' : 'form-group'}>
                <label htmlFor="name">Adresse mail</label>
                <input type='email' ref={emailRef} name='user_email' placeholder='monadressemail@gmail.com' />
                {emailError && <p>Merci de renseigner une adresse mail au bon format</p>}
            </div>
            <div className={messageError ? 'form-group error' : 'form-group'}>
                <label htmlFor="message">
                    Message
                </label>
                <textarea name='message' ref={messageRef} placeholder="Une question ? Un projet ?" />
                {messageError && <p>Merci de remplir votre message</p>}
            </div>
            <div className={consentError ? 'form-group error' : 'form-group'}>
                <input type="checkbox" name='checkbox' id="consent-checkbox" ref={consentRef}/> 
                <label htmlFor="consent-checkbox">En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à Anthony Collette dans le but d'être recontacté concernant la demande effectuée.</label>
                {consentError && <p>Merci de cocher la case ci-dessus.</p>}
            </div>
            <button className="btn btn--primary-outline">Envoyer</button>
        </form>}
        {emailSent && success && <div className='success'><h3>Votre message a bien été envoyé ! Je vous répondrai dès que possible.</h3></div>}
        {emailSent && !success && <div className='fail'><h3>Oups, il y a eu un problème ! Veuillez réessayer.</h3></div>}
    </>
    );
};

export default Form;