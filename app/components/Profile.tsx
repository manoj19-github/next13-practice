import IPrompt from "@interfaces/IPrompt";
import { FC } from "react";

interface IProfile {
  name: string;
  desc: string;
  data: IPrompt[];
  handleEdit: Function;
  handleDelete: Function;
}

const Profile: FC<IProfile> = ({
  name,
  desc,
  handleDelete,
  handleEdit,
}): JSX.Element => {
  return <div>Profile</div>;
};

export default Profile;
