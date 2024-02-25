import CardError from 'components/common/main/CardError';
import CardGrid from 'components/common/main/CardGrid';
import React from 'react';

const CardList = ({ folderDatas, isLoading, isError }) => {
  if (isError) {
    return <CardError />;
  }
  return (
    <>
      {folderDatas?.data.length ? (
        <CardGrid
          isLoading={isLoading}
          datas={folderDatas?.data}
          isFolder={true}
        />
      ) : (
        <CardError />
      )}
    </>
  );
};

export default CardList;
