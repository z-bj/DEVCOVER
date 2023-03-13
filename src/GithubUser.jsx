import React, { useState, useEffect } from 'react';
import ky from 'ky';

function GithubUser({ username }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    async function fetchGithubUser() {
      try {
        const response = await ky(`https://api.github.com/users/${username}`).json();
        setName(response.name);
        setBio(response.bio);
        setEmail(response.email);
        setAvatarUrl(response.avatar_url);
      } catch (error) {
        console.error(error);
      }
    }
    fetchGithubUser();
  }, [username]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchInput) {
      try {
        const response = await ky(`https://api.github.com/users/${searchInput}`).json();
        setName(response.name);
        setBio(response.bio);
        setEmail(response.email);
        setAvatarUrl(response.avatar_url);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label>
          Search for a Github user:
          <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>

      <img src={avatarUrl} alt={`${username}'s avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{email}</p>
    </div>
  );
}

export default GithubUser;
