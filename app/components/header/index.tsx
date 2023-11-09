'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

// Navigation
const NAV_ITEMS = [
  {
    label: 'Página Inicial',
    href: '/',
  },
  {
    label: 'Meus Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <p className="text-2xl font-roboto font-semibold">
            julian
            <span className="font-normal">andrade</span>
          </p>
          {/* <Image
            width={58}
            height={49}
            src="/images/logo.svg"
            alt="Logomarca Julian Andrade"
          /> */}
        </Link>

        <nav className="flex items-center  gap-4 sm:gap-8">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label}></NavItem>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
