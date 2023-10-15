import React from "react"
import "./CardVideo.css"
import video3 from "../../videos/video3.mp4"

function CardVideo() {
    return (
        <div className="cardAddress">
            <video  src={video3} autoPlay muted loop controls className="video" >
            </video>
        </div>
    )

}
export default CardVideo