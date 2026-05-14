"use client";
import React from "react";
import {
  ChartNoAxesColumnIncreasing,
  Globe,
  Puzzle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import ankara from "@/public/images/covers/ankara.png";
import map from "@/public/images/covers/map.png";
import Image from "next/image";
import { motion } from "framer-motion";

const goals = [
  {
    label: "Trusted Partners",
    icon: <ShieldCheck size={50} />,
    desc: "Committed to long-term partnership built on trust and reliability.",
  },
  {
    label: "Mission Focused",
    icon: <Target size={50} />,
    desc: "Delivering effective and innovative solutions against evolving threats.",
  },
  {
    label: "Integrated Solutions",
    icon: <Puzzle size={50} />,
    desc: "Capabilities across land, sea, air and cyber domains.",
  },
  {
    label: "Expert Team",
    icon: <Users size={50} />,
    desc: "Experienced engineering and operational professionals delivering technical excallence.",
  },
  {
    label: "Global Standards",
    icon: <Globe size={50} />,
    desc: "Operating in line with NATO and international standards.",
  },
  {
    label: "Local Contribution, Global Impact",
    icon: <ChartNoAxesColumnIncreasing size={50} />,
    desc: "Creating value globally through local manufacturing and engineering capability.",
  },
];
export default function AboutComponent() {
  return (
    <>
      <section className="bg-graphite-gray p-8">
        <div className="container md:py-10">
          <div className="grid md:grid-cols-6 gap-2">
            {goals.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 md:border-r border-white/10 pr-6 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-defence-gold">{item.icon}</span>
                <p className="text-white uppercase font-bold text-center text-xl">
                  {item.label}
                </p>
                <p className="text-center text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F2] md:p-20" id="about">
        <div className="container md:grid grid-cols-2 gap-20 pt-20 md:p-20 items-center">
          <motion.div
            className="md:space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-defence-gold uppercase font-bold text-xl">
              About Us
            </p>
            <h1 className="text-3xl md:text-5xl uppercase text-deep-navy">
              Turkey Focused. <br />
              <span className="text-defence-gold">Global Outlook.</span>
            </h1>
            <p className="text-xl text-deep-navy">
              Our headquaters are based in Ankara. We develop high-value <br />
              solutions for the requirements of armed forces, security agencies{" "}
              <br />
              and allied nations, strenghtening the future defence ecosystem{" "}
              <br />
              alongside local industry.
            </p>
            {/*<button className="flex items-center cursor-pointer gap-2 px-8 py-4 bg-deep-navy text-white rounded font-normal">*/}
            {/*  About Us <ChevronRight size={20} className="ml-2" />*/}
            {/*</button>*/}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={ankara}
              alt="Ankara"
              width={800}
              height={500}
              className="object-cover"
            />
          </motion.div>
        </div>
        <hr className="border-b border-deep-navy/10 container" />
        <div className="container md:grid grid-cols-2 gap-20 pt-10 md:p-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={map}
              alt="Africa Map"
              width={800}
              height={500}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="md:space-y-4 py-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-defence-gold uppercase font-bold text-xl">
              Focus Region
            </p>
            <h1 className="text-4xl md:text-5xl uppercase text-deep-navy">
              Africa
            </h1>
            <p className="text-xl text-deep-navy">
              We focus on supporting allied African nations by enhancing
              security capabilities, strenghtening institutions ans delivering
              sustainable defence solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
