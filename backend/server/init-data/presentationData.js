const major = require("../../constant/major.json");

var presentationList = [
  {
    majorId: 0,
    startDate: new Date("December 18, 2020 14:30:00"),
    endDate: new Date("December 18, 2020 15:24:00"),
    title: "Hội thảo 1b",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 0,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 1a",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh 2",
  },
  {
    majorId: 0,
    startDate: new Date("December 19, 2020 7:30:00"),
    endDate: new Date("December 19, 2020 8:24:00"),
    title: "Hội thảo 1c",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 0,
    startDate: new Date("December 19, 2020 14:30:00"),
    endDate: new Date("December 19, 2020 15:24:00"),
    title: "Hội thảo 1d",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 1,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 2",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 2,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 3",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 3,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 4",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh 2",
  },
  {
    majorId: 4,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 5",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 5,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 6",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 6,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 7",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 7,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 8",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh 3",
  },
  {
    majorId: 8,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 9",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh",
  },
  {
    majorId: 9,
    startDate: new Date("December 18, 2020 8:30:00"),
    endDate: new Date("December 18, 2020 9:24:00"),
    title: "Hội thảo 10",
    room: "I.64 tòa nhà I",
    paperLink: "",
    description:
      "Thời gian nộp bài viết toàn văn tham gia đăng Tạp chí dự kiến vào tháng 01/2021. Sau khi được phản biện và chỉnh sửa theo yêu cầu của Tạp chí, bài viết toàn văn có thể được đăng trong các số dự kiến dành cho Hội nghị (Số 01-02 năm 2021).",
    linkZoom: "https://hnkh.hcmus.edu.vn/index.php/submission",
    author: "TS. Nguyễn Lê Hoàng Anh 3",
  },
];

module.exports = presentationList;
