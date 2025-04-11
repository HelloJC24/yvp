import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ArrowChevronDownIcon } from "../components/Icons";
import Loading from "../components/Loading";
import TitlteBar from "../components/TitlteBar";
import { JOB_POSITIONS_API } from "../config/constant";

const AvailablePosition = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    const LoadData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(JOB_POSITIONS_API);
        const data = res.data?.data;
        setJobPositions(data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    LoadData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="w-full h-full bg-white"
      onClick={() => setSelectedJob(null)}
    >
      {selectedJob && (
        <div className="fixed top-0 left-0 inset-0 w-full h-full backdrop-blur-sm z-[100]"></div>
      )}

      <TitlteBar title="Available Position for you" />

      <main className="max-w-7xl mx-auto p-6 py-20 min-h-[80vh]">
        <div className="w-full">
          <h1 className="text-xl sm:text-5xl pb-4 text-primary font-semibold">
            <span className="text-gold">Grow Your Career </span>with YVP
          </h1>

          <JobPortal
            jobPositions={jobPositions}
            selectedJob={selectedJob}
            setSelectedJob={(v) => setSelectedJob(v)}
          />
          {/* <JobDescription /> */}
        </div>
      </main>
    </div>
  );
};

const JobDescription = () => {
  const navigate = useNavigate();

  const responsibilities = [
    {
      text: "Client Consultation: Assess mortgage needs, financial goals, and recommend suitable loan products.",
    },
    {
      text: "Application Processing: Assist with mortgage applications and collect required documents.",
    },
    {
      text: "Pre-Qualification: Evaluate borrower eligibility and provide pre-qualification letters.",
    },
    {
      text: "Product Knowledge: Stay updated on mortgage products, interest rates, and lending guidelines.",
    },
    {
      text: "Communication: Keep borrowers informed on application status and required documents.",
    },
    {
      text: "Loan Origination: Submit applications for underwriting review and approval.",
    },
    {
      text: "Compliance: Ensure adherence to federal and state lending regulations.",
    },
    {
      text: "Interest Rate Locks: Assist borrowers in securing favorable interest rates.",
    },
    {
      text: "Loan Structuring: Help structure loans that align with borrower goals and lending policies.",
    },
  ];

  return (
    <div className="bg-secondary p-8 rounded-xl relative">
      <div className="cursor-pointer rotate-180 absolute right-4 top-4">
        <ArrowChevronDownIcon fill="#fff" size="20" />
      </div>

      <div>
        <h1 className="text-xl text-white">Job Description</h1>
        <p className="text-base sm:text-lg text-white">
          A Mortgage Associate (Mortgage Loan Officer) assists clients in
          securing mortgage financing by guiding them through the application
          and approval process. They assess financial goals, recommend loan
          products, collect documentation, ensure regulatory compliance, and
          maintain communication throughout the loan origination process.
        </p>
      </div>

      <div className="py-4">
        <h1 className="text-xl text-white">Key Responsibilities: </h1>

        <ul className="sm:pl-4">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-center gap-x-2 py-1">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <p className="flex-1 text-base sm:text-lg text-white">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p
        onClick={() =>
          window.open("https://forms.gle/8iR5LFBcEufLT13X7", "_blank")
        }
        className="sm:text-xl underline text-white pt-6 cursor-pointer"
      >
        FILL UP THE FORM HERE
      </p>
    </div>
  );
};

const JobPortal = ({ jobPositions, selectedJob, setSelectedJob }) => {
  //   const [selectedJob, setSelectedJob] = useState(null);

  const toggleJobSelection = (job) => {
    setSelectedJob((prevJob) => {
      const newSelectedJob = prevJob?.id === job.id ? null : job;
      return newSelectedJob;
    });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full py-6 grid grid-cols-1 sm:grid-cols-2 items-start gap-4 sm:gap-8 relative"
    >
      {jobPositions?.map((job, index) => (
        <SelectionItem
          key={index}
          job={job}
          onClick={() => toggleJobSelection(job)}
          isSelected={selectedJob?.id === job.id}
        />
      ))}
    </div>
  );
};

