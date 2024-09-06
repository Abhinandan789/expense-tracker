import { Button, ButtonProps } from '@mui/material';
import cn from 'clsx';


export const EyeCatchingButton_v1 = ({ ...props }: ButtonProps) => {
    return (
      <Button
        {...props}
        
        className={cn(
          'bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl tracking-wide',
          'from-zinc-500 via-zinc-950 to-zinc-600',
          'dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600',
          props.className
        )}
      />
    );
  };
  export default EyeCatchingButton_v1;