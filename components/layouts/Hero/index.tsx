"use client";
import Link from "next/link";
import hero from "@/public/images/covers/hero.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <>
      <section
        ref={ref}
        className="relative h-screen overflow-hidden flex items-center"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y,
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/10" />
        </motion.div>

        <div className="container z-10 relative">
          <motion.div style={{ opacity }} className="space-y-5">
            <h1
              className="md:text-7xl text-5xl font-bold text-white uppercase"
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.4, duration: 0.8 }}
            >
              Integrated Solutions.
            </h1>
            <h1
              className="md:text-7xl text-5xl font-bold text-defence-gold uppercase mb-10"
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.4, duration: 0.8 }}
            >
              Strategic Advantage.
            </h1>
            <p
              // initial={{ opacity: 0, y: 40 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white text-xl md:text-3xl w-4xl font-normal mb-10 lg:text-start"
            >
              Lab Defence Solutions provides integrated defence, security and
              technology solutions for government institutions and defence
              organizations.
            </p>
            <div>
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="bg-defence-gold hover:bg-opacity-90 text-white uppercase font-semibold py-2 px-6 md:py-4 md:px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
