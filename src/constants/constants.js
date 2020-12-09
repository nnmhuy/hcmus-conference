const backendURL = process.env.REACT_APP_BACKEND_URL


// TODO: icon without book
const majorList = [
  { id: 0, name: "Toán - Tin học", icon: require('../static/images/major-icon/0.svg') },
  { id: 1, name: "Vật lý - Địa cầu và Hải dương", icon: require('../static/images/major-icon/1.svg') },
  { id: 2, name: "Hóa học", icon: require('../static/images/major-icon/2.svg') },
  { id: 3, name: "Sinh học - Công nghệ sinh học", icon: require('../static/images/major-icon/3.svg') },
  { id: 4, name: "Địa chất và Tài nguyên Trái đất", icon: require('../static/images/major-icon/4.svg') },
  { id: 5, name: "Môi trường", icon: require('../static/images/major-icon/5.svg') },
  { id: 6, name: "Công nghệ Thông tin - Truyền thông", icon: require('../static/images/major-icon/6.svg') },
  { id: 7, name: "Điện tử - Viễn thông", icon: require('../static/images/major-icon/7.svg') },
  { id: 8, name: "Khoa học và Công nghệ Vật liệu", icon: require('../static/images/major-icon/8.svg') },
  { id: 9, name: "Kỹ thuật hạt nhân và Vật lý Y khoa", icon: require('../static/images/major-icon/9.svg') },
]

// TODO: fix date
const dateList = [
  { name: 'Ngày 1', date: new Date(), },
  { name: 'Ngày 2', date: '2020-12-19', },
]


const sessionList = [
  { name: 'Session 1', startDate: new Date().setHours(7, 0), endDate: new Date().setHours(11, 30) },
  { name: 'Session 2', startDate: new Date().setHours(13, 30), endDate: new Date().setHours(17, 30) },
  { name: 'Session 3', startDate: new Date("December 19, 2020 7:00:00"), endDate: new Date("December 19, 2020 11:30:00") },
  { name: 'Session 4', startDate: new Date("December 19, 2020 13:30:00"), endDate: new Date("December 19, 2020 17:30:00") },
]

const presentationList = [
  {
    "majorId": 2,
    "startDate": new Date("December 1, 2020 13:00:00"),
    "endDate": new Date("December 1, 2020 13:30:00"),
    "title": "Test presentation title",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://google.com",
    "author": "Ngoc Minh Huy Nguyen"
  },
  {
    "majorId": 9,
    "startDate": new Date("December 2, 2020 13:30:00"),
    "endDate": new Date("December 29, 2020 13:30:00"),
    "title": "Test presentation title",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://google.com",
    "author": "Quang Thuc Nguyen"
  },
  {
    "majorId": 6,
    "startDate": new Date("December 30, 2020 13:30:00"),
    "endDate": new Date("December 30, 2020 13:45:00"),
    "title": "Test presentation title 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://facebook.com",
    "author": "Huu Duc Trinh"
  },
  {
    "majorId": 7,
    "startDate": new Date().setHours(8),
    "endDate": new Date().setHours(9),
    "title": "Test presentation title 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://facebook.com",
    "author": "Huu Duc Trinh"
  },
  {
    "majorId": 8,
    "startDate": new Date().setHours(9),
    "endDate": new Date().setHours(10),
    "title": "Test presentation title 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://facebook.com",
    "author": "Huu Duc Trinh"
  },
  {
    "majorId": 9,
    "startDate": new Date().setHours(14),
    "endDate": new Date().setHours(15),
    "title": "Test presentation title 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://facebook.com",
    "author": "Huu Duc Trinh"
  },
]

export {
  backendURL,
  majorList,
  dateList,
  sessionList,
  presentationList,
}