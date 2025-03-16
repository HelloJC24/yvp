import axios from "axios";
import { useEffect, useState } from "react";
import { CTA_API } from "../config/constant";
import Button from "./Button";

const StartConversation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(CTA_API);
        setData(...res.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div className="w-full bg-primary py-6 sm:py-10 px-20 flex flex-col sm:flex-row gap-x-20 justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-white whitespace-nowrap">
        {data?.title}
      </h1>

      <div className="max-w-96 p-2">
        <Button
          onPress={() => window.open(data?.redirect, "_blank")}
          bg="bg-white"
          textColor="text-primary"
        >
          {data?.button}
        </Button>
      </div>
    </div>
  );
};

export default StartConversation;
