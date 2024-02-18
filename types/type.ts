import { IconType } from "react-icons"

export interface headerProps {
  title: string
  id: number
  icon?:IconType
}

export interface iconProps {
  title: string
  id: number
  icon:IconType
  link:string
}

