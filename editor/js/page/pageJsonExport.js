function pageJsonExport() {
  const pageID = generatepageID();
  const gridContent = document.getElementById('grid-body').innerHTML.replace(/\n\s+/g, '');

  const data = {
    pageId: pageID,
    pageHtml: gridContent
  };

  const jsonData = JSON.stringify(data, null, 2).trim();

  const blob = new Blob([jsonData], { type: "application/json" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `page-${pageID}.json`;
  link.click();
}


function generatepageID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    id += chars[randomIndex];
  }
  return id;
}