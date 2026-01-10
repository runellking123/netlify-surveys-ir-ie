# LLC Partner Assessment Survey

## Survey Information

**Purpose:** Assess strengths, weaknesses, and value-add of potential LLC partners
**Target Audience:** LLC founding members
**Survey Type:** Partner Assessment

## Links

### Live Survey
**URL:** https://statuesque-crisp-e0ad1c.netlify.app/LLC%20Partner%20Assessment%20Survey/

### Response Data (Google Sheets)
**URL:** [TO BE ADDED AFTER SETUP]

## Setup Instructions

### Google Apps Script Setup (Required)

1. Create a new Google Sheet for responses
2. Go to **Extensions > Apps Script**
3. Delete existing code and paste contents of `Code.gs`
4. Replace `YOUR_GOOGLE_SHEET_ID` with your Sheet ID (from URL)
5. Click **Deploy > New Deployment**
6. Select **Web app**, set "Execute as" to **Me**, "Who has access" to **Anyone**
7. Copy the Web App URL
8. Update `index.html` line 298 with the Web App URL
9. Commit and push the change

## Survey Questions

1. **Name** - Full name of partner
2. **Strengths** - Top 3 strengths brought to partnership
3. **Weaknesses** - Gaps that others would need to cover
4. **Hours Per Week** - Time commitment (0-5, 5-10, 10-20, 20+)
5. **Higher Ed Experience** - Experience working with colleges/universities
6. **Best Role** - Preferred role (Sales, Operations, Finance, Strategy)

## Deployment Details

- **Platform:** Netlify
- **Backend:** Google Apps Script
- **Data Storage:** Google Sheets
- **Cost:** Free
- **Response Limit:** Unlimited

---

*Survey created: January 2026*
