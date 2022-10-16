import { useState } from 'react';
import { Container } from 'react-bootstrap';

import { ButtonCustom } from '~/components/form';
import ModalRegister from '../../components/ModalRegister';

const HomeSection = () => {
  const [isShowModalRegister, setIsShowModalRegister] = useState(false);

  const handleOpenModalRegister = () => setIsShowModalRegister(true);
  const handleCloseModalRegister = () => setIsShowModalRegister(false);

  return (
    <>
      <section id="trang-chu" className="home">
        <Container className="p-0">
          <div className="home--inner cs-text-center">
            <h1
              className="cs-fz-56 cs-fw-900 cs-text-center cs-text-white mb-4"
              style={{ textTransform: 'uppercase' }}
              data-aos="fade-down-left"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              Hệ thống quản lý Ký Túc Xá
            </h1>
            <p
              className="cs-fz-20 cs-fw-900 cs-text-center cs-text-white"
              style={{ marginBottom: '70px' }}
              data-aos="fade-down-right"
              data-aos-easing="linear"
              data-aos-duration={700}
            >
              Trung tâm phục vụ sinh viên - Cùng hoà nhập vào trường với chúng
              tôi nhé
            </p>
            <ButtonCustom
              size="l"
              color="orange"
              customClassName="m-auto"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={700}
              onClick={handleOpenModalRegister}
            >
              Đăng ký ngay
            </ButtonCustom>
          </div>
        </Container>
      </section>

      {isShowModalRegister && (
        <ModalRegister handleClose={handleCloseModalRegister} />
      )}
    </>
  );
};

export default HomeSection;
