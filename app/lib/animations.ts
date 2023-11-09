export const techBadgeAnimation = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
}

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
}

export const scrollAnimation = {
  initial: { opacity: 0, right: -10 },
  animate: { opacity: 1, right: 16 },
  exit: { opacity: 0, right: -10 },
}
