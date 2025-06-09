'use client';

import React, { type FC, HTMLAttributes, memo, useState } from 'react';
import { PlusIcon } from '@/assets/icons';
import { IconButtonRounded } from '@/components/ui/IconButtonRounded';
import Backdrop from '@mui/material/Backdrop';
import {
  Divider,
  Fade,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Input } from '@/components/ui/input';
import { BaseButton } from '@/components/ui/BaseButton';
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from '@tanstack/react-store';
import { DealsNavStore } from '@/store/dealsPage.store';
import { useSnackbar } from 'notistack';

const style = {
  width: 600,
  maxWidth: 'calc(100vw - 2rem)',
  position: 'fixed',
  top: '5rem',
  left: '50%',
  transform: 'translate(-50%, 0)',
  bgcolor: 'background.paper',
  boxShadow: 12,
  borderRadius: '1.5rem',
  px: '2rem',
  pt: '1.5rem',
  pb: '2.5rem',
};

export const AddPaletteButton: FC<HTMLAttributes<HTMLDivElement>> = memo(
  ({ ...props }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const navStore = useStore(DealsNavStore, (state) => state);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleOpen = () => {
      if (navStore.pages.length < 8) {
        setIsOpenModal(true);
      } else {
        enqueueSnackbar('Возможно добавление не более 8 досок', {
          variant: 'error',
        });
      }
    };
    const handleClose = () => setIsOpenModal(false);
    const createPalette = () => {
      setIsLoading(true);
      setTimeout(() => {
        navStore.addPalette(value);
        setIsOpenModal(false);
        setIsLoading(false);
        setValue('');
        enqueueSnackbar('Доска успешно добавлена', { variant: 'success' });
      }, 1000);
    };
    return (
      <>
        <div {...props}>
          <IconButtonRounded isActive onClick={handleOpen}>
            <PlusIcon className={'h-4 w-4 text-white'} />
          </IconButtonRounded>
        </div>
        <Modal
          open={isOpenModal}
          onClose={handleClose}
          className={'p-4'}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 300,
            },
          }}
        >
          <Fade in={isOpenModal}>
            <Paper sx={style}>
              <Stack spacing={'1rem'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography variant='h6'>Добавление доски</Typography>

                  <IconButton onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Divider />
                <Typography variant='body1'>Название</Typography>
                <Input
                  fullWidth
                  placeholder={'Введите название'}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <BaseButton
                  loading={isLoading}
                  onClick={createPalette}
                  disabled={value.trim().length === 0}
                >
                  Сохранить
                </BaseButton>
              </Stack>
            </Paper>
          </Fade>
        </Modal>
      </>
    );
  },
);

AddPaletteButton.displayName = 'AddPaletteButton';
