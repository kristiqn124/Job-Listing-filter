import style from "./FilterSort.module.css";

const FilterSort = (props) => {
  const delFilterBtnHandler = (el) => {
    props.deleteHandler(el.target.getAttribute("data-filter"));
  };
  const delAllBtnHandler = () => {
    props.deleteAllHandler();
  };
  return (
    <div
      className={`${style.filterfield} ${
        props.filterData.length === 0 ? style.empty : ""
      }`}
    >
      <div>
        {props.filterData.map((el) => (
          <div style={{ margin: `${10}px` }} key={el}>
            <div className={style.elementsFilter}>{el}</div>
            <div
              data-filter={el}
              onClick={delFilterBtnHandler}
              className={style.del}
            >
              X
            </div>
          </div>
        ))}
      </div>
      <p onClick={delAllBtnHandler} className={style.btnClear}>
        Clear
      </p>
    </div>
  );
};
export default FilterSort;
