import React from 'react'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import clsx from 'clsx'

import ClockIcon from '@material-ui/icons/AccessTime';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

import PlenaryPresentation from './PlenaryPresentation'
import ZoomButton from '../components/Button/ZoomButton'

import plenaryPresentationData from './plenaryPresentationData'
import colors from '../../../constants/colors'

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: colors.primaryBlue,
    textAlign: 'center',
  },
  timeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    "@media (max-width: 768px)": {
      marginRight: 0,
      marginBottom: 5,
    },
  },
  clockIcon: {
    color: `${colors.darkGray}`,
    width: '1.3rem',
    height: '1.3rem',
    marginRight: 10,
  },
}))



const PlenarySession = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.title}>
          PHIÊN TOÀN THỂ
        </div>
        <div>
          <div className={classes.timeContainer}>
            <ClockIcon className={classes.clockIcon} />
            <span className={classes.timeText}>
              Từ 8 giờ sáng 18/12/2020
            </span>
          </div>
          <div className={classes.timeContainer}>
            <MeetingRoomIcon className={classes.clockIcon} />
            <span className={classes.timeText}>
              Giảng đường 1, trường Đại học Khoa học Tự nhiên, ĐHQG-HCM
              <br/>
              227 Nguyễn Văn Cừ, phường 4, quận 5, thành phố Hồ Chí Minh
            </span>
          </div>
        </div>
      </div>
      <ZoomButton 
        size="large" variant="outlined" 
        linkZoom="https://fithcmus.zoom.us/j/98599000132?pwd=d1VYd1lzT3VaUHhDMUlVSnNFSHJzQT09"
        style={{ marginBottom: 20 }}
      />
      <Divider style={{ width: '100%' }} />
      <div>
        {
          plenaryPresentationData.map((presentation, index) => (
            <PlenaryPresentation 
              key={`plenary-presentation-${index}`} 
              presentation={presentation}
              index={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PlenarySession