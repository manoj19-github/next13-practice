interface IUser {
  email: string;
  username: string;
  image: string;
}
interface IPrompt {
  creator: IUser;
  prompt: string;
  tag: string;
}
export default IPrompt;
