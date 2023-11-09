'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../button'
import { useEffect, useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollAnimation } from '@/app/lib/animations'

export const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  // Scroll back to top page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Hide button top scroll
  const handleScroll = useCallback(() => {
    if (!showScroll && window.scrollY > 500) setShowScroll(true)
    if (showScroll && window.scrollY <= 500) setShowScroll(false)
  }, [showScroll])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {showScroll ? (
        <motion.div
          className="fixed right-4 bottom-4 z-20"
          {...scrollAnimation}
        >
          <Button
            onClick={scrollToTop}
            className="shadow-lg rounded-md shadow-purple-400/20"
          >
            <TbArrowNarrowUp size={20} />
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
