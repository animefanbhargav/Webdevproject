import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import { postReviewThunk, updateReviewThunk } from "../services/user-thunks";
import { useDispatch, useSelector } from "react-redux";

export const Modal = ({ setShowModal, game, type }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  const gametype = type;
  const [review, setReview] = useState(type == "new" ? "" : game.review);
  const [rating, setRating] = useState((type = "new" ? "" : game.rating));
  const dispatch = useDispatch();

  function postreview(e) {
    e.preventDefault();
    //call axios and post review
    const obj = {
      gameid: game.id,
      review: review,
      rating: rating,
    };
    if (gametype === "new") {
      dispatch(postReviewThunk(obj));
    } else {
      let editgame = {
        gameid: game.gameid,
        review: review,
        rating: rating,
      };
      dispatch(updateReviewThunk(editgame));
    }
    // window.location.reload();
    setShowModal(false);
  }

  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef}>
      <div className="modal modaltext">
        <form className="p-2">
          <div className="form-group">
            <label htmlFor="review">Review</label>
            <input
              className="form-control"
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              className="form-control"
              placeholder="0 to 5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <button
              className="form-control btn btn-primary rounded rounded-pill"
              type="submit"
              onClick={(e) => postreview(e)}
              disabled={rating.length != 0 && review.length != 0 ? false : true}
            >
              Post
            </button>
          </div>
        </form>
        <button
          className=" modal-close p-2"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </div>
    </div>,

    document.getElementById("portal")
  );
};
