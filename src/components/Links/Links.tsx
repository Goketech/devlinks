import Image from 'next/image';
import { Dropdown } from 'semantic-ui-react';
import { LinksProps } from '@/types';

const friendOptions = [
    {
        key: 'Github',
        text: 'Github',
        value: 'Github',
        image: { avatar: true, src: '/github-grey.svg' },
    },
    {
        key: 'Frontend Mentor',
        text: 'Frontend Mentor',
        value: 'Frontend Mentor',
        image: { avatar: true, src: '/frontendmentor-grey.svg' },
    },
    {
        key: 'Twitter',
        text: 'Twitter',
        value: 'Twitter',
        image: { avatar: true, src: '/twitter-grey.svg' },
    },
    {
        key: 'Linkedln',
        text: 'Linkedln',
        value: 'Linkedln',
        image: { avatar: true, src: '/linkedin-grey.svg' },
    },
    {
        key: 'YouTube',
        text: 'YouTube',
        value: 'YouTube',
        image: { avatar: true, src: '/youtube-grey.svg' },
    },
    {
        key: 'Facebook',
        text: 'Facebook',
        value: 'Facebook',
        image: { avatar: true, src: '/facebook-grey.svg' },
    },
    {
        key: 'Twitch',
        text: 'Twitch',
        value: 'Twitch',
        image: { avatar: true, src: '/twitch-grey.svg' },
    },
    {
        key: 'Dev.to',
        text: 'Dev.to',
        value: 'Dev.to',
        image: { avatar: true, src: '/devto-grey.svg' },
    },
    {
        key: 'Codewars',
        text: 'Codewars',
        value: 'Codewars',
        image: { avatar: true, src: '/codewars-grey.svg' },
    },
    {
        key: 'freeCodeCamp',
        text: 'freeCodeCamp',
        value: 'freeCodeCamp',
        image: { avatar: true, src: '/freecodecamp-grey.svg' },
    },
    {
        key: 'GitLab',
        text: 'GitLab',
        value: 'GitLab',
        image: { avatar: true, src: '/gitlab-grey.svg' },
    },
    {
        key: 'Hashnode',
        text: 'Hashnode',
        value: 'Hashnode',
        image: { avatar: true, src: '/hashnode-grey.svg' },
    },
    {
        key: 'Stack Overflow',
        text: 'Stack Overflow',
        value: 'Stack Overflow',
        image: { avatar: true, src: '/stackoverflow-grey.svg' },
    },
];

const baseUrls: { [key: string]: string } = {
    'Github': 'https://www.github.com/',
    'Frontend Mentor': 'https://www.frontendmentor.io/',
    'Twitter': 'https://www.twitter.com/',
    'Linkedln': 'https://www.linkedin.com/',
    'YouTube': 'https://www.youtube.com/',
    'Facebook': 'https://www.facebook.com/',
    'Twitch': 'https://www.twitch.tv/',
    'Dev.to': 'https://www.dev.to/',
    'Codewars': 'https://www.codewars.com/',
    'freeCodeCamp': 'https://www.freecodecamp.org/',
    'GitLab': 'https://www.gitlab.com/',
    'Hashnode': 'https://www.hashnode.com/',
    'Stack Overflow': 'https://www.stackoverflow.com/',
};


const Links: React.FC<LinksProps> = ({
    link,
    index,
    removeLink,
    updateLink
}) => {
    const validateUrl = (platform: string, url: string) => {
        if (!url) return 'Link cannot be empty';
        const baseUrl = baseUrls[platform];
        if (!url.startsWith(baseUrl)) return `Please Check the URL`;
        return '';
    };

    const errorMessage = validateUrl(link.platform, link.url);

    return (
        <div className="p-5 md:p-10 mr-0 md:mr-10">
            <div className="flex justify-between mt-5 mb-3 text-base text-[#737373]">
                <div className="font-semibold flex gap-2">
                    <Image alt="link" src="/linkbar-grey.svg" width={16} height={16} />
                    <span>Link #{index + 1}</span>
                </div>
                <p className="cursor-pointer" onClick={() => removeLink(link.id)}>
                    Remove
                </p>
            </div>
            <div>
                <label htmlFor={`platform${link.id}`} className="text-[#333333] mb-2">
                    Platform
                </label>
                <Dropdown
                    placeholder="Select Friend"
                    fluid
                    selection
                    options={friendOptions}
                    id={`platform${link.id}`}
                    name={`platform${link.id}`}
                    value={link.platform}
                    onChange={(e, { value }) => updateLink(link.id, 'platform', value as string)}
                />
            </div>
            <div className="mt-3">
                <label htmlFor={`link${link.id}`} className="text-[#333333]">
                    Link
                </label>
                <div className="relative">
                    <Image
                        src="/link.svg"
                        alt="link"
                        width={6}
                        height={6}
                        className="w-4 h-4 absolute top-2.5 left-4"
                    />
                    <input
                        className="p-2 pl-12 w-full outline-[#633CFF] border border-[#d9d9d9] rounded-md"
                        type="url"
                        id={`link${link.id}`}
                        name={`link${link.id}`}
                        value={link.url}
                        onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                    />
                    {errorMessage && (
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                            {errorMessage}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Links;
