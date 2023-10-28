import React from 'react';

const Pet = (props) => {
  console.log("pet", { props });
  const { name, animal, breed } = props;
  return (<section>
    <h2> {name}</h2>
    <h3>{animal}</h3>
    <h3>{breed}</h3>
    </section>);
};
export default Pet;
