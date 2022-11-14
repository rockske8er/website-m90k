import { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { sanity, urlFor } from '../../services/sanity'
import AppWrapper from '../AppWrapper'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [projects, setProjects] = useState([])
  const [animatedCard, setAnimatedCard] = useState({
    y: 0,
    opacity: 1,
  })

  const handleProjectFilter = (item: string) => {}

  useEffect(() => {
    const query = '*[_type == "works"]'
    sanity.fetch(query).then((data) => {
      setActiveFilter(data)
      setProjects(data)
    })
  }, [])
  return (
    <>
      <h2 className="head-text">
        <span>Projetos</span> Desenvolvidos
      </h2>

      <div className="app__work-filter">
        {[
          'Todos',
          'Apps',
          'Websites',
          'Landpages',
          'Blogs',
          'Lojas Virtuais',
          'Sistemas web',
        ].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
            onClick={() => handleProjectFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animatedCard}
        transition={{
          duration: 0.5,
          delayChildren: 0.5,
        }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  )
}

export default AppWrapper(Projects, 'projetos')
