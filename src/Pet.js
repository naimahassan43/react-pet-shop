function Pet(props) {
  return (
    <li style={{ fontSize: "22px", padding: "10px" }}>
      {props.name} is a {props.species} and it is {props.age} months age
    </li>
  );
}

export default Pet;
