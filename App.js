import { useState } from "react" ;
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
// import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./App.css";



function App() {
  const brands = [
    { 
      id: 0,
      name: "Samsung", model:"s21ultra",
    // logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TId8xpSveQ_n83RTwmhazuwt1s_VqKyse3U3YCsjjlhwr8NlPwGu5XOzxEJg_VFUHCQ&usqp=CAU",
    specs:{
      os:"Android",
      Processor:"nvidia",
      rom:"128GB",
      img : "https://bit.ly/3ysxxrP"},
    
  },
   {
    id: 1, 
    name : "Apple",model:"12pro",specs:{
    os:"Android",
    Processor:"A12bionic",
    rom:"128GB",
  img:"https://bit.ly/3ipSZI7"},
   },
    {
      id:2,
      name :"poco",model:"f3 gt",specs:{
      os:"Android",
      Processor:"mediateck",
      rom:"128GB",
    img:"https://bit.ly/3iqaFDy"},
    },
   { 
    id:3, 
    name : "pixle",model:"4A",specs:{
    os:"Android",
    Processor:"tensor",
    rom:"128GB",
  img:"https://bit.ly/3xtVKwz"},
   },
  ];
  return (
    <div className="brands">
      
  
    {brands.map(({ name, model,specs,logo,id}) =>  
    < Vote key={id}brandName ={name} model={model} specs={specs} logo={logo} />)}
    {/* above we give the key and id it is for better performance and to TRACK 
    and also read about virtual dom for better clarity how to generate the 
    unique key that will be discused in the backend*/}
    </div>
  );
}
function Vote({brandName, model,specs,logo}){

  const [opened ,setOpened]= useState(false);//this is for showmore and showless
  const [like,setLike] = useState(0);
  const [dislike,setdisLike] = useState(0);//destructing
  //console.log("props" , props)
  // we changed inlineFunction into thses bcoz the function st very long so keep it this way
  const incLike = () => setLike(like + 1)
  const decLike = () => setdisLike(dislike + 1)
  return (
    
      <Card
      className="App" style={{background : like >=  dislike ?"white":"orange" , }}>
      {/* textTransform: "uppercase" ,
      color: "black"
      <h1>{brandName}</h1> // the brand name is replaced with the IMAGE*/}
      
      <img className="logo"src={logo}></img>
      <img className= "phone-img" src ={specs.img} alt="samsung" />
      <h4 className="brand-model">{model}</h4>
      <Button 
      onClick={()=> setOpened(!opened)} 
      variant="outlined"
      color="primary">
   show {opened ? "Less" : "More"}
        </Button>
{/* //conditional rendering in react// */}
      {opened ? <Specification specs={specs}/>: ""}
      
      <IconButton aria-label="like" onClick={incLike}><Badge badgeContent={like} color="primary">
      👍
</Badge> </IconButton>
      <IconButton aria-label="dislike" onClick={decLike}><Badge 
       anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    badgeContent={dislike} color="secondary">
      👎
</Badge>​​​</IconButton>
      
    </Card>
  );
}
function Specification({specs}) {
  return (
    <div>  
  <h2>Specs:</h2>
  <ul className="specs">
        <li>{specs.os}</li>
        <li>{specs.Processor}</li>
        <li>{specs.rom}</li>
      </ul>
  </div>
  );
}
export default App;


//need to read abt hof aka higher order components