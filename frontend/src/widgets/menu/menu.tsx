import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { menuContent } from './content';
import { MenuProps } from './types';
import styles from './menu.module.scss';

// !TODO когда будет готов тег с текстом нужно будет сделать отдельный тег для Link
export const Menu: FC<MenuProps> = ({ className, ...props }) => {
  return (
    <nav>
      <ul className={cn(styles.list, className)} {...props}>
        {menuContent.map(({ path, content }) => (
          <li key={path}>
            <Link className={styles.link} to={path}>
              {content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
