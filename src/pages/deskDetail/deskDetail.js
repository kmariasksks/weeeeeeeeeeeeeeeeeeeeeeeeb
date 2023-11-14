// DeskDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import deskData from '../catalog/catalogData'; // Update the import path
import Headers from '../../components/header/headers';

const DeskDetail = () => {
  console.log(deskData); // Add this line to check the type of deskData
  const { id } = useParams();
  const selectedItem = deskData.find(item => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  const { imageSrc, type, description, material, price } = selectedItem;

  return (
    <>
      <Headers />
      <div>
        <img src={imageSrc} alt={type} />
        <h2>{type}</h2>
        <p>{description}</p>
        <p>Material: {material}</p>
        <p>Price: {price} $</p>
        {/* Add any other details you want to display */}
      </div>
    </>
  );
};

export default DeskDetail;
