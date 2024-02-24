import useConvertDateFormat from "../customHooks/useConvertDateFormat";
import useTimeAgo from "../customHooks/useTimeAgo";
import { CardContainer } from "./CreateCard.style";
const CreateCard = ({ link }) => {
    return (
        <CardContainer
            onClick={() => {
                window.open(link.url);
            }}
        >
            {
                link.imageSource ? (
                    <img className="img" src={link.imageSource} alt={link.title} />
                ) : (
                    <img
                        className="img"
                        src="/assets/shared/no-image.png"
                        alt={link.title}
                    />
                )
            }

            <div className="text-box">
                <p>{useTimeAgo(link.createdAt)}</p>
                <p className="desc">{link.description}</p>
                <p className="date">{useConvertDateFormat(link.createdAt)}</p>
            </div>
        </CardContainer>
    )
}

export default CreateCard;