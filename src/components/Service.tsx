import designIcon from '../assets/images/design-icon.svg';
import devIcon from '../assets/images/dev-icon.svg';

type Props = {
    icon: String,
    title: String,
    list: {
        text: String
    }[]
}

const Service = ({ icon, title, list }: Props) => {

    const displayIcon = () => {
        switch (icon) {
            case 'design':
                return <img src={designIcon} alt="Icone de design graphique" />
            case 'dev':
                return <img src={devIcon} alt="Icone de développement web" />
        }
    }

    return (
        <div className="service">
            {displayIcon()}
            {title && <h3>{title}</h3>}
            {list && list.map((item, index) => { return <li key={index}>{item.text}</li> })}
        </div>
    );
};

export default Service;