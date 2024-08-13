import '../App.css'

type InputType = {
  image: string;
  label1: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string
};

export const Navbar = ({
  image,
  label1,
  label2,
  label3,
  label4,
  label5
}: InputType) => {
  return (
    <div>
       <nav id="navbar">
        <div id="logo">
           <img src={image} alt="shivrajchoudhary.com" />
        </div>

        <ul>
            <li className="item"><a href="#home">{label1}</a></li>
            <li className="item"><a href="#home">{label2}</a></li>
            <li className="item"><a href="#services-container">{label3}</a></li>
            <li className="item"><a href="#client-section">{label4}</a></li>
            <li className="item"><a href="#contact">{label5}</a></li>
        </ul>
    </nav>
    </div>
  )
};
