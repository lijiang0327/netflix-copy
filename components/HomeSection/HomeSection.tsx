import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface HomeSectionProps {
  className?: string
  title: string;
  description: string;
  children: ReactNode;
}

export const HomeSection: FC<HomeSectionProps> = ({ title, className, description, children }) => {
  return <div className={clsx("flex items-center justify-center mx-auto w-[calc(66.66%-96px)] py-[72px]", className)}>
    <div className="flex w-[50%] flex-col items-center justify-center px-10">
      <h2 className="text-[48px] font-bold text-left w-full">{title}</h2>
      <p className="text-2xl text-left">{description}</p>
    </div>
    <div className="flex-1 w-[50%]">
      {children}
    </div>
  </div>
}
