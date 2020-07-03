import React from 'react'
import PropTypes from 'prop-types'
import {Box, Text} from 'grommet'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <Box direction="row" wrap="true" justify="center">
    {gridItems.map((item) => (
      <Box key={item.text} basis="medium" margin="medium" pad="medium" elevation="medium" round="medium">
        <Box basis="240px">
          <PreviewCompatibleImage imageInfo={item} />
        </Box>
        <Box pad="medium" margin={{top:"medium"}}>
        <Text>{item.text}</Text>
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
