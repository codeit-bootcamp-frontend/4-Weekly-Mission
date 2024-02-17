import Card from "../containers/Card";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

function SharedContentCard() {
  return (
    <Card>
      <div></div>
      <CardHeader></CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default SharedContentCard;
