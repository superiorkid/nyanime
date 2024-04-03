import { getAnimeFullById, getAnimeStaff } from "@/actions/anime.action";
import StaffTabsContent from "@/components/staff-tabs-content";
import type { Metadata } from "next";

interface StaffPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: StaffPageProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+id);

  return {
    title: `Staff - Behind the Scenes of ${anime.title} on Nyanime`,
    description: `Explore the creative minds behind ${anime.title} on Nyanime's Staff page. Discover the talented individuals responsible for bringing the anime to life, from directors to animators. Gain insight into the production process and appreciate the dedication of the staff.`,
  };
}

const StaffPage = async ({ params: { id } }: StaffPageProps) => {
  const staff = await getAnimeStaff(+id);

  return <StaffTabsContent staffs={staff.data} />;
};

export default StaffPage;
