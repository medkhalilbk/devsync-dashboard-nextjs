export type PaginatedRes<Payload> = {
  payload: Payload;
  from: number;
  to: number;
  length: number;
};

export type PaginationParams = {
  from: number;
  to: number;
};
