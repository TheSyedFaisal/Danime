import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/newButton";
import Image from "next/image";

const CustomDesignSection = () => {
  return (
    <div className="relative pb-10">
      <div className="container pt-16 md:pt-20 px-6 md:px-10">
        <div className="mb-10 w-full overflow-hidden text-center lg:text-left">
          <h2 className="text-black text-sm md:text-2xl lg:text-[35px] leading-[100%] page-font ml-1 lg:ml-2 whitespace-nowrap  w-full">
            Create your
          </h2>
          <h1 className="text-foreground text-2xl md:text-5xl lg:text-[70px] leading-[70%] page-font whitespace-nowrap w-full">
            Custom Design
          </h1>
        </div>
        <div className="lg:flex items-start justify-between">
          {/* Left Side - Form */}
          <div className="space-y-6">
            {/* Header */}

            {/* Form */}
            <div className="space-y-4 lg:max-w-2xl">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-gainsboro border-0 rounded h-10 px-4 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-gainsboro border-0 rounded h-10 px-4 text-sm "
                  />
                </div>
              </div>

              {/* Country Select */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Select Country
                </label>
                <Select defaultValue="japan">
                  <SelectTrigger className="bg-gainsboro border-0 rounded h-10 px-4 text-sm">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="japan">
                      <span className="flex items-center gap-2">
                        <span className="text-foreground">•</span> Japan
                      </span>
                    </SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Full Address */}
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Full Address
                </label>
                <Input
                  placeholder="Enter your Address"
                  className="bg-gainsboro border-0 rounded h-10 px-4 text-sm"
                />
              </div>

              {/* City & Postal Code */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    City
                  </label>
                  <Input
                    placeholder="Tokyo"
                    className="bg-gainsboro border-0 rounded h-10 px-4 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Postal or Zip Code
                  </label>
                  <Input
                    placeholder="xxxxxx"
                    className="bg-gainsboro border-0 rounded h-10 px-4 text-sm"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    className="bg-gainsboro border-0 rounded h-10 px-4 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Phone Number
                  </label>
                  <div className="flex gap-2 bg-gainsboro border-0 rounded">
                    <div className=" rounded h-10 px-3 flex items-center text-sm text-muted-foreground ">
                      <span className="text-[#e31837] mr-1">•</span> +81
                    </div>
                    <Input
                      placeholder="xxx-xxxx"
                      className="bg-gainsboro border-0 rounded h-10 px-4 text-sm flex-1"
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Select Date
                  </label>
                  <Select>
                    <SelectTrigger className="bg-gainsboro border-0 rounded h-10 px-4 text-sm">
                      <SelectValue placeholder="MM/DD/YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">
                    Time
                  </label>
                  <Select>
                    <SelectTrigger className="bg-gainsboro border-0 rounded h-10 px-4 text-sm">
                      <SelectValue placeholder="15:00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15:00">15:00</SelectItem>
                      <SelectItem value="16:00">16:00</SelectItem>
                      <SelectItem value="17:00">17:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <Button className="cursor-pointer w-full bg-foreground hover:bg-black transition ease-in-out duration-300 text-white font-bold uppercase tracking-wider rounded h-10 mt-4">
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          {/* Right Side - Image */}
          <div className="hidden lg:block relative bottom-10  max-w-[400px] h-[750px]">
            <div className="">
              <Image
                src="/custom.png"
                alt="Custom Design Image"
                width={620}
                height={750}
                priority
                className="
      object-contain
      scale-115
      min-w-[350px] min-h-[450px]
    "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesignSection;
