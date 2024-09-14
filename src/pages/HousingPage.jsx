import { useEffect, React } from "react";
import Housing from "../components/Housing/Housing.jsx";
import { useNavigate, useParams } from "react-router-dom";
import listImages from "../data/CardData.json";
import Collapse from "../components/Collapse/Collapse.jsx";

function HousingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const housingData = listImages.find((item) => item.id === id);

  useEffect(() => {
    !housingData && navigate("/error", { replace: true });
  }, [housingData, navigate]);
  if (!housingData) return null;

  const {
    pictures,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
  } = housingData;
  const { name: hostName, picture: hostPicture } = host;
  const CollapseData = [
    {
      title: "Description",
      content: description,
    },
    {
      title: "Équipments",
      content: (
        <ul>
          {equipments.map((equipment, index) => (
            <li className="Collapse__content__li" key={index}>
              {equipment}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <Housing
        id={id}
        images={pictures}
        title={title}
        location={location}
        hostName={hostName}
        hostPicture={hostPicture}
        tags={tags}
        rating={rating}
      />
      <div className="Collapse__housing">
        <Collapse CollapseData={CollapseData} />
      </div>
    </>
  );
}

export default HousingPage;
