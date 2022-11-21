import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Searchlist.scss";
import SearchBoard from "./SearchBoard";
import ArticleIcon from "@mui/icons-material/Article";
import ForumIcon from "@mui/icons-material/Forum";
import SearchComment from "./SearchComment";
import Pagination from "react-js-pagination";
import "../../components/board/style/Pagebtn.scss";

const Searchlist = () => {
  const [postPerPage] = useState(5); // 한 페이지당 보여줄 리스트
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [currentPage2, setCurrentPage2] = useState(1); // 댓글 현재 페이지

  const location = useLocation();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }; // 페이지 변경 감지

  const handlePageChange2 = (page) => {
    setCurrentPage2(page);
  }; //페이지 변경 감지

  location.state.test.sort(function (a, b) {
    return b.id - a.id;
  });
  location.state.test2.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <>
      <div>
        <ArticleIcon />
        문서
      </div>
      <SearchBoard
        boardList={location.state.test}
        postPerPage={postPerPage}
        currentPage={currentPage}
      />
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={5}
        totalItemsCount={location.state.test.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange}
      />
      <div>
        <ForumIcon />
        댓글
      </div>
      <SearchComment
        commentList={location.state.test2}
        category={location.state.test}
        postPerPage={postPerPage}
        currentPage2={currentPage2}
      />
      <Pagination
        activePage={currentPage2}
        itemsCountPerPage={5}
        totalItemsCount={location.state.test2.length}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={handlePageChange2}
      />
    </>
  );
};

export default Searchlist;
