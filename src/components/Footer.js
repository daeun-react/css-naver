import React from "react";
import { Link } from "react-router-dom";
import imgWhale from "assets/img/icon_whale.png";
import imgFlower from "assets/img/icon_flower.png";
import "assets/css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="notice_box">
        <Link to="/">공지사항</Link>
        <Link to="/">서비스 전체보기</Link>
      </div>

      <div className="aside_box">
        <div className="area_user">
          <div className="area_user_row">
            <span className="text_bold-13">Creators</span>
            <ul>
              <li>
                <Link to="/">크리에이터</Link>
              </li>
              <li>
                <Link to="/">스몰비즈니스</Link>
              </li>
            </ul>
          </div>
          <div className="area_user_row">
            <span className="text_bold-13">Partners</span>
            <ul>
              <li>
                <Link to="/">비즈니스 광고</Link>
              </li>
              <li>
                <Link to="/">스토어 개설</Link>
              </li>
              <li>
                <Link to="/">지역업체 등록</Link>
              </li>
            </ul>
          </div>
          <div className="area_user_row">
            <span className="text_bold-13">Developers</span>
            <ul>
              <li>
                <Link to="/">네이버 개발자센터</Link>
              </li>
              <li>
                <Link to="/">오픈API</Link>
              </li>
              <li>
                <Link to="/">오픈소스</Link>
              </li>
              <li>
                <Link to="/">네이버 D2</Link>
              </li>
              <li>
                <Link to="/">네이버 D2SF</Link>
              </li>
              <li>
                <Link to="/">네이버 랩스</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="area_col">
          <div className="ac_content">
            <div className="text_bold-13">웨일 브라우저</div>
            <div className="ac_link">
              <Link to="/">다운받기</Link>
            </div>
          </div>
          <Link to="/">
            <img src={imgWhale} className="ac_img" />
          </Link>
        </div>
        <div className="area_col">
          <div className="ac_content">
            <div className="text_bold-13">프로젝트 꽃</div>
            <div className="ac_link">
              <Link to="/">바로가기</Link>
            </div>
          </div>
          <Link to="/">
            <img src={imgFlower} className="ac_img" />
          </Link>
        </div>
      </div>

      <div className="bottom_box">
        <ul>
          <li>
            <Link to="/">회사소개</Link>
          </li>
          <li>
            <Link to="/">인재채용</Link>
          </li>
          <li>
            <Link to="/">제휴제안</Link>
          </li>
          <li>
            <Link to="/">이용약관</Link>
          </li>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="/">청소년보호정책</Link>
          </li>
          <li>
            <Link to="/">네이버 정책</Link>
          </li>
          <li>
            <Link to="/">고객센터</Link>
          </li>
          <li>
            <Link to="/">&copy; NAVER Corp.</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
