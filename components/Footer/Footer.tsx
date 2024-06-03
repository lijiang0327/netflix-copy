import Link from "next/link"
import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown"

export const Footer = () => {
  return (
    <div className="py-[56px] md:py-[72px] mx-auto sm:box-content w-[calc(100%-48px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-64px)] lg:w-[calc(83.33%-96px)] xl:w-[calc(66.66%-96px)] ">
      <div className="mb-4 opacity-60">Questions? Call <a className="underline" href="tel:8008526334">800 852 6334</a></div>
      <div className="md:flex justify-between mb-4 hidden opacity-60">
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">FAQ</Link>
          <Link className="underline" href="#">Investor Relations</Link>
          <Link className="underline" href="#">Privacy</Link>
          <Link className="underline" href="#">Speed Test</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">Help Centre</Link>
          <Link className="underline" href="#">Jobs</Link>
          <Link className="underline" href="#">Cookie Preferences</Link>
          <Link className="underline" href="#">Legal Notices</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">Account</Link>
          <Link className="underline" href="#">Ways to Watch</Link>
          <Link className="underline" href="#">Corporate Information</Link>
          <Link className="underline" href="#">Only on Netflix</Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link className="underline" href="#">Media Centre</Link>
          <Link className="underline" href="#">Terms of Use</Link>
          <Link className="underline" href="#">Contact Us</Link>
        </div>
      </div>
      <div className="md:hidden justify-between mb-4 flex opacity-60">
        <div className="flex flex-col gap-4 flex-1">
          <Link className="underline" href="#">FAQ</Link>
          <Link className="underline" href="#">Account</Link>
          <Link className="underline" href="#">Investor Relations</Link>
          <Link className="underline" href="#">Ways to Watch</Link>
          <Link className="underline" href="#">Privacy</Link>
          <Link className="underline" href="#">Corporate Information</Link>
          <Link className="underline" href="#">Speed Test</Link>
          <Link className="underline" href="#">Only on Netflix</Link>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <Link className="underline" href="#">Help Centre</Link>
          <Link className="underline" href="#">Media Centre</Link>
          <Link className="underline" href="#">Jobs</Link>
          <Link className="underline" href="#">Terms of Use</Link>
          <Link className="underline" href="#">Cookie Preferences</Link>
          <Link className="underline" href="#">Contact Us</Link>
          <Link className="underline" href="#">Legal Notices</Link>
        </div>
      </div>
      <LanguageDropdown />
      <div className="mt-4 text-sm opacity-60">Netflix Singapore</div>
    </div>
  )
}
