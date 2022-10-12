import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';

import Image1URL from '~/assets/details/Image1.png';
import Image2URL from '~/assets/details/Image2.png';
import Image3URL from '~/assets/details/Image3.png';
import { CSCloseNavigational } from '~/components/iconography/Navigational';
import { CSLinkedOutline } from '~/components/iconography/Outline';

const Details = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section id="chi-tiet" className="details">
        <Container className="p-0">
          <h2
            className="section-title"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span>Chi tiết</span> của Ký túc xá
          </h2>
          <div className="details--inner flex-stretch-space">
            <div
              className="details--item"
              onClick={handleShow}
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="category">KTX - Khu A</div>
              <div className="thumbnail">
                <img src={Image1URL} alt="" />
              </div>
              <div className="content">
                <p>- Loại bố trí 08 SV/phòng (được phép nấu ăn).</p>
                <p>
                  - Nằm trong khuôn ᴠiên khu II Trường Đại học Cần Thơ tại Đường
                  3/2, phường Xuân Khánh, quận Ninh Kiều – TP Cần Thơ.
                </p>
                <p>
                  - Phí KTX từ 120.000 - 270.000 đồng/SV/tháng (Chưa bao gồm phí
                  điện, nước).
                </p>
                <span>
                  <CSLinkedOutline customClassName="fill-white" />
                </span>
              </div>
            </div>
            <div
              className="details--item"
              onClick={handleShow}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="category">KTX - Khu B</div>
              <div className="thumbnail">
                <img src={Image2URL} alt="" />
              </div>
              <div className="content">
                <p>- Loại bố trí 04 SV/phòng (4 giường tầng).</p>
                <p>
                  - Nằm trong khuôn ᴠiên khu II Trường Đại học Cần Thơ tại Đường
                  3/2, phường Xuân Khánh, quận Ninh Kiều – TP Cần Thơ.
                </p>
                <p>
                  - Phí KTX từ 120.000 - 270.000 đồng/SV/tháng (Chưa bao gồm phí
                  điện, nước).
                </p>
                <span>
                  <CSLinkedOutline customClassName="fill-white" />
                </span>
              </div>
            </div>
            <div
              className="details--item"
              onClick={handleShow}
              data-aos="fade-up-left"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              <div className="category">KTX - Phòng ở</div>
              <div className="thumbnail">
                <img src={Image3URL} alt="" />
              </div>
              <div className="content">
                <p>
                  - Được trang bị giường tầng, bàn học, tử cá nhân có ngăn riêng
                  cho từng SV.
                </p>
                <p>- Có khu vực vệ sinh cá riêng cho từng phòng</p>
                <p>
                  - Các phòng đều có trang bị mạng wifi tốc độ cao cho SV tìm
                  kiếm tài liệu học tập và giải trí thư giãn.
                </p>
                <p>
                  - Có loại phòng không được phép nấu ăn (được sử dụng ấm đun
                  siêu tốc) loại 4 hoặc 8 SV/ phòng (có ở khu A lẫn khu B).
                </p>
                <span>
                  <CSLinkedOutline customClassName="fill-white" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} className="modal-review-detail">
        <Modal.Body>
          <iframe
            src="https://nvanha.github.io/LVTN-Popup-KTX-B/"
            title="Demo"
          />
          <span className="btn-close-modal" onClick={handleClose}>
            <CSCloseNavigational />
          </span>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Details;
