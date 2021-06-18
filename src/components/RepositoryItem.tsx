interface RepositoryItemProps {
  repository: {
    name: string;
    descriptions: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.descriptions}</p>
      <a href={props.repository.html_url}>Access the repository</a>
    </li>
  );
}
