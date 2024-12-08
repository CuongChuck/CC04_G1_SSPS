import React from 'react';
import { useNavigate } from 'react-router-dom'; // Để sử dụng tính năng điều hướng
import './HistoryAdmin.css';

const HistoryAdmin = () => {
  const navigate = useNavigate(); // Khởi tạo hook điều hướng

  // Dữ liệu mẫu với cột mã số sinh viên, tên và số lượng
  const transactions = [
    { studentId: '123456', name: 'Nguyễn Văn A', date: '2024-12-01T14:30:00', description: 'Thanh toán nhận được', quantity: 2, status: 'Thành công' },
    { studentId: '654321', name: 'Trần Thị B', date: '2024-12-03T09:15:00', description: 'Phí đăng ký', quantity: 1, status: 'Thất bại' },
    { studentId: '789012', name: 'Lê Minh C', date: '2024-12-05T18:00:00', description: 'Hoàn tiền', quantity: 5, status: 'Đang xử lý' },
  ];

  // Hàm định dạng ngày theo chuẩn "ngày-tháng-năm giờ:phút"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  // Hàm trả về lớp CSS và màu sắc dựa trên trạng thái
  const getStatusClass = (status) => {
    let className = '';
    let color = '';

    if (status === 'Thành công') {
      className = 'thanh-cong';
      color = 'green'; // Màu xanh cho thành công
    } else if (status === 'Thất bại') {
      className = 'that-bai';
      color = 'red'; // Màu đỏ cho thất bại
    } else if (status === 'Đang xử lý') {
      className = 'dang-xu-ly';
      color = 'orange'; // Màu cam cho đang xử lý
    }

    return { className, color };
  };

  return (
    <div className="history-admin-container">
      <button className="back-button" onClick={() => navigate('/')}>← Trở về</button> {/* Nút trở về */}
      <h2>Lịch sử giao dịch (Admin)</h2>
      <table className="history-admin-table">
        <thead>
          <tr>
            <th>Số thứ tự</th> {/* Cột số thứ tự */}
            <th>Mã số sinh viên</th> {/* Cột mã số sinh viên */}
            <th>Tên</th> {/* Cột tên */}
            <th>Ngày</th>
            <th>Mô tả</th>
            <th>Số lượng</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            const { className, color } = getStatusClass(transaction.status); // Lấy class và màu
            return (
              <tr key={index}>
                <td>{index + 1}</td> {/* Số thứ tự */}
                <td>{transaction.studentId}</td> {/* Mã số sinh viên */}
                <td>{transaction.name}</td> {/* Tên sinh viên */}
                <td>{formatDate(transaction.date)}</td> {/* Hiển thị ngày và giờ */}
                <td>{transaction.description}</td>
                <td>{transaction.quantity}</td>
                <td>{transaction.quantity * 400} VNĐ</td> {/* Tính toán Amount */}
                <td className={`status ${className}`} style={{ color: color }}>
                  {transaction.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryAdmin;

