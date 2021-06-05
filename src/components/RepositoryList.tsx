import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  descriptions: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/eveshino/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>List of Repositorys</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
//use map to run in to the entire repository so for each repository return item
//when using map in html always use key={}
