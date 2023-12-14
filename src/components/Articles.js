import React from 'react'
import "../Styles/article.css"
import Block from './Block'
import callcenter from "../assets/images/download.png";
import qms from "../assets/images/QMS.png"
import training from "../assets/images/traning.jpg"
import complience from "../assets/images/compliance.jpg"

export default function Articles() {
  return (
    <article>
      <div>
        <h1 style={{ color: "#122C50" }}>Our Solution</h1>
      </div>
      <aside id="article-aside">
        <Block text={"call center solution"} url={callcenter} />
        <Block text={"quality managenent solution"} url={qms} />
        <Block text={"training solution"} url={training} />
        <Block text={"complience solution"} url={complience} />
      </aside>
    </article>
  );
}
