import Button from "./Button";

const StartConversation = () => {
  return (
    <div className="w-full bg-primary py-6 sm:py-10 px-20 flex flex-col sm:flex-row gap-x-20 justify-center items-center">
      <h1 className="text-2xl md:text-4xl text-white whitespace-nowrap">
        Scale up effortlessly with YVP!
      </h1>

      <div className="max-w-96 p-2">
        <Button
          onPress={() =>
            window.open(
              "https://outlook.office365.com/owa/calendar/ZenrgFinanceBookingCopy@zenrgfinance.com.au/bookings/",
              "_blank"
            )
          }
          bg="bg-white"
          textColor="text-primary"
        >
          Unlock Your Virtual Partner
        </Button>
      </div>
    </div>
  );
};

export default StartConversation;
