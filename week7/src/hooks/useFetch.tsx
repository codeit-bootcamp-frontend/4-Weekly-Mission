import { useEffect, useState } from "react";
interface FolderData {
  folder: Folder;
}

interface Folder {
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
}

interface Link {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export const useFolderFetch = (url: string) => {
  const [data, setData] = useState<FolderData | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export interface SharedPageUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export const useUserFetch = (url: string) => {
  const [data, setData] = useState<SharedPageUser | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};
export interface FolderPageUser {
  data: FolderPageData[];
}
export interface FolderPageData {
  id: number;
  created_at: Date;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}
export const useFolderUserFetch = (url: string) => {
  const [data, setData] = useState<FolderPageUser | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export interface FolderPageCard {
  data: FolderCardData[];
}

export interface FolderCardData {
  id: number;
  created_at: Date;
  updated_at: null;
  url: string;
  title: null | string;
  description: null | string;
  image_source: null | string;
  folder_id: null;
}
export const useFolderCardDataFetch = (url: string) => {
  const [data, setData] = useState<FolderPageCard | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export interface SortedMenus {
  data: SortedMenusData[];
}

export interface SortedMenusData {
  id: number;
  created_at: Date;
  name: string;
  user_id: number;
  favorite: boolean;
  link: LinkCount;
}

export interface LinkCount {
  count: number;
}
export const useSortedMenusDataFetch = (url: string) => {
  const [data, setData] = useState<SortedMenus | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};

export interface AllMenu {
  data: AllMenuData[];
}

export interface AllMenuData {
  id: number;
  created_at: Date;
  updated_at: null;
  url: string;
  title: null | string;
  description: null | string;
  image_source: null | string;
  folder_id: null;
}

export const useAllMenuDataFetch = (url: string) => {
  const [data, setData] = useState<AllMenu | null>(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`error Status: ${response.status}`);
      }
      const body = await response.json();
      setData(body);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
};
