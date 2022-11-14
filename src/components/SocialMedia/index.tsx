import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>

      <div>
        <BsLinkedin />
      </div>

      <div>
        <BsWhatsapp />
      </div>
    </div>
  )
}

export { SocialMedia }
