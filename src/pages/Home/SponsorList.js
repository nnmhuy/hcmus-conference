import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  sponsorContainer: {
    display: 'flex', 
    flexWrap: 'wrap', 
    justifyContent: 'center'
  },
  h2: {
    fontSize: '3em',
    marginBottom: 0
  },
  h4: {
    fontSize: '1.8em'
  },
  p: {
    fontSize: '1.2em'
  },
  img: {
    width: 120, 
    margin: '0px 20px 20px 20px'
  }
}))

const sponsorData = [
  { type: 'gold',
    name: 'gianty group', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'https://www.gnt.com.vn/' 
  },
  { type: 'gold',
    name: 'sci edu', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'http://sci.edu.vn/' 
  },
  { type: 'gold',
    name: 'itec', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'https://www.itec.edu.vn/' 
  },
  { type: 'silver',
    name: 'trung tam tin hoc', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'https://csc.edu.vn/' 
  },
  { type: 'silver',
    name: 'tnic', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'http://tnic.com.vn/' 
  },
  { type: 'silver',
    name: 'horiba', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'http://horiba.com.vn/' 
  },
  { type: 'copper',
    name: 'chemsol', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: 'http://www.chemsol.vn/' 
  },
  { type: 'copper',
    name: 'apc lab', 
    image: 'https://www.designandhealth.org/wp-content/uploads/2018/01/500x441-1.jpg', 
    link: ''
   }
]

const SponsorList = () => {
  const classes = useStyles()

  const renderSponsorList = type => {
    return sponsorData.filter(item => item.type === type).map((sponsorItem, index) => {
      if (!sponsorItem.link || sponsorItem.link === '') {
        console.log(type+index)
        return <img key={type+index} className={classes.img} src={sponsorItem.image} alt={sponsorItem.alt}/>
      }
      return (
        <a href={sponsorItem.link} key={type+index}>
          <img className={classes.img} src={sponsorItem.image} alt={sponsorItem.alt}/>
        </a>
      )
    })
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{marginBottom: 20}}>
      <h2 className={classes.h2}>Nhà tài trợ</h2>
      <p className={classes.p}>Những nhà tài trợ đồng hành với hội nghị khoa học</p>
      </div>
      <div>
        <div>
          <h4 className={classes.h4}>Tài trợ vàng</h4>
          <div className={classes.sponsorContainer}>
            { renderSponsorList('gold') } 
          </div>
        </div>
        <div>
          <h4 className={classes.h4}>Tài trợ bạc</h4>
          <div className={classes.sponsorContainer}>
            { renderSponsorList('silver') }  
          </div>
        </div>
        <div>
          <h4 className={classes.h4}>Tài trợ đồng</h4>
          <div className={classes.sponsorContainer}>
            { renderSponsorList('copper') }    
          </div>
        </div> 
      </div>
    </div>
  )
}

export default SponsorList