export const PATHS = {
  HOME: "/",
  SHOP: "/shop",
  CONTACT: "/contact",
  FAQ: "/FAQ",
  PRODUCT: "/product/:id",
  CART: "/cart",
};

type NavLinkItem = {
  label: string;
  path: string;
  isCart?: boolean;
};

export const NAV_LINKS: NavLinkItem[] = [
  { label: "home", path: PATHS.HOME },
  { label: "shop", path: PATHS.SHOP },
  { label: "contact", path: PATHS.CONTACT },
  { label: "faq", path: PATHS.FAQ },
  { label: "cart", path: PATHS.CART, isCart: true },
];
