import React from "react";
import Image from "next/image";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/profile.php?id=100073286704751",
  },
  {
    iconName: "instagram",
    link: "https://instagram.com/pashateach.me?igshid=YmMyMTA2M2Y=",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <Image
                alt="social"
                className="svg"
                height={32}
                src={`/img/svg/social/${val.iconName}.svg`}
                width={32}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
