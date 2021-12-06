import style from "./JobCard.module.css";
import BtnFilters from "../UI/BtnFilters";
import NewBadge from "../UI/NewBagde";
import FeaturedBadge from "../UI/FeaturedBadge";

const JobCard = (props) => {
  if (props.data) {
    return (
      <div className={style.jobCard}>
        <div className={style.infoJob}>
          <img
            alt={`${props.data.company}`}
            src={require(`${"" + props.data.logo}`).default}
          ></img>
          <div style={{ width: `${20}rem` }}>
            <div className={style.job_heading}>
              <div className={style.companyHead}>{props.data.company}</div>

              <NewBadge newBool={props.data.new} />
              <FeaturedBadge featuredBool={props.data.featured} />
            </div>
            <h4 className={style.positionHead}>{props.data.position}</h4>

            <p style={{ color: "hsl(180, 8%, 52%)" }}>
              <i>
                {props.data.postedAt} · {props.data.contract} ·{" "}
                {props.data.location}
              </i>
            </p>
          </div>
        </div>
        <div className={style.filters}>
          <BtnFilters onChange={props.onChange} key={props.data.role}>
            {props.data.role}
          </BtnFilters>
          <BtnFilters onChange={props.onChange} key={props.data.level}>
            {props.data.level}
          </BtnFilters>
          {props.data.languages.map((el) => (
            <BtnFilters onChange={props.onChange} key={el}>
              {el}
            </BtnFilters>
          ))}
        </div>
      </div>
    );
  }
  return <div></div>;
};
export default JobCard;
