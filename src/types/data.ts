export type profileData = {
  mainmenu: {
    name: string;
    subMenu: {
      name: string;
      type?:
      | "paragraph"
      | "keyvalue"
      | "list"
      | "dd"
      | "nestedlist"
      | "complexNested";
      content?: any;
    }[];
  }[];
  pdf?:any;
};
