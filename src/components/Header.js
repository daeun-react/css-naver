import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "assets/img/naver_logo.png";
import "assets/css/header.css";

function Header() {
  return (
    <header>
      <div className="links">
        <Link to="/" className="link_text">
          네이버를 시작페이지로
        </Link>
        <Link to="/" className="link_text">
          쥬니어 네이버
        </Link>
        <Link to="/" className="link_text">
          해피빈
        </Link>
      </div>
      <Link to="/">
        <img src={imgLogo} alt="logo" className="img_logo" />
      </Link>

      <form>
        <fieldset>
          <legend className="visually-hidden">검색</legend>
          <div className="search_box">
            <input type="text" />
            <button type="submit">검색</button>
          </div>
        </fieldset>
      </form>

      <nav>
        <div className="nav_items">
          <ul>
            <li>
              <Link to="/">메일</Link>
            </li>
            <li>
              <Link to="/">카페</Link>
            </li>
            <li>
              <Link to="/">블로그</Link>
            </li>
            <li>
              <Link to="/">지식iN</Link>
            </li>
            <li>
              <Link to="/">쇼핑</Link>
            </li>
            <li>
              <Link to="/">Pay</Link>
            </li>
            <li>
              <Link to="/">TV</Link>
            </li>
            <li>
              <Link to="/">사전</Link>
            </li>
            <li>
              <Link to="/">뉴스</Link>
            </li>
            <li>
              <Link to="/">증권</Link>
            </li>
            <li>
              <Link to="/">부동산</Link>
            </li>
            <li>
              <Link to="/">지도</Link>
            </li>
            <li>
              <Link to="/">영화</Link>
            </li>
            <li>
              <Link to="/">뮤직</Link>
            </li>
            <li>
              <Link to="/">책</Link>
            </li>
            <li>
              <Link to="/">웹툰</Link>
            </li>
            <li>
              <Link to="/">더보기</Link>
            </li>
          </ul>
          <div className="keyword">
            <span className="color_naver">1</span>
            <span>검색순위</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
