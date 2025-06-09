'use client';
import React, { type FC, memo, MouseEvent, useRef, useState } from 'react';
import { IconButtonRounded } from '@/components/ui/IconButtonRounded';
import {
  BurgerIcon,
  CalendarIcon,
  FilterIcon,
  PencilOutlinedIcon,
  WindowIcon,
} from '@/assets/icons';
import {
  Box,
  ClickAwayListener,
  Divider,
  Fade,
  IconButton,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material';
import { useStore } from '@tanstack/react-store';
import { DealsNavStore, tableViewStore } from '@/store/dealsPage.store';
import { DealsNavButton } from '@/components/ui/DealsNavButton';
import { usePathname, useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ru';
import { SelectProject } from '@/components/ui/selectProject';
import { getSlug } from '@/lib/helpers/getSlug';
import { AddPaletteButton } from '@/components/widgets/addPaletteButton';
import { IPaletteData } from '@/mokData/dealsNavData';
import { baseModalSX } from '@/styles/ui/modal.styles';

import CloseIcon from '@mui/icons-material/Close';
import { Input } from '@/components/ui/input';
import { BaseButton } from '@/components/ui/BaseButton';
import { enqueueSnackbar } from 'notistack';

dayjs.extend(localizedFormat);
dayjs.locale('ru');

export const DealsNavPanel: FC = memo(() => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPalette, setCurrentPalette] = useState<IPaletteData | null>(
    null,
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState('');

  const cursorRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const tableStore = useStore(tableViewStore, (state) => state);
  const navStore = useStore(DealsNavStore, (state) => state);

  const { type: pageType, setType } = tableStore;

  const createColumn = () => {
    setIsLoading(true);
    setTimeout(() => {
      navStore.addColumn(currentPalette!.title, value);
      setIsLoading(false);
      setValue('');
      setCurrentPalette(null);
      setIsOpenModal(false);
      enqueueSnackbar('Категория успешно добавлена', {
        variant: 'success',
      });
    }, 1000);
  };

  const contextClickHandler = (
    e: MouseEvent<HTMLButtonElement>,
    data: IPaletteData,
  ) => {
    e.preventDefault();
    cursorRef.current = e.currentTarget;
    setAnchorEl(cursorRef.current);
    setIsOpenModal(true);
    setCurrentPalette(data);
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Stack direction={'row'} spacing={4} className={'pt-1'}>
        <Stack direction={'row'} spacing={1.5} pl={1.5}>
          <IconButtonRounded
            isActive={pageType === 'palette'}
            onClick={() => setType('palette')}
          >
            <WindowIcon className={'h-5 w-5'} />
          </IconButtonRounded>
          <IconButtonRounded
            isActive={pageType === 'table'}
            onClick={() => setType('table')}
          >
            <BurgerIcon className={'h-5 w-5'} />
          </IconButtonRounded>
          <IconButtonRounded>
            <CalendarIcon className={'h-4 w-4'} />
          </IconButtonRounded>
        </Stack>

        {/*{------------- navigation panel--------------}*/}

        <Stack component={'nav'} direction={'row'} spacing={0}>
          {navStore.pages.map((page, ind) => (
            <DealsNavButton
              onContextMenu={(e) => contextClickHandler(e, page)}
              key={ind}
              onClick={() => router.push(`/deals/${getSlug(page.title!)}`)}
              isActive={pathname === `/deals/${getSlug(page.title!)}`}
            >
              {page.title}
            </DealsNavButton>
          ))}
          <AddPaletteButton className={'ml-4'} />
        </Stack>
        <Stack
          direction={'row'}
          sx={{ flex: 1, paddingRight: '1rem' }}
          alignItems={'center'}
          justifyContent={'flex-end'}
          spacing={2}
        >
          <Typography variant={'body2'}>
            {dayjs().format('dddd D MMMM YYYYг')}
          </Typography>
          <IconButtonRounded>
            <FilterIcon className={'h-4 w-4'} />
          </IconButtonRounded>
          <IconButtonRounded>
            <PencilOutlinedIcon className={'h-4 w-4'} />
          </IconButtonRounded>
          <SelectProject />
        </Stack>
      </Stack>

      {/* -----------add column modal ------------*/}
      <ClickAwayListener onClickAway={handleModalClose}>
        <Popper
          open={isOpenModal}
          anchorEl={anchorEl}
          placement='bottom'
          style={{ zIndex: 10, marginTop: '1rem' }}
        >
          <Fade in={isOpenModal}>
            <Paper
              sx={{ ...baseModalSX, width: 400, top: '2rem' }}
              elevation={8}
            >
              <Box>
                <Stack spacing={'1rem'}>
                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography variant='h6'>Создание категории</Typography>

                    <IconButton onClick={handleModalClose}>
                      <CloseIcon />
                    </IconButton>
                  </Stack>
                  <Divider />
                  <Typography variant='body1'>Название категории</Typography>
                  <Input
                    fullWidth
                    placeholder={'Введите название'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <BaseButton
                    loading={isLoading}
                    onClick={createColumn}
                    disabled={value.trim().length === 0}
                  >
                    Сохранить
                  </BaseButton>
                </Stack>
              </Box>
            </Paper>
          </Fade>
        </Popper>
      </ClickAwayListener>
    </>
  );
});

DealsNavPanel.displayName = 'DealsNavPanel';
