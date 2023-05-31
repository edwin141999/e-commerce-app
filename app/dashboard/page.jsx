import BagArea from "@/components/BagArea";
import ContentFrame from "@/components/ContentFrame";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex flex-row h-screen">
      <Navbar />
      <ContentFrame />
      <BagArea />
    </div>
  );
}
