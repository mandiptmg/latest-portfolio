import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

export interface headerProps {
  title: string
  id: number
  icon?:IconType
  link:string
}

export interface iconProps {
  title: string
  id: number
  icon:IconType
  link:string
}

export interface portfolioProps {
  description: string
  id: number
  icon:IconType
  title:string
}

export interface projectProps {
  id: number;
  title: string;
  img: StaticImageData; // Assuming the type of `amazon` is `StaticImageData`
  link: string;
}

