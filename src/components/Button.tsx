import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'outlined';
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primaryDarker',
  outlined: 'bg-transparent border-2 border-primary text-primary',
};

export default function Button({
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const _className = twMerge(
    variantClasses[variant],
    'appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all',
    className
  );

  return (
    <button className={_className} {...rest}>
      {rest.children}
    </button>
  );
}
