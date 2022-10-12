import { Container } from 'react-bootstrap';

import { ReactComponent as AboutImage1 } from '~/assets/about/Image1.svg';
import { ReactComponent as AboutImage2 } from '~/assets/about/Image2.svg';
import { ReactComponent as AboutImage3 } from '~/assets/about/Image3.svg';

const About = () => (
  <section id="gioi-thieu" className="about">
    <Container className="p-0">
      <h2
        className="section-title"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration={700}
      >
        <span>Giới thiệu</span> về Ký túc xá
      </h2>
      <div className="about--inner flex-center-space">
        <div className="about--item">
          <h3
            className="cs-fz-24 cs-fw-700 mb-0"
            style={{ color: '#1f5ca8', textDecoration: 'underline' }}
          >
            Các hệ thống dịch vụ tại Ký túc xá
          </h3>
          <AboutImage1
            style={{
              width: '70%',
              height: 'auto',
              margin: '10px auto 20px',
              display: 'block',
            }}
          />
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">
              Nhà ăn / Căn tin:
            </span>
            - Tại mỗi khu ký túc xá sẽ cung cấp khu nhà ăn sạch sẽ, giá cả phù
            hợp với các bạn sinh viên. Tại đây có nhiều mức giá để các bạn lựa
            chọn, đảm bảo về dinh dưỡng, có giấy vệ sinh an toàn thực phẩm được
            thành phố Cần Thơ chứng nhận.
          </p>
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">Điểm giữ xe:</span>-
            Các bạn sẽ được gửi miễn phí xe đạp.
            <br />- Nếu gửi xe gắn máy hoặc môtô phải nộp thêm khoản phí phụ thu
            giữ xe theo quy định.
          </p>
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">Internet:</span>- Wifi
            tốc độ kết nối là 14Mbps/ 14Mbps (download/upload).
          </p>
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">
              Các dịch vụ khác:
            </span>
            - Ngoài ra, mỗi khu ký túc xá sẽ trang bị các dịch vụ khác như siêu
            thị ở mỗi khu ký túc xá.
          </p>
        </div>
        <div className="about--item">
          <h3
            className="cs-fz-24 cs-fw-700 mb-0"
            style={{ color: '#1f5ca8', textDecoration: 'underline' }}
          >
            Điều kiện và thủ tục đăng ký nội trú
          </h3>
          <AboutImage2
            style={{
              width: '70%',
              height: 'auto',
              margin: '10px auto 20px',
              display: 'block',
            }}
          />
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">
              Thời gian tiếp nhận hồ sơ đăng ký ở ký túc xá:
            </span>
            - Sinh viên có thể vào ở ngay khi có giấy báo trúng tuyển nhập học.
          </p>
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">
              Đối tượng được ưu tiên xét ở nội trú:
            </span>
            - SV bậc đại học, hệ chính quy thuộc diện chính sách, xã hội.
            <br />- SV bậc đại học, hệ chính quy thuộc diện khó khăn về kinh tế.
            <br />- SV bậc đại học có nhu cầu về chỗ ở.
            <br />- SV các hình thức đào tạo khác (Liên thông, bằng 2, SV đào
            tạo không chính quy học tại Trường…)
            <br />- Học viên Cao học, Nghiên cứu sinh.
            <br />- SV quốc tế, Lưu học sinh.
            <br />- Học viên các lớp đào tạo ngắn hạn.
          </p>
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            <span className="d-block cs-fz-18 cs-fw-600">
              Thủ tục đăng ký nội trú/ Hồ sơ bao gồm:
            </span>
            - Sinh viên/ học viên đăng ký online qua Hệ thống quản lý của
            Trường.
            <br />- Trung tâm kiểm tra thông tin đăng ký và phản hồi kết quả sắp
            chỗ vào ngày thứ 3 hàng tuần qua email sinh viên (Trường cấp).
            <br />- Sinh viên/ học viên thực hiện đăng ký theo giao diện hệ
            thống, ghi rõ nguyện vọng ở vào ô nguyện vọng (loại phòng, tên
            phòng, theo nhóm….).
          </p>
        </div>
        <div className="about--item">
          <h3
            className="cs-fz-24 cs-fw-700 mb-0"
            style={{ color: '#1f5ca8', textDecoration: 'underline' }}
          >
            Các hoạt động ngoại khóa
          </h3>
          <AboutImage3
            style={{
              width: '70%',
              height: 'auto',
              margin: '10px auto 20px',
              display: 'block',
            }}
          />
          <p
            className="cs-fz-16 cs-fw-400 cs-text-black mb-0 mt-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration={700}
          >
            - Ban Quản lý ký túc xá Đại học Cần Thơ thường xuyên tổ chức các
            hoạt động hỗ trợ sinh viên nhằm hướng tới mục tiêu học tập, phát
            triển văn hoá, tri thức của sinh viên; đồng thời, đây còn là một
            cộng đồng giao lưu văn hoá giữa sinh viên Việt Nam và sinh viên quốc
            tế.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default About;
