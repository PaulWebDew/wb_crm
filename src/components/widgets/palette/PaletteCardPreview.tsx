import { FC, HTMLAttributes } from 'react';
import { IDeal } from '@/types/deals.types';
import { WbIcon } from '@/assets/icons';
import dayjs from 'dayjs';

export interface IPaletteCardPreviewProps
  extends HTMLAttributes<HTMLDivElement> {
  data: IDeal | null;
}

export const PaletteCardPreview: FC<IPaletteCardPreviewProps> = ({
  data,
  ...props
}) => {
  return (
    <div
      className='bg-bg_default touch-none rounded-[0.63rem] shadow hover:bg-gray-50'
      {...props}
    >
      <div className={'text-10 pb-2'}>
        <div
          className={
            'text-10 bg-primary float-right rounded-tr-[0.63rem] rounded-bl-[0.63rem] px-1 text-white'
          }
        >
          ID:{data?.general.id}
        </div>
        <p className={'text-primary px-2 pt-2 font-bold'}>
          {data?.general.dealName}
        </p>
        <div className={'px-2'}>
          <p className={'font-light'}>{data?.client.companyName}</p>
          <p className={'flex items-center justify-start gap-1'}>
            <span>
              <WbIcon className={'rounded-full'} />
            </span>{' '}
            {data?.general.shippingWarehouse}
          </p>
          <p className={'font-light'}>
            {data?.general.sum} руб/{data?.general.productsAmount} тов{' '}
          </p>
          <p className={'text-primary pt-2 font-bold'}>
            Доставка: {dayjs(data?.general.deliveryDate).format('DD.MM.YYYY')}
          </p>
          <p className={'text-primary font-bold'}>
            Слот: {dayjs(data?.general.deliveryDate).format('DD.MM.YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};
