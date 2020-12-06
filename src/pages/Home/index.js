import React from 'react'
import Banner from './Banner.js';
import SponsorList from './SponsorList.js';

const sponsorData = [
  { type: 'gold', name: 'gianty group', image: '../../static/images/nha-tai-tro/gnt-gianty-group.png', link: 'https://www.gnt.com.vn/' },
  { type: 'gold', name: 'sci edu', image: '../../static/images/nha-tai-tro/sci-e-01-01.png', link: 'http://sci.edu.vn/' },
  { type: 'gold', name: 'itec', image: '../../static/images/nha-tai-tro/logo_icc.jpg', link: 'https://www.itec.edu.vn/' },
  { type: 'silver', name: 'trung tam tin hoc', image: '../../static/images/nha-tai-tro/logo-tt-tin-hoc.jpg', link: 'https://csc.edu.vn/' },
  { type: 'silver', name: 'tnic', image: '../../static/images/nha-tai-tro/sent-logo-tn.png', link: 'http://tnic.com.vn/' },
  { type: 'silver', name: 'horiba', image: '../../static/images/nha-tai-tro/horiba.png', link: 'http://horiba.com.vn/' },
  { type: 'copper', name: 'chemsol', image: '../../static/images/nha-tai-tro/logo-chemsol.jpg', link: 'http://www.chemsol.vn/' },
  { type: 'copper', name: 'apc lab', image: '../../static/images/nha-tai-tro/apclab-01.png', link: '' }
]

const Home = (props) => {
  return (
    <div>
      <Banner />
      <SponsorList sponsorData={sponsorData}/>
    </div>
  )
}

const styles={
  
}
export default Home