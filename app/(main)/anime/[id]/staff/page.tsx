import { getAnimeStaff } from "@/actions/anime.action";
import StaffTabsContent from "@/components/staff-tabs-content";

interface StaffPageProps {
  params: { id: string };
}

const StaffPage = async ({ params: { id } }: StaffPageProps) => {
  const staff = await getAnimeStaff(+id);

  return <StaffTabsContent staffs={staff.data} />;
};

export default StaffPage;
