import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';

import HeaderBackgroundURL from '~/assets/backgrounds/Header.png';
import LogoURL from '~/assets/logo/LogoWithText2.png';
import { ButtonCustom, InputPassword, InputText } from '~/components/form';
import { CSRefreshOutline } from '~/components/iconography/Outline';

const captchaSyntaxColorList = ['red', 'purple', 'blue', 'green', 'yellow'];

const ModalLogin = ({ handleClose }) => {
  const [captchaID, setCaptchaID] = useState('');

  const makeID = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    [...new Array(length)].map(() => {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    });

    return result;
  };

  useEffect(() => {
    setCaptchaID(makeID(5));
  }, []);

  const handleRefreshCaptcha = () => {
    setCaptchaID(makeID(5));
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      captcha: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().trim().required('Vui lòng nhập tên đăng nhập!'),
      password: Yup.string().trim().required('Vui lòng nhập mật khẩu!'),
      captcha: Yup.string().trim().required('Vui lòng nhập mã bảo vệ!'),
    }),
    onSubmit: (values) => {
      const { captcha } = values;
      if (captcha !== captchaID) {
        formik.setErrors({ captcha: 'Mã bảo vệ không đúng' });
        handleRefreshCaptcha();
      }
    },
  });

  return (
    <Modal
      show
      onHide={handleClose}
      centered
      className="home-landing-page modal-login"
    >
      <Modal.Header
        closeButton
        style={{ backgroundImage: `url(${HeaderBackgroundURL})` }}
      >
        <img src={LogoURL} alt="ctu-logo" />
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <h2
            className="cs-fz-28 cs-fw-700 mb-0"
            style={{ color: 'rgb(31, 92, 168)', textTransform: 'uppercase' }}
          >
            Đăng nhập tài khoản
          </h2>
          <InputText
            labelFor="username"
            labelContent="Tên đăng nhập:"
            id="username"
            name="username"
            // placeholder="Enter your Username"
            isRequired
            {...formik.getFieldProps('username')}
            isValid={formik.touched.username && !formik.errors.username}
            isInvalid={formik.touched.username && formik.errors.username}
            isError={formik.touched.username && formik.errors.username}
            msgError={formik.errors.username}
          />
          <InputPassword
            labelFor="password"
            labelContent="Mật khẩu:"
            id="password"
            name="password"
            // placeholder="Enter your Username"
            isRequired
            {...formik.getFieldProps('password')}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.touched.password && formik.errors.password}
            isError={formik.touched.password && formik.errors.password}
            msgError={formik.errors.password}
          />
          <div
            className="flex-start-start captcha-section"
            style={{ gap: '10px' }}
          >
            <InputText
              labelFor="captcha"
              labelContent="Mã bảo vệ:"
              id="captcha"
              name="captcha"
              // placeholder="Enter your Username"
              isRequired
              {...formik.getFieldProps('captcha')}
              isValid={formik.touched.captcha && !formik.errors.captcha}
              isInvalid={formik.touched.captcha && formik.errors.captcha}
              isError={formik.touched.captcha && formik.errors.captcha}
              msgError={formik.errors.captcha}
            />
            <div className="captcha-input">
              {captchaID.split('').map((item, index) => (
                <span
                  key={index}
                  className={`cs-fz-20 cs-fw-300 syntax-${index + 1} syntax-${
                    captchaSyntaxColorList[index]
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
            <CSRefreshOutline
              onClick={handleRefreshCaptcha}
              styleInline={{
                marginTop: '52px',
                cursor: 'pointer',
                display: 'block',
                width: '30px',
                height: '30px',
              }}
            />
          </div>
          <ButtonCustom type="submit" customClassName="d-block m-auto mt-4">
            Đăng nhập
          </ButtonCustom>
        </Form>
      </Modal.Body>
      <div
        className="cs-text-center pt-4 pb-4"
        style={{ backgroundColor: 'rgb(31, 92, 168)' }}
      >
        <p className="cs-fz-12 cs-fw-300 cs-text-white mb-0">
          Trường Đại học Cần Thơ (Can Tho University)
        </p>
        <p className="cs-fz-12 cs-fw-300 cs-text-white mb-0">
          Khu II, đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ.
        </p>
        <p className="cs-fz-12 cs-fw-300 cs-text-white mb-0">
          Điện thoại: (84-292) 3832663 - (84-292) 3838474; Fax: (84-292)
          3838474; Email: dhct@ctu.edu.vn.
        </p>
      </div>
    </Modal>
  );
};

export default ModalLogin;
