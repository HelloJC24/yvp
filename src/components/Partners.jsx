import Partners1 from "../assets/images/partners/1.png";
import Partners10 from "../assets/images/partners/10.png";
import Partners11 from "../assets/images/partners/11.png";
import Partners12 from "../assets/images/partners/12.png";
import Partners2 from "../assets/images/partners/2.png";
import Partners3 from "../assets/images/partners/3.png";
import Partners4 from "../assets/images/partners/4.png";
import Partners5 from "../assets/images/partners/5.png";
import Partners6 from "../assets/images/partners/6.png";
import Partners7 from "../assets/images/partners/7.png";
import Partners8 from "../assets/images/partners/8.png";
import Partners9 from "../assets/images/partners/9.png";

const OurPartnersAndInvestors = () => {
  const partners = [
    {
      id: 1,
      img: Partners1,
    },
    {
      id: 2,
      img: Partners2,
    },
    {
      id: 3,
      img: Partners3,
    },
    {
      id: 4,
      img: Partners4,
    },
    {
      id: 5,
      img: Partners5,
    },
    {
      id: 6,
      img: Partners6,
    },
    {
      id: 7,
      img: Partners7,
    },
    {
      id: 8,
      img: Partners8,
    },
    {
      id: 9,
      img: Partners9,
    },
    {
      id: 10,
      img: Partners10,
    },
    {
      id: 11,
      img: Partners11,
    },
    {
      id: 12,
      img: Partners12,
    },
  ];

  return (
    <div className="w-full flex flex-wrap gap-x-4 justify-center items-center">
      {partners.map(({ id, img }) => {
        return (
          <img
            key={id}
            src={img}
            className="w-20 h-20 sm:w-32 sm:h-32 flex flex-wrap gap-x-4 justify-center items-center"
            alt="img1"
          />
        );
      })}
    </div>
  );
};

export default OurPartnersAndInvestors;
