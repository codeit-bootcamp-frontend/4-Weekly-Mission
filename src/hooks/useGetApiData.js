const useGetApiData = (apiFunction, initialData = [], dependencies = []) => {
  const [data, setData] = useState(initialData);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const request = async () => {
    try {
      const data = await apiFunction();
      setData(data);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    request();
  }, [...dependencies]);

  return { data, isLoading, isSuccess, isError };
};
