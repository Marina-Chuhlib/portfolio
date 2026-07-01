import React from "react";
import css from "./codeSnippet.module.css";

const CodeSnippet = () => {
  return (
    <div className={css.codeBlock}>
      <div className={css.codeHeader}>
        <span className={`${css.dot} ${css.red}`} />
        <span className={`${css.dot} ${css.yellow}`} />
        <span className={`${css.dot} ${css.green}`} />
        <span className={css.fileName}>skills.tsx</span>
      </div>
      <pre className={css.code}>
        <code>
          <span className={css.keyword}>const </span>
          <span className={css.fn}>usePortfolio</span>
          <span className={css.white}> = () </span>
          <span className={css.keyword}>{"=> "}</span>
          <span className={css.white}>{"({"}</span>
          {"\n  "}
          <span className={css.key}>passion</span>
          <span className={css.white}>: </span>
          <span className={css.string}>"mobile & web apps"</span>
          <span className={css.white}>,</span>
          {"\n  "}
          <span className={css.key}>stack</span>
          <span className={css.white}>: [</span>
          <span className={css.string}>"React"</span>
          <span className={css.white}>, </span>
          <span className={css.string}>"React Native"</span>
          <span className={css.white}>, </span>
          <span className={css.string}>"TypeScript"</span>
          <span className={css.white}>],</span>
          {"\n  "}
          <span className={css.key}>tools</span>
          <span className={css.white}>: [</span>
          <span className={css.string}>"Redux Toolkit"</span>
          <span className={css.white}>, </span>
          <span className={css.string}>"REST API"</span>
          <span className={css.white}>, </span>
          <span className={css.string}>"Firebase"</span>
          <span className={css.white}>],</span>
          {"\n  "}
          <span className={css.key}>shipped</span>
          <span className={css.white}>: [</span>
          <span className={css.string}>"App Store"</span>
          <span className={css.white}>, </span>
          <span className={css.string}>"Google Play"</span>
          <span className={css.white}>],</span>
          {"\n"}
          <span className={css.white}>{"});"}</span>
          {"\n  "}
          <span className={css.cursor}>▋</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
