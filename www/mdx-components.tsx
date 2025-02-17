import type { MDXComponents } from "mdx/types";
import Cards, { Card } from "./app/docs/_components/Cards";
import CodeGroups from "./app/docs/_components/CodeGroups";
import Video from "./app/_components/Video";
import CopyToClipboard from "./app/docs/_components/CopyToClipboard";
import { Col, Row } from "./app/docs/_components/Layout";
import Image from "next/image";
import DataFlows from "./app/blog/_components/data-flows";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
    Card: (props) => <Card {...props} />,
    Cards: (props) => <Cards {...props} />,
    CodeGroups: (props) => <CodeGroups {...props} />,
    Col: (props) => <Col {...props} />,
    Row: (props) => <Row {...props} />,
    Image: (props) => <Image {...props} />,
    pre: ({ children }) => (
      <CopyToClipboard>{children as JSX.Element}</CopyToClipboard>
    ),
    Video: (props) => <Video {...props} baseSrc="" />,
    DataFlows: (props) => <DataFlows {...props} />,
  };
};
