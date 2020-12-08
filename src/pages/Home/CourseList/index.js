import React from 'react'
import styled from 'styled-components'

const courseList = [
  'Tiểu ban Toán - Tin học',
  'Tiểu ban Vật lý - Địa cầu và Hải dương',
  'Tiểu ban Hoá học',
  'Tiểu ban Sinh học - Công nghệ sinh học',
  'Tiểu ban Địa chất và Tài nguyên Trái đất',
  'Tiểu ban Môi trường',
  'Tiểu ban Công nghệ thông tin - Truyền thông',
  'Tiểu ban Điện tử - Viễn thông',
  'Tiểu ban Khoa học và Công nghệ vật liệu',
  'Tiểu ban Kỹ thuật hạt nhân và Vật lý y khoa'
]

const CourseContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 20px 40px;
  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: repeat(1, auto);
    grid-gap: 20px;
  }
`
const CourseHeading = styled.h3`
  color: #01458E;
  font-weight: 500;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`

const CourseText = styled.p`
  color: #000;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 0;
`

const CourseListContainer = styled.div`
  padding: 20px 0 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CourseList = () => {
  return (
    <CourseListContainer>
      <CourseHeading>Với sự tham gia của 10 tiểu ban</CourseHeading>
      <CourseContainer>
        {
          courseList.map((courseItem, index) => {
          return <CourseText>{courseItem}</CourseText>
          })
        }
      </CourseContainer>
    </CourseListContainer>
  )
}

export default CourseList