import { useEffect, useState } from 'react';
import { getFolderData } from '../api';

const FolderInfo = ({ data, name }) => {
  console.log(data);
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.profileImageSource}</div>
      <div>{name}</div>
    </div>
  );
};

export default FolderInfo;
