import { SpringBloomsCard } from "@/components/meishixiakan/spring-blooms-card";

export default function SpringBloomsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-6 py-8 text-[#333333] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full items-start py-4 sm:items-center">
        <SpringBloomsCard />
      </div>
    </main>
  );
}
