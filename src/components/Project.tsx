import EffetAnimal from '../assets/images/sites/effetanimal.png';
import IdealZen from '../assets/images/sites/idealzen.png';
import IsabelleUsclade from '../assets/images/sites/isabelleusclade.png';
import Avocajust from '../assets/images/sites/avocajust.png';
import Victoria from '../assets/images/sites/victoria.png';
import BibiLogo from '../assets/images/sites/bibi300.png';
import BibiBanner from '../assets/images/sites/bibi300banner.png';
import Isolabel from '../assets/images/sites/isolabel.png';
import ADAF from '../assets/images/sites/adaf.png';
import ADAF2 from '../assets/images/sites/adaf2.png';
import Lionheart from '../assets/images/sites/lionheart.png';
import Hozu from '../assets/images/sites/hozu.png';
import Monthlery from '../assets/images/sites/monthlery.png';
import Geneapro from '../assets/images/sites/geneapro.png';
import Opalien from '../assets/images/sites/opalien.png';
import Starsheep from '../assets/images/sites/starsheep.png';

type Props = {
    title?: string,
    desc?: string,
    url?: string,
    types?: Array<string>
}

const Project = ({ title, desc, url, types }: Props) => {

    const getImg = () => {
        switch (title) {
            case 'Effet Animal':
                return EffetAnimal
            case 'Ideal Zen':
                return IdealZen
            case 'Isabelle Usclade':
                return IsabelleUsclade
            case 'Avocajust':
                return Avocajust
            case 'Victoria Thibault':
                return Victoria
            case 'Bibi300 Logo':
                return BibiLogo
            case 'Bibi300 Bannière':
                return BibiBanner
            case 'Isolabel':
                return Isolabel
            case 'ADAF':
                return ADAF
            case 'Adaf':
                return ADAF2
            case 'Lionheart':
                return Lionheart
            case 'Hozu':
                return Hozu
            case 'Montlhery conduite':
                return Monthlery
            case 'Geneapro':
                return Geneapro
            case "Opal'lien":
                return Opalien
            case "Starsheep":
                return Starsheep
        }
    }

    const getClassName = () => {
        if (!types) {
            return "project"
        } else if (types?.length > 1) {
            return "project project--all-types"
        } else if (types?.includes('design')) {
            return "project project--design"
        } else if (types?.includes('dev')) {
            return "project project--dev"
        }
    }

    return (
        <div className={getClassName()}>
            <a href={url} target="_blank" rel='noreferrer' className="full-link">Accéder au site</a>
            <img src={getImg()} alt={"Projet pour " + title} />
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    );
};

export default Project;