import React from "react";
import Home from "../pages/home/Home";
import Privacy from "../pages/set/Privacy";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import Board from "../pages/board/Board";
import Searchlist from "../pages/searchlist/Searchlist";

const Contents = () => {
  const [boardList, setBoardList] = useState([]);
  const [userId, setUserId] = useState("");
  const { lcategory, mcategory } = useParams();

  return (
    <div class="Contents">
      <Routes>
        <Route
          path=""
          element={<Home userId={userId} setUserId={setUserId} />}
        />
        <Route
          path="/Board/:lcategory/:mcategory/*"
          element={<Board boardList={boardList} setBoardList={setBoardList} />}
        />
        <Route
          path="/privacy"
          element={<Privacy userId={userId} setUserId={setUserId} />}
        ></Route>
        <Route path="/searchlist" element={<Searchlist />} />
      </Routes>
    </div>
  );
};
export default Contents;
