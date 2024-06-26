import Image from "next/image";
import { Hero } from "../../../public";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { CaraouselLanding } from "./CaraouselLanding";

const HeroComponent = () => {
  return (
    <div className="container min-h-96">
      <div className="absolute  max-sm:hidden -left-20  w-[20rem] h-[20rem] rounded-full bg-violet-300 opacity-40 blur-3xl    "></div>
      <div className="absolute   max-sm:hidden  right-24 top-40  w-[10rem] h-[10rem] rounded-2xl opacity-40  bg-emerald-300 blur-3xl    "></div>
      <div className="absolute  top-[25rem] left-[18rem]  w-[5rem] h-[7rem] rounded-3xl  bg-rose-300  dark:hidden opacity-65 blur-3xl    "></div>
      <div className="absolute  max-sm:hidden top-[50rem] right-80  w-[15rem] h-[15rem] rounded-full bg-violet-400 opacity-20 blur-3xl    "></div>
      <div className="absolute  max-sm:hidden top-[60rem] left-40  w-[15rem] h-[15rem] rounded-full bg-red-300 opacity-20 blur-3xl    "></div>

      <div
        className="relative flex flex-col  items-center justify-center dark:text-secondary container gap-36  sm:pt-40 pt-20 
       "
      >
        <div className="items-center  flex flex-col">
          <h1 className="font-bold  text-6xl max-sm:text-6xl  ">
            <span className="text-rose-500 text-7xl max-sm:text-6xl ">
              {" "}
              FundChain{" "}
            </span>{" "}
            fueling dreams
          </h1>
          <br className="max-sm:hidden" />
          <h1 className="font-bold text-6xl max-sm:hidden -mt-4    ">
            Empowering
            <span className="text-rose-500 ml-3">Social </span> Impact
          </h1>
          <p className=" text-xl max-sm:ml-0 sm:mt-10 mt-5 text-muted-foreground sm:w-8/12 text-start ml-20">
            Welcome to FundChain, where blockchain technology meets social
            change! FundChain is a revolutionary crowdfunding platform that
            leverages the power of blockchain to connect passionate investors
            with social and cultural projects.
          </p>
          <Button className="mt-7 bg-black text-white hover:bg-black hover:text-white text-xl font-semibold">
            Lets Explore
          </Button>
        </div>
        <div className="grid grid-cols-12 max-sm:grid-cols-1 gap-5 sm:gap-14 w-full sm:px-40   items-center ">
          <Image
            width={400}
            alt="img"
            src={Hero}
            priority
            className="col-span-5 object-cover rounded-2xl  max-sm:col-span-1  h-[300px]"
          />

          <div className="col-span-6 sm:text-lg col-start-6 max-sm:col-span-1 text-muted-foreground">
            FundChain is your gateway to a world of positive impact. Imagine a
            place where blockchain technology intertwines with compassion, where
            every investment fuels social and cultural projects. Transparency is
            our cornerstone—no hidden agendas, just trust. As you explore
            projects, invest with purpose, and celebrate impact, you become part
            of a movement that bridges dreams and reality. Join us on FundChain,
            where good deeds thrive and innovation meets heart.
          </div>
        </div>
        <section className="w-full flex flex-col items-center sm:gap-10 gap-5  ">
          <h1 className="text-3xl sm:text-5xl font-bold ">Why choose us?</h1>
          <div className="grid grid-cols-12 gap-10  max-sm:grid-cols-1 items-center">
            <Card className="shadow-none dark:bg-background bg-background/20 col-start-1 col-span-4 max-sm:col-span-1 h-40 sm:h-32">
              <CardHeader className="py-3">
                <CardTitle className="text-center ">Transparency</CardTitle>
              </CardHeader>
              <CardDescription className="px-3">
                Our decentralized platform ensures complete transparency. Every
                contribution, every project visible to all. No hidden agendas,
                just trust.
              </CardDescription>
            </Card>
            <Card className="shadow-none dark:bg-background bg-background/20 col-start-5 col-span-4 max-sm:col-span-1 h-40 sm:h-32">
              <CardHeader className="py-3">
                <CardTitle className="text-center ">Empowerment</CardTitle>
              </CardHeader>
              <CardDescription className="px-3">
                By investing in social and cultural projects, you become a
                catalyst for positive change. Your impact ripples through
                communities, creating a brighter future.
              </CardDescription>
            </Card>
            <Card className="shadow-none dark:bg-background bg-background/20 col-start-9 col-span-4 max-sm:col-span-1 h-40 sm:h-32">
              <CardHeader className="py-3">
                <CardTitle className="text-center ">Blockchain Magic</CardTitle>
              </CardHeader>
              <CardDescription className="px-3">
                FundChain leverages blockchain technology to secure
                transactions, protect data, and empower creators. It’s not just
                a buzzword; it’s our foundation.
              </CardDescription>
            </Card>
          </div>
        </section>
        <div className="w-full  ">
          <h1 className="text-3xl tracking-wide  sm:text-5xl font-bold sm:flex sm:items-center sm:justify-center mb-7 ">
            What people think about{" "}
            <span className="inline-block text-red-400 sm:p-2">us?</span>{" "}
          </h1>
          <CaraouselLanding />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
