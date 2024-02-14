import './FolderContents.css';
import { dateChange, timeChange } from '../dateFunction';

function FolderContents({links = []}) {
    return(
        <article>
            <ul>
                {
                    links.map(({ id, title, imageSource, createdAt, url, description }) => {
                        return(
                            <li key={id}>
                                <a href={url} target='_blank'>
                                    <div className='imgBox'>
                                        <img src={imageSource ? imageSource : `${process.env.PUBLIC_URL}/images/noImage.jpg`} alt={title}/>
                                    </div>
                                    <div className='textBox'>
                                        <span>{timeChange(createdAt)}</span>
                                        <p className='description'>{description}</p>
                                        <p className='date'>{dateChange(createdAt)}</p>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}

export default FolderContents;