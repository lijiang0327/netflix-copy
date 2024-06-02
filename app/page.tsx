'use client'

import { Image, Accordion, AccordionItem } from '@nextui-org/react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Footer } from "@/components/Footer/Footer";
import { GetStarted } from "@/components/GetStarted/GetStarted";
import { Header } from "@/components/Header/Header";
import { Divider } from "@/components/Divider/Divider";
import { HomeSection } from "@/components/HomeSection/HomeSection";

export default function Home() {
  const questionsData = [
    {
      title: "What is Netflix?",
      content: <p>
        Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.
        <br />
        <br />
        You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There&apos;s always something new to discover, and new TV programmes and films are added every week!
      </p>
    },
    {
      title: "How much does Netflix cost?",
      content: <p>
        Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from $13.98 to $25.98 a month. No extra costs, no contracts.
      </p>
    },
    {
      title: "Where can I watch?",
      content: <p>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        <br />
        <br />
        You can also download your favourite programmes with the iOS or Android app. Use downloads to watch while you&apos;re on the go and without an internet connection. Take Netflix with you anywhere.
      </p>
    },
    {
      title: "How do I cancel?",
      content: <p>
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.
      </p>
    },
    {
      title: "What can I watch on Netflix?",
      content: <p>
        Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.
      </p>
    },
    {
      title: "Is Netflix good for children?",
      content: <p>
        The Netflix Children&apos;s experience is included in your membership to give parents control while children enjoy family-friendly TV programmes and films in their own space.
        <br />
        <br />
        Children&apos;s profiles come with PIN-protected parental controls that let you restrict the maturity rating of content children can watch and block specific titles you don’t want children to see.
      </p>
    }
  ]

  return (
    <>
      <Header className="absolute top-0"></Header>
      <div className="bg-[url(/images/jpg/banner.jpg)] bg-center h-[700px] bg-cover">
        <div className="w-full h-full bg-banner flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-[48px] font-[900] text-center">Unlimited movies, TV shows, and more</h3>
            <p className="text-[24px] mt-4 text-center">
              Watch anywhere. Cancel anytime.
            </p>
            <GetStarted className="mt-4" />
          </div>
        </div>
      </div>
      <Divider />
      <HomeSection
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
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
        className="flex-row-reverse"
        title="EDownload your shows to watch offline"
        description="Save your favorites easily and always have something to watch."
      >
        <div className='w-full relative'>
          <Image src="/images/jpg/mobile.jpg" width="full" alt="tv" classNames={{
            img: "w-full max-w-full",
            wrapper: "w-full"
          }} />
          <div className='absolute bottom-0 z-10 bottom-10 left-[50%] translate-x-[-50%] bg-bg-black flex items-center gap-3 px-2 w-[382px] h-[104px] border-2 rounded-lg border-border-gray'>
            <Image src="/images/png/boxshot.png" alt="box shot" width={57} height={80} className='' />
            <div className='flex flex-col justify-center gap-1 flex-1'>
              <div className='font-[500] text-base'>Stranger Things</div>
              <div className="text-sm text-text-blue">Downloading...</div>
            </div>
            <Image classNames={{
              wrapper: "h-[60px]"
            }} src="images/gif/download-icon.gif" alt="download" width={48} height={60} />
          </div>
        </div>
      </HomeSection>
      <Divider />
      <HomeSection
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
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
        className="flex-row-reverse"
        title="Create profiles for kids"
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      >
        <div className='w-full relative'>
          <Image src="/images/png/section-4.png" width="full" alt="tv" classNames={{
            img: "w-full max-w-full",
            wrapper: "w-full"
          }} />
        </div>
      </HomeSection>
      <Divider />
      <div className="py-[72px] flex flex-col items-center w-[calc(66.66%-96px)] mx-auto">
        <h2 className="text-5xl font-bold">Frequently Asked Questions</h2>
        <div className="w-full mt-6 mb-8">
          <Accordion>
            {questionsData.map(({ title, content }, index) => {
              return (
                <AccordionItem
                  classNames={{
                    title: "text-text-white text-2xl py-6",
                    content: "bg-bg-gray-2 p-6 text-2xl mt-[-8px]",
                    trigger: "p-0 mt-1 mb-[2px] bg-bg-gray-2 px-6",
                    indicator: "bg-bg-gray-2 text-text-white",
                  }}
                  key={index}
                  title={title}
                  indicator={({ isOpen }) => isOpen ? <XMarkIcon width={48} height={48} /> : <PlusIcon width={48} height={48} />}
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
    </>
  );
}
