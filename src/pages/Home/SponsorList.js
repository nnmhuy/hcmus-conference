import React from 'react'
import { Link } from 'react-router-dom'

const SponsorList = (props) => {
  const { sponsorData } = props
  return (
    <div>
      <h3>Nhà tài trợ</h3>
      <p>Những nhà tài trợ đồng hành với hội nghị khoa học</p>
      <div>
        <div>
          <h4>Tài trợ vàng</h4>
        {
          sponsorData.filter(item => item.type === 'gold').map((sponsorItem, index) => {
            return (
              <Link to={sponsorItem.link}>
                <img style={{width: 40}} src={sponsorItem.image} alt={sponsorItem.alt}/>
              </Link>
            )
          })
        } 
        </div>
        <div>
          <h4>Tài trợ bạc</h4>
        {
          sponsorData.filter(item => item.type === 'silver').map((sponsorItem, index) => {
            return (
              <Link to={sponsorItem.link}>
                <img style={{width: 40}} src={sponsorItem.image} alt={sponsorItem.alt}/>
              </Link>
            )
          })
        } 
        </div>
        <div>
          <h4>Tài trợ đồng</h4>
        {
          sponsorData.filter(item => item.type === 'copper').map((sponsorItem, index) => {
            return (
              <Link to={sponsorItem.link}>
                <img style={{width: 40}} src={sponsorItem.image} alt={sponsorItem.alt}/>
              </Link>
            )
          })
        }   
        </div> 
      </div>
    </div>
  )
}

export default SponsorList