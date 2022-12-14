import axios from "axios";
import reviews from "../reviews";

//const API_BASE = process.env.REACT_APP_API_BASE;
export const BACKEND_API = "http://localhost:8080";

export const apiKey = "f227150707ad40b08b9a626750b0564b";

export const updateUser = async (user) => {
  user = { uid: user._id, ...user };

  const response = await axios.put(`${BACKEND_API}/profile/update`, user, {
    headers: { "x-auth-token": user.token },
  });
  if (response.data.err) {
    return false;
  }
  return user;
};

export const findUser = async () => {
  const response = await axios.get(BACKEND_API);
  const user = response.data;
  return user;
};

export const loginUser = async (userrequest) => {
  const response = await axios.post(`${BACKEND_API}/login`, userrequest);
  if (response.data.err) {
    return false;
  }
  let token = response.data.token;
  localStorage.setItem("WebDevToken", token);
  return response;
};

export const postReview = async (obj) => {
  const reviewObj = {
    review: obj.review,
    rating: obj.rating,
  };
  const gameid = obj.gameid;

  const token = localStorage.getItem("WebDevToken");
  const response = await axios.post(
    `${BACKEND_API}/details/review/` + gameid,
    reviewObj,
    {
      headers: { "x-auth-token": token },
    }
  );

  if (response.data.err) {
    return false;
  }
  return response;
};

export const updateReview = async (obj) => {
  const reviewObj = {
    review: obj.review,
    rating: obj.rating,
  };
  const gameid = obj.gameid;

  const token = localStorage.getItem("WebDevToken");
  const response = await axios.put(
    `${BACKEND_API}/details/review/` + gameid,
    reviewObj,
    {
      headers: { "x-auth-token": token },
    }
  );
  if (response.data.err) {
    return false;
  }
  return response;
};

export const deleteReview = async (obj) => {
  const gameid = obj.gameid;
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.delete(
    `${BACKEND_API}/details/review/` + gameid,
    {
      headers: { "x-auth-token": token },
    }
  );
  if (response.data.err) {
    return false;
  }
  return response;
};

export const isLoggedIn = async () => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.get(`${BACKEND_API}/tokenvalidation`, {
    headers: { "x-auth-token": token },
  });

  if (response.data.status !== 200) {
    return false;
  }
  return response;
};
export const followUser = async (uid) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.post(`${BACKEND_API}/follow`, uid, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
};

export async function favoriteGame(gid) {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.post(`${BACKEND_API}/favorites`, gid, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
}

export const unfollowUser = async (uid) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.post(`${BACKEND_API}/unfollow`, uid, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
};

export const unfavoriteGame = async (gid) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.delete(`${BACKEND_API}/favorites/${gid}`, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
};

export const deleteUser = async (tid) => {
  const response = await axios.delete(`${BACKEND_API}/${tid}`);
  return response.data;
};

export const increaseCount = async (obj) => {
  const gameid = obj.gameid;
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.get(`${BACKEND_API}/details/like/` + gameid, {
    headers: { "x-auth-token": token },
  });
  if (response.data.err) {
    return false;
  }
  return response;
};

export const decreaseCount = async (obj) => {
  const gameid = obj.gameid;
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.get(`${BACKEND_API}/details/dislike/` + gameid, {
    headers: { "x-auth-token": token },
  });
  if (response.data.err) {
    return false;
  }
  return response;
};

export const creategame = async (data) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.post(`${BACKEND_API}/games/createdgame`, data, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
};

export const deletegame = async (id) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.delete(`${BACKEND_API}/games/deletegame/${id}`, {
    headers: { "x-auth-token": token },
  });
  if (response.data.status !== 200) {
    return false;
  }
  return response;
};

export const updateGame = async (obj) => {
  const token = localStorage.getItem("WebDevToken");
  const response = await axios.put(`${BACKEND_API}/games/createdgame`, obj, {
    headers: { "x-auth-token": token },
  });
  if (response.data.err) {
    return false;
  }
  return response;
};
