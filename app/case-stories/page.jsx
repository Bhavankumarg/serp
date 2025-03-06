import PdfFlipbook from "../../components/CaseStoriesComponents/FlipBook";

export default function Home() {
  const pdfUrl = "/SERP_Case_Stories.pdf";
  return <PdfFlipbook pdfUrl={pdfUrl} />;
}
