import React from "react";
import "../style/Board.scss";

const Posts = ({ boardList, limit, page }) => {
  // const [limit, setLimit] = useState(20); // 한 페이지당 보여줄 리스트
  // const [page, setPage] = useState(1); // 현재 페이지
  const offset = (page - 1) * limit; // 각 페이지 첫번째 게시글 인덱스
  boardList.sort(function (a, b) {
    return b.id - a.id;
  });
  return (
    <>
      <tbody className="BoardTbody">
        {boardList.slice(offset, offset + limit).map(
          (
            data // 각 페이지 첫 게시글 부터 마지막 게시글
          ) => (
            <tr key={data.id}>
              <td> {data.id}</td>
              <td>
                <a
                  href={
                    "/Board/" +
                    data.lcategory +
                    "/" +
                    data.mcategory +
                    "/detail/" +
                    data.id
                  }
                >
                  {data.subject}
                </a>
              </td>
              <td> {data.author}</td>
              <td> {data.date}</td>
              <td> {data.views}</td>
            </tr>
          )
        )}
      </tbody>
    </>
  );
};

export default Posts;
