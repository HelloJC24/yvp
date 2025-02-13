import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PARTNERS_API } from "../config/constant";

const OurPartnersAndInvestors = () => {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(PARTNERS_API);
        console.log(res.data.data);
        const data = res.data?.data;
        setPartners(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-x-4 justify-center items-center">
      {partners.map((item, index) => {
        return (
          <img
            onClick={() => window.open(item?.redirect,"_blank")}
            key={index}
            src={item?.image}
            className="w-20 h-20 sm:w-32 sm:h-32 flex flex-wrap gap-x-4 justify-center items-center"
            alt={item?.alt}
          />
        );
      })}
    </div>
  );
};

export default OurPartnersAndInvestors;
