// "use client";
import ChatInput from "./Components/ChatInput";
import Sidebar from "./Components/Sidebar";
import ThemeButton from "./Components/ThemeTogel";
import Header  from "./Components/Header";

export default function Home() {
  return (
    <main className="min-h-screen text-black dark:bg-[var(--light-grey)]">
      <Header />
      {/* <Sidebar /> */}

      <div className="absolute top-[50vh]">

      <ThemeButton />

       <div className="bg-white text-black dark:bg-black dark:text-white">
  This text and background change based on theme
</div>
      </div>


     



        <ChatInput />

    </main>
  );
}
