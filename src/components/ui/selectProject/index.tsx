'use client';
import React, { type FC, memo } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { selectSX } from '@/styles/ui/select.styles';

export const SelectProject: FC = memo(() => {
  const [project, setProject] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };
  return (
    <Box sx={{ maxWidth: '12rem', width: '100%' }}>
      <FormControl fullWidth size={'small'}>
        <InputLabel id='progect-select-label'>Выберите проект</InputLabel>
        <Select
          labelId='progect-select-label'
          id='select'
          value={project}
          label='Выберите проект'
          onChange={handleChange}
          sx={{ borderRadius: '0.5rem' }}
        >
          <MenuItem value={'fulfilment'}>Фулфилмент</MenuItem>
          <MenuItem value={'fulfilment2'}>Фулфилмент2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

SelectProject.displayName = 'SelectProject';
