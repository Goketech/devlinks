import Image from "next/image";
import { Dropdown } from "semantic-ui-react";
import { LinksProps } from "@/types";

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
        value: 'Linkedln    ',
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
        key: 'Codepen',
        text: 'Codepen',
        value: 'Codepen',
        image: { avatar: true, src: '/codepen-grey.svg' },
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
]

const Links: React.FC<LinksProps> = ({ link, index, removeLink }) => {
    return (
        <div className="p-10 mr-10">
            <div className="flex justify-between mt-5 mb-3 text-base text-[#737373]">
                <div className="font-semibold flex gap-2"><Image src="/linkbar-grey.svg" width={16} height={16} />
                <span>Link #{index + 1}</span></div>
                <p className="cursor-pointer" onClick={() => removeLink(link.id)}>Remove</p>
            </div>
            <div>
                <label htmlFor={`platform${link.id}`} className="text-[#333333] mb-2">Platform</label>
                <Dropdown
                    placeholder='Select Friend'
                    fluid
                    selection
                    options={friendOptions}
                    id={`platform${link.id}`}
                    name={`platform${link.id}`}
                />
            </div>
            <div className="mt-3">
                <label htmlFor={`link${link.id}`} className="text-[#333333]">Link</label>
                <div className='relative'>
                    <Image src="/link.svg" alt="link" width={6} height={6} className="w-4 h-4 absolute top-2.5 left-4" />
                    <input className="p-2 pl-12 w-full outline-[#633CFF] border border-[#d9d9d9] rounded-md" type="url" id={`link${link.id}`} name={`link${link.id}`} />
                </div>
            </div>
        </div>
    )
}

export default Links