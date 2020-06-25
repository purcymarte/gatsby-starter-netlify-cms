import React from 'react'
import PropTypes from 'prop-types'
import {Box, Paragraph} from 'grommet'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <Box direction="row" wrap="true">
    {gridItems.map((item) => (
      <Box key={item.text} basis="medium" margin="medium">
        <Box basis="240px">
          <PreviewCompatibleImage imageInfo={item} />
        </Box>
        <Box pad="medium">
        <Paragraph>{item.text}</Paragraph>
        </Box>
      </Box>
    ))}
  </Box>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
