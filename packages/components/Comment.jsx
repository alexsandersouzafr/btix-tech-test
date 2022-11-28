import React from "react";

export default function Comment({ user, comment }) {
  return (
    <div>
      <div className="font-bold">{user}:</div>
      <div>{comment}</div>
      <hr />
    </div>
  );
}
