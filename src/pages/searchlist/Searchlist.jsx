import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Searchlist.scss";
import axios from "axios";

const Searchlist = () => {
  const location = useLocation();
  return (
    <div className="Searchlist">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>글쓴이 </th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {location.state.test.map((hhh) => (
            <tr key={hhh.id}>
              <td>{hhh.id}</td>
              <td>
                <Link to={`../detailPage/${hhh.id}`} state={{ number: hhh.id }}>
                  {hhh.subject}
                </Link>
              </td>
              <td>{hhh.author}</td>
              <td>{hhh.date}</td>
              <td>{hhh.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Searchlist;
