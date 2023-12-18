import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, ReducerPath } from 'src/helpers/consts'
import { type EmployeeItem, type User } from 'src/types/user'

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
		getEmployeeById: build.query<EmployeeItem[] | undefined, string>({
			query: (id) => ({
				url: `user/${id}`,
			}),
			transformResponse: (response: User, meta, arg) => {
				console.log(response)
				console.log(arg)
				return response.employees.employeesList
			},
		}),
	}),
})

export const { useGetUserByIdQuery, useGetEmployeeByIdQuery } = userApi
