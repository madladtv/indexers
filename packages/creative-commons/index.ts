import { Indexer, SearchObject } from '@madladtv/indexer-types';

const indexer: Indexer<{
  totalResults: number;
  results: SearchObject[];
}> = {
  urlConstructor: (page) => {
    return `https://madlad.tv/api/indexers/creative-commons?page=${page}`;
  },
  dataMapper: (data) => {
    return data.results;
  }
}

export default indexer;