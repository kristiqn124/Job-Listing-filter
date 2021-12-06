// import { useState } from "react";
import JobCard from "./JobCard";
const JobList = (props) => {
  const includesAll = (arr, values) => values.every((v) => arr.includes(v));
  //   const [newArr, setNewArr] = useState(props.data);
  let arrayList =
    props.filterList.length > 0
      ? props.data.filter((arr) =>
          includesAll([...arr.languages, arr.role, arr.level], props.filterList)
        )
      : props.data;

  return (
    <div>
      {arrayList.map((el) => (
        <JobCard onChange={props.onChange} key={el.id} data={el} />
      ))}
    </div>
  );
};
export default JobList;
