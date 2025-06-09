'use client';
import React, { type FC } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { Logo } from '@/assets/icons';
import {
  logoSubtitleSx,
  navWrapperSx,
  sidebarWrapperSx,
} from '@/components/layout/sideBar/sideBar.styles';
import { navConfig, sidebarConfig } from '@/lib/configs/sidebar.config';
import { NavLink } from '@/components/ui/navLink';
import Link from 'next/link';

export const SideBar: FC = () => {
  return (
    <Stack sx={sidebarWrapperSx}>
      <Link href={'/'}>
        <Logo className={'h-[2.95rem] w-[2.6rem]'} />
      </Link>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
        LogiDex
      </Typography>
      <Typography component='span' sx={logoSubtitleSx}>
        Fulfillment & Delivery
      </Typography>
      <Paper elevation={3} sx={navWrapperSx}>
        <Stack
          spacing={2}
          sx={{ width: '100%', alignItems: 'stretch', paddingY: '0.63rem' }}
        >
          {sidebarConfig.map((link, ind) => (
            <NavLink
              icon={link.icon}
              title={link.title}
              key={ind}
              path={link.path}
            />
          ))}
        </Stack>
        <Stack
          spacing={2}
          sx={{ width: '100%', alignItems: 'stretch', paddingY: '0.63rem' }}
        >
          {navConfig.map((link, ind) => (
            <NavLink
              icon={link.icon}
              title={link.title}
              key={ind}
              path={link.path}
            />
          ))}
        </Stack>
      </Paper>
    </Stack>
  );
};
