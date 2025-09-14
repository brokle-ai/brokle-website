"use client"

import { type HTMLMotionProps, motion as framerMotion } from "framer-motion"
import { forwardRef, type ReactNode } from "react"

type MotionDivProps = HTMLMotionProps<"div"> & {
  children: ReactNode
}

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(({ children, ...props }, ref) => {
  return (
    <framerMotion.div ref={ref} {...props}>
      {children}
    </framerMotion.div>
  )
})
MotionDiv.displayName = "MotionDiv"

export const motion = {
  div: MotionDiv,
}

