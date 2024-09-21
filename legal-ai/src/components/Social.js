import {
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/arnabdev/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/arnabdev6" },
    { icon: <FaGithub />, path: "https://github.com/arnabdev1" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/arnabde__v8/" },
    { icon: <FaTwitter />, path: "https://x.com/arnaabdev" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <a key={index} href={item.path} target="_blank" className={iconStyles}>
                        {item.icon}
                    </a>
                );
            })}
        </div>
    );
};

export default Social;
