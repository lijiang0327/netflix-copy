import { Footer } from "@/components/Footer/Footer";
import { GetStarted } from "@/components/GetStarted/GetStarted";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header className="absolute top-0"></Header>
      <div className="bg-[url(/images/jpg/banner.jpg)] bg-center h-[700px] bg-cover">
        <div className="w-full h-full bg-banner flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h3 className="text-[48px] font-[900]">Unlimited movies, TV shows, and more</h3>
            <p className="text-[24px] mt-4">
              Watch anywhere. Cancel anytime.
            </p>
            <GetStarted className="mt-4" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
