"use client";
import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("ScrollY:", latest);
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var( --shadow-aceternity)" : "",
          width: scrolled ? "60%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-20 mx-auto flex max-w-4xl items-center justify-between rounded-full px-2 py-4"
      >
        <Image
          src={"/profile-pic.jpeg"}
          alt="Profile pic"
          height={100}
          width={100}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 py-1 text-sm"
              href={item.href}
              key={idx}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}

export default Navbar;
