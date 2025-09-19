"use client"

import { motion } from "framer-motion"

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
