import React from "react";
import image16 from "../../assets/img/image16.png";
import Accordion from "./Accordion";

const FrequentAsk = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap mt-5 grow shrink">
      <div className="basis-2/5 flex justify-start">
        <img src={image16} alt="" className="w-fit h-fit" />
      </div>
      <div className="basis-3/5">
      <p>Need Help</p>
      <h5>Frequently Asked Question</h5>
        <Accordion />
      </div>
    </div>
  );
};

export default FrequentAsk;

// items-center
// min-h-screen

// <div class="flex  justify-center from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br">
//           <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white shadow-xl">
//             <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
//               <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
//                 Morbi at sagittis velit
//               </summary>
//               <p class="px-4 py-3">
//                 Nunc posuere dapibus urna quis cursus. Mauris malesuada
//                 tincidunt diam vel placerat mi tincidunt ac. Nullam augue urna,
//                 venenatis ut blandit eget, auctor vel eros. In ut dolor ante
//               </p>
//             </details>

//             <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
//               <summary class="w-full bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">
//                 Etiam ut lacus in enim sagittis posuere at a elit
//               </summary>
//               <p class="px-4 py-3">
//                 Fusce sed laoreet ex. Aenean justo nisl, eleifend eget eleifend
//                 sit amet, imperdiet id libero. Suspendisse et tempus leo, et
//                 lacinia arcu. Etiam at ante in est efficitur fringilla eleifend
//                 nec tellus. Integer sed auctor lectus, nec ullamcorper arcu.
//                 Nullam nec eros elit. Nulla tempor massa ut quam elementum
//                 dignissim. Sed eu pulvinar est, vel vehicula dolor. Pellentesque
//                 in ante vel elit facilisis consectetur eu id felis
//               </p>
//             </details>

//             <details class="w-full bg-white border border-blue-500 cursor-pointer mb-3">
//               <summary class="w-full bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
//                 Nam auctor fringilla magna id porta
//               </summary>
//               <p class="px-4 py-3">
//                 Etiam maximus vitae eros eu vestibulum. Donec posuere, magna non
//                 tincidunt dignissim, magna tortor mollis augue, at maximus ante
//                 lacus vel tellus. Vestibulum vestibulum consectetur tortor id
//                 sagittis. Suspendisse nisi ipsum, pretium a lorem at, laoreet
//                 condimentum arcu
//               </p>
//             </details>
//           </div>
//         </div>