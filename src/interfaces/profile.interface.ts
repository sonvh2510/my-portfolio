export enum SocialEnum {
  LinkedIn = "fa-brands fa-linkedin-in",
  Github = "fa-brands fa-github-alt",
  Facebook = "fa-brands fa-facebook-f",
}

export interface Social {
  type: "LinkedIn" | "Github" | "Facebook",
  url: string,
}

export interface Profile {
  address?: string,
  age?: number,
  avatar: string,
  email: string,
  name: string,
  title: string,
  residence?: string,
  socials: Array<Social>,
  phone?: string,
}
