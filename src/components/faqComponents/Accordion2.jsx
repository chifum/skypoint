import React from "react";

const Accordion2 = () => {
  return (
    <div className="">
      <div class="flex  justify-center from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br">
        <div class="w-full faqContainerbg">
          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
              What is Skypoint Solution Service ?
            </summary>
            <p class="px-4 py-3">
              Skypoint Support Service is a National Disability Insurance Scheme
              (NDIS) service provider. We offer a range of support services for
              people with disabilities to help them achieve their goals and live
              a fulfilling life. We offer
            </p>
            <ul className="list-disc ml-5">
              <li>Specialist Support Coordination</li>
              <li>Support Coordination</li>
              <li>In-home Support</li>
              <li>Therapeutic Supports</li>
              <li>Life Skills Development Program</li>
              <li>Community Participation Program</li>
              <li>Group Activities</li>
              <li>Assist Travel / Transport</li>
            </ul>
          </details>

          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
              How will I receive the plan ?
            </summary>
            <p class="px-4 py-3">
              Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend
              sit amet, imperdiet id libero. Suspendisse et tempus leo, et
              lacinia arcu. Etiam at ante in est efficitur fringilla eleifend
              nec tellus. Integer sed auctor lectus, nec ullamcorper arcu.
              Nullam nec eros elit. Nulla tempor massa ut quam elementum
              dignissim. Sed eu pulvinar est, vel vehicula dolor. Pellentesque
              in ante vel elit facilisis consectetur eu id felis
            </p>
          </details>

          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
              How do I know if I am eligible for NDIS Support services ?
            </summary>
            <p class="px-4 py-3">
              Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
              tincidunt dignissim, magna tortor mollis augue, at maximus ante
              lacus vel tellus. Vestibulum vestibulum consectetur tortor id
              sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
              condimentum arcu
            </p>
          </details>
          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
              How can I access Skypoint Support Service ' NDIS Support services
              ?
            </summary>
            <p class="px-4 py-3">
              Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
              tincidunt dignissim, magna tortor mollis augue, at maximus ante
              lacus vel tellus. Vestibulum vestibulum consectetur tortor id
              sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
              condimentum arcu
            </p>
          </details>
          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
              Who is a Carer ?
            </summary>
            <p class="px-4 py-3">
              Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
              tincidunt dignissim, magna tortor mollis augue, at maximus ante
              lacus vel tellus. Vestibulum vestibulum consectetur tortor id
              sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
              condimentum arcu
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Accordion2;
