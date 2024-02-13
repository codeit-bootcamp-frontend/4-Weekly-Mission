import baseImg from "../assets/base.png";

function CardListItem(item) {
    const createdAtDate = new Date(item.item.createdAt).toISOString().split("T")[0];

    function timeAgo(timestamp) {
        const currentDate = new Date();
        const inputDate = new Date(timestamp);

        const timeDifference = currentDate - inputDate;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return years === 1 ? "1 year ago" : `${years} years ago`;
        } else if (months > 0) {
            return months === 1 ? "1 month ago" : `${months} months ago`;
        } else if (days > 0) {
            return days === 1 ? "1 day ago" : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
        } else {
            return "Just now";
        }
    }

    function handleClick(url) {
        window.open(url, "_blank");
    }

    return (
        <div className="card_list_item" onClick={() => handleClick(item.item.url)}>
            <div className="img_area">
                <img src={item.item.imageSource || baseImg} alt="" />
            </div>
            <div className="text_area">
                <p className="time">{timeAgo(createdAtDate)}</p>
                <p className="description">{item.item.description}</p>
                <p className="created_at">{createdAtDate}</p>
            </div>
        </div>
    );
}

function CardList({ items }) {
    return (
        <ul className="card_list">
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <CardListItem item={item} />
                    </li>
                );
            })}
        </ul>
    );
}

export default CardList;
