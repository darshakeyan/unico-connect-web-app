import React, { ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import useHover from 'hooks/useHover';

export type CardProps = {
  children?: ReactNode;
  className?: string;
  shadowOnHover?: boolean;
  bgColor?:string;
};

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  bgColor = '',
}) => {
  const [isHovered, hoverEvents] = useHover();

  const cardStyle = useMemo(
    () =>
      clsx(
        { "border border-[#e2ffff80]": true },
        { [bgColor]: !isHovered },
        {
          "bg-black text-white": isHovered,
        },
        { [className]: true }
      ),
    [isHovered]
  );

  return (
    <div className={cardStyle} {...hoverEvents}>
      {children}
    </div>
  );
};

export default Card;
