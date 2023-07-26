
import React from 'react';
import ActionAreaCard from '../components/ActionAreaCard'; // Replace './ActionAreaCard' with the correct path to your ActionAreaCard component file

const Aparatus = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        maxWidth: '700px', // You can adjust the maximum width as per your preference
        margin: '0 auto', // Centers the grid horizontally
      }}
    >
      <ActionAreaCard
        title="Card 1"
        image="/static/images/card1.jpg"
        alt="Card 1 Image"
        description="This is the content of Card 1."
      />
      <ActionAreaCard
        title="Card 2"
        image="/static/images/card2.jpg"
        alt="Card 2 Image"
        description="This is the content of Card 2."
      />
      <ActionAreaCard
        title="Card 3"
        image="/static/images/card3.jpg"
        alt="Card 3 Image"
        description="This is the content of Card 3."
      />
      <ActionAreaCard
        title="Card 4"
        image="/static/images/card4.jpg"
        alt="Card 4 Image"
        description="This is the content of Card 4."
      />
    </div>
  );
};

export default Aparatus;

