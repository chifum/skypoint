import React from "react";
import curl from "../../assets/img/emoji/curl.png";
import arrowDecision from "../../assets/img/emoji/arrowDecision.png";
import groupMeeting from "../../assets/img/emoji/groupMeeting.png";
import mdi_approve from "../../assets/img/emoji/mdi_approve.png";
import userCheck from "../../assets/img/emoji/userCheck.png";
import symbolsRate from "../../assets/img/emoji/symbolsRate.png";
import mingcute from "../../assets/img/emoji/mingcute.png";
import mingcuteUp from "../../assets/img/emoji/mingcuteUp.png";

const VerticalTimelin = () => {
  return (
    <div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1 md:ml-16 ml-1">
                <img src={mingcuteUp} alt="" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={curl} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 1
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                Access NDIS
              </span>{" "}
            </div>
          </div>

          <div className=" leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText">
            The first step is to apply for NDIS Access by completing the Access
            Request Form (ARF). If you are a person with disability aged 7 - 65
            years who would like to join the NDIS, you will need to meet the
            access requirements. To find out more, visit the NDIS access
            criteria page. If you are applying on behalf of a child under 7
            years, please Visit Help for children under 7 page and then contact
            your local Early Childhood Partner.
            <p className=" fw-bold mt-3">
              If you think you meet these requirements you can apply in one of
              two ways:
            </p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                You can make a Verbal Access Request by calling NDIs on 1800 800
                110
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Fill out an Access Request Form (ARF), and send it to us.
              </li>
            </ul>
            <p className=" fw-bold mt-3">
              To apply for the NDIS you will need to provide:
            </p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                Completed Access Request Form
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Information about your
              </li>
              <li className="font-semibold text-sm ndisBlackText">Age</li>
              <li className="font-semibold text-sm ndisBlackText">Residency</li>
              <li className="font-semibold text-sm ndisBlackText">
                Disability
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={arrowDecision} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 2
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                NDIS Decision
              </span>{" "}
            </div>
          </div>

          <div className="leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText text-justify">
            The NDIA will contact you to let you know their decision on your
            application, this should be done within 21 days. If you do not hear
            from them within 21 days of all information being lodged, you should
            follow up for an update unless the NDIA has advised you of the delay
            prior.
            <p className="mt-3">
              If your application gets accepted then you become an NDIS
              Participant, you can always ask for explanation if your
              application was found to be ineligible. Review on decision must be
              made within three months of being notified of the decision
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={groupMeeting} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 3
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                Planning Meeting
              </span>{" "}
            </div>
          </div>

          <div className=" leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText">
            Planning meeting can be at your closest NDIA office or over the
            phone, you may invite your family, friends or support team to the
            planning meeting. The NDIA Planner will ask you information on
            <p className=" fw-bold mt-3"></p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                Your Community and Mainstream Supports
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Management of everyday activities
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Your safety, including equipment, accommodation or help to take
                care of yourself or your home
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Goals you want to pursue
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                How you want to manage your NDIS plan
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Support you need to use your NDIS plan.
              </li>
            </ul>
            <p className="mt-3">
              Complete booklet 2 - Planning. If you don't have a physical copy,
              you can download a copy.
            </p>
            <p className="mt-3">
              Find a quiet place to have the call where you can focus. Planning
              meetings can take over an hour depending on your situation.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={mdi_approve} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 4
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                Plan Approval & Implementation
              </span>{" "}
            </div>
          </div>

          <div className=" leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText">
            Plan Approval & Implementation After the planning meeting, a NDIS
            planner will contact you to outline the funded supports in your NDIS
            Plan and the NDIS planner will send a copy of the NDIS Plan to you.
            NDIS participants can choose how to manage the NDIS funds they
            receive.
            <p className=" fw-bold mt-3"></p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                Self-Managed
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Plan Managed
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Agency Managed
              </li>
            </ul>
            <p className="mt-3">
              One of our experienced Support Coordinators can assist you to
              organise funded supports and implement the approved NDIS plan with
              you.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={userCheck} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 5
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                Service Booking
              </span>{" "}
            </div>
          </div>
          <div className=" leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText">
            Once you have identified the support and can make contact with the
            service providers to request services you need, one of our
            experienced Support Coordinators can assist you in this process.
            <p className="mt-3">
              Sign the agreement with your provider(s) that sets out what
              supports will be provided and how they will be delivered.
            </p>
            <p className="mt-3">
              You have choice and control in the delivery of your supports.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1">
                <img src={symbolsRate} alt="" />
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-78">
                Step 6
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold whatIsNdis1">
                Plan Review
              </span>{" "}
            </div>
          </div>

          <div className=" leading-5 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-11 md:ml-28 font-semibold text-sm ndisBlackText">
            During your next scheduled plan review meeting, NDIS will talk to
            you about the new flexible approaches that they may take with you to
            review your NDIS plan.
            <p className="mt-3">This may be a</p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                New NDIS plan with the same supports,
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                New NDIS plan with minor changes to your current supports, or;
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                A full plan review.
              </li>
            </ul>
            <p className="mt-3">
              If you are not satisfied with a decision made by the NDIA, or if
              your circumstances have changed then you are able to request a
              review of your plan outside of the scheduled review.
            </p>
            <p className="mt-3">There are 3 different types of reviews:</p>
            <ul class="list-disc p-0 ml-5">
              <li className="font-semibold text-sm ndisBlackText">
                Internal review (Review of a Reviewable Decision / RORD)
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Request for plan review (Unscheduled Plan Review)
              </li>
              <li className="font-semibold text-sm ndisBlackText">
                Administrative Appeals Tribunal (AAT) review
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full timeLineBg shadow md:order-1 md:ml-16 ml-1">
                <img src={mingcute} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimelin;
