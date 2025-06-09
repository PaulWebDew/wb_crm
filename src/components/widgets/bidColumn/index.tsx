'use client';
import React, { type FC, memo, useState } from 'react';
import { PaletteColumnHeader } from '@/components/widgets/paletteColumhHeader';
import { Collapse, Drawer, Stack, Typography } from '@mui/material';
import { BaseButton } from '@/components/ui/BaseButton';
import { fadeButtonSX } from '@/styles/ui/button.styles';
import { AddDealForm } from '@/components/widgets/bidColumn/AddDealForm';
import { FileXLSXIcon } from '@/assets/icons';
import { VisuallyHiddenInput } from '@/components/ui/VisuallyHiddenInput';

export const BidColumn: FC = memo(() => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isOpenAddFile, setIsOpenAddFile] = useState(false);

  const openFormHandler = () => {
    setIsShowForm(true);
  };
  const closeFormHandler = () => {
    setIsShowForm(false);
  };

  const openDrawerHandler = () => {
    setIsOpenAddFile(true);
  };
  return (
    <>
      <div className={'w-[10rem]'}>
        <PaletteColumnHeader
          title={'Заявка'}
          index={-1}
          dealsCount={0}
          sum={0}
        />
        <div className={'mt-3 w-full'}>
          <Stack width={'100%'}>
            <Collapse in={!isShowForm}>
              <BaseButton onClick={openFormHandler} sx={fadeButtonSX}>
                Быстрое добавление
              </BaseButton>
            </Collapse>
            <Collapse in={isShowForm}>
              <AddDealForm onClose={closeFormHandler} />
            </Collapse>
            <BaseButton
              sx={{ ...fadeButtonSX, mt: 1 }}
              onClick={openDrawerHandler}
            >
              Добавление из файла
            </BaseButton>
          </Stack>
        </div>
      </div>
      <Drawer
        anchor={'left'}
        open={isOpenAddFile}
        onClose={() => setIsOpenAddFile(false)}
      >
        <div className={'flex w-[30vw] items-start justify-center pt-36'}>
          <BaseButton
            component='label'
            role={undefined}
            tabIndex={-1}
            variant={'outlined'}
            sx={{ maxWidth: '20rem', px: '2rem', py: '2rem' }}
          >
            <Stack alignItems='center' spacing={3}>
              <Typography>
                Перенесите или нажмите чтоб выбрать файл формата xlsx
              </Typography>
              <FileXLSXIcon />
            </Stack>
            <VisuallyHiddenInput
              type='file'
              onChange={(event) => console.log(event.target.files)}
              multiple
              accept='.xlsx'
            />
          </BaseButton>
        </div>
      </Drawer>
    </>
  );
});

BidColumn.displayName = 'BidColumn';
