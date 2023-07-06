"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
      Find your next <span className="text-primary">trip!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Where you want to go?" />

        <div className="flex gap-4">
          <DatePicker placeholderText="Departure date" onChange={() => {}} className="w-full" />
          <CurrencyInput placeholder="Budget" />
        </div>

        <Button variant="primary">Search</Button>
      </div>
    </div>
  );
};

export default TripSearch;