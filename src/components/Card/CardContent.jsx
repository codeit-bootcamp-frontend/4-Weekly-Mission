import CardHeader from './CardHeader';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';

function CardContent({description, date, ...cardHeaderProps}) {
  return (
    <div className='content__info'>
      <CardHeader {...cardHeaderProps} />
      <CardDescription description={description} />
      <CardFooter date={date} />
    </div>
  );
}
export default CardContent;
