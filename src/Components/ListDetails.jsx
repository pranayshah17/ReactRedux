import React from "react";
const ListDetails = (props) => {
  const { repos } = props;
  if (!repos) return null;
  if (!repos.length) return <p>no repos, sorry</p>;

  return (
    <ul>
      {repos.map((repo) => {
        return <li key={repo.id}>{repo.name}</li>;
      })}
    </ul>
  );
};
export default ListDetails;
