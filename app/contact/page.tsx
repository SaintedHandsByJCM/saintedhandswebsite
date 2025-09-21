"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
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

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="pt-32 pb-16 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(/images/saintedhandsbackground.webp)` }}
      >
        <div className="absolute inset-0 bg-[#FEFAE0]/80"></div>
        <motion.div
          className="container mx-auto px-6 text-[#283618] relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
            Contact
          </motion.h1>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            <motion.div variants={fadeInUp} className="bg-[#FAEDCD]/90 p-8 rounded-2xl border border-[#D4A373]/20">
              <h3 className="text-2xl font-bold mb-4 font-serif">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#606C38]" />
                  <div>
                    <p className="text-[#606C38]">
                      <strong>Phone:</strong> 508-215-7462
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#606C38]" />
                  <div>
                    <p className="text-[#606C38]">
                      <strong>Email:</strong> SaintedHandsbyJCM@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#606C38]" />
                  <div>
                    <a
                      href="https://www.instagram.com/saintedhandsbyjcm?igsh=Z25wNnhlaGpvOWcx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#606C38] hover:text-[#BC6C25] transition-colors"
                    >
                      <strong>Instagram:</strong> @saintedhandsbyjcm
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#FAEDCD]/90 p-8 rounded-2xl border border-[#D4A373]/20">
              <h3 className="text-2xl font-bold mb-4 font-serif">Get in Touch</h3>
              <p className="text-[#606C38] mb-6">
                Ready to experience healing through massage therapy? Contact me to schedule your appointment or ask any
                questions about our services.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="tel:508-215-7462"
                  className="flex items-center justify-center gap-2 bg-[#D4A373] text-white px-6 py-3 rounded-lg hover:bg-[#BC6C25] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:SaintedHandsbyJCM@gmail.com"
                  className="flex items-center justify-center gap-2 bg-[#606C38] text-white px-6 py-3 rounded-lg hover:bg-[#283618] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#FAEDCD]/90 p-8 rounded-2xl border border-[#D4A373]/20">
              <h3 className="text-2xl font-bold mb-4 font-serif">Hours & Availability</h3>
              <p className="text-[#606C38] mb-4">
                I offer flexible scheduling to accommodate your needs. Sessions are available by appointment only.
              </p>
              <p className="text-[#606C38]">
                <strong>Response Time:</strong> I typically respond to calls and emails within 24 hours.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
