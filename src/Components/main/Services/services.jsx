import React from "react";
import InstallationService from "./installationService";
import CleaningService from "./cleaningService";
import RepairService from "./repairService";
export default function Services() {
  return (
    <div className="bg-slate-200">
      <InstallationService />
      <CleaningService />
      <RepairService />
    </div>
  );
}
