import Card from "../components/card";

export default function Projects() {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card 
          title={"Payment Application"} 
          description={"Developed a basic version of a payment gateway application similar to PayTM. Featuring user signup/signin and money transfer functionalities using a full-stack approach with React and Node.js. Integrated MongoDB transactions to handle money transfers between users, ensuring atomicity and consistency in updating account balances across multiple ends."} 
          link={"https://github.com/shivrajchoudharywork/payment-application"}
        />
        <Card 
          title={"Business Card Managing Application"} 
          description={"This is a web application designed to create, manage, update, and delete digital business cards. Users can input their personal details such as name, description, interests, and social media links, and customize their cards according to their preferences. The application is built with a modern stack including React for the frontend, Tailwind CSS for styling, and Express.js for the backend. Data is stored in a MongoDB database, and validation is handled using Zod."} 
          link={"https://github.com/shivrajchoudharywork/Business-Card-Project"}
        />
        <Card 
          title={"Youtube Backend Clone"} 
          description={"In Progress................................Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam quod facere! Perferendis debitis at possimus quidem non nostrum, quaerat dolorum, dolore, delectus ipsum adipisci odit distinctio impedit molestiae natus?"} 
          link={"https://github.com/shivrajchoudharywork/videoApp-youtubeBackendClone"}
        />
        <Card 
          title={"Food Delivery Website"} 
          description={"This is a static website. This is purely made in HTML and CSS."} 
          link={"https://github.com/shivrajchoudharywork/Food-Delivery-Website"}
        />
        <Card 
          title={"Dance Website"} 
          description={"This is a dance website developed using Pug, CSS, and minimal JavaScript. In this website, I try to understand CSS better and the initial phase of JavaScript. I also learn how to use the Pug template engine."} 
          link={"https://github.com/shivrajchoudharywork/DanceWebsite"}
        />
      </div>
    </div>
  );
}
