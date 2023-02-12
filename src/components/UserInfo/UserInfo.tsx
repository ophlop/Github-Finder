import { ReactComponent as IconCompany } from "../../assets/icon-company.svg";
import { ReactComponent as IconLocation } from "../../assets/icon-location.svg";
import { ReactComponent as IconTwitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as IconWebsite } from "../../assets/icon-website.svg";

import { InfoItem } from "../UI/InfoItem/InfoItem";

import { localGithubUser } from "../types";
import { IInfoItem } from "../UI/InfoItem/InfoItem";

interface IUserInfo
  extends Pick<localGithubUser, "blog" | "location" | "twitter" | "company"> {}

export const UserInfo = ({ blog, company, location, twitter }: IUserInfo) => {
  const items: IInfoItem[] = [
    {
      icon: <IconLocation />,
      text: location,
      isLink: false,
    },
    {
      icon: <IconWebsite />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
      isLink: false,
    },
    {
      icon: <IconCompany />,
      text: company,
      isLink: false,
    },
  ];

  return (
    <div className="flex mt-6 gap-4 flex-col md:grid md:grid-flow-col md:grid-rows-[repeat(2,_1fr)]">
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};
