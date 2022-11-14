import './about.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { sanity, urlFor } from '../../services/sanity'

import AppWrapper from '../AppWrapper'

type AboutProps = {
  title: string
  description: string
  imgUrl: string
}
const About = () => {
  const [abouts, setAbouts] = useState<AboutProps[]>([])

  useEffect(() => {
    const queryAbout = '*[_type == "abouts"]'
    sanity.fetch(queryAbout).then((data) => {
      setAbouts(data)
    })
  }, [abouts])

  return (
    <>
      <h2 className="head-text">
        Eu sei que um <span>bom design</span> <br /> significa{' '}
        <span>Bons Negócioa</span>
      </h2>

      <div className="app__profiles">
        {abouts.length <= 0 ? (
          <h2>Nenhum</h2>
        ) : (
          abouts.map((about, index) => {
            const imageUrl = urlFor(about.imgUrl)
            return (
              <motion.div
                key={`${about.title + index}`}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__profile-item"
              >
                <img src={imageUrl} alt={about.title} />
                <h2 className="bold-text" style={{ marginTop: 20 }}>
                  {about.title}
                </h2>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {about.title}
                </p>
              </motion.div>
            )
          })
        )}
      </div>
    </>
  )
}

export default AppWrapper(About, 'about')
