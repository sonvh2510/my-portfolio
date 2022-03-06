export enum SocialEnum {
  LinkedIn = "fa-brands fa-linkedin-in",
  Github = "fa-brands fa-github-alt",
  Facebook = "fa-brands fa-facebook-f",
  Email = "fa-solid fa-paper-plane"
}

export interface Social {
  type: "LinkedIn" | "Github" | "Facebook" | "Email",
  url: string,
}

export interface Profile {
  name: string,
  title: string,
  avatar: string,
  socials: Array<Social>
}
