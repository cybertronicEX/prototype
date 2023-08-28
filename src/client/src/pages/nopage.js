import "../css/nopage.css"


export default function NoPage () {
  function clickMe(){
    alert ("yaaayyyyy!");
  } 
  
  // const button = styled.button{
  //   button.style.left = `${Math.ceil(Math.random() * 90)}%`;
  //   button.style.top = `${Math.ceil(Math.random() * 90)}%`;
  // }

    return (
      <div className="Date">
        <h1>Would you go out on a date with me?</h1>
        <div className="ima">
          <img className="slideshow" src="https://i.imgflip.com/6tci39.jpg" alt="dad"/>
        </div>
        <div className="butt">
          <button className="button" onClick={clickMe}>yes i would love to</button>
          <button className="button2">No</button>
        </div>
      </div>
      
    );
  };
//  export default NoPage;
