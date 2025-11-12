import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // for converting preview to image

function DownloadButton({ resumeData }) {
  // 📄 Convert preview section to PDF
  const downloadPDF = () => {
    const resume = document.getElementById("resume-preview");

    // html2canvas captures the preview section as an image
    html2canvas(resume).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save(`${resumeData.name || "resume"}.pdf`);
    });
  };

  return (
    <button className="download-btn" onClick={downloadPDF}>
      Download PDF
    </button>
  );
}

export default DownloadButton;
