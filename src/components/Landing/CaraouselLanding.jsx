"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CaraouselLanding() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:w-6/12 mx-auto   "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews?.map((review, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="min-h-60 max-sm:h-[25rem] ">
                <CardHeader className="pb-0">
                  <CardTitle className=" flex items-center gap-4 ">
                    <div className="w-12 h-12 sm:h-20 sm:w-20 rounded-full bg-black">
                      <Image
                        src={review?.profile}
                        alt="profile"
                        height={200}
                        width={200}
                        className=" rounded-full object-contain h-full w-full "
                      />
                    </div>
                    <div className="text-2xl max-sm:text-xl font-bold ">
                      {review?.name}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col  h-4/6  items-center justify-center p-6">
                  <CardDescription className="w-full h-full pb-1">
                    {" "}
                    {review?.review}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

let reviews = [
  {
    profile:
      "https://th.bing.com/th/id/OIP.I7R9N2LIoOXPIm0gDcf86gHaEK?rs=1&pid=ImgDetMain",
    name: "Akash Singh",
    review:
      "Akash, a passionate community member, found herself drawn to FundChain's transparent approach. She invested in a local art project that aimed to revitalize their neighborhood park. As the project unfolded, Akash received regular updates—photos of artists at work, community gatherings, and the gradual transformation of a dull space into a vibrant mural-filled haven. She felt like more than just an investor; she was part of a creative movement.",
  },

  {
    profile:
      "https://th.bing.com/th/id/OIP.HWR3RddQWspeT8AGRS94jQHaEK?w=188&h=106&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    name: "Rajesh Patel",
    review:
      "Rajesh, an empathetic teacher, recognized the potential of FundChain's educational projects. He witnessed how these initiatives touched the lives of underprivileged students. From providing scholarships for higher education to organizing coding workshops, FundChain's impact was tangible. Rajesh's investment wasn't just financial; it was an investment in dreams and knowledge.",
  },
  {
    profile:
      "https://th.bing.com/th/id/OIP.NWyddX0Jykp6pnnX5hArJwHaLG?w=188&h=282&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    name: "Rajesh Verma",
    review:
      "Rajesh, an advocate for cultural exchange, used FundChain to support a program that connected students from different countries. The smart contracts ensured that her funds directly facilitated language immersion trips, art exhibitions, and cross-cultural dialogues. Rajesh cherished the heartfelt letters exchanged between students, knowing that her contribution fostered global understanding.",
  },
  {
    profile:
      "https://th.bing.com/th/id/OIP.fpVGEPC4gbnt3PLzMtmX4QHaLH?w=188&h=282&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    name: "Mohit Sharma",
    review:
      "Mohit, a sustainability enthusiast, chose FundChain to invest in a sustainable farming initiative. The decentralized model allowed him to track progress—from seed planting to harvest. He received real-time data on crop yields, water usage, and community workshops. Mohit's investment wasn't just about profits; it was about nurturing the earth and empowering local farmers.",
  },
  {
    profile:
      "https://th.bing.com/th/id/OIP.2f-oB4rsGaYTdqdDjwH2EQHaJq?w=188&h=246&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    name: "Lila Gupta",
    review:
      "Lila, a theater enthusiast, supported a local production through FundChain. She attended rehearsals, met the cast, and witnessed the magic unfold. When the curtains rose on opening night, Lila beamed with pride, knowing that her contribution had made the performance possible. FundChain wasn't just a platform; it was her backstage pass to creativity.",
  },
];
