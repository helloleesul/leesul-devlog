import { useRef } from "react"
import CONFIG from "site.config"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const navRef = useRef(null)

  return (
    <div
      className={`sticky-nav mb-2 md:mb-6 py-6 bg-opacity-60`}
      id="sticky-nav"
      ref={navRef}
    >
      <div
        className={`max-w-6xl w-full m-auto h-6 flex flex-row justify-between items-center px-4 ${
          fullWidth && "px-4 md:px-24"
        }`}
      >
        <Logo />
        <div className={`flex gap-3 items-center`}>
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  )
}

export default Header
