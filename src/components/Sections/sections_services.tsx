"use client"

import { useState } from 'react'
import Image from 'next/image'

type Service = {
  name: string
  description: string
  image: string
}

const services: Service[] = [
  {
    name: "Tax Planning",
    description: "Optimize your taxes with personalized strategies for individuals and businesses to minimize tax liability and maximize savings.",
    image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Tax Filing",
    description: "Ensure accurate and timely submission of your tax returns to avoid penalties and get the maximum refund you're entitled to.",
    image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Audit Support",
    description: "Get expert assistance during tax audits to navigate the process smoothly and protect your interests.",
    image: "https://images.pexels.com/photos/6929022/pexels-photo-6929022.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Company Registration",
    description: "Streamline the process of registering your company, ensuring all legal requirements are met for a smooth start to your business.",
    image: "https://images.pexels.com/photos/6929023/pexels-photo-6929023.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Company Amendment",
    description: "Assist with any changes to your company structure or details, ensuring compliance with regulatory requirements.",
    image: "/placeholder.svg?height=300&width=400&text=Company+Amendment"
  },
  {
    name: "CIPC Annual Returns",
    description: "Prepare and submit your annual returns to the Companies and Intellectual Property Commission (CIPC) to maintain your company's good standing.",
    image: "https://images.pexels.com/photos/6863385/pexels-photo-6863385.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Budget",
    description: "Develop comprehensive budgets for your business to guide financial decision-making and achieve your fiscal goals.",
    image: "https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Management Accounts",
    description: "Prepare detailed management accounts to provide insights into your business's financial performance and aid in strategic decision-making.",
    image: "https://images.pexels.com/photos/8062366/pexels-photo-8062366.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Payroll",
    description: "Manage your company's payroll efficiently, ensuring accurate salary calculations, deductions, and compliance with tax regulations.",
    image: "/placeholder.svg?height=300&width=400&text=Payroll"
  },
  {
    name: "VAT Registration",
    description: "Guide you through the process of registering for Value Added Tax (VAT), ensuring compliance with tax authorities.",
    image: "https://images.pexels.com/photos/6694485/pexels-photo-6694485.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "VAT Returns",
    description: "Prepare and submit your VAT returns accurately and on time, helping you avoid penalties and manage your cash flow effectively.",
    image: "/placeholder.svg?height=300&width=400&text=VAT+Returns"
  },
  {
    name: "Personal Income Tax",
    description: "Provide comprehensive personal income tax services, including return preparation, tax planning, and representation before tax authorities.",
    image: "https://images.pexels.com/photos/6863245/pexels-photo-6863245.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Financial Statements",
    description: "Prepare accurate and compliant financial statements to provide a clear picture of your company's financial position and performance.",
    image: "/placeholder.svg?height=300&width=400&text=Financial+Statements"
  }
]

export default function SectionsServices() {
  const [selectedService, setSelectedService] = useState<Service>(services[0])

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 font-primary-font">We offer many services for you.</h1>
        <h2 className="text-lg font-bold text-primary-color mb-2">OUR SERVICES</h2>
        <p className="mb-4">We have {services.length} services at your disposal below</p>
        <div className="space-y-2 grid grid-cols-3 gap-3 last:pr-2">
          {services.map((service) => (
            <button
              key={service.name}
              onMouseOver={() => setSelectedService(service)}
              className={`w-full text-left py-3 px-4  transition-colors ${
                selectedService.name === service.name
                  ? 'bg-primary-color hover:bg-orange-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src={selectedService.image}
          alt={`${selectedService.name} illustration`}
          width={400}
          height={600}
          className="w-full h-[450px] md:h-[600px]"
        />
        <div className="absolute bottom-20 w-full scale-110 bg-white shadow-xl ">
          <div className="p-4">
            <h3 className="font-bold mb-2 text-center">{selectedService.name.toUpperCase()}</h3>
            <p className="text-md">
              {selectedService.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}