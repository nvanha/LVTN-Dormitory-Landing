import { CSLinkedOutline } from '~/components/iconography/Outline';

const DetailItem = ({ data, handleShowModalPreviewDetails }) => (
  <div
    className="details--item"
    onClick={() => handleShowModalPreviewDetails(data)}
    data-aos={data.aosType}
    data-aos-easing="linear"
    data-aos-duration={700}
  >
    <div className="category">{data.category}</div>
    <div className="thumbnail">
      <img src={data.thumbnail} alt={data.category} />
    </div>
    <div className="content">
      {data.content.map((item, index) => (
        <p key={index}>- {item}.</p>
      ))}
      <span>
        <CSLinkedOutline customClassName="fill-white" />
      </span>
    </div>
  </div>
);

export default DetailItem;
