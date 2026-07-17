import { Copyright, Heart, ArrowUp } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT }
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative bg-first-color font-geist-pixel overflow-hidden">
      {/* Ligne d'accent animée en haut */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-fourth-color to-transparent"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between max-w-6xl mx-auto px-4 py-8 lg:px-0"
      >
        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-2 sm:text-left"
        >
          <div className="flex items-center gap-1.5">
            <Copyright size={16} className="text-fourth-color shrink-0" />
            <span className="text-sm font-semibold text-fourth-color">
              2026 Andritiana Henrino Ramariarison.
            </span>
          </div>
          <span className="text-sm font-semibold text-third-color">Tous droits réservés.</span>
        </motion.div>

        {/* Stack technique */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-1.5 sm:text-left"
        >
          <span className="flex items-center gap-1.5 text-sm font-semibold text-third-color">
            Conçu et développé avec
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <Heart size={14} className="fill-fourth-color text-fourth-color" />
            </motion.span>
          </span>
          <span className="text-sm font-semibold text-fourth-color">
            React, TypeScript et Tailwind CSS.
          </span>
        </motion.div>

        {/* Bouton retour en haut */}
        <motion.button
          variants={fadeUp}
          onClick={scrollToTop}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-label="Remonter en haut de la page"
          className="hidden md:flex items-center justify-center h-9 w-9 rounded-full border border-fourth-color text-fourth-color hover:bg-fourth-color hover:text-white transition-colors shrink-0"
        >
          <ArrowUp size={16} strokeWidth={2.5} />
        </motion.button>
      </motion.div>
    </footer>
  )
}
