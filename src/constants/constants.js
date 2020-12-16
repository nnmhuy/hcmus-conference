const backendURL = process.env.REACT_APP_BACKEND_URL

// TODO: icon của địa chất
const majorList = [
  { id: 0, name: "Hóa học", icon: require('../static/images/major-icon/0.svg') },
  { id: 1, name: "Sinh học - Công nghệ sinh học", icon: require('../static/images/major-icon/1.svg') },
  { id: 2, name: "Kỹ thuật hạt nhân và Vật lý Y khoa", icon: require('../static/images/major-icon/2.svg') },
  { id: 3, name: "Vật lý - Địa cầu và Hải dương", icon: require('../static/images/major-icon/3.svg') },
  { id: 4, name: "Địa chất và Tài nguyên Trái đất", icon: require('../static/images/major-icon/4.svg') },
  { id: 5, name: "Khoa học và Công nghệ Vật liệu", icon: require('../static/images/major-icon/5.svg') },
  { id: 6, name: "Môi trường", icon: require('../static/images/major-icon/6.svg') },
  { id: 7, name: "Điện tử - Viễn thông", icon: require('../static/images/major-icon/7.svg') },
  { id: 8, name: "Toán - Tin học", icon: require('../static/images/major-icon/8.svg') },
  { id: 9, name: "Công nghệ Thông tin - Truyền thông", icon: require('../static/images/major-icon/9.svg') },
]

const dateList = [
  { name: 'Ngày 1', date: '2020-12-18', },
  { name: 'Ngày 2', date: '2020-12-19', },
]

const statisticNameList = [
  { key: "numberOfMajor", label: "ngành" },
  { key: "numberOfPresentation", label: "bài báo" },
  { key: "numberOfAuthor", label: "tác giả" },
  { key: "numberOfVisitors", label: "lượt truy cập" },
]

export {
  backendURL,
  majorList,
  dateList,
  statisticNameList,
}