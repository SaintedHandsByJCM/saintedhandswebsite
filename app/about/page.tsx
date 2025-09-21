"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#FEFAE0]/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center border-b border-[#D4A373]/20">
        {/* Left Side - Profile Picture + Navigation */}
        <div className="flex items-center space-x-6 flex-1">
          {/* Profile Picture */}
          <img
            src="/images/profile.jpeg"
            alt="John Carlo Madrio"
            className="w-12 h-12 rounded-full object-cover border-2 border-[#D4A373]/50 hidden md:block"
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold">
              Home
            </Link>
            <Link href="/services" className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold">
              Services
            </Link>
            <Link href="/about" className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold">
              About
            </Link>
            <Link href="/contact" className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold">
              Contact
            </Link>
          </nav>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <img src="/images/saintedhandslogo.webp" alt="Sainted Hands Logo" className="h-24 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Right Side - Book Now Button */}
        <div className="flex justify-end flex-1">
          <div className="hidden md:block">
            <Link
              href="/booking"
              className="bg-[#D4A373] text-white font-semibold py-2 px-5 rounded-full hover:bg-[#BC6C25] transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#283618]">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12M6 12h12"
                  ></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FEFAE0]/95"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              <img
                src="/images/profile.jpeg"
                alt="John Carlo Madrio"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#D4A373]/50 mb-2"
              />
              <Link href="/" className="text-[#283618] font-semibold" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-[#283618] font-semibold" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="text-[#283618] font-semibold" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-[#283618] font-semibold" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="/booking"
                className="bg-[#D4A373] text-white font-semibold py-2 px-6 rounded-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  const images = {
    profile: "/images/profile.webp",
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="pt-32 pb-16 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(/images/saintedhandsbackground.webp)` }}
      >
        <div className="absolute inset-0 bg-[#FEFAE0]/80"></div>
        <motion.div
          className="container mx-auto px-6 text-[#283618] text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 font-serif">
            About Sainted Hands
          </motion.h1>
          <motion.img
            variants={fadeInUp}
            src={images.profile}
            alt="John Carlo Madrio"
            className="w-48 h-48 rounded-full object-cover mx-auto mb-8 border-4 border-[#D4A373]/50"
          />
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold font-serif">
            John Carlo Madrio
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#606C38] mt-4 max-w-3xl mx-auto bg-[#FEFAE0]/80 p-6 rounded-2xl"
          >
            I'm a very spiritual person that walks the path of benevolence and altruism. I'm a firm believer that
            stretching (i.e. Yoga) and daily habits can form a healthy body. A holistic approach in massage therapy can
            go a long way in creating a healthy body, mind and spirit.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FAEDCD]/90 p-6 rounded-2xl border border-[#D4A373]/20">
                <h3 className="text-xl font-bold mb-4 font-serif">My Philosophy</h3>
                <p className="text-[#606C38] text-left">
                  Healing is not just about addressing physical discomfort—it's about nurturing the connection between
                  body, mind, and spirit. Through therapeutic touch and mindful presence, I help clients find balance
                  and restore their natural state of wellness.
                </p>
              </div>

              <div className="bg-[#FAEDCD]/90 p-6 rounded-2xl border border-[#D4A373]/20">
                <h3 className="text-xl font-bold mb-4 font-serif">My Approach</h3>
                <p className="text-[#606C38] text-left">
                  Every session is tailored to your unique needs. I combine traditional massage techniques with modern
                  therapeutic methods, creating a personalized healing experience that addresses your specific concerns
                  and wellness goals.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
