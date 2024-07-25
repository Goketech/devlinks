export interface Link {
    id: number;
    platform: string;
    url: string;
  }
  
  export interface LinksProps {
    link: Link;
    index: number;
    removeLink: (id: number) => void;
    updateLink: (id: number, key: keyof Link, value: string) => void;
  }
  
  export interface NavProps {
    active: string;
    setActive: (active: string) => void;
  }

 export interface UserLink {
    platform: 'Github' | 'Frontend Mentor' | 'Twitter' | 'Linkedln' | 'YouTube' | 'Facebook' | 'Twitch' | 'Dev.to' | 'Codewars' | 'freeCodeCamp' | 'GitLab' | 'Hashnode' | 'Stack Overflow';
    url: string;
}