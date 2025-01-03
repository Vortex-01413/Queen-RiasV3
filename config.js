require('dotenv').config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || '.', // Command prefix
    ownerName: process.env.OWNER_NAME || 'Vortex', // Owner name
    ownerNumber: process.env.OWNER_NUMBER || '2348082071024', // Your WhatsApp number
    mode: process.env.MODE || 'private', // Bot mode: 'public' or 'private'
    region: process.env.REGION || 'Nigeria', // Region
    botName: process.env.BOT_NAME || 'Rias Gremory V3', // Bot name
    exifPack: process.env.EXIF_PACK || 'RIAS V3 LOVES', // Sticker pack name
    exifAuthor: process.env.EXIF_AUTHOR || 'Toxxic', // Author of the sticker pack
    timeZone: process.env.TIME_ZONE || 'Africa/Lagos', // Time zone
    presenceStatus: process.env.PRESENCE_STATUS || 'recording', // Bot presence status
    autoRead: process.env.AUTO_READ === 'false', // Auto-read messages (true or false)
    autoViewStatus: process.env.AUTO_VIEW_STATUS === 'false', // Auto-view statuses (true or false)
    autoReact: process.env.AUTO_REACT === 'false', // Auto-react (true or false)
    sessionId: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ084NW53OWJVQzZIZmdwYlkzNkc2UUdYZWNSU3g1dXdybGdKMmR3QWVIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0lSTXpBVkNpYlFSc283MTZ4b0FjbkVOS2hlQ3N1V3ZCN21qVUZZYUwxaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTnd5cldkVGk4ZnRQVmxFcm05UlFlOEpzbmxmU1gxSCtKaW14R3NLalZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZE0rVGxBZGNOLzZCZVV6T3lwR2pkdFM3T2RyVTJqODNMaUZsdS9BN0VvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFHcVR2QmxBWDE3eUZEVHd5cGxjZXh2bTVRaDJrUlFiM21sWGx0RmNBVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml1MFJ1VmhLNUYxYTVJcUlmSGErenc1a055RHIybUdqRkczMDA3L21BeWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0xzQmg2Sjh6ZHkzM2hKM05VS1Z2R1p3UC9Qbk5hdWYxWlIvUkh4a1lFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1Q4akZ3YXl1VzZVV2pjK2tpdFkyZG0vSzJBZkQ1b3FjTyt2N21qYVRIbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ3bFVjR0gvbmNMS1BkQVJOYmZGblAwcjRKTnN2ek1kS1JEcklWZ1hUbmszMHdacS9jVE1tSzlUekVqMUFrdkxET2Rud2phZ1FHbENlS3hlRGhnWGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJWM1N0ZHdLZlFQaXRmVW9Dc2o2QTNaZTF5b3QwOGFXcHplSExnT01xR2NRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQTEVZWVFNSyIsIm1lIjp7ImlkIjoiMjM0ODA4MjA3MTAyNDo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTE2MjE1OTc4NDM1NDU6NkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lLMWsrNEdFTzNuMnJzR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Inl1QmdSK2w2cmlUQkxLOVlZNys1ZnZ4NW5kNWQ0RjJuS3lLclphN3ZIaHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNYZUJkWC9QdGp0dTJiSCtiMjJzMUU1Z2hiUFFNRVZFdEE1Qk5ycWw1eVVBd0Z6UVJWS1B5U2hQY1E3VDFtR1o5eVNjaDJDQitzUjU1UzFtS3Z3aEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJITGhQRUNlcE5JWjFYdXFSK1NFTTh5OEhWZjkyMmxFdHRhSmQrdkhuSEk1VHlvSjR5YWdiVTJQZ3cyKzV0MjZzdEJHWmxHUjBPN0pqREt6N2h3REhnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODIwNzEwMjQ6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcmdZRWZwZXE0a3dTeXZXR08vdVg3OGVaM2VYZUJkcHlzaXEyV3U3eDRiIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU4MzI1NzMsImxhc3RQcm9wSGFzaCI6IklYb0RwIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQczQifQ=='// Add Your Session ID here
};
