export interface Link {
    id: number;
    platform: string;
    url: string;
  }
  
  export interface LinksProps {
    link: Link;
    index: number;
    removeLink: (id: number) => void;
  }
  