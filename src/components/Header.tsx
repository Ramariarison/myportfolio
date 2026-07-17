import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { useEffect, useState } from 'react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'toolbox', name: 'Toolbox' },
  { id: 'resume', name: 'Resume' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
]

const navContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
}

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
}

const mobileNavContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } }
}

const mobileNavItemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: EASE_OUT }
  }
}

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.5
      }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)

    // Laisse le menu commencer sa fermeture avant de scroller,
    // pour éviter tout conflit de layout pendant l'animation
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className={`fixed z-50 inset-x-0 px-4 py-5 bg-first-color font-geist-pixel transition-shadow duration-300 ${
        isScrolled ? 'shadow-md shadow-black/10' : ''
      }`}
    >
      <div className="flex flex-col max-w-6xl mx-auto">
        {/* Header top */}
        <div className="flex flex-row justify-between items-center text-white gap-4 md:gap-0">
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
            href="#home"
            className="text-[#C5B3D3] cursor-pointer"
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            Andritiana
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4 md:gap-6 flex-wrap justify-center"
            >
              {sections.map((section) => (
                <motion.a
                  key={section.id}
                  variants={navItemVariants}
                  href={`#${section.id}`}
                  onClick={(e) => handleLinkClick(e, section.id)}
                  className={`relative py-1 ${
                    activeSection === section.id
                      ? 'text-[#C5B3D3]'
                      : 'text-third-color hover:text-[#C5B3D3] transition-colors'
                  }`}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[#C5B3D3]"
                    />
                  )}
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Mobile burger */}
          <motion.button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="p-3 rounded-2xl bg-[#C5B3D3] md:hidden overflow-hidden"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="flex"
                >
                  <X width={18} height={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="flex"
                >
                  <Menu width={18} height={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="md:hidden overflow-hidden"
            >
              <motion.div
                variants={mobileNavContainerVariants}
                initial="hidden"
                animate="visible"
                className="mt-5 flex flex-col gap-4 bg-[#C5B3D3] rounded-xl p-5"
              >
                {sections.map((section) => (
                  <motion.a
                    key={section.id}
                    variants={mobileNavItemVariants}
                    href={`#${section.id}`}
                    onClick={(e) => handleLinkClick(e, section.id)}
                    className={
                      activeSection === section.id
                        ? 'text-white font-semibold'
                        : 'text-first-color hover:text-white transition-colors'
                    }
                  >
                    {section.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
