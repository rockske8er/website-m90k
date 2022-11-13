import { motion } from 'framer-motion'
import './header.scss'

import {
  profileImage,
  bgCircle,
  reduxIcon,
  sassIcon,
  flutterIcon,
} from './../../assets'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

export function Header() {
  return (
    <header id="home" className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Olá, Eu sou</p>
              <h1 className="head-text">Marcos</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="app__header-image"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <img src={profileImage} alt="profile" />

        <motion.img
          src={bgCircle}
          alt="circle background"
          className="overlay_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        className="app__header-circles"
        whileInView={scaleVariants.whileInView}
      >
        {[reduxIcon, flutterIcon, sassIcon].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="" />
          </div>
        ))}
      </motion.div>
    </header>
  )
}
