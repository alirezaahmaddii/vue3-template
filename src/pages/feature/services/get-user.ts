import apiService from "@/core/services/interceptor";


export const getUsers = () => {
  return apiService.get("get")
}
