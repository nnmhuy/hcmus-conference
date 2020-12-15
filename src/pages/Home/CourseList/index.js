import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../constants/colors'

const courseList = [
  'Tiểu ban Hoá học',
  'Tiểu ban Sinh học - Công nghệ sinh học',
  'Tiểu ban Kỹ thuật hạt nhân và Vật lý y khoa',
  'Tiểu ban Vật lý - Địa cầu và Hải dương',
  'Tiểu ban Địa chất và Tài nguyên Trái đất',
  'Tiểu ban Khoa học và Công nghệ vật liệu',
  'Tiểu ban Môi trường',
  'Tiểu ban Điện tử - Viễn thông',
  'Tiểu ban Toán - Tin học',
  'Tiểu ban Công nghệ thông tin - Truyền thông',
]

const CourseContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(1, auto);
  grid-gap: 20px;
  @media (min-width: 568px) {
    text-align: center;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px 90px;
  }
  @media (min-width: 1350px) {
    grid-template-columns: repeat(3, auto);
  }
`

const CourseHeading = styled.h3`
  color: ${colors.primaryBlue};
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  @media (min-width: 568px) {
    text-align: center;
  }
`

const CourseText = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 0;
  transition: all 0.3s;
  position: relative;
  width: fit-content;
  transition: all 0.3s;
  &::after {
    position: absolute;
    transition: all 0.3s;
    bottom: -3px;
    left: 50%;
    content: "";
    width: 0;
    height: 3px;
    border-radius: 100px;
    background-image: ${colors.lightGradient};
  }
  &:hover::after {
    width: 100%;
    left: 0;
  }
`

const CourseListContainer = styled.div`
  padding: 40px 20px 80px;
  display: flex;
  flex-direction: column;
  @media (min-width: 568px) {
    align-items: center;
    justify-content: center;
  }
`

function CourseList() {
  return (
    <CourseListContainer>
      <CourseHeading>Với sự tham gia của 10 tiểu ban</CourseHeading>
      <CourseContainer>
        {
          courseList.map((courseItem, index) => {
            const query = new URLSearchParams()
            query.set('filter', JSON.stringify([index]))

            return (
              <Link key={'courseItem'+index} to={`/chuong-trinh?${query.toString()}`}>
                <CourseText>{courseItem}</CourseText>
              </Link>
            )}
          )
        }
      </CourseContainer>
    </CourseListContainer>
  )
}

export default CourseList