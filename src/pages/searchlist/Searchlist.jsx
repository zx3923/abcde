import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Searchlist.scss";
import Posts from "../../components/board/posts/Posts";
import Pagination from "../../components/board/posts/Pagination";

const Searchlist = () => {
  const [limit, setLimit] = useState(20); // 한 페이지당 보여줄 리스트
  const [page, setPage] = useState(1); // 현재 페이지
  const location = useLocation();
  location.state.test.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <>
      <Posts boardList={location.state.test} limit={limit} page={page} />
      <Pagination
        total={location.state.test.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Searchlist;
