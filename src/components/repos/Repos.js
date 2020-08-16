import React from "react";
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />); //key is passed since it is list
};

// repos is a prop so we need proptypes
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;