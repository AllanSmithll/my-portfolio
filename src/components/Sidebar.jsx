import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/allan-to-portfolio.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Foto de Allan Amâncio" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <p>informações de contato</p>
        <a target="_blank" href="https://drive.google.com/file/d/1zyGb-Mzk7zcUeV1QNEXgc1bD6Mow3FGl/view?usp=drive_link" className="btn" download>
            Download currículo (CV)
        </a>
    </aside>
}

export default Sidebar