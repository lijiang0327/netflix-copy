import Link from "next/link"
import { useTranslations } from "next-intl"

import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown"

export const Footer = () => {
  const t = useTranslations("Index")

  return (
    <div className="py-[56px] md:py-[72px] mx-auto sm:box-content w-[calc(100%-48px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-64px)] lg:w-[calc(83.33%-96px)] xl:w-[calc(66.66%-96px)] ">
      <div className="mb-4 opacity-60">
        {t("questions")}
        {t("call")} <a className="underline" href="tel:8008526334">800 852 6334</a></div>
      <div className="md:flex justify-between mb-4 hidden opacity-60">
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">{t("FAQ")}</Link>
          <Link className="underline" href="#">{t("investorRelations")}</Link>
          <Link className="underline" href="#">{t("privacy")}</Link>
          <Link className="underline" href="#">{t("speedTest")}</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">{t("helpCentre")}</Link>
          <Link className="underline" href="#">{t("jobs")}</Link>
          <Link className="underline" href="#">{t("cookiePreferences")}</Link>
          <Link className="underline" href="#">{t("legalNotices")}</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">{t("account")}</Link>
          <Link className="underline" href="#">{t("waysToWatch")}</Link>
          <Link className="underline" href="#">{t("corporateInformation")}</Link>
          <Link className="underline" href="#">{t("onlyOnNetflix")}</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">{t("mediaCentre")}</Link>
          <Link className="underline" href="#">{t("termsOfUse")}</Link>
          <Link className="underline" href="#">{t("contactUs")}</Link>
        </div>
      </div>
      <div className="md:hidden justify-between mb-4 flex opacity-60">
        <div className="flex flex-col gap-4 flex-1">
          <Link className="underline" href="#">{t("FAQ")}</Link>
          <Link className="underline" href="#">{t("account")}</Link>
          <Link className="underline" href="#">{t("investorRelations")}</Link>
          <Link className="underline" href="#">{t("waysToWatch")}</Link>
          <Link className="underline" href="#">{t("privacy")}</Link>
          <Link className="underline" href="#">{t("corporateInformation")}</Link>
          <Link className="underline" href="#">{t("speedTest")}</Link>
          <Link className="underline" href="#">{t("onlyOnNetflix")}</Link>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Link className="underline" href="#">{t("helpCentre")}</Link>
          <Link className="underline" href="#">{t("mediaCentre")}</Link>
          <Link className="underline" href="#">{t("jobs")}</Link>
          <Link className="underline" href="#">{t("termsOfUse")}</Link>
          <Link className="underline" href="#">{t("cookiePreferences")}</Link>
          <Link className="underline" href="#">{t("contactUs")}</Link>
          <Link className="underline" href="#">{t("legalNotices")}</Link>
        </div>
      </div>
      <LanguageDropdown />
      <div className="mt-4 text-sm opacity-60">Netflix {t("Singapore")}</div>
    </div>
  )
}
