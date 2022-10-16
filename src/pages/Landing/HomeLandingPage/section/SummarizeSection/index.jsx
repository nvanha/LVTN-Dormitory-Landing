import { Container } from 'react-bootstrap';

import LogoURL from '~/assets/summarize/Image1.png';
import SectionTitle from '../../components/SectionTitle';

const SummarizeSection = () => (
  <section id="tong-quat" className="summarize">
    <Container className="p-0">
      <SectionTitle bold="Tổng quát" content="về Ký túc xá" />
      <div className="summarize--inner flex-stretch-space">
        <div
          className="image"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration={700}
        >
          <img src={LogoURL} alt="" />
        </div>
        <div
          className="content flex-center-start"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration={700}
        >
          <p className="cs-fz-16 cs-fw-300 cs-text-black mb-0">
            <span className="cs-fw-500">Trường Đại học Cần Thơ</span> là trường
            đại học đa ngành lớn, có vị trí trung tâm trong hệ thống giáo dục
            đại học Việt Nam, được chính phủ xếp hạng là trường đại học trọng
            điểm quốc gia của cả nước. Trường là một trong ba trường đại học
            Việt Nam đạt tiêu chuẩn giáo dục quốc tế của Hệ thống các{' '}
            <span className="cs-fw-500">trường đại học ASEAN</span>. Ngoài đào
            tạo, trường còn là trung tâm nghiên cứu khoa học và quản lý chính
            sách của Việt Nam. Chính vì vậy mà Đại học Cần Thơ thu hút được rất
            nhiều học sinh, sinh viên đến học tập. Để đáp ứng được nhu cầu sinh
            sống và học tập của số lượng đông đảo sinh viên thì ký túc xá Cần
            Thơ đã được thành lập.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default SummarizeSection;
