import React, { useState, useEffect } from 'react';
import ky from 'ky';

function GithubUser({ username }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

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

  return (
    <div>
      <img src={avatarUrl} alt={`${username}'s avatar`} />
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{email}</p>
    </div>
  );
}

export default GithubUser;