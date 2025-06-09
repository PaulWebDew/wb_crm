import { MRT_TableOptions } from 'material-react-table';
import { IDeal } from '@/types/deals.types';

export const tableStyles: Partial<MRT_TableOptions<IDeal>> = {
  muiTableContainerProps: {
    sx: {
      backgroundColor: 'background.paper',
      padding: '8px',
    },
  },
  muiPaginationProps: {
    color: 'standard',
    sx: {
      backgroundColor: 'background.paper',
    },
  },

  muiToolbarAlertBannerProps: {
    sx: {
      backgroundColor: 'background.paper',
    },
  },

  muiTopToolbarProps: {
    sx: {
      backgroundColor: 'background.paper',
    },
  },

  muiBottomToolbarProps: {
    sx: {
      backgroundColor: 'background.paper',
    },
  },
  muiTableProps: {
    sx: {
      caption: {
        // captionSide: 'top',
      },
      backgroundColor: 'background.paper',
    },
  },
  muiTablePaperProps: {
    elevation: 0,
    sx: { backgroundColor: 'background.paper' },
  },
  muiTableBodyProps: {
    sx: {
      '& tr > td': {
        backgroundColor: 'background.paper',
      },
      // '& tr:nth-of-type(odd) > td': {
      //   backgroundColor: 'background.paper',
      // },
    },
  },
  muiTableHeadCellProps: ({ column }) => ({
    sx: {
      width: 'max-content',
      minWidth: '2rem',
      backgroundColor: 'background.paper',
    },
  }),
  muiTableBodyCellProps: ({ column }) => ({
    sx: {
      width: 'max-content',
      minWidth: '2rem',
      fontSize: '0.75rem',
    },
  }),
};
