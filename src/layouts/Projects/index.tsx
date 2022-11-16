import { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { sanity, urlFor } from '../../services/sanity'
import AppWrapper from '../AppWrapper'

import './styles.scss'

type ProjectProps = {
  title: string
  description: string
  img_url: string
  project_link: string
  code_link: string
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [filterProjects, setFilterProjects] = useState<ProjectProps[]>([])
  const [animatedCard, setAnimatedCard] = useState({
    y: 0,
    opacity: 1,
  })

  const handleProjectFilter = (item: string) => {}

  useEffect(() => {
    const query = '*[_type == "projects"]'
    sanity.fetch(query).then((data) => {
      console.log(data)
      setFilterProjects(data)
      setProjects(data)
    })
  }, [projects])
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
      >
        {filterProjects.map((project, index) => (
          <div key={index} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(project.img_url)} alt={project.title} />

              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
              >
                <a
                  href={project.project_link}
                  rel="noreferrer"
                  target={'_blank'}
                >
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [1, 0] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={project.code_link} rel="noreferrer" target={'_blank'}>
                  <motion.div
                    className="app__flex"
                    whileInView={{ scale: [1, 0] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app_work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrapper(Projects, 'projetos')
