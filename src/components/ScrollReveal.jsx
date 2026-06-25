import { motion } from 'motion/react'
const ScrollReveal = ({ children, delay = 0, yOffset = 50 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,      // Run animation only once when scrolling down
        margin: "-120px" // Triggers when the section is 120px up from the bottom of the viewport
      }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.215, 0.610, 0.355, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal