import { AboutComponent, Hero, Capabilities, Partners } from "@/components/layouts";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <AboutComponent />
        <Capabilities />
        <Partners />
      </div>
    </>
  );
}
