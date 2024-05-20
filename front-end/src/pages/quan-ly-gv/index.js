import React, { useEffect, useState } from 'react';

import AdminLayout from '../../components/layout/adminlayout';
import './index.css';
import { Lichsu } from './lichsu';
import axios from 'axios';

const Quanlygiaovien = (gv) => {
  const [search, setSearch] = useState('');

  const [data, setData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('http://localhost:4000/lichsutk', { params: { search } })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);
  
  function getData(){
    axios
      .get('http://localhost:4000/lichsutk')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <AdminLayout>
      <div className="lssd-container ">
        <p className="text-center font-bold text-[2.75rem] py-[1.25rem]">
          Danh Sách Giao Viên
        </p>
        <form
          className="table-searchls flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <h2 className="form-searchls font-bold text-[1.35rem] py-[1.25rem]">
            Tìm Kiếm
          </h2>
          <table>
            <tr>
              <td>
                <input
                  className="searchls-nhap"
                  type="text"
                  placeholder="Nhập Từ Khóa"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </td>
              <td></td>
              <td>
                <div className="select"></div>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <button className="luu">Tìm Kiếm</button>
                  <button className="reset">Reset</button>
                </div>
              </td>
            </tr>
          </table>
        </form>
        <div className="table-cauhinh">
          <table>
            <tr>
              <th>STT</th>
              <th>Avatar</th>
              <th>Mã Giáo Viên</th>
              <th>Tên giáo Viên</th>
              <th>Tên Khoa</th>
              <th>Sửa Đổi</th>
            </tr>
            {data.map((gv, index) => {
              return <Lichsu key={index} gv={gv} getData={getData}/>;
            })}
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Quanlygiaovien;
