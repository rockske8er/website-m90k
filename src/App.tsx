import { Navbar } from './components/Navbar'
import { About, Footer, Header, Skills, Testimonial, Work } from './layouts'
import './styles/app.scss'
const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </main>
  )
}

export { App }
