//createdFromTime
export var getFromTime = function (time) {
    var today = new Date();
    var update = new Date(time);
    var minutes = (today.getTime() - update.getTime()) / 1000 / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var months = days / 30;
    if (months >= 12)
        return "".concat(Math.floor(months / 12), " year ago");
    if (months <= 11)
        return "".concat(Math.floor(months), " months ago");
    if (days >= 31)
        return "1 month ago";
    if (days <= 30)
        return "".concat(Math.floor(days), " days ago");
    if (hours >= 24)
        return "1 day ago";
    if (hours <= 23)
        return "".concat(Math.floor(hours), " hours ago");
    if (minutes >= 60)
        return "1 hour ago";
    if (minutes <= 59)
        return "".concat(Math.floor(minutes), " minutes ago");
    if (minutes < 2)
        return "1 minutes ago";
};
