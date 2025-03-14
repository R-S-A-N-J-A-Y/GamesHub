import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../../styles/Skeleton.css";

const gameCardSkeleton = () => {
  return (
    <div
      className="row row-cols-1 row-cols-sm-2 row-cols-md-3 
        row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 row-cols-xxl-md-5 row-cols-xxxl-6 m-0 px-2"
    >
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="col mb-4 m-0 skeleton-wrapper">
            <Skeleton height="380px" baseColor="#D5D5D5" />
          </div>
        ))}
    </div>
  );
};

export default gameCardSkeleton;
