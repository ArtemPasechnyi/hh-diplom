import { FC } from "react";

interface ProfileProps {
  data: any;
}

const Profile: FC<ProfileProps> = ({ data }) => {
  console.log("data", data);

  return <div>{data}</div>;
};

export default Profile;

export function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();

  const data = { popa: "popa" };

  // Pass data to the page via props
  return { props: { data } };
}
