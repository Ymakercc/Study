import dayjs from 'dayjs';
// 定义返回时间对象的接口
interface CurrentTime {
  year: number;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  weekday: string;
}

export const getCurrentTime = (): CurrentTime => {
  let time = dayjs();
  let year = time.year();
  let month = time.month() + 1 < 10 ? "0" + (time.month() + 1) : (time.month() + 1).toString();
  let day = time.date() < 10 ? "0" + time.date() : time.date().toString();
  let hour = time.hour() < 10 ? "0" + time.hour() : time.hour().toString();
  let minute = time.minute() < 10 ? "0" + time.minute() : time.minute().toString();
  let second = time.second() < 10 ? "0" + time.second() : time.second().toString();
  let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  let currentTime: CurrentTime = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekday: weekday[time.day()],
  };
  return currentTime;
};
