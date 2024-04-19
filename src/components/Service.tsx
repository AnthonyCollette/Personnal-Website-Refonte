

type Props = {
    icon: string,
    title: string,
    list?: {
        text: string
    }[],
    desc?: string
}

const Service = ({ icon, title, list, desc }: Props) => {

    return (
        <div className="service">
            {icon && <img src={icon} alt="icone" />}
            {title && <h3>{title}</h3>}
            {desc && <p>{desc}</p>}
            {list && list.map((item, index) => { return <li key={index}>{item.text}</li> })}
        </div>
    );
};

export default Service;