// import { RepositoryList } from "./components/RepositoryList";
import { useEffect, useState } from "react";
import "./styles/global.scss";
import axios from "axios";

const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/1")

    .then((res) => {
      console.log(res);
      const myData = res.data;
      return myData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function App() {
  const [content, setContent] = useState(0);
  const [displayData, setDisplayData] = useState("");
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetchData().then((res) => {
      setDisplayData(JSON.stringify(res, null, 2));
      setInfos(res.data);
    });
  }, []);

  return (
    <>
      <h1>{content}</h1>
      <button
        onClick={() => {
          setContent(content + 1);
        }}
      >
        Implement 1
      </button>
      {infos.map((info) => (
        // const { userId, id, title, body } = info;
        <div key={info.userId}>
          <h1>{info.userId}</h1>
          <h3>{info.id}</h3>
          <h2>{info.title}</h2>
          <p>{info.body}</p>
        </div>
      ))}

      <p>now try to fetch the data from the api</p>

      <pre>{displayData}</pre>

      <button onClick={fetchData}>Fetch data </button>
    </>
  );
}

//  https://randomuser.me/api
