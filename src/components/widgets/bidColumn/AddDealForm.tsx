'use client';
import React, { type FC, memo, useState } from 'react';
import { Box, Divider, Drawer, Stack, TextField } from '@mui/material';
import { formInputSX } from '@/styles/ui/input.styles';
import { BaseButton } from '@/components/ui/BaseButton';

export interface AddDealFormProps {
  onClose: () => void;
}

export const AddDealForm: FC<AddDealFormProps> = memo(({ onClose }) => {
  const [isOpenPrefill, setIsOpenPrefill] = useState(false);

  const openDrawer = () => {
    setIsOpenPrefill(true);
  };
  return (
    <>
      <Box component='form' noValidate autoComplete='off'>
        <Stack spacing={1}>
          <TextField
            fullWidth
            sx={formInputSX}
            size={'small'}
            placeholder={'Название сделки'}
          />
          <TextField
            fullWidth
            sx={formInputSX}
            size={'small'}
            placeholder={'Клиент'}
          />
          <TextField
            fullWidth
            sx={formInputSX}
            size={'small'}
            placeholder={'Базовый маркетплейс'}
          />
          <TextField
            fullWidth
            sx={formInputSX}
            size={'small'}
            placeholder={'Склад отгрузки'}
          />
          <TextField
            fullWidth
            sx={formInputSX}
            multiline
            rows={3}
            placeholder={'Комментарий'}
          />
          <TextField
            fullWidth
            sx={formInputSX}
            size={'small'}
            placeholder={'Дата'}
          />
          <BaseButton
            onClick={openDrawer}
            sx={{
              fontSize: '0.75rem',
              width: '100%',
              mt: '1rem',
            }}
            variant='outlined'
            fullWidth
          >
            Предзаполнить
          </BaseButton>
          <Stack direction={'row'} spacing={1} mt={1}>
            <BaseButton
              sx={{
                outline: 'none',
                border: 'none',
                bgcolor: 'background.default',
                fontSize: '0.75rem',
                mt: '1rem',
                px: '1rem',
                py: '0.1rem',
              }}
              variant='outlined'
            >
              Добавить
            </BaseButton>
            <BaseButton
              onClick={onClose}
              sx={{
                fontSize: '0.75rem',
                mt: '1rem',
                px: '1rem',
                py: '0.1rem',
              }}
            >
              Отменить
            </BaseButton>
          </Stack>
        </Stack>
        <Divider
          sx={{
            borderColor: 'text.disabled',
            opacity: '0.3',
            mt: '0.5rem',
          }}
        />
      </Box>
      <Drawer
        anchor={'right'}
        open={isOpenPrefill}
        onClose={() => setIsOpenPrefill(false)}
      >
        <div className={'w-[60vw]'}>Предзаполнение</div>
      </Drawer>
    </>
  );
});

AddDealForm.displayName = 'AddDealForm';
