"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ZapIcon } from "lucide-react" // Import ZapIcon

// --- SVG Icon Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.233.42a7.762 7.762 0 0 0-2.812 1.83A7.847 7.847 0 0 0 .42 5.233C.222 5.718.087 6.273.048 7.102.01 7.929 0 8.396 0 12.017c0 3.624.01 4.09.048 4.918.039.83.174 1.384.372 1.87.204.48.478.923.923 1.417.444.445.887.719 1.416.923.487.198 1.041.333 1.87.372C7.929 23.99 8.396 24 12.017 24c3.624 0 4.09-.01 4.918-.048.83-.04 1.384-.174 1.87-.372a7.847 7.847 0 0 0 1.416-.923c.445-.444.719-.887.923-1.416.198-.487.333-1.041.372-1.87.04-.83.048-1.295.048-4.918 0-3.621-.01-4.088-.048-4.918-.04-.83-.174-1.384-.372-1.87a7.762 7.762 0 0 0-.923-1.416A7.847 7.847 0 0 0 18.804.42c-.487-.198-1.041-.333-1.87-.372C16.107.01 15.64 0 12.017 0zm0 3.623a6.264 6.264 0 1 0 0 12.528 6.264 6.264 0 0 0 0-12.528zM12.017 9.405a2.612 2.612 0 1 1 0 5.224 2.612 2.612 0 0 1 0-5.224zm5.13-.481a1.464 1.464 0 1 1-2.928 0 1.464 1.464 0 0 1 2.928 0z"
      clipRule="evenodd"
    />
  </svg>
)

const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)

// --- Enhancement Product Icons ---
const MassageGunIcon = () => (
  <div className="w-8 h-8 bg-[#D4A373] rounded-lg flex items-center justify-center">
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L8 6h3v10h2V6h3l-4-4z" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  </div>
)

const CuppingIcon = () => (
  <div className="w-8 h-8 bg-[#D4A373] rounded-full flex items-center justify-center">
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
    </svg>
  </div>
)

const HotStoneIcon = () => (
  <div className="w-8 h-8 bg-[#D4A373] rounded-lg flex items-center justify-center">
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="8" ry="4" />
      <ellipse cx="12" cy="8" rx="6" ry="3" />
    </svg>
  </div>
)

const ScalarMachineIcon = () => (
  <div className="w-8 h-8 bg-[#D4A373] rounded-lg flex items-center justify-center">
    <ZapIcon className="w-5 h-5 text-white" />
  </div>
)

const FlowerOfLifeBackground = () => (
  <motion.div
    className="absolute inset-0 z-0 opacity-5"
    animate={{ rotate: 360 }}
    transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="flower" patternUnits="userSpaceOnUse" width="100" height="115.47">
          <g className="text-[#BC6C25]">
            <circle cx="50" cy="57.735" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="21.1325" cy="43.30125" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="78.8675" cy="43.30125" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="21.1325" cy="72.16875" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="78.8675" cy="72.16875" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="28.8675" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50" cy="86.6025" r="28.8675" stroke="currentColor" strokeWidth="1" fill="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#flower)" />
    </svg>
  </motion.div>
)

const SectionDivider = () => (
  <div className="py-16 flex justify-center items-center">
    <div className="w-1/3 h-px bg-[#D4A373]/30"></div>
    <svg width="24" height="24" viewBox="0 0 100 100" className="text-[#D4A373] mx-4">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M50,15 L85,50 L50,85 L15,50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
    <div className="w-1/3 h-px bg-[#D4A373]/30"></div>
  </div>
)

