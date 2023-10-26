export type profileData = {
  mainmenu: {
    name: string;
    subMenu: {
      name: string;
      type?: "paragraph" | "keyvalue";
      content?: any;
    }[];
  }[];
};
