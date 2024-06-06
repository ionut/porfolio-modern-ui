// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props) => (
    <h1 {...props} className="text-5xl mb-6">
      {props.children}
    </h1>
  ),
  h3: (props) => (
    <h3 {...props} className="text-2xl mb-6">
      {props.children}
    </h3>
  ),
  h4: (props) => (
    <h4 {...props} className="text-xl mb-2">
      {props.children}
    </h4>
  ),
  h6: (props) => (
    <h6 {...props} className="text-md mb-2">
      {props.children}
    </h6>
  ),
  a: (props) => (
    <a target="_blank" {...props} className="underline">
      {props.children}
    </a>
  ),
  ul: (props) => (
    <ul {...props} className="list-disc">
      {props.children}
    </ul>
  ),
  p: (props) => (
    <p {...props} className="text-lg mb-2">
      {props.children}
    </p>
  ),
  pre: (props) => (
    <pre {...props} className="dark:bg-black rounded-[1px]">
      {props.children}
    </pre>
  ),
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
