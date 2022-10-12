import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import LogoWithText1URL from '~/assets/logo/LogoWithText1.png';
import LogoWithText2URL from '~/assets/logo/LogoWithText2.png';

const headerNav = [
  {
    display: 'Trang chủ',
    path: 'trang-chu',
    offset: -70,
  },
  {
    display: 'Tổng quát',
    path: 'tong-quat',
    offset: -70,
  },
  {
    display: 'Chi tiết',
    path: 'chi-tiet',
    offset: -70,
  },
  {
    display: 'Giới thiệu',
    path: 'gioi-thieu',
    offset: -70,
  },
  {
    display: 'Liên hệ',
    path: 'lien-he',
    offset: 0,
  },
];

const Header = () => {
  const [logoURL, setLogoURL] = useState(LogoWithText1URL);

  const headerRef = useRef(null);
  const registerLinkRef = useRef(null);

  useEffect(() => {
    const headerScroll = () => {
      if (
        document.body.scrollTop > 80
        || document.documentElement.scrollTop > 80
      ) {
        headerRef?.current?.classList?.add('shrink');
        registerLinkRef?.current?.classList?.add('yellow');
        setLogoURL(LogoWithText2URL);
      } else {
        headerRef?.current?.classList?.remove('shrink');
        registerLinkRef?.current?.classList?.remove('yellow');
        setLogoURL(LogoWithText1URL);
      }
    };

    window.addEventListener('scroll', headerScroll);

    return () => {
      window.removeEventListener('scroll', headerScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container className="p-0 flex-center-space">
        <img
          src={logoURL}
          alt="CTU-Logo"
          height={60}
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration={700}
        />
        <ul
          className="nav--list flex-center-center"
          style={{ gap: '20px' }}
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration={700}
        >
          {headerNav.map((item, index) => (
            <li key={index} className="nav--item">
              <Link
                to={item.path}
                spy
                smooth
                offset={item.offset}
                duration={100}
                className="nav--link"
              >
                {item.display}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#dang-nhap"
              className="nav--link register-link"
              ref={registerLinkRef}
            >
              Đăng nhập
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
