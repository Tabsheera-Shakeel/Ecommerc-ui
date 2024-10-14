"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsQuoteVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center mt-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex justify-center items-center h-full flex-col text-center">
          <h1
            className={`text-white text-4xl font-bold transition-opacity duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Discover the <span className="text-yellow-400">Latest</span> Trends <br />
            in <span className="text-yellow-400">Fashion</span> Your Style, Your Way
          </h1>
          <p
            className={`text-base font-bold mt-4 text-yellow-400 transition-opacity duration-700 delay-200 ${
              isQuoteVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Chic. Modern. Effortless.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section id="About" className="bg-black text-white p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Meet the Founder
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Founder Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-6">
            <div className="-mt-10">
              <Image
                src="https://i.pinimg.com/564x/80/68/ce/8068ce8f02097283c45c97f91d65381a.jpg"
                alt="Founder"
                width={210}
                height={210}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Founder Description */}
          <div className="max-w-lg text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Meet Tabsheera Shakeel, the founder of Era by Tabsheera. Tabsheera is a visionary in the fashion industry, dedicated to bringing unique designs that resonate with individuals. With a passion for style and quality, she founded the brand to empower others to express themselves through fashion.
            </p>
            <blockquote className="text-yellow-400 italic">
              Fashion is not just about what you wear; it &apos;s about how you express who you are.
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
