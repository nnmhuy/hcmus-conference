import React from 'react'
import Banner from './Banner/Banner';
import CourseList from './CourseList';
import SponsorList from './SponsorList.js';
import Statistics from './Statistics';
import './style.css'

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

const Home = (props) => {
  return (
    <div>
      <Banner />
      <CourseList/>
      <Statistics/>
      <SponsorList sponsorData={sponsorData}/>
    </div>
  )
}

export default Home