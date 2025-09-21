"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Clock, DollarSign, Star, Sparkles, Droplets, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const services = [
  {
    name: "Deep Tissue Massage",
    duration: "60-90 minutes",
    price: "$100-130",
    description:
      "Therapeutic massage targeting deep muscle layers to relieve chronic tension and pain. Perfect for athletes and those with muscle knots.",
    icon: <Star className="w-6 h-6" />,
    benefits: ["Reduces chronic pain", "Improves flexibility", "Releases muscle knots", "Enhances recovery"],
    image: "/images/deep-tissue.jpg",
  },
  {
    name: "Hot Stone Therapy",
    duration: "60-90 minutes",
    price: "$100-130",
    description: "Relaxing massage using heated volcanic stones to melt away tension and promote deep relaxation.",
    icon: <Flame className="w-6 h-6" />,
    benefits: ["Deep muscle relaxation", "Improved circulation", "Stress relief", "Better sleep quality"],
    image: "/images/hot-stone.jpg",
  },
  {
    name: "Cupping Massage",
    duration: "60-90 minutes",
    price: "$100-130",
    description:
      "Traditional cupping therapy combined with massage for enhanced muscle relief and improved circulation.",
    icon: <Droplets className="w-6 h-6" />,
    benefits: ["Improved blood flow", "Reduced inflammation", "Pain relief", "Muscle recovery"],
    image: "/images/cupping.jpg",
  },
  {
    name: "Relaxation Massage",
    duration: "60-90 minutes",
    price: "$90-120",
    description:
      "Gentle, flowing massage designed to promote relaxation and reduce stress using light to medium pressure.",
    icon: <Sparkles className="w-6 h-6" />,
    benefits: ["Stress reduction", "Mental clarity", "Improved mood", "Better circulation"],
    image: "/images/relaxation.jpg",
  },
]

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

const ExpandableContent = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div variants={fadeInUp} className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left">
        <h3 className="text-xl font-semibold text-[#8B4513]">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ArrowLeft className="w-5 h-5 rotate-90" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-700"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ServiceDetail = ({ service, onBack }: { service: any; onBack: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <Button onClick={onBack} variant="ghost" className="mb-6 text-[#8B4513] hover:bg-[#8B4513]/10">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Button>

      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#8B4513]/10 rounded-full text-[#8B4513]">{service.icon}</div>
          <div>
            <h1 className="text-3xl font-bold text-[#8B4513]">{service.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{service.price}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-6">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-[#8B4513] mb-4">Benefits</h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8B4513] rounded-full"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Link href="/booking">
              <Button className="w-full bg-[#8B4513] hover:bg-[#8B4513]/90">Book This Service</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="w-full border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10 bg-transparent"
              >
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
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

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<any>(null)

  return (
    <div className="min-h-screen">
      <Header />

      <div
        className="pt-32 pb-16 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(/images/saintedhandsbackground.webp)` }}
      >
        <div className="absolute inset-0 bg-[#FEFAE0]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            {selectedService ? (
              <ServiceDetail key="detail" service={selectedService} onBack={() => setSelectedService(null)} />
            ) : (
              <motion.div key="grid" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-12"
                >
                  <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">Our Services</h1>
                  <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Experience healing through our specialized massage therapies
                  </p>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid md:grid-cols-2 gap-6 mb-12"
                >
                  {services.map((service, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card
                        className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-[#8B4513]/20 hover:border-[#8B4513]/40"
                        onClick={() => setSelectedService(service)}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#8B4513]/10 rounded-full text-[#8B4513]">{service.icon}</div>
                            <div>
                              <CardTitle className="text-[#8B4513]">{service.name}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="secondary" className="text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {service.duration}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  <DollarSign className="w-3 h-3 mr-1" />
                                  {service.price}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">{service.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <ExpandableContent title="What to expect in a massage session?">
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>
                        Discussing and informing therapist of medical history (i.e. fibromyalgia, scoliosis, edema,
                        cancer, etc).
                      </li>
                      <li>Informing therapist of any past, recent or current injuries.</li>
                      <li>Pressure preference and focus areas.</li>
                      <li>Undressing to your comfort level.</li>
                      <li>
                        After a deep tissue and hot stones session redness and feelings of soreness from certain body
                        parts worked on may occur that could last from 2-3 days depending on skin sensitivity. In rare
                        occasions, bruising may occur during the session for people with high sensitivity.
                      </li>
                      <li>
                        It is to be expected to have marks that could last 2-3 weeks after a cupping massage session.
                      </li>
                    </ul>
                  </ExpandableContent>

                  <ExpandableContent title="What are enhancements offered?">
                    <div className="space-y-4">
                      <p>
                        <strong>Hot Stones:</strong> Heated volcanic stones placed on key points to enhance relaxation
                        and muscle relief.
                      </p>
                      <p>
                        <strong>Cupping:</strong> Traditional therapy using suction cups to improve circulation and
                        reduce muscle tension.
                      </p>
                      <p>
                        <strong>Aromatherapy:</strong> Essential oils to enhance the therapeutic benefits and create a
                        calming atmosphere.
                      </p>
                    </div>
                  </ExpandableContent>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
