import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
// import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(relativePath: { eq: "palm-tree.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )

  // const image = getImage(backgroundImage123)

  // const bgImage = convertToBgImage(image)
  const pluginImage = getImage(backgroundImage123)

  return (
    // <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
    //   Test
    // </BackgroundImage>
    <BgImage image={pluginImage} className="masthead">
      <h1>This is the bgImage</h1>
    </BgImage>
  )
}

export default Hero