// --- Data for the Website ---
const servicesData = [
  {
    id: "personal",
    title: "Customized/Personal Massage",
    description: "A session tailored specifically to your needs, addressing your unique concerns and goals.",
    imgSrc: "/images/customizedpersonalmassage.webp",
    details: {
      bestFor:
        "Stress relief, general wellness, addressing multiple concerns, first-time clients, those with varying needs, chronic pain management, relaxation and rejuvenation, maintaining overall health and well-being.",
      whatToExpect:
        "Your session begins with a detailed consultation where we discuss your health history, current concerns, stress levels, and specific areas of tension or pain. Based on this conversation, I'll create a personalized treatment plan that may incorporate multiple massage techniques including Swedish relaxation strokes, deep tissue work, trigger point therapy, and gentle stretching. Throughout the session, I'll check in with you about pressure preferences and adjust techniques as needed. This collaborative approach ensures you receive exactly what your body needs that day. The session may include aromatherapy with carefully selected essential oils, and I'll provide guidance on post-massage care including hydration, gentle movement, and self-care techniques to extend the benefits of your treatment.",
    },
  },
  {
    id: "deep-tissue",
    title: "Deep Tissue",
    description: "Targets deeper layers of muscle and connective tissue. Ideal for chronic aches and pains.",
    imgSrc: "/images/deeptissue.webp",
    details: {
      bestFor:
        "Chronic muscle pain and tension, postural problems from desk work or physical labor, repetitive strain injuries, sports-related muscle tightness, fibromyalgia symptoms, recovery from injuries, breaking up scar tissue, improving range of motion, and addressing long-standing muscular imbalances.",
      whatToExpect:
        "Deep tissue massage uses slower, more deliberate strokes and sustained pressure to reach the deeper layers of muscle and fascia. I'll use my forearms, elbows, and specialized techniques to work through layers of tension. You may experience some discomfort as we work through knots and adhesions, but communication is key - I'll regularly check that the pressure is therapeutic rather than painful. You might feel some soreness for 24-48 hours after the session as your body processes the work and toxins are released. This is normal and indicates that healing is taking place. I'll provide you with aftercare instructions including hydration recommendations, gentle stretching exercises, and suggestions for heat or ice application. The benefits typically include reduced pain, improved mobility, better posture, and a sense of release in chronically tight areas.",
    },
  },
  {
    id: "rtr",
    title: "Rapid Tension Release (RTR)",
    description: "Utilizes advanced techniques to quickly alleviate muscle tightness and improve flexibility.",
    imgSrc: "/images/massagegunRTR.jpeg",
    details: {
      bestFor:
        "Athletes preparing for or recovering from events, acute muscle tightness and spasms, improving range of motion quickly, breaking through stubborn knots, pre-workout preparation, post-workout recovery, addressing specific problem areas, and anyone needing fast, effective tension relief.",
      whatToExpected:
        "RTR combines advanced massage techniques with specialized equipment including a therapeutic percussion device (theragun) that features both heating and cooling capabilities. The session begins with assessment of your specific tension patterns and range of motion limitations. I'll use the theragun's heating function to warm and soften tight tissues, followed by targeted percussion therapy to break up adhesions and knots. The cooling function can be applied to reduce inflammation and provide an ice-pack-like sensation for acute issues. This is combined with manual techniques including trigger point therapy, myofascial release, and assisted stretching. The intensity can be quite focused and you'll likely feel immediate changes in muscle tension and flexibility. You'll experience the dramatic transformation shown in our before/after image - from tense, knotted muscle fibers to relaxed, properly aligned tissue. Results are often felt immediately, though some soreness may occur as your body adjusts to the newly released tension patterns.",
    },
  },
  {
    id: "cupping",
    title: "Cupping",
    description: "An ancient form of alternative medicine to help with pain, inflammation, and blood flow.",
    imgSrc: "/images/electronicmassagecup.jpeg",
    details: {
      bestFor:
        "Pain relief and muscle tension, reducing inflammation and swelling, improving circulation and lymphatic drainage, respiratory issues and congestion, digestive problems, stress and anxiety relief, cellulite reduction, detoxification support, and enhancing athletic performance and recovery.",
      whatToExpect:
        "I use electric cupping devices with red light therapy features that add therapeutic heat to enhance the healing process. The cups create controlled suction on your skin, drawing blood flow to the surface and promoting healing. You'll feel a pulling sensation that most clients find surprisingly relaxing. The suction helps separate fascial layers, increase blood flow, and draw toxins to the surface for elimination. The red light therapy adds an additional healing element, promoting cellular regeneration and reducing inflammation. Cupping marks (circular discolorations) are completely normal and expected - these typically last 2-3 weeks and indicate that stagnant blood and toxins are being drawn to the surface. The color and intensity of marks can indicate the level of stagnation in that area. These marks are not bruises but rather a sign that the therapy is working. I'll explain what different mark colors mean and provide aftercare instructions including staying hydrated, avoiding alcohol for 24 hours, and gentle movement to support the detoxification process.",
    },
  },
  {
    id: "hot-stones",
    title: "Hot Stones",
    description: "Heated stones are placed on the body to ease muscle stiffness and increase circulation.",
    imgSrc: "/images/hotstone.webp",
    details: {
      bestFor:
        "Deep relaxation and stress relief, easing chronic muscle tension and stiffness, improving circulation and lymphatic flow, reducing anxiety and promoting better sleep, seasonal affective disorder, arthritis and joint pain, preparing muscles for deeper work, and creating a meditative, spa-like experience.",
      whatToExpect:
        "I use smooth, heated basalt stones that are warmed to the perfect therapeutic temperature (typically 120-130°F). These volcanic stones retain heat exceptionally well and provide steady, penetrating warmth. The session begins with stones placed on key energy points along your spine, in your palms, and between your toes to begin the warming and relaxation process. I then use additional heated stones as extensions of my hands, gliding them along your muscles with oil to provide deep, warming massage strokes. The heat penetrates deeply into muscle tissue, allowing me to work more effectively while you experience profound relaxation. The warmth helps dilate blood vessels, improving circulation and helping your body naturally release tension. Many clients find the experience deeply meditative and report improved sleep for several nights following the treatment. The combination of heat, pressure, and smooth stone texture creates a uniquely soothing experience that calms both body and mind. I'll monitor the stone temperature throughout to ensure your comfort and safety.",
    },
  },
  {
    id: "tarot",
    title: "Cacao & Tarot Reading",
    description: "A unique session combining the heart-opening properties of cacao with intuitive tarot guidance.",
    imgSrc: "/images/tarot.jpeg",
    details: {
      bestFor:
        "Gaining clarity on life decisions and direction, spiritual connection and personal growth, setting intentions and manifesting goals, processing emotional challenges, exploring relationships and career paths, connecting with intuition, celebrating transitions and new beginnings, and seeking guidance during uncertain times.",
      whatToExpect:
        "This sacred session begins with a ceremonial cup of pure, organic cacao - a heart-opening plant medicine that has been used for centuries in spiritual practices. The cacao is prepared as a warm, rich drink that helps open your heart chakra, enhance intuition, and create a deeper connection to your inner wisdom. As you sip the cacao mindfully, we'll set intentions for your reading and create sacred space. The cacao contains natural compounds that promote feelings of love, connection, and expanded awareness without any psychoactive effects. Once you're in this receptive state, I'll conduct an intuitive tarot reading using carefully selected card spreads that address your specific questions or life situations. I work with multiple tarot decks and will choose the one that resonates most with your energy. The reading explores past influences, present circumstances, and potential future outcomes, while always emphasizing your free will and power to shape your path. I'll help you interpret the cards' messages and provide practical guidance for applying the insights to your daily life. The session concludes with integration time to process the messages and set clear intentions moving forward. Many clients report feeling more centered, clear, and connected to their purpose after this unique combination of heart-opening cacao and intuitive guidance.",
    },
  },
]

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
}

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
}

