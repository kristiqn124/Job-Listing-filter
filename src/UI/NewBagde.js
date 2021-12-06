import style from "./NewBadge.module.css";
const NewBadge = (props) => {
  return (
    <div className={`${style.newbadge} ${!props.newBool ? style.empty : ""}`}>
      NEW!
    </div>
  );
};
export default NewBadge;
