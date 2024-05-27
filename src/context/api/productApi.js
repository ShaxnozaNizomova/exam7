import { api } from './index'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: "/products?limit=8", 
        params 
      }),
      providesTags:["Product"]
    }),
    getDetailProduct: build.query({
        query: (id) =>({
            url: `/products/${id}`
        })
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetDetailProductQuery,
} = productApi