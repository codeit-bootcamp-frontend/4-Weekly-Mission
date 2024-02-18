const ProfileId = ({ state }) => {
  return (
    <div>
      <img src={state.profileImageSource} />
      <div>{state.email}</div>
    </div>
  );
};

export default ProfileId;
