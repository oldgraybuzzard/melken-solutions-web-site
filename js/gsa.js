// fetch("https://api.gsa.gov/technology/gsa-content/v2/by-type/event?api_key=0iLIUhzO5xPSbDLaMlcPp6qpxmaiLtIMuh32pVcl")
// .then(response => response.json())
// .then(data => console.log(data));

let gsaPdf = "https://www.gsaadvantage.gov/ref_text/GS03F027GA/0WKVST.3SB8RK_GS-03F-027GA_GS03F027GAMELKENSOLUTIONS9152021.PDF";

PDFObject.embed("/lib/web/0WKVST.3SB8RK_GS-03F-027GA_GS03F027GAMELKENSOLUTIONS9152021.PDF", "#gsa-contract-pdf");