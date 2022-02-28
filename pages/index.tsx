import dynamic from "next/dynamic";
import styled from "styled-components";
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const EditorContainer = styled.div`
  width: 800px;
  height: 400px;
  margin: 0 auto;
`;

const ViewContainer = styled.div`
  border: 3px solid black;
  border-radius: 8px;
  width: 800px;
  padding: 16px;
  box-sizing: border-box;
  white-space: normal;
  word-wrap: break-word;

  a {
    color: blue;
    white-space: normal;
    word-wrap: break-word;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  color: black;
`;

const Description = styled.p`
  color: gray;
`;

const Home: NextPage = () => {
  const [htmlStr, setHtmlStr] = useState<string>("");
  const viewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (viewContainerRef.current) {
      viewContainerRef.current.innerHTML = "<h1>This is View</h1>";
      viewContainerRef.current.innerHTML += htmlStr;
    }
  }, [htmlStr]);

  return (
    <EditorContainer>
      <Title>Requirements</Title>
      <Description>
        * Link must be detected automatically. <br />* The user should be able
        to know that it is a link.
      </Description>
      <Editor htmlStr={htmlStr} setHtmlStr={setHtmlStr} />
      <ViewContainer ref={viewContainerRef} />
    </EditorContainer>
  );
};

export default Home;
