"use client";

import { useRive } from "@rive-app/react-canvas";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { WiDaySunny } from "react-icons/wi";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

export default function Page() {
  const [mode, setMode] = useState("light");
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);

  const { RiveComponent } = useRive({
    src: "/pet_scene.riv",
    stateMachines: mode === "light" ? "State Machine 1" : "State Machine 2",
    autoplay: true,
  });

  const isNight = mode === "night";

  const handleToggle = () => {
    const tl = gsap.timeline();

    tl.to(buttonRef.current, {
      scale: 1.4,
      borderRadius: "60% 40% 70% 30% / 30% 60% 40% 70%",
      duration: 0.2,
      ease: "power2.out",
    })
      .to(buttonRef.current, {
        scale: 0.85,
        borderRadius: "40% 60% 30% 70% / 70% 30% 60% 40%",
        duration: 0.15,
        ease: "power2.in",
      })
      .to(
        iconRef.current,
        {
          rotate: 270,
          scale: 0,
          opacity: 0,
          duration: 0.2,
          ease: "back.in(3)",
        },
        "<",
      )
      .to(
        textRef.current,
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.15,
          ease: "power3.in",
        },
        "<",
      )
      .add(() => setMode((prev) => (prev === "light" ? "night" : "light")))
      .to(buttonRef.current, {
        scale: 1,
        borderRadius: "9999px",
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      })
      .to(
        iconRef.current,
        {
          rotate: 360,
          scale: 1.2,
          opacity: 1,
          duration: 0.25,
          ease: "back.out(3)",
        },
        "<0.1",
      )
      .to(iconRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1.5, 0.4)",
      })
      .to(
        textRef.current,
        {
          scaleX: 1.1,
          opacity: 1,
          duration: 0.2,
          ease: "back.out(2)",
        },
        "<",
      )
      .to(textRef.current, {
        scaleX: 1,
        duration: 0.25,
        ease: "elastic.out(1.2, 0.5)",
      });
  };

  return (
    <div
      className={`relative w-full flex items-center justify-center py-10 min-h-screen transition-colors duration-500 ${
        isNight
          ? "bg-gradient-to-b from-[#C2BAFF] to-[#F7F0FF]"
          : "bg-[#4C596C]"
      }`}
    >
      {/* 🔥 TOP CENTER LOGO */}
      <div className="absolute top-5 left-5 md:left-10">
        <Image
          src={isNight ? "/dark.svg" : "/light.svg"}
          alt="logo"
          width={120}
          height={40}
          className="h-12 md:h-16 min-[1920px]:h-20 w-auto"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="grid w-full max-w-6xl grid-cols-1 px-5 items-center md:grid-cols-2 md:-ml-28">
        {/* LEFT — Rive */}
        <div className="flex items-center justify-center">
          <div key={mode} className="h-[420px] w-full max-w-[420px]">
            <RiveComponent className="h-full w-full" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center text-center">
          {/* Toggle */}
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="mb-6 flex items-center font gap-3 transition absolute top-8 md:top-6 right-5 md:right-10 cursor-pointer"
          >
            <span
              ref={textRef}
              className={`text-lg min-[1920px]:text-2xl ${
                isNight ? "text-[#3B1F6B]" : "text-white"
              }`}
            >
              {isNight ? "Night mode" : "Light mode"}
            </span>

            <div
              ref={iconRef}
              className={`flex h-8 w-8 min-[1920px]:h-11 min-[1920px]:w-11 items-center justify-center rounded-full border transition ${
                isNight
                  ? "border-[#3B1F6B] text-[#3B1F6B]"
                  : "border-white text-white"
              }`}
            >
              {isNight ? (
                <BsMoonStarsFill size={16} />
              ) : (
                <WiDaySunny size={20} />
              )}
            </div>
          </button>

          {/* Subtitle */}
          <p
            className={`mb-2 text-lg font min-[1920px]:text-2xl ${
              isNight ? "text-[#5C3694]" : "text-white"
            }`}
          >
            Join the Waitlist
          </p>

          {/* Heading */}
          <h1
            className={`mb-4 text-4xl min-[1920px]:text-7xl font md:text-6xl ${
              isNight ? "text-[#5C3694]" : "text-white"
            }`}
          >
            We Are Coming Soon!
          </h1>

          {/* Input */}
          <div className="mb-6 flex flex-col gap-2 items-center sm:flex-row sm:justify-center w-full max-w-md min-[1920px]:max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className={`flex-1 rounded-full border px-5 py-3 min-[1920px]:py-4 min-[1920px]:text-lg text-sm outline-none w-full ${
                isNight
                  ? "bg-white border-[#5C3694] text-[#5C3694]"
                  : "bg-[#4C596C] border-white text-white placeholder:text-gray-400"
              }`}
            />
            <button
              className={`rounded-full font px-7 py-3 min-[1920px]:py-4 min-[1920px]:text-xl text-lg transition whitespace-nowrap ${
                isNight
                  ? "bg-[#5C3694] text-white hover:bg-purple-800"
                  : "bg-white text-[#5C3694] hover:bg-gray-100"
              }`}
            >
              Join Us!
            </button>
          </div>

          {/* Social */}
          <p
            className={`mb-4 text-lg min-[1920px]:text-2xl font ${
              isNight ? "text-[#5C3694]" : "text-white"
            }`}
          >
            Follow us on Socials for more updates!
          </p>

          <div className="mb-8 flex gap-3">
            {[FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaTiktok].map(
              (Icon, i) => (
                <div
                  key={i}
                  className={`flex h-9 w-9 min-[1920px]:h-12 min-[1920px]:w-12 cursor-pointer items-center justify-center rounded-full border transition hover:scale-110 ${
                    isNight
                      ? "border-[#5C3694] text-[#5C3694] hover:bg-purple-100"
                      : "border-gray-500 text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} className="min-[1920px]:hidden" />
                  <Icon size={22} className="hidden min-[1920px]:block" />
                </div>
              ),
            )}
          </div>

          {/* Footer */}
          <p
            className={`text-sm min-[1920px]:text-lg ${
              isNight ? "text-[#5C3694AD]" : "text-[#FFFFFF80]"
            }`}
          >
            © 2024 TailsWatch, Inc. All rights Reserved. Powered by{" "}
            <span
              className={`cursor-pointer font-bold underline ${
                isNight ? "text-[#5C3694]" : "text-white"
              }`}
            >
              PRODIGI Studios.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
