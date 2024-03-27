import { useQuery } from '@tanstack/react-query';

import sampleAPI from 'api/sampleAPI';
import API from 'constants/API';

function useSampleFolderQuery() {
  return useQuery({
    queryKey: [API.SAMPLE.FOLDER],
    queryFn: async () => {
      return await sampleAPI.getSampleFolderInfo();
    },
  });
}

export default useSampleFolderQuery;
