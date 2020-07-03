import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import {Heading, Paragraph, Text, Box, Main} from 'grommet'

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
                <Box width="960px" pad="16px">
                  <PreviewCompatibleImage imageInfo={main.image3} />
                </Box>
              </Box>
              <Testimonials testimonials={testimonials} />
              <div
                className="full-width-image-container"
                style={{
                  backgroundImage: `url(${
                    fullImage.childImageSharp
                      ? fullImage.childImageSharp.fluid.src
                      : fullImage
                  })`,
                }}
              />
              <Box pad={{bottom:"small"}}>
                <Heading level={2}>
                  {pricing.heading}
                </Heading>
              </Box>
              <Text>{pricing.description}</Text>
              <Pricing data={pricing.plans} />
            </Box>
          </Box>
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
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
  const { frontmatter } = data.markdownRemark

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

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        test
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
