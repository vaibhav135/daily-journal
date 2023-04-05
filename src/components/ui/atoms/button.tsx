import { cva, type VariantProps } from "class-variance-authority";
import {ComponentProps, FC} from 'react';

export type ButtonProps =  ComponentProps<'button'> & VariantProps<typeof buttonStyles> & {
    text: string;
};

const buttonStyles = cva('button font-poppins rounded text-white flex flex-row justify-center items-center focus:outline-none focus:ring-2 focus:ring-turquoise-green/[0.5]', {

    variants: {
        intent: {
            primary: 'bg-turquoise-green hover:bg-turquoise-green/[0.9] ',
            secondary: '',
            link: '!text-turquoise-green border-2 border-turquoise-green hover:bg-turquoise-green/[0.1]',
            disabled: 'text-gray-100 bg-gray-400 cursor-not-allowed focus:!ring-0',
        }, 
        size: {
            sm: 'w-32 h-10',
            md: 'w-56 h-10',
            lg: 'w-80 h-10',
        }
    },
    defaultVariants: {
        intent: 'primary',
        size: 'md'
    }
});

export const Button: FC<ButtonProps> = ({intent, size,text = 'Button' , ...rest}) => {
    return <button className={buttonStyles({intent, size})} {...rest}>{text}</button>
}