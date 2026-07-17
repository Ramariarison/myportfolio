import { FaGithub, FaLink } from 'react-icons/fa'
import { Code2Icon } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'

import type { IconType } from 'react-icons'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

type Project = {
  name: string
  desc: string
  firstPath: string
  screenshots: {
    path: string
  }[]
  links: {
    icon: IconType
    link: string
  }[]
}

const novaLoot: Project = {
  name: 'NovaLoot',
  desc: 'NovaLoot is an e-commerce web platform designed for purchasing game tokens, diamonds, and top-ups for popular mobile games. It features a modern and user-friendly interface for customers, as well as a comprehensive administration panel to manage products, orders, users, and transactions.',
  links: [
    { icon: FaGithub, link: 'https://github.com/Ramariarison/jeux-shop' },
    { icon: FaLink, link: 'https://novalootmada.vercel.app/' }
  ],
  firstPath: '/novaloot/capt1.png',
  screenshots: [
    { path: '/novaloot/capt1.png' },
    { path: '/novaloot/capt2.png' },
    { path: '/novaloot/capt3.png' },
    { path: '/novaloot/capt4.png' },
    { path: '/novaloot/capt5.png' },
    { path: '/novaloot/capt6.png' },
    { path: '/novaloot/capt7.png' },
    { path: '/novaloot/capt8.png' },
    { path: '/novaloot/capt9.png' },
    { path: '/novaloot/capt10.png' }
  ]
}

const realtimeChat: Project = {
  name: 'Realtime Chat',
  desc: 'A modern real-time chat application that allows users to exchange instant messages effortlessly. It features a responsive and intuitive interface, delivering a fast, seamless, and interactive messaging experience powered by real-time communication technologies.',
  links: [
    { icon: FaGithub, link: 'https://github.com/Ramariarison/realtime-chat' },
    { icon: FaLink, link: '' }
  ],
  firstPath: '/realtimechat/capt1.png',
  screenshots: [
    { path: '/realtimechat/capt1.png' },
    { path: '/realtimechat/capt2.png' },
    { path: '/realtimechat/capt3.png' },
    { path: '/realtimechat/capt4.png' },
    { path: '/realtimechat/capt5.png' },
    { path: '/realtimechat/capt6.png' },
    { path: '/realtimechat/capt7.png' },
    { path: '/realtimechat/capt8.png' },
    { path: '/realtimechat/capt9.png' },
    { path: '/realtimechat/capt10.png' }
  ]
}

const pcOnlineRealm = {
  name: 'PC Online Realm',
  desc: 'A modern and elegant web application designed to help users discover, browse, and explore the best free-to-play PC games. The platform features an intuitive interface with advanced filtering and search options, allowing users to quickly find games based on genres, platforms, publishers, and other criteria. Powered by the FreeToGame API, it provides up-to-date game information and a seamless browsing experience for gaming enthusiasts.',
  links: [
    { icon: FaGithub, link: 'https://github.com/Ramariarison/pc-online-realm' },
    { icon: FaLink, link: 'https://pc-online-realm.vercel.app/' }
  ],
  firstPath: '/pconlinerealm/capt1.png',
  screenshots: [
    { path: '/pconlinerealm/capt1.png' },
    { path: '/pconlinerealm/capt2.png' },
    { path: '/pconlinerealm/capt3.png' },
    { path: '/pconlinerealm/capt4.png' },
    { path: '/pconlinerealm/capt5.png' }
  ]
}

const projects: Record<string, Project> = {
  novaLoot,
  realtimeChat,
  pcOnlineRealm
}

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

const buttonsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
}

const buttonVariant: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE_OUT }
  }
}

const linksContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}

const linkVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: EASE_OUT }
  }
}

const screenshotsContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
}

const screenshotVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE_OUT }
  }
}

