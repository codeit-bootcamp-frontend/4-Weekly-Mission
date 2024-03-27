function timeToString(time) {
    let diffSec = parseInt(time / 1000);
    if (diffSec <= 120) {
        return "1 minute ago";
    }
    let diffMinute = parseInt(diffSec / 60);
    if (diffMinute <= 59) {
        return `${diffMinute} minutes ago`;
    }
    let diffHour = parseInt(diffMinute / 60);
    if (diffHour <= 23) {
        return `${diffHour} hours ago`;
    }
    let diffDay = parseInt(diffHour / 24);
    if (diffDay <= 30) {
        return `${diffDay} days ago`;
    }
    let diffMonth = parseInt(diffDay / 30);
    if (diffMonth <= 11) {
        return `${diffMonth} months ago`;
    }
    let diffYear = parseInt(diffMonth / 12);
    return `${diffYear} years ago`;
}
export function CalcTime(time) {
    let nowTime = Date.now();
    let writingTime = Date.parse(time);
    let diffTime = nowTime - writingTime;
    let sentence = timeToString(diffTime);
    return sentence;
}
