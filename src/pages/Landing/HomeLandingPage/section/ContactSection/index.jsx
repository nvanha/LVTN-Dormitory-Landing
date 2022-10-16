import { Container } from 'react-bootstrap';

const ContactSection = () => (
  <section id="lien-he" className="contact">
    <Container className="p-0">
      <div className="contact--inner flex-start-start" style={{ gap: '30px' }}>
        <div
          className="flex-center-center avt"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration={700}
        >
          <img
            src="https://nvanha.github.io/myweb/images/avt/avt-2.jpg"
            alt=""
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="avt-1"
          />
          <a
            href="https://nvanha.github.io/myweb/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://nvanha.github.io/myweb/images/logo/logo.png"
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                backgroundColor: 'white',
              }}
              className="avt-2"
            />
          </a>
        </div>
        <div
          style={{ flex: 1 }}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration={700}
        >
          <p className="cs-fz-18 cs-fw-600 cs-text-white mb-2">
            Nguyễn Văn Hà - B1809342
          </p>
          <p className="cs-fz-18 cs-fw-600 cs-text-white mb-2">
            Ngành Công nghệ thông tin - Khoa Công nghệ thông tin & Truyền thông
          </p>
          <p className="cs-fz-18 cs-fw-600 cs-text-white mb-2">
            Trường Đại học Cần Thơ (Can Tho University)
          </p>
          <p className="cs-fz-18 cs-fw-600 cs-text-white mb-0">
            Điện thoại:{' '}
            <a
              href="tel:+84838720508"
              className="cs-text-white cs-text-hover-white cs-text-link"
            >
              (+84) 83 872 0508
            </a>
            ; Email:{' '}
            <a
              href="mailto:hab1809342@student.ctu.edu.vn"
              className="cs-text-white cs-text-hover-white cs-text-link"
            >
              hab1809342@student.ctu.edu.vn
            </a>{' '}
            -{' '}
            <a
              href="mailto:nvha1120@gmail.com"
              className="cs-text-white cs-text-hover-white cs-text-link"
            >
              nvha1120@gmail.com
            </a>
          </p>
          <div
            className="flex-center-start"
            style={{ gap: '15px', marginTop: '20px' }}
          >
            <a
              href="https://www.linkedin.com/in/hanguyen1120"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://nvanha.github.io/myweb/images/icons/linkedin.svg"
                alt=""
                width={65}
                height={65}
              />
            </a>
            <a
              href="https://github.com/nvanha"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://nvanha.github.io/myweb/images/icons/github.svg"
                alt=""
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default ContactSection;
