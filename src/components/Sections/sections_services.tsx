"use client"

import { Suspense, useState } from 'react'
import Image from 'next/image'

type Service = {
  id: number
  name: string
  description: string
  image: string
  groupe?: string
}

type Group = {
  title: string
  name: string
}

const groupes: Group[] = [
  {
    title: "tax services",
    name: "tax"
  },
  {
    title: "Financial Advisory",
    name: "finance"
  },
  {
    title: "accounting services",
    name: "accounting"
  },
  {
    title: "company services",
    name: "company"
  }
]

const services: Service[] = [
  {
    id: 1,
    name: "Personal Income Tax",
    description: "Our personalized income tax service takes the hassle out of tax filing, offering expert assistance in accurately preparing and submitting your personal income tax returns, maximizing deductions, and ensuring compliance with tax laws. Trust our experienced team to minimize your tax burden and provide peace of mind, allowing you to focus on your personal and financial goals.",
    image: "https://www.dnpindia.in/wp-content/uploads/2023/12/Untitled-design-51-1068x712.webp",
    groupe: "tax"
  },
  {
    id: 1,
    name: "Tax Filing",
    description: "Ensure accurate and timely submission of your tax returns to avoid penalties and get the maximum refund you're entitled to.",
    image: "https://th.bing.com/th/id/OIP.tSVhsWsUSgE0Yrwci5GwbQHaEK?w=959&h=539&rs=1&pid=ImgDetMain",
    groupe: "tax"
  },
  {
    id: 3,
    name: "Tax Clearance",
    description: "Obtain peace of mind and ensure compliance with tax regulations by utilizing our tax clearance services, where we meticulously review your financial records, handle all necessary paperwork, and navigate the complex tax landscape to secure your tax clearance efficiently and effectively.",
    image: "https://www.investopedia.com/thmb/M78IlcwjseSvrknhSeezlobQssA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-175917642-59a3eab1aad52b00113ad840.jpg",
    groupe: "tax"
  },
  {
    id: 2,
    name: "Tax Planning",
    description: "Optimize your taxes with personalized strategies for individuals and businesses to minimize tax liability and maximize savings.",
    image: "https://probusinessaccounting.com/wp-content/uploads/2019/01/Tax-Planning.jpg",
    groupe: "tax"
  },
  {
    id: 5,
    name: "VAT Registration",
    description: "Simplify the process of VAT registration with our efficient service, where we guide you through the necessary steps, assist in completing the required paperwork, and ensure compliance with VAT regulations. Trust us to handle your VAT registration seamlessly, saving you time and ensuring a smooth transition into the world of Value Added Tax.",
    image: "https://th.bing.com/th/id/OIP.vNwXi4aT8_FeZum4tTVWmgHaFA?w=740&h=501&rs=1&pid=ImgDetMain",
    groupe: "tax"
  },
  {
    id: 12,
    name: "VAT Returns",
    description: "Our VAT return service offers comprehensive assistance in preparing and submitting your VAT returns accurately and on time, navigating the complexities of VAT regulations, and ensuring compliance with reporting requirements. Let our experienced team handle your VAT returns, allowing you to focus on your core business while enjoying peace of mind in your tax obligations.",
    image: "https://images.startups.co.uk/wp-content/uploads/2001/06/How-does-VAT-work.jpg?width=414&height=269&crop=414",
    groupe: "tax"
  },
  {
    id: 4,
    name: "Company Registration",
    description: "Our company registration services offer a streamlined and efficient process for registering your business, ensuring compliance with legal requirements, and obtaining the necessary licenses and permits. With our expertise, you can navigate the complexities of company registration confidently and start your business on the right foot.",
    image: "https://elegalonline.com/wp-content/uploads/2021/02/How-to-register-a-company-in-the-UK.jpg",
    groupe: "company"
  },
  {
    id: 5,
    name: "Company Amendment",
    description: "Our company amendments service provides assistance in making necessary changes to your company’s legal structure, such as altering the company name, changing directors or shareholders, or modifying the registered address. We guide you through the amendment process, ensuring compliance with regulatory requirements and providing a smooth transition for your company’s evolving needs.",
    image: "https://th.bing.com/th/id/OIP.8fH1ICUkcGG-O_X0jjwGRgHaFj?w=640&h=480&rs=1&pid=ImgDetMain",
    groupe: "company"
  },
  {
    id: 6,
    name: "CIPC Annual Returns",
    description: "Delegate the complexities of your CIPC annual returns to Mwindha, where we excel in ensuring a seamless and punctual submission process. Our adept team takes the burden off your shoulders, guaranteeing your business’s consistent compliance while freeing you from administrative intricacies. Don’t let annual returns be a source of stress – contact us now and experience the ease of entrusting your CIPC obligations to our capable hands.",
    image: "https://images.pexels.com/photos/6863385/pexels-photo-6863385.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe: "company"
  },
  {
    id: 7,
    name: "Budget",
    description: "Having a budget keeps your spending in check and makes sure that your savings are on track for the future. Through budgeting, Mwindha will help you set long term financial goals, keep you from overspending and help shut down risky spending habits, and more",
    image: "https://uploads-ssl.webflow.com/61384e03d0d7386945bb30ee/6388aacb8a2d1252bb3ca8f7_The%20Ultimate%20Financial%20Planning%20Checklist.jpg",
    groupe: "finance"
  },
  {
    id: 8,
    name: "Management Accounts",
    description: "Our management accounting service provides insightful financial analysis, forecasting, and reporting that empowers decision-makers with the essential information needed to drive strategic business decisions, optimize performance, and achieve long-term success. With our expertise, you can confidently navigate complex financial landscapes and make informed choices that propel your organization forward.",
    image: "https://images.pexels.com/photos/8062366/pexels-photo-8062366.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe: "accounting"
  },
  {
    id: 9,
    name: "Accountant Letter",
    description: "Our professional accountant letter service offers accurate, well-crafted letters tailored to meet your specific requirements, ensuring clear communication, compliance, and professionalism, while saving you valuable time and effort. Trust us to deliver prompt and reliable letter services that convey your financial information effectively and leave a lasting impression.",
    image: "https://images.template.net/42715/General-Ledger-Accountant-Cover-Letter-1.jpg",
    groupe: "accounting"
  },
  {
    id: 10,
    name: "Payroll",
    description: "Simplify your payroll processes and ensure accurate and timely payment of your employees with our comprehensive payroll services. Our experienced team will handle all aspects, from calculating wages and deductions to managing tax withholdings and generating payroll reports, allowing you to focus on running your business smoothly and efficiently.",
    image: "https://th.bing.com/th/id/OIP.KCbJ27nBpPfG8ITqL6NFfAHaC_?rs=1&pid=ImgDetMain",
    groupe: "finance"
  },


  {
    id: 14,
    name: "Financial Statements",
    description: "Our financial statement services provide you with accurate and comprehensive reports that present a clear picture of your company’s financial performance, including income statements, balance sheets, and cash flow statements. These statements serve as essential tools for assessing profitability, tracking financial trends, and making informed decisions that drive your business forward.",
    image: "https://th.bing.com/th/id/OIP.hkyUEztSsJhbV6DbBNxp8QHaE8?rs=1&pid=ImgDetMain",
    groupe: "finance"
  }

]