// --- Reusable Animated Components ---
const MotionButton = ({ children, onClick, className, type = "button", disabled = false }: any) => (
  <motion.button
    whileHover={!disabled ? { scale: 1.05 } : {}}
    whileTap={!disabled ? { scale: 0.95 } : {}}
    onClick={onClick}
    className={className}
    type={type}
    disabled={disabled}
  >
    {children}
  </motion.button>
)

const ExpandableContent = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div variants={fadeInUp} className="bg-[#FAEDCD]/90 p-6 rounded-2xl border border-[#D4A373]/20">
      <h3 className="text-2xl font-bold mb-4 font-serif text-[#283618]">{title}</h3>
      <motion.div
        animate={{ height: isOpen ? "auto" : "60px" }}
        transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden text-[#606C38]"
      >
        {children}
      </motion.div>
      <MotionButton onClick={() => setIsOpen(!isOpen)} className="text-[#BC6C25] font-semibold mt-4 hover:underline">
        {isOpen ? "Read Less" : "Read More"}
      </MotionButton>
    </motion.div>
  )
}

// --- Page Components ---
const Header = ({ setPage, onServiceSelect, isVisible }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)

  const navigate = (page: string) => {
    setPage(page)
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#FEFAE0]/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
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
            <MotionButton
              onClick={() => navigate("home")}
              className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold"
            >
              Home
            </MotionButton>

            <motion.div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <MotionButton
                onClick={() => navigate("services")}
                className="text-[#283618] hover:text-[#D4A373] transition-colors flex items-center font-semibold"
              >
                Services
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </MotionButton>

              <AnimatePresence>
                {isServicesMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#FAEDCD] rounded-lg shadow-lg border border-[#D4A373]/30 p-2"
                  >
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          onServiceSelect(service)
                          navigate("services")
                        }}
                        className="w-full text-left px-4 py-2 text-[#283618] hover:bg-[#D4A373]/50 rounded-md transition-colors"
                      >
                        {service.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <MotionButton
              onClick={() => navigate("about")}
              className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold"
            >
              About
            </MotionButton>
            <MotionButton
              onClick={() => navigate("contact")}
              className="text-[#283618] hover:text-[#D4A373] transition-colors font-semibold"
            >
              Contact
            </MotionButton>
          </nav>
        </div>

        {/* Center - Logo (1.5x bigger) */}
        <div className="flex justify-center">
          <img
            src="/images/saintedhandslogo.webp"
            alt="Sainted Hands Logo"
            className="h-24 w-auto cursor-pointer"
            onClick={() => navigate("home")}
          />
        </div>

        {/* Right Side - Book Now Button */}
        <div className="flex justify-end flex-1">
          <div className="hidden md:block">
            <MotionButton
              onClick={() => navigate("booking")}
              className="bg-[#D4A373] text-white font-semibold py-2 px-5 rounded-full hover:bg-[#BC6C25] transition-colors"
            >
              Book Now
            </MotionButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#283618]">
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
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
              <MotionButton onClick={() => navigate("home")} className="text-[#283618] font-semibold">
                Home
              </MotionButton>
              <MotionButton onClick={() => navigate("services")} className="text-[#283618] font-semibold">
                Services
              </MotionButton>
              <MotionButton onClick={() => navigate("about")} className="text-[#283618] font-semibold">
                About
              </MotionButton>
              <MotionButton onClick={() => navigate("contact")} className="text-[#283618] font-semibold">
                Contact
              </MotionButton>
              <MotionButton
                onClick={() => navigate("booking")}
                className="bg-[#D4A373] text-white font-semibold py-2 px-6 rounded-full mt-2"
              >
                Book Now
              </MotionButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const HeroSection = ({ setPage, images }: any) => (
  <motion.section
    className="h-screen flex flex-col justify-between items-center text-center relative overflow-hidden bg-[#FEFAE0] bg-cover bg-center"
    style={{ backgroundImage: `url(${images.hero})` }}
    initial={{ clipPath: "circle(0% at 50% 50%)" }}
    animate={{ clipPath: "circle(150% at 50% 50%)" }}
    transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
  >
    <div className="absolute inset-0 bg-[#FEFAE0]/60"></div>
    <FlowerOfLifeBackground />

    {/* Top spacer */}
    <div className="flex-1"></div>

    {/* Main content in the center */}
    <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#283618] mb-6 leading-tight font-serif text-center"
        style={{ textShadow: "2px 2px 4px rgba(254,250,224,0.8)" }}
      >
        {"Thank You for Honoring Your Body".split(" ").map((word, wordIndex) => (
          <motion.span key={wordIndex} className="inline-block mr-4">
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 3 }}
        className="text-lg md:text-xl lg:text-2xl text-[#283618] max-w-3xl mx-auto font-bold font-serif text-center"
        style={{ textShadow: "2px 2px 4px rgba(254,250,224,0.9)" }}
      >
        "Your body is Your Temple."
      </motion.p>
    </div>

    {/* Button at the bottom */}
    <div className="container mx-auto px-6 relative z-10 pb-16">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 3.2 }}
        className="text-center"
      >
        <MotionButton
          onClick={() => setPage("booking")}
          className="bg-[#BC6C25] text-white font-bold py-3 px-8 rounded-full hover:bg-[#D4A373] transition-colors text-lg shadow-lg"
        >
          Book Your Session
        </MotionButton>
      </motion.div>
    </div>
  </motion.section>
)

