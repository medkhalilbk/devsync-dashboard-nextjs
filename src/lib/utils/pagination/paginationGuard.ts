import type { PaginationParams } from './paginationTypes';

export function paginationGuard(
  pagination: PaginationParams,
  maximum: number = 20,
): PaginationParams {
  const sanitizedFrom = pagination.from;
  const sanitizedTo =
    Math.abs(pagination.to - pagination.from) > maximum
      ? pagination.from + maximum
      : pagination.to;

  return {
    from: sanitizedFrom,
    to: sanitizedTo,
  };
}
