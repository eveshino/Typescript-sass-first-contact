import { useState, useEffect } from "react";
import axios from "axios";

const fetchRandomData = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
    });
};

const getFullUserName = (userInfo) => {
  const {
    name: { first, last },
  } = userInfo;

  return `${first} ${last}`;
};

//////////////

function ApiRequest() {
  const [counter, setCounter] = useState(0);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");
  // return <RepositoryList />;

  const fetchNextUser = () => {
    fetchRandomData(nextPageNumber).then((res) => {
      // setRandomUserDataJSON(JSON.stringify(res, null, 2));
      if (res === undefined) return;
      const newUserInfos = [...userInfos, ...res.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(res.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser();
  }, []);

  return (
    <div className="test">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increment 1
      </button>
      <button
        onClick={() => {
          fetchNextUser();
        }}
      >
        fetch next user[next page]{" "}
      </button>

      {userInfos.map((userInfo, idx) => (
        <>
          <p>{getFullUserName(userInfo)}</p>
          <img src={userInfo.picture.thumbnail} />
        </>
      ))}

      <button
        onClick={() => {
          fetchRandomData();
        }}
      >
        fetch api
      </button>
      <pre>{randomUserDataJSON}</pre>
    </div>
  );
}

export default ApiRequest;
