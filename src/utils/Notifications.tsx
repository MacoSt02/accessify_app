import { toast } from 'react-toastify';

export const notify = {
    info: (message: string) => {
        toast.info(
            <div>
                <strong>Info</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                theme: 'colored',
                icon: <span className="icon-[solar--info-circle-bold-duotone]"></span>,
                hideProgressBar: true,
                style: {
                    border: 'solid 1px',
                },
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
                theme: 'colored',
                icon: <span className="icon-[solar--check-circle-bold-duotone]"></span>,
                hideProgressBar: true,
                style: {
                    border: 'solid 1px',
                },
            },
        ),
    warning: (message: string) =>
        toast.warning(
            <div>
                <strong>Warning</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                theme: 'colored',
                icon: <span className="icon-[solar--danger-triangle-bold-duotone]"></span>,
                hideProgressBar: true,
                style: {
                    border: 'solid 1px',
                },
            },
        ),
    error: (message: string) => {
        toast.error(
            <div>
                <strong>Error</strong>
                <p className='text-xs'>{message}</p>
            </div>,
            {
                theme: 'colored',
                icon: <span className="icon-[solar--close-circle-bold-duotone]"></span>,
                hideProgressBar: true,
                style: {
                    border: 'solid 1px',
                },
            },
        );
    },
};
