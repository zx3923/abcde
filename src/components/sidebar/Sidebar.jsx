import React from "react";
import "./Sidebar.scss";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import InsightsIcon from "@mui/icons-material/Insights";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="top">
        <a href="/">
          <span className="logo">
            <img src="https://ifh.cc/g/yoMxsd.png" alt="" />
          </span>
        </a>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">주식</p>

          <li>
            <ShowChartIcon className="icon" />
            <span>
              <a href="/stock">국내 주식 정보</a>
            </span>
          </li>
          <li>
            <ShowChartIcon className="icon" />
            <span>
              <a href="/ovStocks">해외 주식 정보</a>
            </span>
          </li>
          <li>
            <FormatListBulletedIcon className="icon" />
            <span>
              <a href="/boardStock">게시판</a>
            </span>
          </li>
          <p className="title">코인</p>
          <li>
            <CurrencyBitcoinIcon className="icon" />
            <span>
              <a href="/coin">코인 정보</a>
            </span>
          </li>
          <li>
            <FormatListBulletedIcon className="icon" />
            <span>
              <a href="/boardCoin">게시판</a>
            </span>
          </li>
          <p className="title">선물/마진</p>
          <li>
            <CurrencyBitcoinIcon className="icon" />
            <span>
              <a href="/margin">선물/마진 정보</a>
            </span>
          </li>
          <li>
            <FormatListBulletedIcon className="icon" />
            <span>
              <a href="/boardCoinMargin">게시판</a>
            </span>
          </li>
          <p className="title">커뮤니티</p>
          <li>
            <SubtitlesOutlinedIcon className="icon" />
            <span>
              <a href="/community">자유 게시판</a>
            </span>
          </li>
          <li>
            <InsightsIcon className="icon" />
            <span>
              <a href="/revenue">손익 인증</a>
            </span>
          </li>
          <p className="title">사이트</p>
          <ul className="menu">
            <li>
              <div className="Sid">증권 사이트</div>
              <ul>
                <li>
                  <a href="https://securities.miraeasset.com/">미래에셋증권</a>
                </li>
                <li>
                  <a href="https://www.nhqv.com/">NH투자증권</a>
                </li>
                <li>
                  <a href="https://securities.koreainvestment.com/main/Main.jsp">
                    한국투자증권
                  </a>
                </li>
                <li>
                  <a href="https://www.samsungpop.com//">삼성증권</a>
                </li>
                <li>
                  <a href="https://m.kbsec.com/go.able">KB증권</a>
                </li>
                <li>
                  <a href="hhttps://home.imeritz.com/index.jsp">메리츠증권</a>
                </li>
                <li>
                  <a href="https://www.shinhansec.com/siw/rks/main/view.do">
                    신한투자증권
                  </a>
                </li>
                <li>
                  <a href="https://www1.kiwoom.com/h/main">키움증권</a>
                </li>
                <li>
                  <a href="https://www.daishin.com/">대신증권</a>
                </li>
                <li>
                  <a href="https://securities.koreainvestment.com/main/Main.jsp">
                    한국투자증권
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu">
            <li>
              <div className="Sid">코인 거래소 국내</div>
              <ul>
                <li>
                  <a href="https://upbit.com/home">업비트</a>
                </li>
                <li>
                  <a href="https://www.bithumb.com/">빗썸</a>
                </li>
                <li>
                  <a href="https://coinone.co.kr/">코인원</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <div className="Sid">코인 거래소 해외</div>
              <ul>
                <li>
                  <a href="https://academy.binance.com/en">바이낸스</a>
                </li>
                <li>
                  <a href="https://www.bitfinex.com//">비트파이넥스</a>
                </li>
                <li>
                  <a href="https://bitflyer.com/ja-jp/">비트플라이어</a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="title">공지</p>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>
              <a href="/notice">공지사항</a>
            </span>
          </li>
          <li>
            <NotificationsNoneRoundedIcon className="icon" />
            <span>
              <a href="/event">이벤트</a>
            </span>
          </li>
          <li>
            <MarkAsUnreadOutlinedIcon className="icon" />
            <span>
              <a href="/inquiry">문의</a>
            </span>
          </li>
          <p className="title">설정</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>
              <a href="/privacy">개인정보</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
