import { userApi } from 'src/store/user/user.api'

export const contractsApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		getAllContracts: build.query({
			query: () => ({
				url: 'all-contracts',
			}),
			providesTags: ['ContractFiles'],
		}),
		getAllPayments: build.query({
			query: () => ({
				url: 'all-payments',
			}),
			providesTags: ['ContractFiles'],
		}),
		uploadFile: build.mutation({
			query: ([id, contractFiles]) => ({
				url: `upload-contract-files/${id}`,
				method: 'POST',
				body: contractFiles,
			}),
			invalidatesTags: () => ['ContractFiles'],
		}),

		deleteFile: build.mutation({
			query: ([id, index]) => ({
				url: `delete-contract-files/${id}`,
				method: 'DELETE',
				body: { fileIndex: index },
			}),
			invalidatesTags: () => ['ContractFiles'],
		}),
	}),
})

export const {
	useGetAllContractsQuery,
	useGetAllPaymentsQuery,
	useUploadFileMutation,
	useDeleteFileMutation,
} = contractsApi
