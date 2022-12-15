import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
    reducerPath : "tasksApi",
    tagTypes: ["Tasks"],
    baseQuery : fetchBaseQuery({ baseUrl : "http://localhost:3005" }),

    endpoints: (builder) => ({

        getTasks: builder.query({
          query: () => "tasks",
          providesTags: ["Tasks"],
          transformResponse: (response) => response.sort((a, b) => b.id - a.id),
        }),

        createTask: builder.mutation({
          query: (newTask) => ({
            url: "/tasks",
            method: "POST",
            body: newTask,
          }),
          invalidatesTags: ["Tasks"],
        }),

        updateTask: builder.mutation({
          query: (updatedTask) => ({
            url: `/tasks/${updatedTask.id}`,
            method: "PATCH",
            body: updatedTask,
          }),
          invalidatesTags: ["Tasks"],
        }),

        deleteTask: builder.mutation({
          query: (taskId) => ({
            url: `/tasks/${taskId}`,
            method: "DELETE",
          }),
          invalidatesTags: ["Tasks"],
        }),

    }),

});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = API;