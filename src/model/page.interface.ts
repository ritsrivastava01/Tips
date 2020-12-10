export interface Page {
  title: string;
  url: string;
  icon: string;
  id: number;
  clickFunction?: string;
}
export const LEFT_NAVIGATION: Page[] = [
  {
    title: "Home",
    url: "/home",
    icon: "home",
    id: 1,
  },
  {
    title: "Bookmark",
    url: "/home",
    icon: "bookmarks",
    id: 2,
  },
  {
    title: "About US",
    url: "/about-us",
    icon: "information-circle",
    id: 3,
  },

  {
    title: "Contribute",
    url: "/contribute",
    icon: "create",
    id: 4,
  },
];

export const OTHER_NAVIGATION: Page[] = [
  {
    title: "Share this app",
    url: "",
    icon: "share-social",
    id: 5,
    clickFunction: "shareApp",
  },
  {
    title: "Rate this app",
    url: "/home",
    icon: "star",
    id: 5,
    clickFunction: "rateApp",
  },
];
