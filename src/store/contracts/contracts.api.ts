import { userApi } from 'src/store/user/user.api'

export const contractsApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		getAllContracts: build.query({
			query: () => ({
				url: 'all-contracts',
			}),
			providesTags: ['ContractFiles'],
		}),
		getContractFilesById: build.query({
			query: (id) => ({
				url: `contract-files/${id}`,
			}),
			providesTags: ['ContractFiles'],
		}),

		uploadFile: build.mutation({
			query: ([id, contractFile]) => ({
				url: `upload-contract-files/${id}`,
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: contractFile,
			}),
			invalidatesTags: () => ['ContractFiles'],
		}),

		deleteFile: build.mutation({
			query: ([id, index]) => ({
				url: `delete-contract-files/${id}`,
				method: 'DELETE',
				body: index,
			}),
			invalidatesTags: () => ['ContractFiles'],
		}),
	}),
})

export const {
	useGetContractFilesByIdQuery,
	useGetAllContractsQuery,
	useUploadFileMutation,
	useDeleteFileMutation,
} = contractsApi
