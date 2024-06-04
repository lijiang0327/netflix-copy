import { FC } from "react"
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "next-intl";

import { Button } from "../Button/Button"

export interface GetStartedProps {
  className?: string;
}

export const GetStarted: FC<GetStartedProps> = ({ className }) => {
  const t = useTranslations("Common");

  return <div className={
    clsx(
      "flex items-center justify-center flex-col gap-3 w-full px-6",
      className
    )
  }>
    <p className="text-lg md:text-[24px] text-center">
      {t("getStartedTitle")}
    </p>
    <div className="flex items-center justify-center gap-2 flex-wrap mt-3 sm:mt-2">
      <input
        placeholder={t("emailAddress")}
        className="outline-none h-[48px] sm:h-[56px] border-2 w-[294px] sm:w-[360px] border-border-gray text-text-white placeholder:opacity-60 placeholder:text-white rounded bg-transparent font-semibold px-5 py-3"
      />
      <Button
        className="h-12 mt-3 sm:mt-0 sm:h-[56px]"
        size="lg"
      >
        {t("getStarted")}
        <ChevronRightIcon width={24} height={24} />
      </Button>
    </div>
  </div>
}
