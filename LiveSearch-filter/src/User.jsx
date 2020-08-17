import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  console.log(history);

  return (
    <>
      <h1>
        This is a {fname} {lname} page !
      </h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname === `/user/naveen/babu` ? (
        <button onClick={() => history.goBack()}>Go back</button>
      ) : null}
    </>
  );
};
export default User;
