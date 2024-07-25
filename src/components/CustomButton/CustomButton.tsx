import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    variant: 'Github' | 'Frontend Mentor' | 'Twitter' | 'Linkedln' | 'YouTube' | 'Facebook' | 'Twitch' | 'Dev.to' | 'Codewars' | 'Codepen' | 'freeCodeCamp' | 'GitLab' | 'Hashnode' | 'Stack Overflow';
    url: string;
}

const buttonStyles: { [key: string]: string } = {
    'Github': 'bg-black text-white',
    'Frontend Mentor': 'bg-blue-600 text-white',
    'Twitter': 'bg-blue-400 text-white',
    'Linkedln': 'bg-blue-700 text-white',
    'YouTube': 'bg-red-600 text-white',
    'Facebook': 'bg-blue-500 text-white',
    'Twitch': 'bg-purple-600 text-white',
    'Dev.to': 'bg-gray-800 text-white',
    'Codewars': 'bg-red-700 text-white',
    'Codepen': 'bg-black text-white',
    'freeCodeCamp': 'bg-green-600 text-white',
    'GitLab': 'bg-orange-500 text-white',
    'Hashnode': 'bg-blue-500 text-white',
    'Stack Overflow': 'bg-orange-600 text-white',
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
    'Codepen': '/codepen-active.svg',
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
        <a href={url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between w-full p-3 rounded-md ${styles}`}>
            <div className="flex items-center">
                {icon && <Image src={icon} alt={`${variant} icon`} width={24} height={24} className="mr-2" />}
                <span>{variant}</span>
            </div>
            <Image src={arrow} alt="arrow icon" width={24} height={24} />
        </a>
    );
};

export default CustomButton;
