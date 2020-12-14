// input Date
// output string HH:MM
function getHourMinuteFromTime(time) {
  let hour = time.getHours();
  let min = time.getMinutes();

  if (hour < 10) {
    hour = '0' + time.getHours()
  }
  if (min < 10) {
    min = '0' + time.getMinutes()
  }
  return hour + ':' + min
}


// input Date
// output string DD/MM
function getDayMonthFromTime(time) {
  return time.getDate() + '/' + (time.getMonth() + 1)
}

// input list of session: {time}
// output X (0 -> 100)
function getTimePercent(timeList) {
  let now = new Date()
  if (!timeList || timeList.length < 1) return 100
  if (timeList[0].time >= now) return 0
  if (timeList[timeList.length - 1].time <= now) return 100

  let percentPerSession = 100.0 / (timeList.length - 1)
  let result = 0 
  for (let i = 0; i < timeList.length-1; i++) {
    if (now >= timeList[i+1].time)
      result += percentPerSession
    else if (now > timeList[i].time) {
      let startTime = timeList[i].time.getTime(), endTime = timeList[i+1].time.getTime()
      result += percentPerSession * (now.getTime() - startTime) / (endTime - startTime)
      break
    }
  }
  return result
}

export {getHourMinuteFromTime, getDayMonthFromTime, getTimePercent}