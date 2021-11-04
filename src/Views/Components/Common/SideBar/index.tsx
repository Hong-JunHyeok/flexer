import React from "react";
import Styles from "./Styles";
import SideBarMeta from "Data/SideBarMeta";
import { Link } from "react-router-dom";

const SideBar: React.FunctionComponent = () => {
  const { Categories, Metas } = SideBarMeta;

  const CategoryList = Categories.map((category) => (
    <Link to={category.link} className="category">
      <li>{category.content}</li>
    </Link>
  ));

  const MetaList = Metas.map((meta) => (
    <Link to={meta.link} className="meta">
      <li>{meta.content}</li>
    </Link>
  ));

  return (
    <React.Fragment>
      <Styles.SideBarContainer>
        <Styles.SideBarHeader>
          <h1 className="title">🤑FLEXER</h1>
          <span className="subtitle">"오늘은 한번 질러보자"</span>
        </Styles.SideBarHeader>
        <Styles.SideBarContents>
          <h1 className="content-title">카테고리</h1>
          {CategoryList}
        </Styles.SideBarContents>
        <Styles.SideBarMeta>
          <h1 className="meta-title">메타</h1>
          {MetaList}
        </Styles.SideBarMeta>
      </Styles.SideBarContainer>
    </React.Fragment>
  );
};

export default SideBar;
