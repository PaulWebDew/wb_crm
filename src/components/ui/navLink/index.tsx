'use client';

import React, { type FC, HTMLAttributes, ReactNode } from 'react';
import { Fab, Tooltip } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import {
  activeButtonSx,
  defaultButtonSx,
} from '@/components/ui/navLink/navLink.styles';
import Zoom from '@mui/material/Zoom';

export interface INavLinkProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  icon: ReactNode;
  title: string;
}
export const NavLink: FC<INavLinkProps> = ({ path, icon, title, ...props }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className={'relative w-full px-2'}
      role={'button'}
      onClick={() => router.push(path)}
      {...props}
    >
      {pathname.startsWith(path) && (
        <div
          className={
            'bg-primary absolute top-1 right-0 bottom-1 h-auto w-0.5 rounded-full'
          }
        ></div>
      )}
      <Tooltip
        key={path}
        title={title}
        placement={'right'}
        arrow
        slots={{
          transition: Zoom,
        }}
        enterDelay={300}
        enterNextDelay={300}
        leaveDelay={100}
      >
        <Fab sx={pathname.startsWith(path) ? activeButtonSx : defaultButtonSx}>
          {icon}
        </Fab>
      </Tooltip>
    </div>
  );
};
