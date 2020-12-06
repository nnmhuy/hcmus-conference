const backendURL = process.env.REACT_APP_BACKEND_URL

const dateList = [
  { name: 'Ngày 1', date: '18/12/2020',
    sessions: [
      { name: 'Phiên 1', starting_time: '7:00', ending_time: '11:00'},
      { name: 'Phiên 2', starting_time: '13:00', ending_time: '17:00'},
    ]
  },
  { name: 'Ngày 2', date: '19/12/2020',
    sessions: [
      { name: 'Phiên 3', starting_time: '7:00', ending_time: '11:00' },
      { name: 'Phiên 4', starting_time: '13:00', ending_time: '17:00' },
    ]
  },
]

const presentationList = [
  {
    "major": "Toán - Tin học",
    "startDate": new Date("December 17, 2020 13:00:00"),
    "endDate": new Date("December 17, 2020 13:30:00"),
    "title": "Test presentation title",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://google.com",
    "author": "Ngoc Minh Huy Nguyen"
  },
  {
    "major": "Toán - Tin học",
    "startDate": new Date("December 17, 2020 13:30:00"),
    "endDate": new Date("December 17, 2020 13:45:00"),
    "title": "Test presentation title 2",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "linkZoom": "https://facebook.com",
    "author": "Quang Thuc Nguyen"
  },
]

export {
  backendURL,
  dateList,
  presentationList,
}