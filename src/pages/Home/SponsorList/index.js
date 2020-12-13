import React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import Tooltip from '@material-ui/core/Tooltip';

const SponsorTypeText = styled.h4`
  font-size: 1.5em;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 1.8em;
  }
  @media (min-width: 1286px) {
    text-align: left;
  }
`

const SponsorHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 568px) {
    justify-content: center;
  }
  @media (min-width: 1286px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1500px) {
    display: flex;

  }
`

const SponsorContainerHeading = styled.div`
  margin-bottom: 20px;
`

const HeadingText = styled.h2`
  font-size: 2.3em;
  margin-bottom: 0;
  // color: #01458E;
  color: #4053EB;
  @media (min-width: 800px) {
    font-size: 3em;
  }
  @media (min-width: 900px) {
    font-size: 4em;
  }
`

const HeadingSubText = styled.p`
  font-size: 1.2em;
  @media (min-width: 800px) {
    margin-bottom: 0;
  }
`

const SponsorContainer = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 568px) {
    align-items: center;
    text-align: center;
  }
`

const SponsorImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 0px 20px 20px 0;
  @media (min-width: 800px) {
    width: 120px;
    height: 120px;
  }
  @media (min-width: 1286px) {
    width: 130px;
    height: 130px;
    margin: 0 30px 0 0;
  }
`

const SponsorFlexList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1286px) {
    flex-direction: row;
  }
`

const SponsorListHolder = styled.div`
  @media (min-width: 1286px) {
    margin: 0 25px;
  }
`

const SponsorList = (props) => {
  const { allSponsorByRank } = props

  const renderSponsorList = type => {
    return get(allSponsorByRank, type, []).map((sponsorItem, index) => {
      if (!sponsorItem.url || sponsorItem.url === '') {
        return 
          <Tooltip key={type + index} title={sponsorItem.name} aria-label={sponsorItem.name}>
            <SponsorImage src={sponsorItem.image} alt={sponsorItem.name}/>
          </Tooltip>
      }
      return (
        <Tooltip key={type + index} title={sponsorItem.name} aria-label={sponsorItem.name}>
          <a href={sponsorItem.url}>
            <SponsorImage src={sponsorItem.image} alt={sponsorItem.name}/>
          </a>
        </Tooltip>
      )
    })
  }

  return (
    <SponsorContainer>
      <SponsorContainerHeading>
        <HeadingText>Nhà tài trợ</HeadingText>
        <HeadingSubText>Những nhà tài trợ cùng đồng hành với hội nghị khoa học</HeadingSubText>
      </SponsorContainerHeading>
      <SponsorFlexList>
        <SponsorListHolder>
          <SponsorTypeText>Tài trợ vàng</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('gold') } 
          </SponsorHolder>
        </SponsorListHolder>
        <SponsorListHolder>
          <SponsorTypeText>Tài trợ bạc</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('silver') }  
          </SponsorHolder>
        </SponsorListHolder>
        <SponsorListHolder>
          <SponsorTypeText>Tài trợ đồng</SponsorTypeText>
          <SponsorHolder>
            { renderSponsorList('bronze') }    
          </SponsorHolder>
        </SponsorListHolder> 
      </SponsorFlexList>
    </SponsorContainer>
  )
}

const mapStateToProps = ({ presentation, }) => {
  return {
    allSponsorByRank: presentation.allSponsorByRank,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SponsorList)