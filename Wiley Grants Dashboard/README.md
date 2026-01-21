# Wiley University Grants Dashboard

Interactive grants database for the Office of Institutional Advancement and Grants.

## Live URL

**https://wiley-grants-dashboard.netlify.app**

## Features

- **84 Grant Opportunities** - Federal, Foundation, Corporate, State/Regional, Religious
- **Smart Search & Filters** - By funder type, priority area, award amount, deadline, and more
- **Pipeline Tracking** - Track grants through Prospect → Applied → Awarded stages
- **Analytics Dashboard** - Charts and statistics on funding opportunities
- **Calendar View** - Visual deadline tracking
- **Export Options** - CSV, PDF, and print functionality
- **Dark Mode** - Toggle for comfortable viewing
- **Favorites & Notes** - Save and annotate opportunities
- **Faculty Matching** - Assign grants to faculty areas

## Files

| File | Description |
|------|-------------|
| `index.html` | Full interactive dashboard (single-file application) |
| `Wiley_Grants_Database.csv` | Source data with all 84 grants |
| `Strategic_Plan_External_Funding.md` | 5-year strategic plan (FY 2026-2031) |
| `Database_Utilization_Strategy.md` | Operational procedures and workflows |

## Deployment

Hosted on Netlify. To update:

```bash
# Copy updated index.html to deploy folder
cp index.html ~/Downloads/wiley-grants-deploy/

# Deploy to Netlify
cd ~/Downloads/wiley-grants-deploy
netlify deploy --prod --dir=.
```

## Goals

- Year 1: $1.2M in grants (+50%)
- Year 3: $2.5M in grants
- Year 5: $5M+ in grants (500% increase)

---

*Office of Institutional Advancement and Grants | January 2026*