const SelectionItem = ({ job, isSelected, onClick }) => {
  const comRef = useRef(null);

  const itemHeight = comRef.current?.offsetTop;
  console.log(itemHeight);

  return (
    <div className="w-full flex flex-col gap-y-6 ">
      {/* Clickable SelectionItem */}
      <div
        ref={comRef}
        onClick={onClick}
        className={`${
          isSelected ? "z-[200]" : ""
        } bg-secondary p-2 rounded-xl cursor-pointer`}
      >
        <div className="flex justify-between items-center px-2">
          <h1 className="text-base sm:text-lg py-2 text-white">{job.title}</h1>
          <div className="cursor-pointer">
            <ArrowChevronDownIcon fill="#fff" size="20" />
          </div>
        </div>
      </div>

      {/* Absolutely positioned JobDetails within the relative parent */}
      {isSelected && (
        <div
          style={{ top: itemHeight + 80 }}
          className={`absolute left-0 top-0 w-full z-[200]`}
        >
          <JobDetails job={job} />
        </div>
      )}
    </div>
  );
};

// Component for displaying detailed job information
const JobDetails = ({ job }) => {
  return (
    <div
      className={`${
        job ? "z-[200]" : ""
      } bg-secondary text-white p-6 rounded-xl w-full h-[80dvh] overflow-y-auto modal-scroll-sm `}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{job.companyLabel}</h2>
        <div className="cursor-pointer rotate-180">
          <ArrowChevronDownIcon fill="#fff" size="20" />
        </div>
      </div>

      {job.companyDescription && (
        <div className="mb-4">
          <p className="text-base sm:text-lg py-2">{job.companyDescription}</p>
        </div>
      )}

      {job.jobDescription && (
        <div className="mb-4">
          <p className="text-xl sm:text-2xl font-medium">
            {job.id === 1 ? "Job Overview" : "Job Description"}
          </p>
          <p className="text-base sm:text-lg py-2">{job.jobDescription}</p>
        </div>
      )}

      <div className="mb-4">
        <p className="font-medium text-lg sm:text-xl">Key Responsibilities:</p>
        {job.responsibilities.map((respSection, sectionIndex) => (
          <div key={sectionIndex} className="mt-2">
            <p className="font-medium text-base">
              {respSection.number}. {respSection.section}
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              {respSection.tasks.map((task, taskIndex) => (
                <li className="text-base sm:text-lg" key={taskIndex}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="font-medium text-lg sm:text-xl">Qualifications:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {job.qualifications.map((qual, index) => (
            <li className="text-base sm:text-lg" key={index}>
              {qual}
            </li>
          ))}
        </ul>
      </div>

      {job.benefits && (
        <div className="mb-4">
          <p className="font-medium text-lg sm:text-xl">Benefits:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {job.benefits.map((benefit, index) => (
              <li className="text-base sm:text-lg" key={index}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {job.workingHours && (
        <div className="mb-4">
          <p className="font-medium text-lg sm:text-xl">Working Hours:</p>
          <p className="text-base sm:text-lg">{job.workingHours}</p>
        </div>
      )}

      {job.isForm ? (
        <p
          onClick={() => window.open(job.redirect, "_blank")}
          className="sm:text-xl underline text-white pt-6 cursor-pointer"
        >
          FILL UP THE FORM HERE
        </p>
      ) : (
        <div className="pt-8 max-w-60">
          <Button
            onPress={() => window.open(job.redirect, "_blank")}
            fontSize="text-sm sm:text-base"
            bg="bg-gold"
            radius="rounded-full"
            padding="py-2 px-6 sm:px-8"
          >
            Start Your VA Journey
          </Button>
        </div>
      )}
    </div>
  );
};

export default AvailablePosition;
