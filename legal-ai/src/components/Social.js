import {
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "https://www.linkedin.comhttps://www.linkedin.com/in/vladislav-kondratyev/details/projects/" },
    { icon: <FaFacebook />, path: "https://www.facebook.com" },
    { icon: <FaGithub />, path: "https://github.com/rishi-golla/Legal-AI" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/legal.ai_/" },
    { icon: <FaTwitter />, path: "https://x.com" },
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
