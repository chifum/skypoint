import React from "react";


const Accordion = () => {
  return (
    <div className=" mt-3">
      <div class="flex  justify-center from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br">
        <div class="w-full faqContainerbg">
          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
            <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
            NDIS versus NDIA
            </summary>
            <p class="px-4 py-3">
              Nunc posuere dapibus urna quis cursus. Mauris malesuada tincidunt
              diam vel placerat mi tincidunt ac. Nullam augue urna, venenatis ut
              blandit eget, auctor vel eros. In ut dolor ante
            </p>
          </details>

          <details class="w-full openAccordionBg2 border border-blue-500 rounded cursor-pointer mb-3">
          <summary class="w-full AccordionBg textColor flex justify-between px-4 py-3  after:content-['+'] rounded">
            Are all you support workers trained and insured ?
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
            Does the NDIS affect the DSP ?
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
            Who is the NDIA?
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
            Can I pick the services I want?
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

export default Accordion;

// px-10 py-8 mx-auto bg-white 2nd Div
