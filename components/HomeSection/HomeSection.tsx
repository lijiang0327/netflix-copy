import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface HomeSectionProps {
  className?: string
  title: string;
  description: string;
  children: ReactNode;
}

export const HomeSection: FC<HomeSectionProps> = ({ title, className, description, children }) => {
  return (
    <div
      className={
        clsx(
          "flex items-center justify-center mx-auto w-[calc(100%-48px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-64px)] lg:w-[calc(83.33%-96px)] xl:w-[calc(66.66%-96px)] py-[56px] md:py-[72px]",
          className
        )
      }>
      <div className="flex w-full md:w-[50%] flex-col items-center justify-center px-2 md:px-10">
        <h2 className="text-[32px] md:text-[48px] font-bold text-center md:text-left w-full">{title}</h2>
        <p className="text-base md:text-2xl text-center md:text-left mt-2 md:mt-0">{description}</p>
      </div>
      <div className="flex-1 w-full md:w-[50%]">
        {children}
      </div>
    </div>
  )
}
