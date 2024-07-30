import React from "react";

const UserCard = ({ userImg, firstName }) => {
  return (
    <div className="flex items-center gap-4 p-5">
      UserCard
      <img className="w-20 h-20 rounded-full" src={userImg} alt="" />
      <div>
        <h1>{firstName}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default UserCard;
