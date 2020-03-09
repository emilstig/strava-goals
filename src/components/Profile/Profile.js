import React from "react";
import styled from "styled-components";
import Flex from "../UI/Layout/Flex";
import Box from "../UI/Layout/Box";

const ProfilePicture = styled(Box)`
  width: 64px;
  height: 64px;
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Profile = ({ profile }) => {
  const { firstName, lastName, image } = profile;
  return (
    <Flex justifyContent="flex-end">
      <ProfilePicture>
        <img src={image} alt={`${firstName} ${lastName}`} />
      </ProfilePicture>
      {firstName} {lastName}
    </Flex>
  );
};

export default Profile;
