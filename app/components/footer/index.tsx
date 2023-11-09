import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center justify-center gap-1.5 text-sm font-roboto text-gray-400">
        Made with <IoMdHeart size={13} className="text-purple-500" /> by
        <strong className="font-medium">Julian Andrade</strong>
      </span>
    </footer>
  )
}
