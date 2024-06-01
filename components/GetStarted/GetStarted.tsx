import { FC } from "react"
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/outline"

import { Button } from "../Button/Button"

export interface GetStartedProps {
  className?: string;
}

export const GetStarted: FC<GetStartedProps> = ({ className }) => {
  return <div className={
    clsx(
      "flex items-center justify-center flex-col gap-3",
      className
    )
  }>
    <p className="text-[24px]">
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div className="flex items-center justify-center gap-2">
      <input placeholder="Email address" className="outline-none h-[56px] border-2 w-[360px] border-border-gray text-text-white placeholder:opacity-60 placeholder:text-white rounded bg-transparent font-semibold px-5 py-3"></input>
      <Button className="h-[56px]" size="lg">Get Started <ChevronRightIcon width={24} height={24} /></Button>
    </div>
  </div>
}
