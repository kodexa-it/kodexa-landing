// Apps Script: recibe los leads de kodexa.ar y los agrega a la pestaña "Leads".
const SECRET = 'CAMBIAR-POR-UNA-CLAVE-LARGA';
const HEADERS = ['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Tipo de proyecto', 'Presupuesto', 'Mensaje', 'Origen', 'Interés producto', 'Página'];

function doPost(e) {
  const data = JSON.parse(e.postData.contents || '{}');
  if (data.secret !== SECRET) return ContentService.createTextOutput('forbidden');

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  // Evita que un texto que empiece con = + - @ se interprete como fórmula.
  const safe = (v) => {
    const s = String(v || '');
    return /^[=+\-@]/.test(s) ? "'" + s : s;
  };
  sh.appendRow([
    new Date(), safe(data.name), safe(data.email), safe(data.whatsapp), safe(data.projectType),
    safe(data.budget), safe(data.message), safe(data.source), safe(data.productInterest), safe(data.page),
  ]);
  return ContentService.createTextOutput('ok');
}
