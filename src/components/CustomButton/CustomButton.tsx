import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    variant: 'Github' | 'Frontend Mentor' | 'Twitter' | 'Linkedln' | 'YouTube' | 'Facebook' | 'Twitch' | 'Dev.to' | 'Codewars' | 'freeCodeCamp' | 'GitLab' | 'Hashnode' | 'Stack Overflow';
    url: string;
}

const buttonStyles: { [key: string]: string } = {
    'Github': 'bg-[#1A1A1A] text-white',
    'Frontend Mentor': 'bg-[#FFFFFF] text-[#333333',
    'Twitter': 'bg-[#43B7E9] text-white',
    'Linkedln': 'bg-[#2D68FF] text-white',
    'YouTube': 'bg-[#EE3939] text-white',
    'Facebook': 'bg-[#2442AC] text-white',
    'Twitch': 'bg-[#EE3FC8] text-white',
    'Dev.to': 'bg-[#333333] text-white',
    'Codewars': 'bg-[#8A1A50] text-white',
    'freeCodeCamp': 'bg-[#302267]text-white',
    'GitLab': 'bg-[#EB4925] text-white',
    'Hashnode': 'bg-[#0330D1] text-white',
    'Stack Overflow': 'bg-[#EC7100] text-white',
};

const buttonIcons: { [key: string]: string } = {
    'Github': '/github-active.svg',
    'Frontend Mentor': '/icons/frontendmentor-active.svg',
    'Twitter': '/twitter-active.svg',
    'Linkedln': '/linkedin-active.svg',
    'YouTube': '/youtube-active.svg',
    'Facebook': '/facebook-active.svg',
    'Twitch': '/twitch-active.svg',
    'Dev.to': '/devto-active.svg',
    'Codewars': '/codewars-active.svg',
    'freeCodeCamp': '/freecodecamp-active.svg',
    'GitLab': '/gitlab-active.svg',
    'Hashnode': '/hashnode-active.svg',
    'Stack Overflow': '/stackoverflow-active.svg',
};

const arrowIcon = '/icon-right.svg';
const frontendMentorArrowIcon = '/icon-right-grey.svg';

const CustomButton: React.FC<ButtonProps> = ({ variant, url }) => {
    const styles = buttonStyles[variant];
    const icon = buttonIcons[variant];
    const arrow = variant === 'Frontend Mentor' ? frontendMentorArrowIcon : arrowIcon;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between w-full p-4 rounded-xl ${styles}`}>
            <div className="flex items-center">
                {icon && <Image src={icon} alt={`${variant} icon`} width={24} height={24} className="mr-2" />}
                <span>{variant}</span>
            </div>
            <Image src={arrow} alt="arrow icon" width={24} height={24} />
        </a>
    );
};

export default CustomButton;
