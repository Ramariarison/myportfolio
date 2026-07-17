import { FaReact, FaVuejs, FaLaravel, FaWindows, FaProjectDiagram, FaGitAlt } from 'react-icons/fa'
import { GiBrain, GiGears } from 'react-icons/gi'
import { MdOutlineArchitecture } from 'react-icons/md'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiSupabase,
  SiIonic
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

// Définition des types
interface Tool {
  icon: React.ElementType | null
  framework: string
}

interface Card {
  title: string
  tools: Tool[]
}

const cards: Card[] = [
  {
    title: 'Frontend frameworks',
    tools: [
      { icon: FaReact, framework: 'React.js' },
      { icon: FaVuejs, framework: 'Vue.js' },
      { icon: SiNextdotjs, framework: 'Next.js' },
      { icon: SiTailwindcss, framework: 'TailwindCSS' },
      { icon: SiIonic, framework: 'Ionic' }
    ]
  },
  {
    title: 'Backend technologies',
    tools: [
      { icon: SiExpress, framework: 'Express.js' },
      { icon: SiDjango, framework: 'Django' },
      { icon: FaLaravel, framework: 'Laravel' }
    ]
  },
  {
    title: 'Programming Languages',
    tools: [
      { icon: SiTypescript, framework: 'TypeScript' },
      { icon: SiJavascript, framework: 'JavaScript' },
      { icon: SiPhp, framework: 'PHP' },
      { icon: SiPython, framework: 'Python' }
    ]
  },
  {
    title: 'Databases',
    tools: [
      { icon: SiMysql, framework: 'MySQL' },
      { icon: SiPostgresql, framework: 'PostgreSQL' },
      { icon: SiSupabase, framework: 'Supabase' }
    ]
  },
  {
    title: 'System & DevOps Tools',
    tools: [
      { icon: SiLinux, framework: 'Linux' },
      { icon: FaWindows, framework: 'Windows' },
      { icon: SiDocker, framework: 'Docker' },
      { icon: SiKubernetes, framework: 'Kubernetes' },
      { icon: FaGitAlt, framework: 'Git' },
      { icon: SiGithub, framework: 'GitHub' }
    ]
  },
  {
    title: 'Software Architecture & Design',
    tools: [
      { icon: TbApi, framework: 'API Rest' },
      { icon: GiGears, framework: '2TUP' },
      { icon: MdOutlineArchitecture, framework: 'Clean Architecture' },
      { icon: GiBrain, framework: 'MVC' },
      { icon: FaProjectDiagram, framework: 'UML' }
    ]
  }
]

const headerVariants: Variants = {
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
    transition: { duration: 0.5, ease: EASE_OUT }
  }
}

const titleBarsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
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

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT }
  }
}

const toolsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 }
  }
}

const toolVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: EASE_OUT }
  }
}

export default function MyToolbox() {
  return (
    <div className="min-h-screen flex items-center bg-grid font-geist-pixel">
      <div className="max-w-6xl mx-auto py-12 px-4 lg:px-0">
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
            My Toolbox
          </motion.h2>
        </motion.div>

        {/* Description section + contenu section */}
        <div className="mt-5 flex flex-col">
          {/* Description */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
            className="text-xl md:text-2xl text-fourth-color"
          >
            From frontend frameworks to backend technologies, programming languages, databases,
            DevOps tools, operating systems, and software architecture & design.
          </motion.span>

          {/* Contenu (grid) */}
          <motion.div
            className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Cards */}
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.15)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative px-6 py-4 w-auto min-h-50 bg-white shadow-sm border border-first-color rounded-2xl overflow-hidden"
              >
                {/* Styles rondes à droite */}
                <div className="z-0 absolute right-0 top-0 h-full">
                  <div className="relative w-80 h-full">
                    <div className="absolute top-6 right-10 h-20 w-20 rounded-full bg-pink-200 opacity-70"></div>
                    <div className="absolute top-23 right-22 h-14 w-14 rounded-full bg-pink-300 opacity-60"></div>
                    <div className="absolute bottom-4 right-1 h-22 w-22 rounded-full bg-pink-100 opacity-50"></div>
                  </div>
                </div>

                {/* Titre de la carte */}
                <div className="absolute top-0 left-0 px-3 py-2 bg-first-color text-fourth-color rounded-tl-2xl rounded-br-2xl">
                  {card.title}
                </div>

                {/* Liste des frameworks/outils */}
                <motion.div
                  className="flex flex-wrap gap-3 mt-12"
                  variants={toolsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {card.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      variants={toolVariant}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="z-10 flex items-center gap-2 px-3 py-2 bg-fourth-color rounded-lg"
                    >
                      {tool.icon ? (
                        <tool.icon className="text-xl text-white" />
                      ) : (
                        <div className="w-5 h-5 bg-[#C5B3D3] rounded-full"></div>
                      )}
                      <span className="text-sm font-medium text-white">{tool.framework}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
