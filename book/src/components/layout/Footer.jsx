import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FooterStyles = styled.div`
  margin-top: 50px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  padding-top: 50px;
  background-color: #f0f0f0;
  .footer-top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 30px 0;
  }
  .footer-title {
    font-size: 20px;
    font-weight: 600;
    position: relative;
  }
  .footer-title::after {
    position: absolute;
    content: "";
    top: 100%;
    width: 40%;
    left: 0;
    height: 4px;
    background-color: ${(props) => props.theme.primary};
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
  }
  .footer-content p {
    font-size: 14px;
    color: #333;
  }
  .footer-link:hover {
    color: ${(props) => props.theme.primary};
  }
  .footer-link {
    font-size: 16px;
    color: #333;
  }
  @media screen and (max-width: 768px) {
    .footer-top {
      grid-template-columns: repeat(1, 1fr);
    }
    .footer-content p {
      font-size: 16px;
    }
    .footer-title::after {
      height: 0;
    }
    .footer-link {
      font-size: 14px;
    }
    .map {
      width: 100%;
      height: 250px;
    }
    .footer-title {
      font-size: 18px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-top py-3">
          <div className="footer-column">
            <NavLink>
              <img src="../logo.svg" className="max-w-[200px]" alt="" />
            </NavLink>
            <ul className="footer-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                libero id et, in gravida. Sit diam duis mauris nulla cursus.
                Erat et lectus vel ut sollicitudin elit at amet.
              </p>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">CHÍNH SÁCH HỖ TRỢ</h3>
            <ul className="footer-content">
              <NavLink className="footer-link">
                Chính sách đổi - trả - hoàn tiền
              </NavLink>
              <NavLink className="footer-link">Chính sách bảo hành</NavLink>
              <NavLink className="footer-link">Chính sách vận chuyển</NavLink>
              <NavLink className="footer-link">
                Phương thức thanh toán và xuất HĐ
              </NavLink>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">DỊCH VỤ</h3>
            <ul className="footer-content">
              <NavLink className="footer-link">Điều khoản sử dụng</NavLink>
              <NavLink className="footer-link">
                Chính sách bảo mật thông tin cá nhân
              </NavLink>
              <NavLink className="footer-link">
                Chính sách bảo mật thanh toán
              </NavLink>
              <NavLink className="footer-link">
                Hệ thống trung tâm - nhà sách
              </NavLink>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">LIÊN HỆ</h3>
            <ul className="footer-content">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6742566766293!2d106.70433847415576!3d10.759568659506263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6e921bae51%3A0x7d658ea4250ee7e4!2zMTIyIFTDtG4gxJDhuqNuLCBQaMaw4budbmcgMTAsIFF14bqtbiA0LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1689343586963!5m2!1svi!2s"
                width="300px"
                height="100"
                allowFullScreen=""
                loading="lazy"
                className="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p>
                <span>SĐT:</span> <span>0865405630</span>
              </p>
              <p>
                <span>email</span> <span>huynguyen03022003@gmail.com</span>
              </p>
              <p>
                <span>Địa chỉ:</span>{" "}
                <span>
                  122 Tôn Đản Phường 8 Quận 4 TP.HCM
                </span>
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-gray-200 py-3">
        <p className="text-center text-sm text-gray-00">
          {/* BẢN QUYỀN */}
        </p>
      </div>
    </FooterStyles>
  );
};

export default Footer;
