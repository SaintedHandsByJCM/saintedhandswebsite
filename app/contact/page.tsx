"use client"

import { motion } from "framer-motion"
import { Instagram, Phone, Mail } from "lucide-react"

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

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
