import { SweetTenThousandYearsCard } from "@/components/buheshiyi/sweet-ten-thousand-years-card";

export default function SweetTenThousandYearsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-8 text-[var(--foreground)] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full items-start py-4 sm:items-center">
        <SweetTenThousandYearsCard />
      </div>
    </main>
  );
}
