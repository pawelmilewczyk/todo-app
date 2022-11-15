import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <header>
        <h1 className="text-5xl text-zinc-200 font-semibold italic">TodoApp</h1>
      </header>
      <main>
        <ul className="list-disc py-5 text-lg text-white marker:text-white">
          <li>remember about every task to do</li>
          <li>organize your daily duties</li>
          <li>create new habits</li>
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
