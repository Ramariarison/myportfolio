import { Download, Mail } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT }
  }
}

const titleBarsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const barVariant: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
}

export default function About() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 lg:px-0 relative font-geist-pixel">
        {/* Styles rondes à droite */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10">
          <div className="relative w-80 h-80">
            <motion.div
              className="absolute top-5 right-10 h-40 w-40 rounded-full bg-pink-200 opacity-70"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
              animate={{ y: [0, -12, 0] }}
              style={{ animationDuration: '6s' }}
            ></motion.div>
            <motion.div
              className="absolute top-31 right-43 h-28 w-28 rounded-full bg-pink-300 opacity-60"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.25 }}
            ></motion.div>
            <motion.div
              className="absolute top-44 right-0 h-52 w-52 rounded-full bg-pink-100 opacity-50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.4 }}
            ></motion.div>
          </div>
        </div>

        <motion.div
          className="py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Titre Section */}
          <div className="flex items-center gap-3 py-6">
            <motion.div
              variants={titleBarsVariants}
              className="hidden md:flex"
              style={{ transformOrigin: 'bottom' }}
            >
              <motion.div
                variants={barVariant}
                className="h-15 w-6 rotate-20 rounded-full bg-third-color"
              ></motion.div>
              <motion.div
                variants={barVariant}
                className="h-15 w-6 rotate-20 rounded-full bg-second-color"
              ></motion.div>
              <motion.div
                variants={barVariant}
                className="h-15 w-6 rotate-20 rounded-full bg-first-color"
              ></motion.div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl relative z-10 md:text-5xl font-semibold text-first-color text-shadow-md"
            >
              About Me
            </motion.h2>
          </div>

          {/* Contenu */}
          <div className="flex flex-col gap-3">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl text-third-color">
              Hello my Friend !
            </motion.h2>
            <motion.span variants={fadeUp} className="text-xl md:text-2xl text-fourth-color">
              My name is Andritiana Henrino Ramariarison, and I am a Junior Fullstack Developer
              specializing in PHP and Typescript. Still a Master 2 student at the National School of
              Informatics in Fianarantsoa, I am passionnate about new technologies and enjoy taking
              part in innovative projects. I am motivated, full of energy, capable of progressing
              quickly, and eager to learn.
            </motion.span>
            <motion.div variants={fadeUp} className="mt-3 flex gap-3">
              <motion.a
                href="/cv.pdf"
                download="CV_Andritiana_Ramariarison.pdf"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="px-4 py-2 text-white bg-fourth-color hover:bg-[#a891ba] rounded-lg transition-colors font-medium inline-flex items-center gap-2"
              >
                <Download className="block sm:hidden" size={18} />
                <span className="hidden sm:block sm:text-xl">My Resume</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="px-4 py-2 border text-fourth-color border-fourth-color hover:bg-fourth-color hover:text-white rounded-lg transition-colors font-medium"
              >
                <Mail className="block sm:hidden" />
                <span className="hidden sm:block sm:text-xl">Contact Me</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
