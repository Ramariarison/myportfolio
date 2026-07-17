import { FaHtml5, FaLaravel, FaVuejs } from 'react-icons/fa'
import { FaCss } from 'react-icons/fa6'
import { SiDocker, SiMysql, SiPhp, SiXampp } from 'react-icons/si'
import { LocateFixed } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const Education = [
  {
    yearsInterval: '2024 - 2025',
    degree: 'Master 1 in General Computer Science',
    school: 'ENI Fianarantsoa, Madagascar',
    description:
      "First year of a master's degree in general computer science, deepening knowledge in development and software architecture."
  },
  {
    yearsInterval: '2021 - 2023',
    degree: "Bachelor's Degree in General Computer Science",
    school: 'ENI Fianarantsoa, Madagascar',
    description:
      'Foundational training in software development, algorithms, object-oriented programming, and databases.'
  },
  {
    yearsInterval: '2019 - 2020',
    degree: 'High School Diploma - Series C',
    school: 'LRN Ambatondrazaka',
    description:
      'Training in mathematics and fundamental sciences, building a foundation in logic and problem-solving.'
  }
]

const Experience = [
  {
    yearsInterval: '2023 - 2024',
    internship: 'Intern in Computer Development',
    institute: 'INSTAT (National Institute of Statistics), Antananarivo Madagascar',
    description: `3-month internship in computer development for the design and implementation of an internal social network platform: development of a collaborative solution allowing INSTAT employees to exchange information and work together effectively.`,
    technologies: [
      { icon: FaVuejs, framework: 'Vue.js' },
      { icon: FaLaravel, framework: 'Laravel' },
      { icon: SiMysql, framework: 'MySQL' },
      { icon: SiDocker, framework: 'Docker' }
    ]
  },
  {
    yearsInterval: '2022 - 2023',
    internship: 'Intern in Computer Development',
    institute: `Ministry of Economy and Finance (MEF), Antananarivo Madagascar`,
    description: `3-month internship in computer development for the design and implementation of a web application: Implementation of an agile project management environment.`,
    technologies: [
      { icon: SiPhp, framework: 'OOP PHP' },
      { icon: FaHtml5, framework: 'HTML5' },
      { icon: FaCss, framework: 'CSS' },
      { icon: SiMysql, framework: 'MySQL' },
      { icon: SiXampp, framework: 'Xampp' }
    ]
  }
]

const headerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
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

const columnHeaderVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

const timelineVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
}

const timelineCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT }
  }
}

const techContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
}

const techVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: EASE_OUT }
  }
}

export default function Resume() {
  return (
    <div className="min-h-screen font-geist-pixel">
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
            My Resume
          </motion.h2>
        </motion.div>

        {/* Description section + contenu section */}
        <div className="mt-5 flex flex-col">
          <div className="mt-3 gap-4 flex md:grid flex-col md:grid-cols-2 md:items-start">
            {/* Education */}
            <div className="grid grid-cols-1 gap-3">
              <motion.div
                className="flex items-center gap-2 font-semibold text-fourth-color"
                variants={columnHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-center w-6 shrink-0"
                >
                  <div className="h-8 w-2.5 rounded-full rotate-45 bg-fourth-color -mr-2.5"></div>
                  <div className="h-8 w-2.5 rounded-full -rotate-45 bg-[#ded6e6]"></div>
                </motion.div>
                <motion.span variants={fadeUp} className="text-2xl md:text-3xl">
                  Education
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                className="text-xl md:text-2xl text-fourth-color"
              >
                Enough academic foundation in general computer science, encompassing software
                development, algorithms, and system architecture.
              </motion.span>

              <motion.div
                className="grid grid-cols-1 gap-3"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {Education.map((educ, index) => (
                  <motion.div
                    key={index}
                    layout
                    variants={timelineCardVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="mt-2 relative flex flex-col px-10 py-6 w-auto min-h-56 bg-white shadow-sm border border-first-color overflow-hidden"
                  >
                    {/* Triangle */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-40 border-r-40 border-t-fourth-color border-r-transparent"></div>

                    <div className="flex flex-col gap-1.5 h-full">
                      <span className="text-sm font-semibold text-fourth-color">
                        {educ.yearsInterval}
                      </span>
                      <span className="text-xl text-third-color">{educ.degree}</span>
                      <div className="flex gap-1.5 items-center">
                        <LocateFixed className="text-fourth-color hidden md:block" />
                        <span className="text-sm text-fourth-color">{educ.school}</span>
                      </div>
                      <p className="text-fourth-color">{educ.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Experience */}
            <div className="mt-4 md:mt-0 grid grid-cols-1 gap-3">
              <motion.div
                className="flex items-center gap-2 font-semibold text-third-color"
                variants={columnHeaderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                <motion.div
                  variants={fadeUp}
                  className="flex items-center justify-center w-6 shrink-0"
                >
                  <div className="h-8 w-2.5 rounded-full rotate-45 bg-third-color -mr-2.5"></div>
                  <div className="h-8 w-2.5 rounded-full -rotate-45 bg-second-color"></div>
                </motion.div>
                <motion.span variants={fadeUp} className="text-2xl md:text-3xl">
                  Experience
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
                className="text-xl md:text-2xl text-fourth-color"
              >
                Hands-on professional experience in web development and the creation of
                collaborative solutions within public sector organizations.
              </motion.span>

              <motion.div
                className="grid grid-cols-1 gap-3"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
              >
                {Experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    layout
                    variants={timelineCardVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="mt-2 relative flex flex-col px-10 py-6 w-auto min-h-56 bg-white shadow-sm border border-first-color overflow-hidden"
                  >
                    {/* Triangle */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-40 border-r-40 border-t-third-color border-r-transparent"></div>

                    <div className="flex flex-col gap-1.5 h-full">
                      <span className="text-sm font-semibold text-fourth-color">
                        {exp.yearsInterval}
                      </span>
                      <span className="text-xl text-third-color">{exp.internship}</span>
                      <div className="flex gap-1.5 items-center">
                        <LocateFixed className="text-fourth-color hidden md:block" />
                        <span className="text-sm text-fourth-color">{exp.institute}</span>
                      </div>
                      <p className="text-fourth-color">{exp.description}</p>

                      <motion.div
                        className="flex flex-wrap gap-3 mt-auto pt-2"
                        variants={techContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                      >
                        {exp.technologies.map((tech, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            variants={techVariant}
                            whileHover={{ scale: 1.08, y: -2 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="z-10 flex items-center gap-2 px-3 py-2 bg-fourth-color rounded-lg"
                          >
                            {tech.icon ? (
                              <tech.icon className="text-xl text-white" />
                            ) : (
                              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                            )}
                            <span className="text-sm font-medium text-white">{tech.framework}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
