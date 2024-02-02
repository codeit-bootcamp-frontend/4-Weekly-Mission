function timeDiff(date){
    const today = new Date();
    const targetDate = new Date(date)
    const minute = (today - targetDate) / (1000 * 60);
    const hour = (today - targetDate) / (1000 * 60 * 60);
    const day = (today - targetDate) / (1000 * 60 * 60 * 24);
    const month = today.getMonth() - targetDate.getMonth();
    const year = today.getFullYear() - targetDate.getFullYear();
    if(year >= 1){
        return `${year} years ago`;
    }
    else if(month >= 1){
        return `${month} month age`;
    }
    else if(day >= 1){
        return `${day} day ago`;
    }
    else if(hour >= 1){
        return `${hour} hour ago`;
    }
    else if(minute < 2){
        return `1 minute ago`;
    }else{
        return `${minute} minutes ago`;
    }
}

export default timeDiff;