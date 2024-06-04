'use client'

import { Image, Accordion, AccordionItem } from '@nextui-org/react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { NextSeo } from 'next-seo';

import { Footer } from "@/components/Footer/Footer";
import { GetStarted } from "@/components/GetStarted/GetStarted";
import { Header } from "@/components/Header/Header";
import { Divider } from "@/components/Divider/Divider";
import { HomeSection } from "@/components/HomeSection/HomeSection";

const Home = () => {
  const { locale } = useParams()

  console.log(locale)

  const t = useTranslations("Index")

  const questionsData = [
    {
      title: t("question1Title"),
      content: <p>
        {t("question1Desc")}
        <br />
        <br />
        {t("question1Desc2")}
      </p>
    },
    {
      title: t("question2Title"),
      content: <p>
        {t("question2Desc")}
      </p>
    },
    {
      title: t("question3Title"),
      content: <p>
        {t("question3Desc")}
        <br />
        <br />
        {t("question3Desc2")}
      </p>
    },
    {
      title: t("question4Title"),
      content: <p>
        {t("question4Desc")}
      </p>
    },
    {
      title: t("question5Title"),
      content: <p>
        {t("question5Desc")}
      </p>
    },
    {
      title: t("question6Title"),
      content: <p>
        {t("question6Desc")}
        <br />
        <br />
        {t("question6Desc2")}
      </p>
    }
  ]

  return (
    <>
      <NextSeo
        title="Netflix Copy"
        description="Netflix copy"
        canonical="https://netflix-copy-ebon.vercel.app/"
        openGraph={{
          url: "https://netflix-copy-ebon.vercel.app/",
          title: "Netflix copy",
          description: "Netflix copy",
        }}
      ></NextSeo>
      <div className='w-full overflow-hidden'>
        <Header />
        <div className="h-fit relative overflow-hidden max-h-[700px] min-h-[460px]">
          <Image src="/images/jpg/banner.jpg" alt="banner" className="object-cover h-[500px] md:h-fit min-h-full scale-125 translate-y-[-10%]" />
          <div className="w-full h-full bg-banner flex items-center justify-center absolute top-0 z-10">
            <div className="flex items-center px-6 justify-center flex-col w-full h-full bg-bg-black bg-opacity-40">
              <h1 className="mt-[64px] md:mt-0 text-[32px] leading-10 font-[700] md:text-[48px] md:leading-[56px] md:font-[900] text-center">
                {t("bannerTitle")}
              </h1>
              <p className="text-lg md:text-[24px] mt-8 text-center">
                {t("bannerDescription")}
              </p>
              <GetStarted className="mt-8" />
            </div>
          </div>
        </div>
        <Divider />
        <HomeSection
          className="flex-col md:flex-row"
          title={t("section1Title")}
          description={t("section1Description")}
        >
          <div className='w-full relative'>
            <Image src="/images/png/tv.png" width="full" alt="tv" classNames={{
              img: "w-full max-w-full",
              wrapper: "w-full"
            }} />
            <video
              className="w-full max-w-[73%] max-h-[54%] h-full top-[46%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] object-contain overflow-clip" playsInline loop autoPlay muted controls={false}>
              <source type="video/mp4" src="/video/video-tv-0819.m4v"></source>
            </video>
          </div>
        </HomeSection>
        <Divider />
        <HomeSection
          className="flex-col md:flex-row-reverse"
          title={t("section2Title")}
          description={t("section2Description")}
        >
          <div className='w-full relative'>
            <Image src="/images/jpg/mobile.jpg" width="full" alt="tv" classNames={{
              img: "w-full max-w-full",
              wrapper: "w-full"
            }} />
            <div className='absolute z-10 bottom-5 sm:bottom-10 left-[50%] translate-x-[-50%] bg-bg-black flex items-center gap-3 px-2 w-[264px] sm:w-[382px] h-[64px] sm:h-[104px] border-2 rounded-lg border-border-gray'>
              <Image src="/images/png/boxshot.png" alt="box shot" width={57} height={80} className='h-[48px] w-[34px] sm:h-[80px] sm:w-[57px]' />
              <div className='flex flex-col justify-center gap-1 flex-1'>
                <div className='font-[500] text-sm sm:text-base'>Stranger Things</div>
                <div className="text-xs sm:text-sm text-text-blue">Downloading...</div>
              </div>
              <Image classNames={{
                wrapper: "h-[48px] md:h-[60px]"
              }} src="images/gif/download-icon.gif" alt="download" width={48} height={60} />
            </div>
          </div>
        </HomeSection>
        <Divider />
        <HomeSection
          className="flex-col md:flex-row"
          title={t("section3Title")}
          description={t("section3Description")}
        >
          <div className='w-full relative'>
            <Image src="/images/png/device-pile.png" width="full" alt="tv" classNames={{
              img: "w-full max-w-full",
              wrapper: "w-full"
            }} />
            <video
              className="w-full max-w-[63%] max-h-[47%] h-full top-[34%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] object-contain overflow-clip" playsInline loop autoPlay muted controls={false}>
              <source type="video/mp4" src="/video/video-devices.m4v"></source>
            </video>
          </div>
        </HomeSection>
        <Divider />
        <HomeSection
          className="flex-col md:flex-row-reverse"
          title={t("section4Title")}
          description={t("section4Description")}
        >
          <div className='w-full relative'>
            <Image src="/images/png/section-4.png" width="full" alt="tv" classNames={{
              img: "w-full max-w-full",
              wrapper: "w-full"
            }} />
          </div>
        </HomeSection>
        <Divider />
        <div className="py-[72px] flex flex-col md:box-content items-center w-[calc(100%-48px)] sm:w-[calc(100%-64px)] md:w-[calc(100%-64px)] lg:w-[calc(83.33%-96px)] xl:w-[calc(66.66%-96px)] mx-auto">
          <h2 className="text-[32px] md:text-5xl font-bold md:text-left text-center">
            {t("frequentlyAskedQuestions")}
          </h2>
          <div className="w-full mt-6 mb-8">
            <Accordion>
              {questionsData.map(({ title, content }, index) => {
                return (
                  <AccordionItem
                    classNames={{
                      title: "text-text-white text-lg md:text-2xl py-6",
                      content: "p-4 md:p-6 bg-bg-gray-2 text-lg md:text-2xl mt-[-8px]",
                      trigger: "p-0 mt-1 mb-[2px] bg-bg-gray-2 px-3 md:px-6 hover:bg-bg-gray-3 transition-all",
                      indicator: "text-text-white",
                    }}
                    key={index}
                    title={title}
                    indicator={({ isOpen }) =>
                      isOpen
                        ? <XMarkIcon className='w-[32px] h-[32px] md:w-[48px] md:h-[48px]' width={48} height={48} />
                        : <PlusIcon className='w-[32px] h-[32px] md:w-[48px] md:h-[48px]' width={48} height={48} />
                    }
                  >
                    {content}
                  </AccordionItem>
                )
              })}

            </Accordion>
          </div>
          <GetStarted />
        </div>
        <Divider />
        <Footer />
      </div>
    </>
  );
}

export default Home;
