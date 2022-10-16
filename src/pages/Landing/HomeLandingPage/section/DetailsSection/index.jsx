import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Image1URL from '~/assets/details/Image1.png';
import Image2URL from '~/assets/details/Image2.png';
import Image3URL from '~/assets/details/Image3.png';
import SectionTitle from '../../components/SectionTitle';
import DetailItem from './components/DetailItem';
import ModalPreviewDetails from './components/ModalPreviewDetails';

const detailsList = [
  {
    category: 'KTX - Khu A',
    thumbnail: Image1URL,
    content: [
      'Loại bố trí 08 SV/phòng (được phép nấu ăn)',
      'Nằm trong khuôn ᴠiên khu II Trường Đại học Cần Thơ tại Đường 3/2, phường Xuân Khánh, quận Ninh Kiều – TP Cần Thơ',
      'Phí KTX từ 120.000 - 270.000 đồng/SV/tháng (Chưa bao gồm phí điện, nước)',
    ],
    title: 'Ký túc xá Khu A - Trung tâm phục vụ sinh viên',
    aosType: 'fade-up-right',
    link: 'https://nvanha.github.io/LVTN-Popup-KTX-A/',
  },
  {
    category: 'KTX - Khu B',
    thumbnail: Image2URL,
    content: [
      'Loại bố trí 04 SV/phòng (4 giường tầng)',
      'Nằm trong khuôn ᴠiên khu II Trường Đại học Cần Thơ tại Đường 3/2, phường Xuân Khánh, quận Ninh Kiều – TP Cần Thơ',
      'Phí KTX từ 120.000 - 270.000 đồng/SV/tháng (Chưa bao gồm phí điện, nước)',
    ],
    title: 'Ký túc xá Khu B - Trung tâm phục vụ sinh viên',
    aosType: 'fade-up',
    link: 'https://nvanha.github.io/LVTN-Popup-KTX-B/',
  },
  {
    category: 'KTX - Phòng ở',
    thumbnail: Image3URL,
    content: [
      'Được trang bị giường tầng, bàn học, tử cá nhân có ngăn riêng cho từng SV',
      'Có khu vực vệ sinh cá riêng cho từng phòng',
      'Các phòng đều có trang bị mạng wifi tốc độ cao cho SV tìm kiếm tài liệu học tập và giải trí thư giãn',
      'Có loại phòng không được phép nấu ăn (được sử dụng ấm đun siêu tốc) loại 4 hoặc 8 SV/ phòng (có ở khu A lẫn khu B)',
    ],
    title: 'Phòng ở ký xúc xá - Trung tâm phục vụ sinh viên',
    aosType: 'fade-up-left',
    link: 'https://nvanha.github.io/LVTN-Popup-KTX-B/',
  },
];

const DetailsSection = () => {
  const [isShowModalPreviewDetails, setIsShowModalPreviewDetails] = useState(false);
  const [dataActive, setDataActive] = useState('');

  const handleCloseModalPreviewDetails = () => setIsShowModalPreviewDetails(false);
  const handleShowModalPreviewDetails = (data) => {
    setIsShowModalPreviewDetails(true);
    setDataActive(data);
  };

  return (
    <>
      <section id="chi-tiet" className="details">
        <Container className="p-0">
          <SectionTitle bold="Chi tiết" content="của Ký túc xá" />
          <div className="details--inner flex-stretch-space">
            {detailsList.map((item, index) => (
              <DetailItem
                key={index}
                data={item}
                handleShowModalPreviewDetails={handleShowModalPreviewDetails}
              />
            ))}
          </div>
        </Container>
      </section>

      <ModalPreviewDetails
        show={isShowModalPreviewDetails}
        handleClose={handleCloseModalPreviewDetails}
        data={dataActive}
      />
    </>
  );
};

export default DetailsSection;
