import { UncertaintyCard } from "@/components/hundunwubian/uncertainty-card";

export default function UncertaintyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(66,94,129,0.24),transparent_26%),linear-gradient(180deg,#1f2a38_0%,#263446_52%,#202c3a_100%)] px-6 py-8 text-[#e6edf5] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full items-start py-4 sm:items-center">
        <UncertaintyCard />
      </div>
    </main>
  );
}
