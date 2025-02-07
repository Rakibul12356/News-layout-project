import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { rating, title, details, img, name,  image_url ,_id} = news
    return (

        <div className="card bg-base-100  shadow-xl mb-16 border-b-2">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <figure>
                <img
                    src={image_url}
                />
            </figure>
            <div className="card-body">
                {
                    // eslint-disable-next-line react/prop-types
                    details.length > 200 ? <p>{details.slice(0, 200)}  <Link 
                    to={`/news/${_id}`} className="font-bold text-blue-600">Read more...</Link></p> : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;