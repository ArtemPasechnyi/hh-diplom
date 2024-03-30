import Profile from "@/pages/Profile/ui/Profile";

interface ProfileProps {
  data: any;
}

export default function ProfilePage({ data }: ProfileProps) {
  return <Profile data={data} />;
}
