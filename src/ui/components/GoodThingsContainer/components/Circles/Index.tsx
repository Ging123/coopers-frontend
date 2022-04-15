import './styles.scss';

interface props {
  selectedCircle:number;
  setSelectedCircle:setter;
}

type setter = React.Dispatch<React.SetStateAction<number>>;

const Circles = (props:props) => {
  const circle = ["circle", "circle", "circle"];

  return (
    <div className='circles-of-slide-container'>
      {
        circle.map((className, index) => {
          return createCircle(
            className, 
            index, 
            props.selectedCircle,
            props.setSelectedCircle
          )
        })
      }
    </div>
  );
}

function createCircle(circle:string, index:number, 
selectedCircle:number, setSelectedCircle:setter) {
  const classes = `${circle} ${index === selectedCircle ? "selected" : ""}`;
  return (
    <div 
      className={classes} 
      key={ index }
      onClick={() => setSelectedCircle(index)}
    />
  )
}

export default Circles;