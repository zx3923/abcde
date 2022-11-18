import React from "react";
import Home from "../pages/home/Home";
import Privacy from "../pages/set/Privacy";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Board from "../pages/board/Board";

const Contents = () => {
  const [boardList, setBoardList] = useState([]);
  const [userId, setUserId] = useState("");

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
      </Routes>
    </div>
  );
};
export default Contents;
