const md5 = require('md5');
const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      return callApi('/Badges');
    },
    create(badge) {
      const email = badge.email
      const hash = md5(email);
      let data = {
        firstName: badge.firstName,
        lastName: badge.lastname,
        email: email,
        jobTitle: badge.jobtitle,
        twitter: badge.twitter,
        avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
      }
      return callApi(`/Badges`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    read(badgeId) {
      return callApi(`/Badges/${badgeId}`);
    },
    update(badgeId, updates) {
      const email = updates.email
      const hash = md5(email);
      let data = {
        firstName: updates.firstName,
        lastName: updates.lastname,
        email: email,
        jobTitle: updates.jobtitle,
        twitter: updates.twitter,
        avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
      }
      return callApi(`/Badges/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;