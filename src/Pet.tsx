type PetProps = {
  name: string;
  animal: string;
  breed: string;
}

const Pet = (props: PetProps): JSX.Element => {

  console.log("pet", { props });
  const { name, animal, breed } = props;
  return (<section>
    <h2> {name}</h2>
    <h3>{animal}</h3>
    <h3>{breed}</h3>
    </section>);
};
export default Pet;
