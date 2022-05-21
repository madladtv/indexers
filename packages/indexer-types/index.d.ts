type BaseSearchObject = {
  name: string;
  resolution?: string;
  source?: string;
  audio?: string;
  tags?: string[];
  video?: string;
  year?: number;
  imdb?: string;
  themoviedb?: number;
};

export enum FILE_TYPE {
  other = 0,
  unsupported = 1,
  movie = 2,
  tv = 3,
}

export type MovieSearchObject = {
  type: FILE_TYPE.movie;
} & BaseSearchObject;


export type TVSearchObject = {
  episode: number;
  season: number;
  type: FILE_TYPE.tv;
} & BaseSearchObject;

export type UnsupportedSearchObject = {
  type: FILE_TYPE.unsupported;
};

export type SearchObject =
  | MovieSearchObject
  | TVSearchObject
  | UnsupportedSearchObject;

export type Indexer<T> = {
  urlConstructor: (page: number) => string;
  dataMapper: (data: T) => SearchObject[];
}