"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { z } from "zod";
import { FormDataSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = z.infer<typeof FormDataSchema>;

const steps = [
  {
    id: "Step 1",
    name: "Contract Information",
    fields: ["projectTitle", "agreement"],
  },
  {
    id: "Step 2",
    name: "Client Information",
    fields: ["clientName", "clientAddress", "clientPhone", "clientEmail"],
  },
  {
    id: "Step 3",
    name: "Agency Information",
    fields: ["agencyName", "agencyAddress", "agencyPhone", "agencyEmail"],
  },
  {
    id: "Step 4",
    name: "Payment Information",
    fields: ["paymentSchedule", "paymentTimeline"],
  },
  { id: "Step 5", name: "Complete" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className=" flex flex-col justify-between p-10">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Contract Agreement
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your Project details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="projectTitle"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project Title
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="projectTitle"
                    {...register("projectTitle")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.projectTitle?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.projectTitle.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="projectName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Project Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="projectName"
                    placeholder="project-name"
                    {...register("projectName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.projectName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.projectName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="agreement"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Agreement
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="agreement"
                    {...register("agreement")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.agreement?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.agreement.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Client Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Client Details to put on the Contract.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="clientName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Client Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="clientName"
                    {...register("clientName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.clientName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.clientName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="clientAddress"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Client Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="clientAddress"
                    {...register("clientAddress")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.clientAddress?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.clientAddress.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="clientPhone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Client Phone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="clientPhone"
                    {...register("clientPhone")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.clientPhone?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.clientPhone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="clientEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="clientEmail"
                    type="clientEmail"
                    {...register("clientEmail")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.clientEmail?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.clientEmail.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Agency Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Agency Details to put on the Contract.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="agencyName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Agency Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="agencyName"
                    {...register("agencyName")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.agencyName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.agencyName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="agencyAddress"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Agency Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="agencyAddress"
                    {...register("agencyAddress")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.agencyAddress?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.agencyAddress.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="agencyPhone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Agency Phone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="agencyPhone"
                    {...register("agencyPhone")}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.agencyPhone?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.agencyPhone.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="agencyEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="agencyEmail"
                    type="agencyEmail"
                    {...register("agencyEmail")}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.agencyEmail?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.agencyEmail.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 3 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Payment Details
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide your Payment details.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="paymentSchedule"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Payment Details
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="paymentSchedule"
                    {...register("paymentSchedule")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.paymentSchedule?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.paymentSchedule.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="paymentTimeline"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Payment Timeline
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="paymentTimeline"
                    {...register("paymentTimeline")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                  />
                  {errors.paymentTimeline?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.paymentTimeline.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {currentStep === 4 && (
          <>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Complete
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          {currentStep !== 0 ? (
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
          {currentStep !== steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              disabled={currentStep === steps.length - 1}
              className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
