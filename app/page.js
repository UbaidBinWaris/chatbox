// "use client";
import ChatInput from "./Components/ChatInput";
import Sidebar from "./Components/Sidebar";
import ThemeButton from "./Components/ThemeTogel";

export default function Home() {
  return (
    <div className="min-h-screen text-black dark:bg-[var(--light-grey)]">

      {/* <Sidebar /> */}
      <ThemeButton />


      <div className="bg-white text-black dark:bg-black dark:text-white">
  This text and background change based on theme
</div>



        <ChatInput />

    </div>
  );
}
