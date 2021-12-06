import style from "./FeaturedBadge.module.css";

const FeaturedBadge = (props) => {
  return (
    <div
      className={`${style.featureBadge} ${
        !props.featuredBool ? style.empty : ""
      }`}
    >
      Featured
    </div>
  );
};
export default FeaturedBadge;
