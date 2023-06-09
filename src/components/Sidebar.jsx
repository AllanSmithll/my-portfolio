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
        <a href="" className="btn">
            Download currículo (CV)
        </a>
    </aside>
}

export default Sidebar