"use client"

import { useState } from 'react'
import Image from 'next/image'

type Service = {
  name: string
  description: string
  image: string
  groupe?: string
}

type Group = {
  title: string
  name: string
}

const groupes : Group[] = [
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
    name: "Tax Planning",
    description: "Optimize your taxes with personalized strategies for individuals and businesses to minimize tax liability and maximize savings.",
    image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "Tax Filing",
    description: "Ensure accurate and timely submission of your tax returns to avoid penalties and get the maximum refund you're entitled to.",
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "Tax Clearance",
    description: "Obtain peace of mind and ensure compliance with tax regulations by utilizing our tax clearance services, where we meticulously review your financial records, handle all necessary paperwork, and navigate the complex tax landscape to secure your tax clearance efficiently and effectively.",
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "Audit Support",
    description: "Get expert assistance during tax audits to navigate the process smoothly and protect your interests.",
    image: "https://images.pexels.com/photos/6929022/pexels-photo-6929022.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "Company Registration",
    description: "Streamline the process of registering your company, ensuring all legal requirements are met for a smooth start to your business.",
    image: "https://images.pexels.com/photos/6929023/pexels-photo-6929023.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"company"
  },
  {
    name: "Company Amendment",
    description: "Assist with any changes to your company structure or details, ensuring compliance with regulatory requirements.",
    image: "/placeholder.svg?height=300&width=400&text=Company+Amendment",
    groupe:"company"
  },
  {
    name: "CIPC Annual Returns",
    description: "Prepare and submit your annual returns to the Companies and Intellectual Property Commission (CIPC) to maintain your company's good standing.",
    image: "https://images.pexels.com/photos/6863385/pexels-photo-6863385.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"company"
  },
  {
    name: "Budget",
    description: "Develop comprehensive budgets for your business to guide financial decision-making and achieve your fiscal goals.",
    image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"finance"
  },
  {
    name: "Management Accounts",
    description: "Our management accounting service provides insightful financial analysis, forecasting, and reporting that empowers decision-makers with the essential information needed to drive strategic business decisions, optimize performance, and achieve long-term success. With our expertise, you can confidently navigate complex financial landscapes and make informed choices that propel your organization forward.",
    image: "https://images.pexels.com/photos/8062366/pexels-photo-8062366.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"accounting"
  },
  {
    name: "Accountant Letter",
    description: "Our professional accountant letter service offers accurate, well-crafted letters tailored to meet your specific requirements, ensuring clear communication, compliance, and professionalism, while saving you valuable time and effort. Trust us to deliver prompt and reliable letter services that convey your financial information effectively and leave a lasting impression.",
    image: "https://images.pexels.com/photos/8062366/pexels-photo-8062366.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"accounting"
  },
  {
    name: "Payroll",
    description: "Simplify your payroll processes and ensure accurate and timely payment of your employees with our comprehensive payroll services. Our experienced team will handle all aspects, from calculating wages and deductions to managing tax withholdings and generating payroll reports, allowing you to focus on running your business smoothly and efficiently.",
    image: "/placeholder.svg?height=300&width=400&text=Payroll",
    groupe:"finance"
  },
  {
    name: "VAT Registration",
    description: "Simplify the process of VAT registration with our efficient service, where we guide you through the necessary steps, assist in completing the required paperwork, and ensure compliance with VAT regulations. Trust us to handle your VAT registration seamlessly, saving you time and ensuring a smooth transition into the world of Value Added Tax.",
    image: "https://images.pexels.com/photos/6694485/pexels-photo-6694485.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "VAT Returns",
    description: "Our VAT return service offers comprehensive assistance in preparing and submitting your VAT returns accurately and on time, navigating the complexities of VAT regulations, and ensuring compliance with reporting requirements. Let our experienced team handle your VAT returns, allowing you to focus on your core business while enjoying peace of mind in your tax obligations.",
    image: "/placeholder.svg?height=300&width=400&text=VAT+Returns",
    groupe:"tax"
  },
  {
    name: "Personal Income Tax",
    description: "Our personalized income tax service takes the hassle out of tax filing, offering expert assistance in accurately preparing and submitting your personal income tax returns, maximizing deductions, and ensuring compliance with tax laws. Trust our experienced team to minimize your tax burden and provide peace of mind, allowing you to focus on your personal and financial goals.",
    image: "https://images.pexels.com/photos/6863245/pexels-photo-6863245.jpeg?auto=compress&cs=tinysrgb&w=600",
    groupe:"tax"
  },
  {
    name: "Financial Statements",
    description: "Our financial statement services provide you with accurate and comprehensive reports that present a clear picture of your company’s financial performance, including income statements, balance sheets, and cash flow statements. These statements serve as essential tools for assessing profitability, tracking financial trends, and making informed decisions that drive your business forward.",
    image: "/placeholder.svg?height=300&width=400&text=Financial+Statements",
    groupe:"finance"
  }
 
]

export default function SectionsServices() {
  const [selectedService, setSelectedService] = useState<Service>(services[0])

  return (
    <div className="flex flex-col  items-center md:flex-row gap-8 py-24 px-16 max-w-6xl mx-auto">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 font-primary-font">Empowering Financial Success with Experts</h1>
        <h2 className="text-lg font-bold text-primary-color mb-2">OUR SERVICES</h2>
        <p className="mb-4">We have  {services.length} services at your disposal below group in {groupes.length} categories</p>
        <div className="space-y-2 flex flex-col gap-3 last:pr-2">
          {groupes.map((groupe) => (
            <div key={groupe.name}>
              <h3 className="font-bold mb-2 text-center">{groupe.title.toUpperCase()}</h3>
              <div className="space-y-1 grid grid-cols-3 md:grid-cols-4 gap-2 last:pr-2">
                {services.filter((service) => service.groupe === groupe.name).map((service) => (
                  <a
                    href='#services'
                    key={service.name}
                    onMouseOver={() => setSelectedService(service)}
                    className={`w-full text-left py-3 px-4  transition-colors ${
                      selectedService.name === service.name
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
      <div id='services' className="flex-1 relative">
        <Image
          src={selectedService.image}
          alt={`${selectedService.name} illustration`}
          width={400}
          height={600}
          className="w-full h-[450px] md:h-[600px]"
        />
        <div className="absolute bottom-20 w-full scale-110 bg-secondary-color shadow-xl ">
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