import clsx from 'clsx';
import { forwardRef } from 'react';
import React from 'react';

import { Button, ButtonProps, Icon } from '..';

export type ActionIconProps = {
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  iconClassName?: string;
} & ButtonProps<'button'>;

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  ({ size = 'md', variant, icon, iconClassName, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        compact
        className={clsx(props.className, 'fill-gray-200')}
        size={size}
        variant={variant}
      >
        <Icon size={size} icon={icon} className={iconClassName} />
      </Button>
    );
  },
);
