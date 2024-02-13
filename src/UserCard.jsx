import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "./App";
import './assets/nav.css'

function UserCard({ user }) {
  const [followState, setFollowState] = useState(user.is_following);

  async function toggleFollow(id) {
    try {
      setFollowState(!followState); // Toggle the state immediately

      if (followState) {
        // If already following, unfollow the user
        const res = await axios.post(`${BASE_URL}/api/unfollow-user/`, {
          id: id,
          token: localStorage.getItem("token"),
        });
        console.log(res.data); // Optional: Log the response if needed
      } else {
        // If not following, follow the user
        const res = await axios.post(`${BASE_URL}/api/follow-user/`, {
          id: id,
          token: localStorage.getItem("token"),
        });
        console.log(res.data); // Optional: Log the response if needed
      }
    } catch (error) {
      console.error("Error toggling follow:", error);
      // Handle error as needed (e.g., show an error message)
      // If there's an error, you might want to revert the button state
      setFollowState(!followState); // Revert the state in case of an error
    }
  }

  return (
    <div
      className="card m-1 bg-dark text-light"
      style={{ width: "12rem", height: 290 }}
      key={user.id}
    >
      <img src={user.image} className="card-img-top" alt="user" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.mood ? user.mood : "neutral"}</p>
        <button
          className={followState ? "btn btn-success" : "btn btn-primary"}
          onClick={() => toggleFollow(user.id)}
        >
          {followState ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
