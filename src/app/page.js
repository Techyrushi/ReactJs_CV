import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});
const NameText = dynamic(() => import("@/components/DynamicText/DynamicText"), {
  ssr: false,
});
const HomeStatus = dynamic(() => import("@/components/home/HomeStatus"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(27,27,27,0.28)_72%,rgba(27,27,27,0.72)_100%)]" />
      <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-glow-breathe" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl animate-float-slow" />

      <div className="absolute z-20 top-[max(4.5rem,env(safe-area-inset-top))] left-4 right-16 xs:left-6 sm:top-10 sm:left-8 sm:right-auto">
        <NameText />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <RenderModel
          className="w-full h-full"
          camera={{ position: [0, 0.2, 6.2], fov: 40 }}
        >
          <Wizard />
        </RenderModel>
      </div>

      <Navigation />
      <HomeStatus />
    </main>
  );
}
