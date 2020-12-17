import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import colors from '../../../constants/colors'
import { majorList } from '../../../constants/constants'

const useStyles = makeStyles(theme => ({
  showFilterButton: {
    background: `${colors.primaryGradientRight}`,
    marginBottom: 10,
  },
  dialogTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontSize: 20,
    paddingBottom: 0,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  majorContainer: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    lineHeight: 2,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 5,
    marginBottom: 5,
    color: '#FFFFFF',
    borderRadius: 50,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    opacity: '0.2',
    background: `linear-gradient(to left, #1469de, #1469de, #1469de)`,
  },
  activeMajor: {
    opacity: 1,
    background: `${colors.primaryGradientLeft}`,
  },
  closeButton: {
    marginTop: 20,
  }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterSection = (props) => {
  const classes = useStyles()
  const { activeFilters, toggleFilter } = props

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" fullWidth
        startIcon={<FilterListIcon/>}
        className={classes.showFilterButton} 
        onClick={handleClickOpen}
      >
        Chọn ngành
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullScreen
      >
        <DialogTitle disableTypography className={classes.dialogTitle}>{"Chọn ngành"}</DialogTitle>
        <DialogContent className={classes.root}>
          <span
            className={clsx(classes.majorContainer, !activeFilters.length && classes.activeMajor)}
            onClick={() => toggleFilter(-1)}
          >
            Tất cả
          </span>
          {
            majorList.map(major => {
              const { id, name } = major
              return (
                <span
                  key={name}
                  className={clsx(classes.majorContainer, activeFilters.includes(id) && classes.activeMajor)}
                  onClick={() => toggleFilter(id)}
                >
                  {name}
                </span>
              )
            })
          }

        <Button variant="outlined" color="primary" fullWidth className={classes.closeButton} onClick={handleClose}>
            Xong
        </Button>
      </DialogContent>
      </Dialog>
    </div>
  );
}

export default FilterSection