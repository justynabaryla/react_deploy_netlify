import './BlueButton.css'; 


//function BlueButton () {
//return (<button> Click me</button>)

//}

//const BlueButton = () => {
    //return (<button> Click me too </button>);

//}

// to add whatever text we want: {props.______} but then have to change/add in apps.js
//to add more stuff to the button put everything in div 
// to make changes to how the props - things in components - look, add div in ccs file for the button
//  <h1> This is the heading </h1>  - to add one text in all headings 
// to comment out div {/* }
const BlueButton = (props) => {
   return (
    <div> 
        <h1> {props.header} </h1> 
        <button> {props.name} </button>
    </div>
   ); 
    
}
export {BlueButton};