export default function Project() {
  const [activeProject, setActiveProject] = useState<keyof typeof projects>('novaLoot')

  const project = projects[activeProject]

  const [activePicProject, setActivePicProject] = useState<string>(project.firstPath)

  const changeActiveProject = (param: string) => {
    setActiveProject(param)
    setActivePicProject('')
  }

  return (
    <div className="min-h-screen bg-grid font-geist-pixel">
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
            My latest projects
          </motion.h2>
        </motion.div>

        {/* Description + contenu section */}
        <div className="flex gap-5 flex-col">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
            className="text-fourth-color mt-5 text-xl md:text-2xl"
          >
            Below are three of my most recent projects. The first is a platform designed for mobile
            gamers in Madagascar, allowing them to purchase game tokens by entering their player ID
            and username. The second is a real-time chat application that enables instant
            communication between users. The third is a PC games discovery website featuring
            advanced filtering options and powered by the FreeToGame API to provide up-to-date game
            information.
          </motion.span>

          {/* Boutons */}
          <motion.div
            className="flex flex-wrap gap-3"
            variants={buttonsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.button
              variants={buttonVariant}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => changeActiveProject('novaLoot')}
              className={`px-3 py-2 flex gap-2 rounded-md text-white z-10 cursor-pointer ${
                activeProject === 'novaLoot' ? 'bg-[#a177c2]' : 'bg-fourth-color'
              }`}
            >
              <Code2Icon />
              NovaLoot
            </motion.button>
            <motion.button
              variants={buttonVariant}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => changeActiveProject('realtimeChat')}
              className={`px-3 py-2 flex gap-2 rounded-md text-white z-10 cursor-pointer ${
                activeProject === 'realtimeChat' ? 'bg-[#a177c2]' : 'bg-fourth-color'
              }`}
            >
              <Code2Icon />
              Realtime Chat
            </motion.button>
            <motion.button
              variants={buttonVariant}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => changeActiveProject('pcOnlineRealm')}
              className={`px-3 py-2 flex gap-2 rounded-md text-white z-10 cursor-pointer ${
                activeProject === 'pcOnlineRealm' ? 'bg-[#a177c2]' : 'bg-fourth-color'
              }`}
            >
              <Code2Icon />
              PC Online Realm
            </motion.button>
          </motion.div>

          {/* Project */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
            className="z-10 border max-h-screen md:h-screen border-first-color grid bg-white shadow-sm rounded-2xl grid-cols-3 overflow-hidden"
          >
            {/* Left side */}
            <div className="col-span-3 h-screen bg-gray-50 lg:h-full md:col-span-2">
              <div className="flex flex-col h-full shadow-sm rounded-l-2xl rounded-r-2xl md:rounded-l-2xl md:rounded-r-none">
                <div className="rounded-2xl w-auto h-1/2 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePicProject ? activePicProject : project.firstPath}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-tl-2xl"
                      src={`${activePicProject ? activePicProject : project.firstPath}`}
                      alt=""
                    />
                  </AnimatePresence>
                </div>
                <div className="px-5 py-5 bg-gray-50 h-auto flex flex-col gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="flex flex-col gap-2"
                    >
                      <h1 className="text-2xl font-semibold text-fourth-color">{project.name}</h1>
                      <span className="text-sm text-third-color font-semibold">Description</span>
                      <p className="text-fourth-color text-xl">{project.desc}</p>
                      <span className="text-sm text-third-color font-semibold">Links</span>
                      <motion.div
                        className="flex flex-wrap gap-3"
                        variants={linksContainerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {project.links.map((link, index) => (
                          <motion.a
                            key={index}
                            variants={linkVariant}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            href={link.link || undefined}
                            target={link.link ? '_blank' : undefined}
                            rel={link.link ? 'noopener noreferrer' : undefined}
                            className="z-10 flex items-center gap-2 px-3 py-3 bg-fourth-color rounded-lg"
                          >
                            <link.icon className="text-xl text-white" />
                            {link.link && (
                              <span className="text-sm font-medium text-white">{link.link}</span>
                            )}
                          </motion.a>
                        ))}
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            {/* Right side */}
            <motion.div
              key={activeProject}
              className="hidden md:flex md:flex-col md:col-span-1 h-full overflow-y-auto p-2 gap-2 bg-gray-100 rounded-r-2xl shadow-sm"
              variants={screenshotsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  variants={screenshotVariant}
                  onClick={() => setActivePicProject(screenshot.path)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="rounded-2xl shadow-sm cursor-pointer transition-transform"
                >
                  <img className="w-full rounded-2xl object-cover" src={screenshot.path} alt="" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