export default function SectionsServices() {
  const [selectedService, setSelectedService] = useState<Service>(services[0])

  return (
    <div className="flex flex-col  items-center md:flex-row gap-8 p-10 md:p-28 max-w-6xl mx-auto">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 font-primary-font">Empowering Financial Success with Experts</h1>
        <h2 className="text-lg font-bold text-primary-color mb-2">OUR SERVICES</h2>
        <p className="mb-4">We offer the below range of services :</p>
        <div className="space-y-2 flex flex-col gap-3 last:pr-2">
          {groupes.map((groupe) => (
            <div key={groupe.name}>
              <h3 className="font-bold mb-2 text-center">{groupe.title.toUpperCase()}</h3>
              <div className="space-y-1 grid grid-cols-3  gap-2 last:pr-2">
                {services.filter((service) => service.groupe === groupe.name).map((service) => (
                  <a
                    href='#services'
                    key={service.id}
                    onMouseOver={() => {
                      setSelectedService(service);
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    className={`w-full text-left py-3 px-4  transition-colors ${selectedService.name === service.name
                        ? 'bg-primary-color hover:bg-orange-500 text-white '
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
      <div id='services' className="flex-1 relative  md:mt-52">
        <Suspense  fallback={<LoadingImage />}>
          <Image
            src={selectedService.image}
            alt={`${selectedService.name} illustration`}
            width={400}
            height={600}
            className="w-full max-md:w-[400px] h-[600px]"
          />
        </Suspense>
        <div className="absolute bottom-10 w-full scale-110 bg-secondary-color shadow-xl ">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 text-center">{selectedService.name.toUpperCase()}</h3>
            <p className="text-md">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const LoadingImage = () => {

  return (
    <div
      className="w-full max-md:w-[400px] h-[600px] bg-gray-200 animate-pulse"
      style={{ aspectRatio: '400/600' }}
    >
      <div className="w-full h-full bg-gray-200 animate-pulse" />
    </div>
  )
}