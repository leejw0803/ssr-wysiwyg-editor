import dynamic from "next/dynamic";
import type { NextPage } from "next";

const Quill = dynamic(import("../components/QuillNoSSREditor"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "100px",
        border: "1px solid black",
        borderRadius: "16px",
      }}
    >
      <Quill />
    </div>
  );
};

export default Home;
