/**
 * LLC Partner Assessment Survey - Google Apps Script
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Update the SHEET_ID below with your Google Sheet ID
 * 5. Click Deploy > New Deployment
 * 6. Select "Web app" as the type
 * 7. Set "Execute as" to "Me"
 * 8. Set "Who has access" to "Anyone"
 * 9. Click Deploy and copy the Web App URL
 * 10. Paste that URL into your index.html file (replace YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL)
 */

// REPLACE with your Google Sheet ID (found in the URL between /d/ and /edit)
const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID';
const SHEET_NAME = 'Responses';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);
      newSheet.appendRow([
        'Timestamp',
        'Name',
        'Strengths',
        'Weaknesses',
        'Hours Per Week',
        'Higher Ed Experience',
        'Best Role'
      ]);

      // Format header row
      newSheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#0f4c75').setFontColor('white');
      newSheet.setFrozenRows(1);
    }

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Get the sheet (either existing or newly created)
    const targetSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Append the response
    targetSheet.appendRow([
      data.timestamp,
      data.name,
      data.strengths,
      data.weaknesses,
      data.hoursPerWeek,
      data.higherEdExperience,
      data.bestRole
    ]);

    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Response recorded successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'active',
    'message': 'LLC Partner Assessment Survey API is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Run this function once to set up the sheet with headers
function setupSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  // Clear and set up headers
  sheet.clear();
  sheet.appendRow([
    'Timestamp',
    'Name',
    'Strengths',
    'Weaknesses',
    'Hours Per Week',
    'Higher Ed Experience',
    'Best Role'
  ]);

  // Format header row
  sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#0f4c75').setFontColor('white');
  sheet.setFrozenRows(1);

  // Auto-resize columns
  for (let i = 1; i <= 7; i++) {
    sheet.autoResizeColumn(i);
  }

  Logger.log('Sheet setup complete!');
}
