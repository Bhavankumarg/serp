// "use client";
// import React, { useState, useEffect } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { pdfjs, Document, Page } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PdfFlipbook = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(0);
//   const [pages, setPages] = useState([]);

//   useEffect(() => {
//     if (numPages && pages.length === 0) {
//       setPages([...Array(numPages).keys()].map((i) => i + 1));
//     }
//   }, [numPages, pages.length]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <HTMLFlipBook width={600} height={800} className="shadow-lg">
//         {pages.map((page) => (
//           <div key={page} className="bg-white">
//             <Document
//               file={pdfUrl}
//               onLoadSuccess={({ numPages }) => {
//                 if (numPages !== pages.length) {
//                   setNumPages(numPages);
//                 }
//               }}
//             >
//               <Page pageNumber={page} />
//             </Document>
//           </div>
//         ))}
//       </HTMLFlipBook>
//     </div>
//   );
// };

// export default PdfFlipbook;

import React from "react";

const FlipBook = () => {
  return (
    <div>
      <style>
        {`
          .logo-backs2 {
    position: absolute;
    width: auto;
    opacity: 0;
    bottom: 3rem;
    left: 1.8rem;
    max-width: 20%;
}
        `}
      </style>
      <div
        style={{
          position: "relative",
          paddingTop: "max(60%, 324px)",
          width: "100%",
          height: 0,
        }}
      >
        <iframe
          style={{
            position: "absolute",
            border: "none",
            width: "100%",
            height: "100%",
            left: 0,
            top: "60px",
            overflow: "hidden",
          }}
          src="https://heyzine.com/flip-book/0bd0937cb1.html"
          seamless
          frameBorder={0}
          allowTransparency="true"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default FlipBook;
