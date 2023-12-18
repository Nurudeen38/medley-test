import { medleyApi } from '..';

interface Payout {
  dateAndTime: string;
  status: string;
  value: string;
  username: string;
}

type PayoutResponse = {
  metadata: { page: number; limit: number; totalCount: number };
  data: Payout[];
};

type PayoutParams = { search?: string; page: number;limit?:string };

export const getPayout = medleyApi.injectEndpoints({
  endpoints: (builder) => ({
    getPayoutList: builder.query<PayoutResponse, PayoutParams>({
      query: ({search,...params}) => ({
        url: search && search.length > 0 ? `/search?query=${search}` : `/payouts`,
        params,
      }),
    }),
  }),
});

export const { useLazyGetPayoutListQuery, useGetPayoutListQuery } = getPayout;
