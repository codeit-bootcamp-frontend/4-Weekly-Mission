function formatDate(value){
  const uploadDate = new Date(value);
  return `${uploadDate.getFullYear}. ${uploadDate.getMonth}. ${uploadDate.getdate}. `;
}

function uploadTimeDiffrence(value){
  const today = new Date();
  const timeDiff =  today - new Date(value);
}

function FolderList({items}){
  if(!Array.isArray(items)){
    return null;
  }

  return (
    <div className="card-section">
      {items.map((item)=> {
        return (<FolderListCard key={item.id} item={item} />);
      })}
    </div>
  );
}

function FolderListCard({item}){
  const { createdAt, url, title, description, imageSource } = item;

  <section>
    <a href ={url}>
      <div className="card">
          <img src={imageSource} alt={title}/>
          <div className="card-text">
            <p className="time-ago">{uploadTimeDiffrence(createdAt)}</p>
            <p className="card-description">{description}</p>
            <p className="upload-date">{formatDate(createdAt)}</p>
          </div>
        </div>
      </a>
    </section>
}

export default FolderList;