/* Download a table as a CSV file (opens in Excel, Numbers and Sheets). Built in the browser: nothing is sent anywhere. */
const cell = (v: unknown): string => {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;                    // a value starting with = + - @ could be run as a formula by a spreadsheet: make it plain text
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};
export const toCsv = (rows: unknown[][]): string => rows.map(r => r.map(cell).join(',')).join('\r\n') + '\r\n';
export function downloadCsv(filename: string, rows: unknown[][]) {
  const blob = new Blob(['﻿' + toCsv(rows)], { type: 'text/csv;charset=utf-8' }), url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export const fileSafe = (s: string) => s.replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'classroom';
