import Button from "./Button";

const StartConversation = () => {
  return (
    <div className="w-full bg-primary py-10 px-20 flex gap-x-20 justify-center items-center">
      <h1 className="text-xl sm:text-2xl xl:text-4xl text-white whitespace-nowrap">
        Ready to start a conversation?
      </h1>

      <div className="max-w-96">
        <Button bg="bg-white" textColor="text-primary">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default StartConversation;
