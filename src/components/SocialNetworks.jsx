import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/allan-alves-amancio-211632197/"},
    { name: "github", icon: <FaGithub />, link: "https://github.com/AllanSmithll"},
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/allan_smith_pb/"}
];

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks;