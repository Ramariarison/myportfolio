import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const headerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT }
  }
}

const titleBarsVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const barVariant: Variants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
}

const infoContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const infoItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE_OUT }
  }
}

const formContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
}

export default function Contact() {
  return (
    <div className="min-h-screen font-geist-pixel">
      <div className="max-w-6xl mx-auto px-4 py-12 lg:px-0">
        {/* Titre section */}
        <motion.div
          className="flex items-center gap-3"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
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
            Contact
          </motion.h2>
        </motion.div>

        {/* Contenu */}
        <div className="h-full w-full py-6 lg:py-12 grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-3">
          {/* Partie gauche */}
          <motion.div
            className="h-auto w-full flex flex-col gap-5 col-span-1"
            variants={infoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div variants={infoItemVariants} className="flex flex-row items-center gap-2">
              <div className="p-3 rounded-full bg-fourth-color">
                <MapPin className="text-white" />
              </div>
              <span className="text-lg text-fourth-color">Ambohimangakely, Antananarivo</span>
            </motion.div>
            <motion.div variants={infoItemVariants} className="flex flex-row items-center gap-2">
              <div className="p-3 rounded-full bg-fourth-color">
                <Mail className="text-white" />
              </div>
              <span className="text-lg text-fourth-color">andryramariarison@gmail.com</span>
            </motion.div>
            <motion.div variants={infoItemVariants} className="flex flex-row items-center gap-2">
              <div className="p-3 rounded-full bg-fourth-color">
                <Phone className="text-white" />
              </div>
              <span className="text-lg text-fourth-color">+261 37 99 937 83</span>
            </motion.div>
          </motion.div>

          {/* Partie droite */}
          <div className="col-span-2">
            <motion.div
              className="mt-2 lg:mt-0 grid grid-cols-2 gap-4"
              variants={formContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={fieldVariants} className="col-span-2 md:col-span-1">
                <input
                  className="w-full px-4 py-3 bg-first-color rounded-md focus:outline-none focus:ring-2 focus:ring-fourth-color focus:border-transparent"
                  type="text"
                  placeholder="Name"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="col-span-2 md:col-span-1">
                <input
                  className="w-full px-4 py-3 bg-first-color rounded-md focus:outline-none focus:ring-2 focus:ring-fourth-color focus:border-transparent"
                  type="text"
                  placeholder="Email address"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="col-span-2 md:col-span-1">
                <input
                  className="w-full px-4 py-3 bg-first-color rounded-md focus:outline-none focus:ring-2 focus:ring-fourth-color focus:border-transparent"
                  type="text"
                  placeholder="Phone number"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="col-span-2 md:col-span-1">
                <input
                  className="w-full px-4 py-3 bg-first-color rounded-md focus:outline-none focus:ring-2 focus:ring-fourth-color focus:border-transparent"
                  type="text"
                  placeholder="Subject"
                />
              </motion.div>
              <motion.div variants={fieldVariants} className="col-span-2">
                <textarea
                  className="w-full min-h-30 md:min-h-72  px-4 py-3 bg-first-color rounded-md focus:outline-none focus:ring-2 focus:ring-fourth-color resize-y"
                  placeholder="Message"
                />
              </motion.div>
            </motion.div>

            {/* Bouton */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.45, ease: EASE_OUT, delay: 0.5 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-3 flex gap-2 px-4 py-3 bg-fourth-color hover:bg-[#a177c2] text-white rounded-2xl cursor-pointer"
            >
              <Send />
              Send message
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
