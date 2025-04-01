// Destructure pokemon types props here :)
export const Type = ({ types }) => {
  console.log(types)
  return (
    <div>
      {types.map((type, index) => {
        return <span key={index}>{type} </span>
      })}
    </div>
  );
};
