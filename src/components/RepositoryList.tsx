import React from "react";
import { Repository } from "../types/github";
import RepositoryItem from "./RepositoryItem";

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div>
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;