const ServicesSection = ({ onServiceSelect, services, backgroundImage }: any) => {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <motion.section
      className="py-20 bg-cover bg-center bg-no-repeat relative" // Added bg-no-repeat and adjusted sizing
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Changed from default to cover to fit better
        backgroundPosition: "center center", // Ensure it's centered
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="absolute inset-0 bg-[#FEFAE0]/85"></div> {/* Slightly more opaque overlay */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283618] font-serif">Services Offered</h2>
          <p className="text-lg text-[#606C38] mt-4 max-w-2xl mx-auto">
            A range of therapies designed to restore balance and promote well-being.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="bg-[#FAEDCD]/90 rounded-2xl text-center border border-[#D4A373]/20 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={service.imgSrc || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <MotionButton
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex flex-col items-center justify-center"
                >
                  <h3 className="text-xl font-bold text-[#606C38] mb-2 font-serif hover:text-[#BC6C25] transition-colors">
                    {service.title}
                  </h3>
                  <motion.svg
                    className={`w-5 h-5 ml-2 text-[#BC6C25] transition-transform duration-300`}
                    animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </MotionButton>

                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[#283618]/80 mb-4">{service.description}</p>
                      <MotionButton
                        onClick={() => onServiceSelect(service)}
                        className="bg-[#D4A373] text-white px-4 py-2 rounded-full hover:bg-[#BC6C25] transition-colors text-sm"
                      >
                        Learn More & Book
                      </MotionButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const SpecialOfferSection = ({ setPage, images }: any) => (
  <motion.section
    className="py-20 bg-cover bg-center"
    style={{ backgroundImage: `url(${images.offer})` }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1 }}
  >
    <div className="bg-[#FAEDCD]/70 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10">
          <div className="inline-block bg-[#BC6C25] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Limited Time Promotion
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#606C38] mb-4 font-serif">Special Discounted Package</h2>
          <p className="text-[#283618] mb-2 text-xl">1 hour ($100) or 90 min ($130)</p>
          <p className="text-[#606C38] mb-8 max-w-xl mx-auto">
            Includes a 1hr or 1.5hr massage with any enhancement of your choice, and 1 optional special random oil or
            lotion.
          </p>
          <MotionButton
            onClick={() => setPage("booking")}
            className="bg-[#D4A373] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#BC6C25] transition-colors shadow-lg"
          >
            Click Here to Book
          </MotionButton>
        </div>
      </div>
    </div>
  </motion.section>
)

const Footer = () => (
  <footer className="bg-[#FEFAE0] border-t border-[#D4A373]/20">
    <div className="container mx-auto px-6 py-8 text-center text-[#606C38]">
      <p>&copy; {new Date().getFullYear()} Sainted Hands. All Rights Reserved.</p>
      <div className="flex justify-center mt-4">
        <a
          href="https://www.instagram.com/saintedhandsbyjcm?igsh=Z25wNnhlaGpvOWcx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#BC6C25] transition-colors"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  </footer>
)

// --- Main Page Components ---
const PageWrapper = ({ children }: any) => (
  <motion.div variants={fadeIn} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
)

const HomePage = ({ setPage, images, services, onServiceSelect }: any) => (
  <PageWrapper>
    <HeroSection setPage={setPage} images={images} />
    <SectionDivider />
    <ServicesSection
      onServiceSelect={onServiceSelect}
      services={services}
      backgroundImage="/images/saintedhandsbackground.webp"
    />
    <SectionDivider />
    <SpecialOfferSection setPage={setPage} images={images} />
  </PageWrapper>
)

const ServiceDetail = ({ service, onBack, setPage }: any) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="text-center mb-12">
      <MotionButton
        onClick={onBack}
        className="inline-flex items-center text-[#606C38] hover:text-[#BC6C25] transition-colors mb-8"
      >
        <BackIcon />
        Back to All Services
      </MotionButton>
      <img
        src={service.imgSrc || "/placeholder.svg"}
        alt={service.title}
        className="w-full h-64 object-cover rounded-2xl mb-8 shadow-lg"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#283618] font-serif">{service.title}</h1>
    </div>

    <div className="max-w-3xl mx-auto bg-[#FAEDCD]/90 p-8 rounded-2xl border border-[#D4A373]/20 text-center">
      <h3 className="text-2xl font-bold text-[#606C38] mb-2 font-serif">Best For</h3>
      <p className="text-[#283618]/80 mb-6">{service.details.bestFor}</p>
      <h3 className="text-2xl font-bold text-[#606C38] mb-2 font-serif">What to Expect</h3>
      <p className="text-[#283618]/80 mb-8">{service.details.whatToExpect}</p>
      <MotionButton
        onClick={() => setPage("booking")}
        className="bg-[#D4A373] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#BC6C25] transition-colors"
      >
        Book This Service
      </MotionButton>
    </div>
  </motion.div>
)

