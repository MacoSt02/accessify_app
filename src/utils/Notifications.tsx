import { Icon } from '@iconify/react';
import { toast } from 'react-toastify';

export const notify = {
    info: (message: string) => {
        toast.info(
            <div>
                <strong>Info</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                icon: <Icon icon='solar:info-circle-bold-duotone' width='2em' height='2em' />,
                style: {
                    border: 'solid 1px',
                },
                position: 'top-center',
            },
        );
    },
    success: (message: string) =>
        toast.success(
            <div>
                <strong>Success</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                icon: <Icon icon='solar:check-circle-bold-duotone' width='2em' height='2em' />,
                style: {
                    border: 'solid 1px',
                },
                position: 'top-center',
            },
        ),
    warning: (message: string) =>
        toast.warning(
            <div>
                <strong>Warning</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                icon: <Icon icon='solar:danger-triangle-bold-duotone' width='2em' height='2em' />,
                style: {
                    border: 'solid 1px',
                },
                position: 'top-center',
            },
        ),
    error: (message: string) => {
        toast.error(
            <div>
                <strong>Error</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                icon: <Icon icon='solar:close-circle-bold-duotone' width='2em' height='2em' />,
                style: {
                    border: 'solid 1px',
                },
                position: 'top-center',
            },
        );
    },
};