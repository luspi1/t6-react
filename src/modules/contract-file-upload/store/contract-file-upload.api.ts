import { userApi } from 'src/store/user/user.api'

export const contractFilesApi = userApi.injectEndpoints({
	endpoints: (build) => ({
		getContractFilesById: build.query({
			query: (id) => ({
				url: `contract-files/${id}`,
			}),
			providesTags: ['User'],
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
			// invalidatesTags: () => ['contractFiles'],
			invalidatesTags: () => ['User'],
		}),

		deleteFile: build.mutation({
			query: ([id, index]) => ({
				url: `delete-contract-files/${id}`,
				method: 'DELETE',
				body: index,
			}),
			invalidatesTags: () => ['User'],
		}),
	}),
})

export const { useGetContractFilesByIdQuery, useUploadFileMutation, useDeleteFileMutation } =
	contractFilesApi