const ServicesPage = ({ initialService, setPage, services }: any) => {
  const [selectedService, setSelectedService] = useState(initialService)

  useEffect(() => {
    setSelectedService(initialService)
  }, [initialService])

  return (
    <PageWrapper>
      <div
        className="pt-32 pb-16 bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(/images/saintedhandsbackground.webp)` }}
      >
        <div className="absolute inset-0 bg-[#FEFAE0]/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            {selectedService ? (
              <motion.div key="detail">
                <ServiceDetail service={selectedService} onBack={() => setSelectedService(null)} setPage={setPage} />
              </motion.div>
            ) : (
              <motion.div key="grid" className="space-y-8">
                <ServicesSection
                  onServiceSelect={setSelectedService}
                  services={services}
                  backgroundImage="/images/saintedhandsbackground.webp"
                />
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
                        I offer massage therapy sessions with different enhancement. Enhancements can be added on for
                        every session. Enhancements are different modalities of massage therapy that offers unique
                        experiences added on during the massage session.
                      </p>
                      <p>
                        <strong>Rapid Tension Release</strong> - is a massage modality focused on quickly relieving
                        muscle tension and pain through targeted techniques. During the session the therapist is going
                        to use a{" "}
                        <a
                          href="https://a.co/d/3M0vcJJ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#BC6C25] font-semibold hover:text-[#D4A373] underline transition-colors"
                        >
                          theragun
                        </a>{" "}
                        that has hot and cold features creating either a feeling of an ice pack on the targeted area or
                        a single hot stone while the massage gun softens the tissue.
                      </p>
                      <p>
                        <strong>Cupping Massage</strong> - a therapeutic technique where special cups are placed on the
                        skin to create suction. This modality aims to promote blood flow, reduce muscle tension, and
                        alleviate pain. The{" "}
                        <a
                          href="https://a.co/d/df7NdhH"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#BC6C25] font-semibold hover:text-[#D4A373] underline transition-colors"
                        >
                          cups
                        </a>{" "}
                        being used by the massage therapist is an electric cup with a red light feature that adds heat
                        to the cups and further promotes healing.
                      </p>
                      <p>
                        <strong>Hot Stones Therapy</strong> - a massage modality that uses smooth, heated stones,
                        typically basalt, placed on specific areas of the body or used as tools by the therapist to
                        massage muscles.
                      </p>
                    </div>
                  </ExpandableContent>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  )
}

