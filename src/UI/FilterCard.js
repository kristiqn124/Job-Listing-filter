import style from "./FilterCard.module.css";

const FilterCard = (props) => {
  return <div className={style.card}>{props.children}</div>;
};
export default FilterCard;
