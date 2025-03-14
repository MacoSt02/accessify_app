import { useTheme } from '@/Hooks/useTheme';
import { Icon } from '@iconify/react';

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme();

    const handleClick = () => {
        const nextTheme = theme === 'light'
            ? 'dark'
            : theme === 'dark'
                ? 'system'
                : 'light';
        toggleTheme(nextTheme);
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className='p-2 rounded-xl m-4 bg-primary hover:bg-primary-200 text-primary-900 transition'
            >
                {theme === 'light' && <Icon icon='solar:sun-bold-duotone' width='1.5em' height='1.5em' />}
                {theme === 'dark' && <Icon icon='solar:moon-stars-bold-duotone' width='1.5em' height='1.5em' />}
                {theme === 'system' && <Icon icon='solar:settings-bold-duotone' width='1.5em' height='1.5em' />}
            </button>
        </div>
    );
};

export default ToggleTheme;