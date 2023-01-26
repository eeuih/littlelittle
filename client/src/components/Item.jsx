import React from 'react';

// const today = new Date();
// const dateString = today.toLocaleDateString('ko-KR', {
//   month: 'long',
//   day: 'numeric',
// });

const weekday = new Array('일', '월', '화', '수', '목', '금', '토');

export default function item() {
  return (
    <>
      <tr>
        <td>월</td>
        <td>ㅇ</td>
        <td>ㅇ</td>
      </tr>
    </>
  );
}
