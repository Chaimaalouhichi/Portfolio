import chay from "../img/chay.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-24 " src={chay} alt="logo"  />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/louhichi-cha%C3%AFma/"><FaLinkedin  /></a>
      <a href="https://github.com/Chaimaalouhichi"><FaGithub /></a>
      <a href="https://www.facebook.com/cha.yma.98892615/"><FaFacebook /></a>
      <a href="https://www.instagram.com/chayma_louhichii/?hl=en"><FaInstagram /></a>
      
    </div>
  </nav>
}

export default Navbar


