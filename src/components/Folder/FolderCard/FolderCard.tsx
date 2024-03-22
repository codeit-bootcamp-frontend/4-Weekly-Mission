import React from "react";
import ReadFolderCard from "../ReadFolderCard.tsx";

interface Link {
  id: number;
  title: string;
  url: string;
  image_source: string;
  created_at: string;
  description: string;
}

interface FolderCardProps {
  folderLinks: Link[];
}

function FolderCard({ folderLinks }: FolderCardProps) {
  const links = folderLinks || [];

  return <ReadFolderCard links={links} />;
}

export default FolderCard;
