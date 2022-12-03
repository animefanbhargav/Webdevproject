import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateDetail} from "../detail/detail-reducer";
import {Link} from "react-router-dom";

const CreateGameComponent = () => {



  return (
      <form id="usrform">
        <div className="border border-secondary rounded-4 ">
        <h4 className="mb-0 p-3">Add game</h4>
        <div className="row p-2 mb-1">
          <div className="col-3 col-md-3 pt-4">
            <label>Title:</label>
          </div>
          <div className="col-3 col-md-2 pt-4">
            <input type="text"

                   id="title" name="title" placeholder="Title goes here" ></input>
          </div>
        </div>
        <div className="row p-2 mb-1">
          <div className="col-3 col-md-3 pt-1">
            <label>Upload image:</label>
          </div>
          <div className="col-9 col-md-9 pt-4">
            <input type="file" id="myFile" name="filename" ></input>
          </div>
        </div>
        <div className="row p-2 mb-1">
          <div className="col-3 col-md-3 pt-1">
            <label>Tags:</label>
          </div>
          <div className="col-9 col-md-9 pt-4">
            <textarea rows="5" cols="30" name="genres" form="usrform"

                      placeholder="Tags can be separated with ',' (Example: RPG,Adventure,Playstation,..)"></textarea>
          </div>
        </div>
        <div className="row p-2 mb-1">
          <div className="col-3 col-md-3 pt-1">
            <label>Description:</label>
          </div>
          <div className="col-9 col-md-9 pt-4">
            <textarea rows="5" cols="30" name="description" form="usrform"
                      placeholder="Description goes here"></textarea>
          </div>
        </div>
        <div className="row p-2 mb-1">
          <div className="col-3 col-md-3 pt-4">
            <label>Where to Buy:</label>
          </div>
          <div className="col-9 col-md-9 pt-4">
            <textarea rows="5" cols="30" name="tags" form="usrform"
                      placeholder="URLs can be separated with ',' (Example: amazon.com,nintendo.com,..)"></textarea>
          </div>
        </div>
          <Link to="/viewGame">
            <div className="row p-2 mb-1">
              <div align='center' className="col-12 col-md-12 pt-4">
                <button>Save</button>
              </div>
            </div>
          </Link>
        </div>
      </form>
  );
  }
export default CreateGameComponent;