const AboutPage = ({ images }: any) => (
  <PageWrapper>
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
          stretching (i.e. Yoga) and daily habits can form a healthy body. A holistic approach in massage therapy can go
          a long way in creating a healthy body, mind and spirit.
        </motion.p>
      </motion.div>
    </div>
  </PageWrapper>
)

const ContactPage = () => (
  <PageWrapper>
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
            <p className="text-[#606C38] mb-2">
              <strong>Phone:</strong> 508-215-7462
            </p>
            <p className="text-[#606C38] mb-4">
              <strong>Email:</strong> SaintedHandsbyJCM@gmail.com
            </p>
            <a
              href="https://www.instagram.com/saintedhandsbyjcm?igsh=Z25wNnhlaGpvOWcx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#606C38] hover:text-[#BC6C25] transition-colors"
            >
              <InstagramIcon />
              <span className="ml-2">Instagram</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </PageWrapper>
)

// --- Advanced Calendly Integration ---
const BookingPage = () => {
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
      window.neetoCal = window.neetoCal || {
        embed: (...args: any[]) => {
          // Changed 'arguments' to '...args' to fix undeclared variable error
          ;(window.neetoCal.q = window.neetoCal.q || []).push(args)
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
      if (embedContainer && window.neetoCal) {
        // Clear previous embed
        embedContainer.innerHTML = ""

        // Initialize NeetoCal embed
        window.neetoCal.embed({
          type: "inline",
          id: selectedEvent.neetoCalId,
          organization: "saintedhands",
          elementSelector: "#neetocal-embed",
          styles: "height: 100%; width: 100%;",
        })
      }
    }
  }, [selectedEvent, paymentMethod])

  const getEventPrice = (event: any) => {
    // Extract price from event name or description
    if (event.name?.includes("1 Hour") || event.duration === 60) {
      return "$100"
    } else if (event.name?.includes("90") || event.duration === 90) {
      return "$130"
    }
    return "Contact for pricing"
  }

  const getEventDuration = (event: any) => {
    if (event.duration) {
      return event.duration >= 60 ? `${event.duration / 60}h` : `${event.duration}min`
    }
    return "Contact for duration"
  }

  const getEventDescription = (event: any) => {
    if (event.name?.includes("1 Hour") || event.duration === 60) {
      return "1 hour package with any enhancement of choice"
    } else if (event.name?.includes("90") || event.duration === 90) {
      return "90 minute package with any enhancement of choice"
    }
    return event.description_plain || "Professional massage therapy session tailored to your needs."
  }

  return (
    <PageWrapper>
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
            <MotionButton
              onClick={() => setPaymentMethod("neetocal")}
              className={`px-6 py-3 rounded-l-full font-semibold transition-colors ${
                paymentMethod === "neetocal"
                  ? "bg-[#D4A373] text-white"
                  : "bg-[#FAEDCD] text-[#606C38] hover:bg-[#D4A373]/30"
              }`}
            >
              Book via NeetoCal
            </MotionButton>
            <MotionButton
              onClick={() => setPaymentMethod("digital-payments")}
              className={`px-6 py-3 rounded-r-full font-semibold transition-colors ${
                paymentMethod === "digital-payments"
                  ? "bg-[#D4A373] text-white"
                  : "bg-[#FAEDCD] text-[#606C38] hover:bg-[#D4A373]/30"
              }`}
            >
              Pay with Digital Payments
            </MotionButton>
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
                        <div className="flex items-center justify-center text-[#283618] mb-6">
                          <ClockIcon />
                          <span className="font-semibold">{event.duration} minutes</span>
                        </div>
                        <MotionButton
                          onClick={() => setSelectedEvent(event)}
                          className="w-full bg-[#D4A373] hover:bg-[#BC6C25] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Book This Service
                        </MotionButton>
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
                    <p className="text-2xl font-bold text-[#D4A373] mb-2">{getEventPrice(selectedEvent)}</p>
                    <p className="text-[#606C38] text-sm mb-4">
                      Duration: {getEventDuration(selectedEvent)} | {getEventDescription(selectedEvent)}
                    </p>
                    <MotionButton
                      onClick={() => setSelectedEvent(null)}
                      className="inline-flex items-center text-[#606C38] hover:text-[#BC6C25] transition-colors text-sm"
                    >
                      <BackIcon />
                      Choose Different Service
                    </MotionButton>
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
                  className="inline-flex items-center px-4 py-2 bg-[#D4A373] text-white rounded-full hover:bg-[#BC6C25] transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call 508-215-7462
                </a>
                <a
                  href="mailto:SaintedHandsbyJCM@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-[#606C38] text-white rounded-full hover:bg-[#283618] transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}

// --- Browser History Management Hook ---
const useBrowserHistory = (currentPage: string, setPage: (page: string) => void) => {
  useEffect(() => {
    // Function to handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      const page = event.state?.page || "home"
      setPage(page)
    }

    // Function to update browser history when page changes
    const updateHistory = (page: string) => {
      const url = page === "home" ? "/" : `/${page}`
      const title = `Sainted Hands - ${page.charAt(0).toUpperCase() + page.slice(1)}`

      // Only push state if it's different from current state
      if (window.history.state?.page !== page) {
        window.history.pushState({ page }, title, url)
      }
    }

    // Update history when page changes
    updateHistory(currentPage)

    // Listen for browser back/forward button clicks
    window.addEventListener("popstate", handlePopState)

    // Set initial state if none exists
    if (!window.history.state) {
      window.history.replaceState(
        { page: currentPage },
        document.title,
        currentPage === "home" ? "/" : `/${currentPage}`,
      )
    }

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [currentPage, setPage])
}

// --- Main App Component ---
export default function App() {
  const [page, setPage] = useState("home")
  const [initialService, setInitialService] = useState(null)
  const [images, setImages] = useState({
    hero: "/images/massagetable.jpeg",
    offer: "/images/massagetable.jpeg",
    profile: "/images/profile.jpeg",
  })
  const [services, setServices] = useState(servicesData)
  const [isLoading, setIsLoading] = useState(false)
  const [isIntroDone, setIsIntroDone] = useState(false)

  // Use browser history management
  useBrowserHistory(page, setPage)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroDone(true)
    }, 4000) // Duration of the intro animation
    return () => clearTimeout(timer)
  }, [])

  const handleServiceSelect = (service: any) => {
    setInitialService(service)
    setPage("services")
  }

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage setPage={setPage} images={images} services={services} onServiceSelect={handleServiceSelect} />
      case "services":
        return <ServicesPage initialService={initialService} setPage={setPage} services={services} />
      case "about":
        return <AboutPage images={images} />
      case "contact":
        return <ContactPage />
      case "booking":
        return <BookingPage />
      default:
        return <HomePage setPage={setPage} images={images} services={services} onServiceSelect={handleServiceSelect} />
    }
  }

  return (
    <div className="bg-[#FEFAE0] font-sans">
      <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Quicksand:wght@400;600&display=swap');
    .font-serif { font-family: 'Playfair Display', serif; }
    .font-sans { font-family: 'Quicksand', sans-serif; }
  `}</style>

      <Header setPage={setPage} onServiceSelect={handleServiceSelect} isVisible={isIntroDone || page !== "home"} />

      <main>
        <AnimatePresence mode="wait">{React.cloneElement(renderPage(), { key: page })}</AnimatePresence>
      </main>

      <AnimatePresence>
        {(isIntroDone || page !== "home") && (
          <motion.div key="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
