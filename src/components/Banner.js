import React from "react"
import { banner } from "./banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  )
}

export default Banner
