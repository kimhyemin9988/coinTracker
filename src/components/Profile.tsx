import React, { useEffect,useState } from "react";
import { dbService } from "../difirebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const Profile = () => {
    return(
        <>
            <h1>profile</h1>
        </>
    );
};

export default Profile;