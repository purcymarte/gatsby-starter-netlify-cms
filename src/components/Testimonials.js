import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import {Box, Text} from 'grommet'
import {BoxContent} from './styled/Boxes'

const Testimonials = ({ testimonials }) => (
  <BoxContent direction="row" justify="center" >
    {testimonials.map((testimonial) => (
      <Box key={v4()} width="medium" pad="large" margin="medium" background="light-1" >
          <Text>{testimonial.quote}</Text>
          <cite> – {testimonial.author}</cite>
      </Box>
    ))}
  </BoxContent>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
