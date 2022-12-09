import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileDetails = () => {
    const profile = useSelector(
        (state) => state.userData.profile);
    const thisUser = true;
    return(
        <div>
            {thisUser &&
            <div className="mb-2">
                <div className="row">
                    <div className="col-4">
                        <i className="bi bi-envelope"></i>
                        <span className="ms-1 d-md-inline d-none">{profile.email}</span>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-telephone"></i>
                        <span className="ms-1 d-md-inline d-none">{profile.phone}</span>
                    </div>
                </div>
            </div>}
            <div className="row">
                <div className="col-4">
                    <i className="bi bi-geo-alt"></i>
                    <span className="ms-1">{profile.location}</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon"></i>
                    <span className="ms-1">Born {
                        new Date(profile.dob).toLocaleDateString(
                            'en-us',{day:"numeric",year:"numeric",month:"long"}
                        )
                    }</span>
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar3"></i>
                    <span className="ms-1">Joined {

                        new Date(profile.doj).toLocaleDateString(
                            'en-us',{year:"numeric",month:"long"}
                        )
                    }</span>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    {profile.following_count > 0 &&
                    <Link to="/following">
                        <span className="fw-bolder">{profile.following_count}</span> Following</Link>}
                    {profile.following_count==0 &&  <span><span className="fw-bolder">0</span> Following</span>}

                </div>
                <div className="col-3">
                    {profile.followers_count > 0 &&
                     <Link to="/followers">
                         <span className="fw-bolder">{profile.followers_count}</span> Followers</Link>}
                    {profile.followers_count==0 &&  <span><span className="fw-bolder">0</span> Followers</span>}
                </div>
            </div>
        </div>

    );
}

export default ProfileDetails;