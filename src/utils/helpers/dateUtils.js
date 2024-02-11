export function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  export function getTimeDifference(createdAt) {
    const currentDate = new Date();
    const createdDate = new Date(createdAt);
  
    const timeDifference = currentDate - createdDate;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
    const yearsDifference = Math.floor(monthsDifference / 12);
  
    if (minutesDifference < 2) {
      return "1 minute ago";
    } else if (minutesDifference <= 59) {
      return `${minutesDifference} minutes ago`;
    } else if (hoursDifference === 1) {
      return "1 hour ago";
    } else if (hoursDifference <= 23) {
      return `${hoursDifference} hours ago`;
    } else if (daysDifference === 1) {
      return "1 day ago";
    } else if (daysDifference <= 30) {
      return `${daysDifference} days ago`;
    } else if (monthsDifference === 1) {
      return "1 month ago";
    } else if (monthsDifference <= 11) {
      return `${monthsDifference} months ago`;
    } else if (yearsDifference === 1) {
      return "1 year ago";
    } else {
      return `${yearsDifference} years ago`;
    }
  }
  