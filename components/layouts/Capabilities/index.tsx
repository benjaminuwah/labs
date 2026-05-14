"use client";
import React from "react";
import Image from "next/image";
import {
    ammo,
    biometrics,
    drone,
    intel,
    marine,
    satelite,
    training,
    tank,
} from "@/public/images/services";
import {Plane, Ship} from "lucide-react";
import {BsAirplane} from "react-icons/bs";
import {GiBattleship, GiBullets} from "react-icons/gi";
import {LiaTruckMonsterSolid} from "react-icons/lia";
import {FaConnectdevelop} from "react-icons/fa6";
import {VscSourceControl} from "react-icons/vsc";
import {BsShieldCheck} from "react-icons/bs";
import {LiaBinocularsSolid} from "react-icons/lia";
import {LiaChalkboardTeacherSolid} from "react-icons/lia";
import {motion} from "framer-motion";

const serviceList = [
    {
        img: drone,
        icon: <BsAirplane size={30}/>,
        label: "AIR SYSTEMS",
        desc: "UAV, UAS and airborne defence solutions.",
    },
    {
        img: marine,
        icon: <GiBattleship size={30}/>,
        label: "MARITIME SYSTEMS",
        desc: "Naval systems, unmanned maritime platforms and coastal security solutions.",
    },
    {
        img: tank,
        icon: <LiaTruckMonsterSolid size={30}/>,
        label: "Land Systems",
        desc: "Armoured vehicles, weapon system and integrated mobility solutions.",
    },
    {
        img: intel,
        icon: <VscSourceControl size={30}/>,
        label: "Command & Control",
        desc: "C4IRS solutions, communication systems and mission integration capability.",
    },
    {
        img: biometrics,
        icon: <BsShieldCheck size={30}/>,
        label: "Cyber Security",
        desc: "Network security, data protection and cyber defence solutions.",
    },
    {
        img: ammo,
        icon: <GiBullets size={30}/>,
        label: "Ammunition & Weapons",
        desc: "Ammunition, weapon systems and lifecycle management solutions.",
    },
    {
        img: satelite,
        icon: <LiaBinocularsSolid size={30}/>,
        label: "Surveilance & ISR",
        desc: "Rader, electro-optical and intelligence gathering solutions.",
    },
    {
        img: training,
        icon: <LiaChalkboardTeacherSolid size={30}/>,
        label: "Training & Support",
        desc: "Training, technical support and after-sales services.",
    },
];

export default function Capabilities() {
    return (
        <>
            <section className="bg-graphite-gray py-20 md:py-40" id="capabilities">
                <motion.div
                    className="container flex flex-col md:items-center mb-10"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <p className="text-defence-gold uppercase text-xl font-bold">
                        Our Capabilities
                    </p>
                    <h1 className="text-3xl text-white uppercase">
                        Comprehensive Solutions Across Multiple Domains
                    </h1>
                </motion.div>
                <div className="container md:px-40">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 relative">
                        {serviceList.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-deep-navy border border-graphite-gray relative overflow-hidden rounded-xl"
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                whileHover={{scale: 1.05, y: -5}}
                            >
                                <Image
                                    src={service.img}
                                    alt={service.label}
                                    className="w-full h-22 md:h-44 object-cover"
                                />
                                <div className="flex flex-col items-center px-4 py-6 bg-deep-navy relative">
                                    <motion.div
                                        className="text-defence-gold -mt-10 bg-graphite-gray/60 rounded-full p-2 mb-2"
                                        whileHover={{rotate: 360}}
                                        transition={{duration: 0.5}}
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <h3 className="text-white uppercase font-bold text-center text-md mb-2">
                                        {service.label}
                                    </h3>
                                    <p className="text-gray-400 text-center text-sm">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}