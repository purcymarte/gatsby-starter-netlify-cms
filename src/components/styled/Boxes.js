import React from 'react'
import styled from 'styled-components'
import {Box} from 'grommet'


//--- Custom Styled Grommet Boxes ------------------------------------------------

// extra styles applied to grommet Box
export const BoxCover = styled(Box)`
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center
`


//--- Preconfigured Grommet Box Components ------------------------------------------------

// gatsby lazy loading functionality
export const BoxFullImage = (props) => {
  const fullImage = props.fullImage ? props.fullImage : {}
  return (
  <BoxCover
    height= {props.height || "400px"}
    width= {props.width || "100%"}
    margin= {props.margin || {top:"medium", bottom:"medium"}}
    style={{
      backgroundImage: `url(${
        fullImage.childImageSharp
          ? fullImage.childImageSharp.fluid.src
          : fullImage
      })`,
    }}
  >{props.children}</BoxCover>
)}

// main content block
// todo: make responsive
export const BoxContent = (props) => {
  return <Box width={props.width || "xlarge"} {...props}>{props.children}</Box>
  }
