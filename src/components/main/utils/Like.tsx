import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

const like = ({}) => {
  const [toggle, setToggle] = useState(false);

  const toggleLike = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <GoHeartFill size={25} onClick={toggleLike} color="red" />
      ) : (
        <GoHeart size={25} onClick={toggleLike} />
      )}
    </>
  );
};

export default like;
