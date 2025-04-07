# job-search

- Jobs auflisten (Mit der Get-Anfrage werden alle Jobs angezeigt)
- Jobs erstellen ( Mit der Post-Anfrage werden neue Jobs hinzugefügt)
- Jobs löschen (Vergebene Jobs können gelöscht werden)
- Zeitlimit für Jobs
- jobsearch-api/

├── config/ 
    └──mongodb.js
    └──nodemailer.js
├── components
    └──addJob.js
    └──listJobs.js
    └──deleteJob.js
├── models/
    └── jobModel.js
├── routes/
    └── jobs.js

└── package.json
└── .env
└──. gitignore (node_modules, .env)
└──server.js