"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "MacBook Mockup",
      src: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A clean product mockup showcasing a MacBook interface, designed to present UI concepts and landing page visuals in a realistic device frame.",
    },
    {
      title: "Flight Simulator",
      src: "https://images.unsplash.com/photo-1631870445430-a2d5d9fa59c7?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://images.unsplash.com/photo-1631870445430-a2d5d9fa59c7?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "An immersive flight simulation experience focusing on realism, cockpit detail, and environmental lighting to mimic real-world aviation scenarios.",
    },
    {
      title: "Race Track",
      src: "https://images.unsplash.com/photo-1727166827019-f82eb1eb1cc1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://images.unsplash.com/photo-1727166827019-f82eb1eb1cc1?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A high-speed race track environment designed to capture motion, intensity, and precision—ideal for showcasing game physics or cinematic visuals.",
    },
    {
      title: "Stock Tracker",
      src: "https://images.unsplash.com/photo-1659479749984-d48333116052?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      href: "https://images.unsplash.com/photo-1659479749984-d48333116052?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A data-driven stock tracking concept focused on visualizing market trends, price movements, and financial insights in a clear, digestible format.",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I help non-technical founders turn their startup ideas into real,
        working MVPs — fast. I handle everything from product design to
        full-stack development using React, React Native, Next.js, and Supabase.
        <br />
        <br />
        ✅ MVP Design in Figma <br /> ✅ Web & Mobile Development <br /> ✅
        Auth, Database & API setup (Supabase) <br /> ✅ Launch-ready Deployment{" "}
        <br />
        <br />
        Whether you&apos;re validating an idea or raising your first round —
        I&apos;ll help you launch a clean, functional MVP in 4-6 weeks.
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group mb-4"
          >
            <Link href={item.href} target="_blank">
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={300}
                className="aspect-square h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="mt-2 font-semibold tracking-tight text-neutral-500 dark:text-neutral-400">
                {" "}
                {item.title}{" "}
              </h2>
              <p className="max-w-sm text-justify text-sm text-neutral-500 dark:text-neutral-400">
                {" "}
                {item.description}{" "}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
