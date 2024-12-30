import "../components/UpcomingEventCard.css";
import dragon from "/public/dragon-270x310.png"; //BEST FIT 270px X 310px (270x290/300 could work as well!!)
const UpcomingEventCard = ({
  name,
  description,
  date,
  time,
  venue,
  teamsize,
}) => {
  const props = { color: "grey" };

  return (
    <div className="event-card">
      <div className="section-1">
        <div className="event-name">{name}</div>

        <div className="event-photo">
          <img className="image-style" src={dragon}></img>
        </div>
      </div>

      <div className="event-info">
        <p style={props} className="event-description">
          {description}
        </p>
        <div>
          <div>
            <p className="event-teamsize">TEAM/PARTICIPATION </p>
            <span className="prop">{teamsize}</span>
          </div>

          <div>
            <p className="event-date">DATE </p>
            <span className="prop">{date}</span>
          </div>

          <div>
            <p className="event-time">TIME </p>
            <span className="prop">{time}</span>
          </div>

          <div>
            <p className="event-venue">VENUE </p>
            <span className="prop">{venue}</span>
          </div>
        </div>
        <button className="button">REGISTER</button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
