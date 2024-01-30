import { http, HttpResponse } from 'msw'

import { GetManagedRestaurant } from '@/api/get-managed-restaurant'

export const getManagedRestaurant = http.get<
  never,
  never,
  GetManagedRestaurant
>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Pizza Shop',
    createdAt: new Date(),
    updatedAt: null,
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
  })
})
