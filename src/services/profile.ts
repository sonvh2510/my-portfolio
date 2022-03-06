import { AxiosResponse } from "axios";
import Interceptor from "../helpers/interceptor";
import { Profile } from "../interfaces/profile.interface";

export const getProfile = (url: string): Promise<AxiosResponse<{ data: Profile }>> => {
  return Interceptor.get(url);
};
