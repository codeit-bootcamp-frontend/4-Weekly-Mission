import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './Frame.css';

const Frame = ({className, items}) => {
  return (
    <div className={className}>
      <SearchBar className='search-bar_ly'/>
      <div className='card-frame_ly'> 
        {items.map((item) => (
          <Card key={item.createdAt} 
            imgSrc={item.imageSource}
            title={item.title}
            description={item.description}
            time={item.createdAt}
            url={item.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Frame;