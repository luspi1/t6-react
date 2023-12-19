import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import { type User } from 'src/types/user'

export const userApi = createApi({
	reducerPath: ReducerPath.User,
	tagTypes: ['User', 'ContractFiles'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getUserById: build.query<User, string>({
			query: (id) => ({
				url: `user/${id}`,
			}),
		}),
	}),
})

export const { useGetUserByIdQuery } = userApi
