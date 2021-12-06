import style from "./BtnFilters.module.css";

const BtnFilters = (props) => {
  const clickHandler = () => {
    props.onChange(props.children);
  };
  return (
    <div onClick={clickHandler} className={style.btnFilter}>
      <p>{props.children}</p>
    </div>
  );
};

export default BtnFilters;
