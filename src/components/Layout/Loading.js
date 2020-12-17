import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import DialogContent from '@material-ui/core/DialogContent'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'
import colors from '../../constants/colors'

const styles = (theme => ({
  loading: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10000
  },
  modal: {
    width: '100%',
    '& .css-1smlpex': {
      outline: 'none'
    }
  },
  content: {
    width: '100%',
    height: '100%',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.2)',
  }
}))

const Loading = (props) => {
  const { isLoading, classes, Loader = ClimbingBoxLoader } = props
  if (!isLoading) {
    return null
  }
  return (
    <Paper tabIndex={-1} className={classes.loading}>
      <Modal className={classes.modal} open={isLoading}>
        <DialogContent className={classes.content}>
          <Loader color={colors.primaryBlue} />
        </DialogContent>
      </Modal>
    </Paper>
  )
}

export default withStyles(styles)(Loading)