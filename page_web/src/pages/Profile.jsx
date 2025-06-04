import ProfileNavbar from "../components/ProfileNavbar";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  return (
    <div className="h-full mt-2 bg-[#f5f0f7] flex flex-col">
      <ProfileNavbar />
      <div className="flex flex-1">
        <aside className="w-44 flex-shrink-0">
          <ProfileSidebar />
        </aside>
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl bg-[#dde5fa] rounded-3xl p-12 mt-12 mb-12 shadow-lg">
            <ProfileForm />
          </div>
        </main>
      </div>
    </div>
  );
}