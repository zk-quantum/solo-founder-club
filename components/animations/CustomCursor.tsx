'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10)
      cursorY.set(e.clientY - 10)
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    const handleLinkHoverStart = () => setIsHovering(true)
    const handleLinkHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverStart as EventListener)
      el.addEventListener('mouseleave', handleLinkHoverEnd as EventListener)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart as EventListener)
        el.removeEventListener('mouseleave', handleLinkHoverEnd as EventListener)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          className="w-full h-full bg-bg-primary rounded-full"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isHidden ? 0 : 1,
        }}
      >
        <motion.div
          className="w-full h-full border border-bg-primary/30 rounded-full"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.3 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
