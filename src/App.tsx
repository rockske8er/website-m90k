import { Navbar } from './components/Navbar'
import { About, Footer, Header, Projects, Skills, Testimonial } from './layouts'
import './styles/app.scss'
const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
    </main>
  )
}

export { App }
