import React, { InputHTMLAttributes, ReactNode } from "react"
import { AiOutlineSearch } from "react-icons/ai"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="p-1 mb-3 dark:text-white flex items-center gap-2">
        <AiOutlineSearch className="text-xl" />
        <div>Search</div>
      </div>
      <input
        className="rounded-2xl px-5 py-2 w-full bg-gray-200 dark:bg-zinc-700 dark:text-white focus:bg-white focus:shadow-md outline-none"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </div>
  )
}

export default SearchInput
