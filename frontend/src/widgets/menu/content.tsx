import { PATHS } from 'config';

interface MenuContent {
  path: PATHS;
  content: string | JSX.Element;
}

export const menuContent: MenuContent[] = [
  {
    path: PATHS.SHOP,
    content: 'Магазин',
  },
  {
    path: PATHS.BEFORE_AFTER,
    content: 'До/После',
  },
  {
    path: PATHS.ABOUT_US,
    content: 'О нас',
  },
  {
    path: PATHS.CONTACTS,
    content: 'Контакты',
  },
];
