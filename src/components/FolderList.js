// import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatTimeDifference(value) {
  const now = new Date();
  const diffInMilliseconds = now - new Date(value);

  // Milliseconds in different units
  const minuteInMilliseconds = 60 * 1000;
  const hourInMilliseconds = 60 * minuteInMilliseconds;
  const dayInMilliseconds = 24 * hourInMilliseconds;
  const monthInMilliseconds = 30 * dayInMilliseconds;
  const yearInMilliseconds = 365 * dayInMilliseconds;

  // Calculate differences in different units
  const diffInMinutes = Math.floor(diffInMilliseconds / minuteInMilliseconds);
  const diffInHours = Math.floor(diffInMilliseconds / hourInMilliseconds);
  const diffInDays = Math.floor(diffInMilliseconds / dayInMilliseconds);
  const diffInMonths = Math.floor(diffInMilliseconds / monthInMilliseconds);
  const diffInYears = Math.floor(diffInMilliseconds / yearInMilliseconds);

  // Format the time difference based on the rules
  if (diffInMinutes < 2) {
    return "1 minute ago";
  } else if (diffInMinutes <= 59) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 1) {
    return "1 hour ago";
  } else if (diffInHours <= 23) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 1) {
    return "1 day ago";
  } else if (diffInDays <= 30) {
    return `${diffInDays} days ago`;
  } else if (diffInMonths < 1) {
    return "1 month ago";
  } else if (diffInMonths <= 11) {
    return `${diffInMonths} months ago`;
  } else if (diffInYears < 1) {
    return "1 year ago";
  } else {
    const yearsAgo = Math.floor(diffInMonths / 12);
    return `${yearsAgo} years ago`;
  }
}

function FolderListItem({ item }) {
  const { title, createdAt, url, description, imageSource } = item;

  return (
    <Col>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imageSource} className="img-fluid" />
          <Card.Body>
            <Card.Text>{formatTimeDifference(createdAt)}</Card.Text>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{formatDate(createdAt)}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

function FolderList({ items }) {
  return (
    <Row xs={12} md={6} lg={3} className="g-4">
      {items.map((item) => (
        <div key={item.id}>
          <FolderListItem item={item} />
        </div>
      ))}
    </Row>
  );
}

export default FolderList;
