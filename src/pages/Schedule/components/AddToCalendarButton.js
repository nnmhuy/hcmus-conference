import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import AddToCalendarHOC from 'react-add-to-calendar-hoc'
import moment from 'moment'
import colors from '../../../constants/colors'
import AddToCalendarIcon from '../../../static/images/add-calendar-icon.svg'

const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    '&:hover': {
      color: '#4748D1',
    },
    color: `${colors.primaryBlue}`,
    '& .MuiButton-label': {
      fontSize: '0.8rem',
    },
  },
})(Button);

const useDropdownStyles = makeStyles(theme => ({
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    background: '#FFFFFF',
    zIndex: 1000,
    width: 100,
  }
}))

const Dropdown = ({ children }) => {
  const classes = useDropdownStyles()
  return (
    <div className={classes.dropdown}>
      {children}
    </div>
  );
}

const MyButton = ({ children, onClick }) => {
  return (
    <CustomButton
      color="primary"
      size="small"
      startIcon={
        <IconButton size="small" >
          <img src={AddToCalendarIcon} style={{ width: 'auto', height: 15 }} alt="zoom-icon"/>
        </IconButton>
      }
      onClick={onClick}
    >
      Thêm vào lịch
    </CustomButton>
  )
}

const useStyles = makeStyles(theme => ({
  addToCalendarDropdown: {
    display: 'inline-block',
  },
  dropdownOption: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontWeight: 'bold',
  }
}))

const AddToCalendarButton = (props) => {
  const { paperName, author, description, startDate, endDate, room, linkZoom } = props
  const classes = useStyles()

  const startDatetime = moment(startDate)
  const endDatetime = moment(endDate)
  const duration = moment.duration(endDatetime.diff(startDatetime)).asHours()
  let event = {
    title: `${paperName} (${author})`,
    description,
    location: `${room && `Phòng ${room}`} ${linkZoom}`,
    startDatetime: startDatetime.format('YYYYMMDDTHHmmssZ'),
    endDatetime: endDatetime.format('YYYYMMDDTHHmmssZ'),
    duration
  };

  const AddToCalendarDropdown = AddToCalendarHOC(MyButton, Dropdown);

  return (
    <AddToCalendarDropdown
      // buttonText="Thêm vào lịch"
      event={event}
      className={classes.addToCalendarDropdown}
      linkProps={{
        className: classes.dropdownOption,
      }}
    />
  )
}

export default AddToCalendarButton