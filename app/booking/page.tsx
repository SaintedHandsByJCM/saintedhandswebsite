"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"

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

export default function BookingPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState<"neetocal" | "digital-payments">("neetocal")

  const neetoCalEvents = [
    {
      name: "1 Hour Massage Package",
      duration: 60,
      neetoCalId: "6ab1ef95-60e6-4445-8470-4c7021827778",
      description_plain:
        "Perfect for targeted relief and relaxation. Includes 1-hour massage with any enhancement of your choice + special oil/lotion.",
      price: "$100",
    },
    {
      name: "90 Minute Massage Package",
      duration: 90,
      neetoCalId: "37d61215-8ceb-4e91-b5dc-335d4e97b989",
      description_plain:
        "Extended session for deep healing and ultimate relaxation. Includes 90-minute massage with any enhancement of your choice + special oil/lotion.",
      price: "$130",
    },
  ]

  useEffect(() => {
    if (paymentMethod === "neetocal") {
      const script = document.createElement("script")
      script.src = "https://cdn.neetocal.com/javascript/embed.js"
      script.async = true
      document.body.appendChild(script)

      // Initialize NeetoCal global object
      ;(window as any).neetoCal = (window as any).neetoCal || {
        embed: (...args: any[]) => {
          ;((window as any).neetoCal.q = (window as any).neetoCal.q || []).push(args)
        },
      }

      return () => {
        const existingScript = document.querySelector('script[src="https://cdn.neetocal.com/javascript/embed.js"]')
        if (existingScript) {
          document.body.removeChild(existingScript)
        }
      }
    }
  }, [paymentMethod])

  useEffect(() => {
    if (selectedEvent && paymentMethod === "neetocal") {
      const embedContainer = document.getElementById("neetocal-embed")
      if (embedContainer && (window as any).neetoCal) {
        // Clear previous embed
        embedContainer.innerHTML = ""

        // Initialize NeetoCal embed
        ;(window as any).neetoCal.embed({
          type: "inline",
          id: selectedEvent.neetoCalId,
          organization: "saintedhands",
          elementSelector: "#neetocal-embed",
          styles: "height: 100%; width: 100%;",
        })
      }
    }
  }, [selectedEvent, paymentMethod])

  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="pt-32 pb-16 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(/images/saintedhandsbackground.webp)` }}
      >
        <div className="absolute inset-0 bg-[#FEFAE0]/85"></div>
        <motion.div
          className="container mx-auto px-6 relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-8 font-serif text-[#283618]"
          >
            Book Your Session
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-center text-[#606C38] mb-12 max-w-2xl mx-auto bg-[#FEFAE0]/90 p-4 rounded-2xl"
          >
            Choose your preferred service below and select your ideal date and time. Payment will be processed securely
            through our booking system.
          </motion.p>

          {/* Payment Method Tabs */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setPaymentMethod("neetocal")}
              className={`px-6 py-3 rounded-l-full font-semibold transition-colors ${
                paymentMethod === "neetocal"
                  ? "bg-[#D4A373] text-white"
                  : "bg-[#FAEDCD] text-[#606C38] hover:bg-[#D4A373]/30"
              }`}
            >
              Book via NeetoCal
            </button>
            <button
              onClick={() => setPaymentMethod("digital-payments")}
              className={`px-6 py-3 rounded-r-full font-semibold transition-colors ${
                paymentMethod === "digital-payments"
                  ? "bg-[#D4A373] text-white"
                  : "bg-[#FAEDCD] text-[#606C38] hover:bg-[#D4A373]/30"
              }`}
            >
              Pay with Digital Payments
            </button>
          </div>

          {paymentMethod === "neetocal" && (
            <>
              {!selectedEvent ? (
                // Service Selection Cards
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {neetoCalEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#D4A373]/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="inline-block bg-[#BC6C25] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                          Popular Choice
                        </div>
                        <h3 className="text-2xl font-bold text-[#283618] font-serif mb-4">{event.name}</h3>
                        <div className="text-3xl font-bold text-[#D4A373] mb-4">{event.price}</div>
                        <p className="text-[#606C38] mb-6 leading-relaxed">{event.description_plain}</p>
                        <div className="flex items-center justify-center text-[#283618] mb-6 gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{event.duration} minutes</span>
                        </div>
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="w-full bg-[#D4A373] hover:bg-[#BC6C25] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Book This Service
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
                  {/* Selected Service Header */}
                  <div className="bg-[#FAEDCD]/90 p-6 rounded-2xl border border-[#D4A373]/20 mb-8 text-center">
                    <div className="inline-block bg-[#BC6C25] text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      Limited Time Promotion
                    </div>
                    <h3 className="text-xl font-bold text-[#283618] font-serif mb-2">{selectedEvent.name}</h3>
                    <p className="text-2xl font-bold text-[#D4A373] mb-2">{selectedEvent.price}</p>
                    <p className="text-[#606C38] text-sm mb-4">
                      Duration: {selectedEvent.duration} minutes | {selectedEvent.description_plain}
                    </p>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="inline-flex items-center text-[#606C38] hover:text-[#BC6C25] transition-colors text-sm gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Choose Different Service
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#D4A373]/20">
                    <div>
                      <div id="neetocal-embed" style={{ minWidth: "320px", height: "717px" }} />

                      {/* Fallback message */}
                      <div className="p-6 text-center bg-[#FAEDCD]/30 border-t border-[#D4A373]/20">
                        <p className="text-[#606C38] text-sm mb-2">Having trouble with the calendar?</p>
                        <p className="text-[#283618] text-xs">
                          You can also book directly by calling <strong>508-215-7462</strong> or emailing{" "}
                          <strong>SaintedHandsbyJCM@gmail.com</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </>
          )}

          {paymentMethod === "digital-payments" && (
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto bg-white/95 p-8 rounded-2xl shadow-lg border border-[#D4A373]/20 text-center"
            >
              <h2 className="text-3xl font-bold text-[#283618] font-serif mb-6">Pay with Digital Payments</h2>
              <p className="text-lg text-[#606C38] mb-8">Scan the QR code for your preferred payment method:</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Venmo */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/venmo-qr.webp"
                    alt="Venmo QR Code for John Carlo Madrio"
                    className="w-48 h-48 object-contain rounded-lg shadow-md mb-4"
                  />
                  <p className="text-xl font-semibold text-[#283618] mb-1">Venmo</p>
                  <p className="text-[#606C38] text-lg">@JohnCarlo-Madrio</p>
                </div>

                {/* Zelle */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/zelle-qr.webp"
                    alt="Zelle QR Code for John Carlo Madrio"
                    className="w-48 h-48 object-contain rounded-lg shadow-md mb-4"
                  />
                  <p className="text-xl font-semibold text-[#283618] mb-1">Zelle</p>
                  <p className="text-[#606C38] text-lg">SaintedHandsbyJCM@gmail.com</p>
                </div>

                {/* Cash App */}
                <div className="flex flex-col items-center">
                  <img
                    src="/images/cashapp-qr.webp"
                    alt="Cash App QR Code for John Carlo Madrio"
                    className="w-48 h-48 object-contain rounded-lg shadow-md mb-4"
                  />
                  <p className="text-xl font-semibold text-[#283618] mb-1">Cash App</p>
                  <p className="text-[#606C38] text-lg">$JohnMadrio</p>
                </div>
              </div>

              <p className="text-[#606C38] text-sm mt-8">
                Please ensure you confirm your booking details with John Carlo directly after sending payment.
              </p>
            </motion.div>
          )}

          {/* Help Section */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <div className="bg-[#FAEDCD]/90 p-6 rounded-2xl border border-[#D4A373]/20 max-w-2xl mx-auto">
              <h4 className="text-lg font-bold text-[#283618] font-serif mb-3">Need Help Booking?</h4>
              <p className="text-[#606C38] mb-4">
                Having trouble with the calendar or have questions about our services?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:508-215-7462"
                  className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-full hover:bg-[#BC6C25] transition-colors gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call 508-215-7462
                </a>
                <a
                  href="mailto:SaintedHandsbyJCM@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-[#606C38] text-white rounded-full hover:bg-[#283618] transition-colors gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
