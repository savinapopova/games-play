export default function Game({title, imageUrl, maxLevel}) {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={imageUrl}/>
            </div>
            <h3>{title}</h3>
            <div className="rating">
                {/*{maxLevel > 0 ? Array.from({length: maxLevel},*/}
                {/*    (_, i) => <span key={i}>☆</span>) : null}*/}
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a href="#" className="btn details-btn">Details</a>
            </div>
        </div>
    );
}
