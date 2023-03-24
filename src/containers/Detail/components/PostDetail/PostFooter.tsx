import { useRouter } from "next/router"
import React from "react"
import { AiFillLeftCircle, AiFillUpCircle } from "react-icons/ai"

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="max-w-7xl m-auto w-full fixed quickMenu py-6 flex flex-row justify-between items-center">
      <button onClick={() => router.push("/")} className="back">
        <div className="text-5xl cursor-pointer text-gray-300 dark:text-gray-500 hidden lg:block">
          <AiFillLeftCircle />
        </div>
      </button>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="top "
      >
        <div className="text-5xl cursor-pointer text-gray-300 dark:text-gray-500 hidden lg:block">
          <AiFillUpCircle />
        </div>
      </button>
    </div>
  )
}

export default Footer
