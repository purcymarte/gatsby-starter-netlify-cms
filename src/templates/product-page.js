import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Heading, Paragraph, Text, Box, Main} from 'grommet'

import {BoxFullImage, BoxContent} from '../components/styled/Boxes'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
  image,
  heading,
  test,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
      <Box align="center">
        <Box width="xlarge">
          <Box pad="large">
              <Box pad={{bottom:"small"}}>
                <Heading>{heading}</Heading>
                {test ? <Heading>{test}</Heading> : null }
              </Box>
              <Text size="large">{description}</Text>
          </Box>
          <Box>
            <Features gridItems={intro.blurbs} />
              <Box pad="large">
                <Box pad={{bottom:"small"}}>
                  <Heading level={2}>{main.heading}</Heading>
                </Box>
                <Text size="large">{main.description}</Text>
              </Box>
              <Box direction="row" wrap="true" justify="center">
                <Box width="480px" pad="16px">
                  <PreviewCompatibleImage imageInfo={main.image1} />
                </Box>
                <Box width="480px" pad="16px">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                </Box>
              </Box>
              <Testimonials testimonials={testimonials} />
          </Box>
        </Box>
        
          <BoxFullImage
            height="400px"
            width="100%"
            margin={{top:"medium", bottom:"medium"}}
            fullImage={fullImage}
          />
          <BoxContent>
            <Box>
            <Box pad={{bottom:"small"}}>
              <Heading level={2}>
                {pricing.heading}
              </Heading>
            </Box>
            <Text>{pricing.description}</Text>
            <Pricing data={pricing.plans} />
          </Box>
        </BoxContent>
      </Box>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  test: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        test={frontmatter.test}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage


