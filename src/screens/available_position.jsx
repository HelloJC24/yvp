import React, { useRef, useState } from "react";
import Button from "../components/Button";
import { ArrowChevronDownIcon } from "../components/Icons";
import TitlteBar from "../components/TitlteBar";

const AvailablePosition = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPositions = [
    {
      id: 1,
      title: "Bookeeper",
      jobDescription:
        "We are seeking a detail-oriented and highly organized Bookkeeper to maintain financial records, reconcile accounts, and ensure compliance with Australian tax regulations. The ideal candidate will play a crucial role in financial decision-making, providing accurate financial data and working closely with the team to support business operations.",
      responsibilities: [
        {
          number: "1",
          section: "Financial Record Management",
          tasks: [
            "Maintain accurate and up-to-date financial records for the business.",
            "Efficiently process accounts payable and receivable.",
            "Reconcile bank statements and financial transactions.",
            "Prepare monthly, quarterly, and annual financial reports.",
          ],
        },
        {
          number: "2",
          section: "Payroll Processing",
          tasks: [
            "Manage payroll, including employee benefits, superannuation, and leave entitlements.",
            "Ensure compliance with Fair Work Australia regulations and ATO compliance.",
          ],
        },
        {
          number: "3",
          section: "Compliance & Taxation",
          tasks: [
            "Prepare BAS (Business Activity Statements) and GST filings.",
            "Assist in preparing end-of-year financial statements and tax returns.",
          ],
        },
        {
          number: "4",
          section: "Software Utilization",
          tasks: [
            "Use accounting software such as MYOB, Xero, or QuickBooks for financial management.",
            "Generate detailed financial reports and analyses.",
          ],
        },
        {
          number: "5",
          section: "Stakeholder Collaboration",
          tasks: [
            "Liaise with accountants, auditors, and regulatory bodies.",
            "Provide financial insights to management for decision-making.",
          ],
        },
        {
          number: "6",
          section: "General Administration",
          tasks: [
            "Assist with budget preparation and forecasting.",
            "Ensure financial documents are organized and securely stored.",
          ],
        },
      ],
      qualifications: [
        "2-3 years of bookkeeping experience, preferably with Australian accounting.",
        "Diploma or degree in Accounting, Finance, or a related field",
        "Proven experience as a Bookkeeper in an Australian business.",
        "Proficiency in Xero, MYOB, QuickBooks, or other accounting software.",
        "Solid understanding of Australian taxation and compliance laws.",
        "BAS Agent certification.",
        "Strong numerical skills and attention to detail.",
        "Ability to manage multiple priorities and meet deadlines.",
        "Excellent communication and interpersonal skills to collaborate with team members and external stakeholders.",
        "Proactive approach to problem-solving and continuous improvement.",
        "Certification as a BAS Agent (preferred but not mandatory).",
      ],
      benefits: [
        "Competitive Salary",
        "Work-from-Home Flexibility",
        "Career Growth Opportunities",
        "Supportive Team Environment",
      ],
      workingHours: "Australian Business Hours",
    },
    {
      id: 2,
      title: "Financial Planner Assistant",
      companyLabel: "Company Overview",
      companyDescription:
        "MPG Advisory is a leading financial advisory firm in Australia specializing in comprehensive financial planning and wealth management. We provide expert guidance on investments, retirement planning, tax strategies, estate planning, and risk management, ensuring clients receive tailored solutions to achieve their financial goals.",
      jobDescription:
        "As a Financial Planning Assistant, you will support financial planners and advisors by assisting in client financial planning, investment management, and administrative tasks. Your role is crucial in ensuring smooth operations and efficient financial planning workflows while delivering exceptional client service.",
      responsibilities: [
        {
          number: "1",
          section: "Client Communication",
          tasks: [
            "Assist clients by gathering financial information and responding to inquiries.",
            "Schedule appointments and coordinate meetings with financial planners.",
          ],
        },
        {
          number: "2",
          section: "Data Analysis & Research",
          tasks: [
            "Analyze financial data and generate reports, charts, and projections.",
            "Conduct research on financial products, investment options, and market trends to support financial advisors.",
          ],
        },
        {
          number: "3",
          section: "Software Operations",
          tasks: [
            "Use financial planning software to input data, create financial models, and generate projections.",
          ],
        },
        {
          number: "4",
          section: "Documentation & Compliance",
          tasks: [
            "Prepare and organize client documents, including investment proposals and compliance forms.",
            "Ensure all documentation aligns with regulatory requirements and internal policies.",
          ],
        },
        {
          number: "5",
          section: "Administrative Support",
          tasks: [
            "Maintain accurate client records and manage correspondence.",
            "Handle general administrative tasks, including scheduling and data management.",
          ],
        },
        {
          number: "6",
          section: "Continuing Education",
          tasks: [
            "Stay up to date with industry regulations, financial planning strategies, and software enhancements.",
          ],
        },
      ],
      qualifications: [
        "2-3 years of experience in Australian financial planning",
        "Strong communication and interpersonal skills for effective client interactions.",
        "Proficiency in financial planning software and tools.",
        "Analytical skills for data analysis and report preparation.",
        "High attention to detail and ability to manage multiple tasks efficiently.",
        "Understanding of Australian financial regulations and compliance standards.",
      ],
      workingHours: "Australian Business Hours",
      benefits: [
        "Competitive Salary",
        "Work-from-Home Flexibility",
        "Career Growth Opportunities",
        "Supportive Team Environment",
      ],
    },
    {
      id: 3,
      title: "Telemarketer",
      companyLabel: "Company Overview",
      companyDescription:
        "Your Virtual Partner (YVP) is a premier outsource and business solutions provider, dedicated to supporting Australian businesses with high-quality virtual assistance services. Our expertise spans telemarketing, marketing strategy, administrative support, and business development, helping our clients enhance productivity and scale their operations. We prioritize our expertise on delivering tailored solutions with a focus on efficiency, professionalism, and results.",
      jobDescription:
        "We are seeking a Telemarketing & Marketing Strategist to develop and execute innovative marketing strategies, manage telemarketing campaigns, and optimize client communications. The successful candidate will be responsible for generating leads, increasing brand awareness, and creating effective communication strategies for both internal marketing efforts and client campaigns.",
      responsibilities: [
        {
          number: "1",
          section: "Lead Generation",
          tasks: [
            "Develop and implement lead generation strategies tailored to target industries.",
            "Research and build a database of potential clients.",
            "Maintain strong lead funnel through continuous outreach and follow-ups.",
          ],
        },
        {
          number: "2",
          section: "Telemarketing Campaigns",
          tasks: [
            "Design and manage telemarketing campaigns for client businesses.",
            "Conduct outreach using telephone, email, and social media.",
            "Qualify and convert leads into business opportunities.",
          ],
        },
        {
          number: "3",
          section: "Marketing Strategy Development",
          tasks: [
            "Collaborate with the marketing team to create integrated strategies.",
            "Identify target markets and develop customer personas.",
            "Define campaign objectives and KPIs.",
          ],
        },
        {
          number: "4",
          section: "Client Outreach & Relationship Building",
          tasks: [
            "Develop strong relationships with clients and provide tailored solutions.",
            "Regularly update clients on campaign performance and suggest improvements.",
          ],
        },
        {
          number: "5",
          section: "Campaign Analytics & Reporting",
          tasks: [
            "Track and analyze marketing and telemarketing efforts.",
            "Provide detailed performance reports and improvement recommendations.",
          ],
        },
        {
          number: "6",
          section: "Collaboration with HR Team",
          tasks: [
            "Align strategies with HR for a seamless client experience.",
            "Create scripts and email templates to enhance marketing efforts.",
          ],
        },
        {
          number: "7",
          section: "Market Research",
          tasks: [
            "Stay updated on industry trends, competitor strategies, and consumer behavior.",
            "Use research insights to develop new marketing initiatives.",
          ],
        },
      ],
      qualifications: [
        "2-3 years' experience in telemarketing, marketing strategy, or related roles (B2B or outsourcing preferred).",
        "Strong communication and interpersonal skills with the ability to engage and persuade clients.",
        "Proficiency in CRM software (Salesforce, HubSpot) and marketing automation tools.",
        "Experience in market research and customer segmentation.",
        "Understanding of SEO, content marketing, and digital marketing tactics.",
        "Bachelor's degree in Marketing, Business Administration, or a related field (preferred).",
        "Ability to handle multiple tasks with attention to detail in a remote work setting.",
        "Self-motivated, results-driven, and proactive approach.",
        "Excellent English communication skills (written and verbal).",
      ],
      workingHours: "Australian business hours",
      benefits: [
        "Competitive salary",
        "Work-from-home flexibility",
        "Career growth opportunities",
        "Supportive team environment",
      ],
    },
    {
      id: 4,
      title: "HR Generalist",
      companyLabel: "Company Description",
      companyDescription:
        "Zemg Finance is a dynamic financial services firm dedicated to providing tailored solutions in mortgage broking, insurance, and financial planning. They prioritize client needs with a focus on integrity, innovation, and personalized service, aiming to empower individuals and businesses to achieve their financial goals through expert guidance and comprehensive financial products.",
      jobDescription:
        "A Mortgage Associate (Mortgage Loan Officer) assists clients in securing mortgage financing by guiding them through the application and approval process. They assess financial goals, recommend loan products, collect documentation, ensure regulatory compliance, and maintain communication throughout the loan origination process.",
      responsibilities: [
        {
          number: "1",
          section: "Credit Counseling",
          tasks: [
            "Guide borrowers on credit reports, score improvement, and mortgage impact.",
          ],
        },
        {
          number: "2",
          section: "Negotiation",
          tasks: ["Secure favorable mortgage terms with lenders and clients."],
        },
        {
          number: "3",
          section: "Problem Resolution",
          tasks: ["Address and resolve application process issues."],
        },
        {
          number: "4",
          section: "Sales & Marketing",
          tasks: [
            "Promote mortgage products through networking and referrals.",
          ],
        },
        {
          number: "5",
          section: "Relationship Building",
          tasks: [
            "Maintain strong connections with real estate professionals.",
          ],
        },
        {
          number: "6",
          section: "Continuous Education",
          tasks: ["Stay updated on market trends and lender policies."],
        },
        {
          number: "7",
          section: "Documentation",
          tasks: ["Ensure accurate record-keeping of client interactions."],
        },
        {
          number: "8",
          section: "Compliance",
          tasks: ["Uphold ethical standards and Best Interest Duty."],
        },
      ],
      qualifications: [
        "Must have Australian mortgage experience.",
        "Strong communication and interpersonal skills.",
        "Proficiency in financial planning tools and data analysis.",
      ],
      workingHours: "Australian business hours",
      benefits: [
        "Competitive salary",
        "Work-from-home flexibility",
        "Career growth opportunities",
        "Supportive team environment",
      ],
    },
    {
      id: 5,
      title: "Mortgage Associate",
      companyLabel: "Company Description",
      companyDescription:
        "Zemg Finance is a dynamic financial services firm dedicated to providing tailored solutions in mortgage broking, insurance, and financial planning. They prioritize client needs with a focus on integrity, innovation, and personalized service, aiming to empower individuals and businesses to achieve their financial goals through expert guidance and comprehensive financial products.",
      jobDescription:
        "A Mortgage Associate (Mortgage Loan Officer) assists clients in securing mortgage financing by guiding them through the application and approval process. They assess financial goals, recommend loan products, collect documentation, ensure regulatory compliance, and maintain communication throughout the loan origination process.",
      responsibilities: [
        {
          number: "1",
          section: "Credit Counseling",
          tasks: [
            "Guide borrowers on credit reports, score improvement, and mortgage impact.",
          ],
        },
        {
          number: "2",
          section: "Negotiation",
          tasks: ["Secure favorable mortgage terms with lenders and clients."],
        },
        {
          number: "3",
          section: "Problem Resolution",
          tasks: ["Address and resolve application process issues."],
        },
        {
          number: "4",
          section: "Sales & Marketing",
          tasks: [
            "Promote mortgage products through networking and referrals.",
          ],
        },
        {
          number: "5",
          section: "Relationship Building",
          tasks: [
            "Maintain strong connections with real estate professionals.",
          ],
        },
        {
          number: "6",
          section: "Continuous Education",
          tasks: ["Stay updated on market trends and lender policies."],
        },
        {
          number: "7",
          section: "Documentation",
          tasks: ["Ensure accurate record-keeping of client interactions."],
        },
        {
          number: "8",
          section: "Compliance",
          tasks: ["Uphold ethical standards and Best Interest Duty."],
        },
      ],
      qualifications: [
        "Must have Australian mortgage experience.",
        "Strong communication and interpersonal skills.",
        "Proficiency in financial planning tools and data analysis.",
      ],
      workingHours: "Australian business hours",
      benefits: [
        "Competitive salary",
        "Work-from-home flexibility",
        "Career growth opportunities",
        "Supportive team environment",
      ],
    },
    {
      id: 6,
      title: "Personal Administrative Assistant",
      companyLabel: "Company Overview",
      companyDescription:
        "Vision21 Real Estate is a dynamic Australian real estate agency based in Norwest, New South Wales. Founded in 2018, we specialize in buying, selling, renting, and property investments, with a strong focus on multi-income properties and short-term rentals. Our commitment to trust, transparency, and customer satisfaction sets us apart in the evolving Australian real estate market. With a young and experienced team, we strive to provide expert property analysis and secure the best deals for our clients.",
      jobDescription:
        "We are seeking a highly organized and proactive Personal Administrative Assistant with experience in administrative and sales support, preferably with Australian clients. This role ensures seamless coordination between sales teams and clients while managing daily operations.",
      responsibilities: [
        {
          number: "1",
          section: "Executive & Administrative Support",
          tasks: [
            "Manage executive calendars, schedule meetings, and coordinate travel arrangements.",
            "Assist in organizing and preparing property listings, reports, and presentations.",
            "Ensure accurate documentation and timely processing of sales agreements.",
            "Perform general administrative tasks to support smooth real estate operations.",
          ],
        },
        {
          number: "2",
          section: "Client Communication & CRM Management",
          tasks: [
            "Handle client inquiries via phone, email, and CRM systems.",
            "Maintain customer databases and ensure accurate record-keeping.",
            "Provide customer-centric support, ensuring excellent client service.",
          ],
        },
        {
          number: "3",
          section: "Sales Support & Coordination",
          tasks: [
            "Support the sales process by managing leads and tracking sales performance.",
            "Assist with paperwork.",
            "Coordinate with buyers, sellers, and agents to facilitate transactions.",
            "Assist in marketing efforts, including property listings and client outreach.",
          ],
        },
      ],
      qualifications: [
        "2+ years of experience in administrative or sales support (real estate or property management preferred).",
        "Familiarity with Australian real estate practices is a plus.",
        "Strong organizational and multitasking skills to manage time-sensitive tasks.",
        "Excellent English communication skills (written and verbal).",
        "Attention to detail with a high level of accuracy in managing data and documentation.",
        "Ability to work independently in a remote setting with minimal supervision.",
        "Proficiency in Microsoft Office (Word, Excel, Outlook) and collaboration tools (Skype, Teams).",
        "Experience in real estate, financial services, or related industries.",
        "Prior experience handling international clients, particularly Australian clients.",
        "Familiarity with time zone differences and ability to coordinate across regions.",
        "Previous experience in a virtual assistant or remote work role.",
      ],
      workingHours: "Australian business hours",
      benefits: [
        "Competitive salary",
        "Work-from-home flexibility",
        "Opportunities for career growth and development",
        "Supportive team environment",
      ],
    },
  ];

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
          <JobDescription />
        </div>
      </main>
    </div>
  );
};

const JobDescription = () => {
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

      <a href="/#/coming-soon" className="sm:text-xl underline text-white pt-6">
        FILL UP THE FORM HERE
      </a>
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
          <p>{job.companyDescription}</p>
        </div>
      )}

      {job.jobDescription && (
        <div className="mb-4">
          <p className="font-medium">
            {job.id === 1 ? "Job Overview" : "Job Description"}
          </p>
          <p>{job.jobDescription}</p>
        </div>
      )}

      <div className="mb-4">
        <p className="font-medium">Key Responsibilities:</p>
        {job.responsibilities.map((respSection, sectionIndex) => (
          <div key={sectionIndex} className="mt-2">
            <p className="font-medium">
              {respSection.number}. {respSection.section}
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              {respSection.tasks.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="font-medium">Qualifications:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {job.qualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>
      </div>

      {job.benefits && (
        <div className="mb-4">
          <p className="font-medium">Benefits:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      )}

      {job.workingHours && (
        <div className="mb-4">
          <p className="font-medium">Working Hours:</p>
          <p>{job.workingHours}</p>
        </div>
      )}

      <div className="pt-8 max-w-60">
        <Button
          fontSize="text-sm sm:text-base"
          bg="bg-gold"
          radius="rounded-full"
          padding="py-2 px-6 sm:px-8"
        >
          Start your VA Journey
        </Button>
      </div>
    </div>
  );
};

export default AvailablePosition;
