import CONFIG from "@/site.config"
import { ThemeType } from "@/src/types"
import { getTheme } from "@hooks/useThemeEffect"
import React, { useEffect, useState } from "react"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(getTheme())
    }
  }, [])

  const handleClick = () => {
    const changedTheme = getTheme() !== "dark" ? "dark" : "light"
    localStorage.setItem("theme", changedTheme)
    setTheme(changedTheme)
    changedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }

  if (CONFIG.blog.theme !== "auto") return null
  return (
    <div
      className={
        theme === "light"
          ? "cursor-pointer dark:text-gray-50 toggleSwitch"
          : "cursor-pointer dark:text-gray-50 toggleSwitch active"
      }
      onClick={handleClick}
    >
      <span>{theme === "light" ? "Light" : "Dark"}</span>
    </div>
  )
}

export default ThemeToggle
