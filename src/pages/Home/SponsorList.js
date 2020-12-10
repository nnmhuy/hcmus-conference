import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  
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

const SponsorTypeText = styled.h4`
  font-size: 1.5em;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 1.8em;
  }
`

const SponsorHolder = styled.div`
  display: flex, 
  flex-wrap: wrap, 
  justify-content: center;
`

const SponsorContainerHeading = styled.div`
  margin-bottom: 20px;
`

const HeadingText = styled.h2`
  font-size: 2.5em;
  margin-bottom: 0;
  color: #01458E;
  @media (min-width: 800px) {
    font-size: 3em;
  }
  @media (min-width: 900px) {
    font-size: 4em;
  }
`

const HeadingSubText = styled.p`
  font-size: 1.2em
`

const SponsorContainer = styled.div`
  text-align: center;
  padding: 40px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const SponsorImage = styled.img`
  width: 80px;
  margin: 0px 20px 20px 20px;
  @media (min-width: 568px) {
    width: 100px;
  }
  @media (min-width: 800px) {
    width: 120px;
  }
`

const SponsorList = () => {
  const classes = useStyles()

  const renderSponsorList = type => {
    return sponsorData.filter(item => item.type === type).map((sponsorItem, index) => {
      if (!sponsorItem.link || sponsorItem.link === '') {
        return <SponsorImage key={type+index} src={sponsorItem.image} alt={sponsorItem.alt}/>
      }
      return (
        <a href={sponsorItem.link} key={type+index}>
          <SponsorImage src={sponsorItem.image} alt={sponsorItem.alt}/>
        </a>
      )
    })
  }

  return (
    <SponsorContainer>
      <SponsorContainerHeading>
        <HeadingText>Nhà tài trợ</HeadingText>
        <HeadingSubText>Những nhà tài trợ cùng đồng hành<br/>với hội nghị khoa học</HeadingSubText>
      </SponsorContainerHeading>
      <div>
        <div>
          <SponsorTypeText>Tài trợ vàng</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('gold') } 
          </SponsorHolder>
        </div>
        <div>
          <SponsorTypeText>Tài trợ bạc</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('silver') }  
          </SponsorHolder>
        </div>
        <div>
          <SponsorTypeText>Tài trợ đồng</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('copper') }    
          </SponsorHolder>
        </div> 
      </div>
    </SponsorContainer>
  )
}

export default SponsorList