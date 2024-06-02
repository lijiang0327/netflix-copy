import { FC } from "react"
import clsx from "clsx"

export interface DividerProps {
  className?: string
}

export const Divider: FC<DividerProps> = ({ className }) => {
  return <div className={clsx("h-2 bg-bg-gray", className)}></div>
}