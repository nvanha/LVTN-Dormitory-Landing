import React from 'react';

const SectionTitle = ({ bold, content }) => (
  <h2
    className="section-title"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration={700}
  >
    <span>{bold}</span> {content}
  </h2>
);

export default SectionTitle;
