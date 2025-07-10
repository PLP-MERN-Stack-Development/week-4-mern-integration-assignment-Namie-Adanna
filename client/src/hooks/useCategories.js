import { useQuery, useMutation, useQueryClient } from 'react-query'
import { categoryService } from '../services/api'

// Hook to fetch all categories
export const useCategories = () => {
  return useQuery('categories', categoryService.getAllCategories, {
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook to create a new category
export const useCreateCategory = () => {
  const queryClient = useQueryClient()
  
  return useMutation(categoryService.createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries('categories')
    },
  })
}