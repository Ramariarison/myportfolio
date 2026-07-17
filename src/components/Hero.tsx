import { Link } from 'lucide-react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT }
  }
}

const socialContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

const socialItem: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
}

export default function Hero() {
  return (
    <div className="h-screen bg-grid">
      <div className="max-w-6xl px-4 lg:px-0 mx-auto h-full flex flex-col justify-center text-center md:text-left gap-15 md:flex-row md:items-center md:justify-between">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col font-geist-pixel lg:max-w-2xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <motion.span variants={fadeUp} className="text-third-color">
            Open to collab
          </motion.span>
          <motion.span variants={fadeUp} className="text-fourth-color md:mb-4">
            Especially if it breaks new ground
          </motion.span>

          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.div variants={fadeUp}>
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="hidden font-semibold text-sm md:flex items-center gap-2 px-3 py-2 border-b-2 border-third-color text-third-color"
              >
                Links
                <Link width={12} height={12} strokeWidth={3} />
              </motion.button>
            </motion.div>

            <motion.div
              variants={socialContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-row gap-3 text-sm font-semibold"
            >
              <motion.a
                variants={socialItem}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                href="https://github.com/Ramariarison"
                className="px-3 py-2 rounded-2xl text-third-color hover:text-fourth-color border-l-2 border-l-third-color hover:border-l-fourth-color border-t-2 border-t-third-color hover:border-t-fourth-color"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                variants={socialItem}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                href="https://www.linkedin.com/in/andry-ramariarison-736829275"
                className="px-3 py-2 rounded-2xl text-third-color hover:text-fourth-color border-l-2 border-l-third-color hover:border-l-fourth-color border-t-2 border-t-third-color hover:border-t-fourth-color"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                variants={socialItem}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                href="https://www.facebook.com/profile.php?id=61578594957902"
                className="px-3 py-2 rounded-2xl text-third-color hover:text-fourth-color border-l-2 border-l-third-color hover:border-l-fourth-color border-t-2 border-t-third-color hover:border-t-fourth-color"
              >
                <FaFacebook size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative h-70 sm:h-90 w-70 sm:w-90">
            {/* Anneau animé */}
            <div className="absolute inset-0 rounded-full animated-ring"></div>

            {/* Image */}
            <div className="absolute inset-0.5 rounded-full bg-first-color overflow-hidden">
              <img
                src="/portfolio.png"
                alt="Portfolio"
                className="h-full w-full object-cover rounded-full"
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: '50%', x: '-50%' }}
              transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.8 }}
              className="absolute w-60 bottom-0 left-1/2 z-10"
            >
              <span className="block px-5 py-2 rounded-full bg-fourth-color text-white font-geist-pixel text-sm shadow-lg">
                Fullstack PHP/TS Developer
              </span>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
