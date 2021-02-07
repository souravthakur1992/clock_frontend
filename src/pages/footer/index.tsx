import React from 'react'
import { CTypography } from 'components'
import { Box } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import FavoriteIcon from '@material-ui/icons/Favorite';
const Footer = () => {
  return (
    <div >
      <Divider />
      <Box display='flex' justifyContent='center' style={{ marginTop: 30 }}>
          <CTypography  paragraph align='center' >Made with <FavoriteIcon style={{marginBottom:'-6px'}} color='error'/> By Sourav Thakur © {new Date().getFullYear()} </CTypography>
      </Box>
    </div>
  )
}

export default Footer
