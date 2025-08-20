# EmailJS Setup Guide

This document explains how EmailJS is configured for the contact form on your personal website.

## Quick Setup Commands

```bash
# Navigate to your project directory
cd /Users/ronak/Downloads/Website%20/personal-website

# Create the .env file
cat > .env << 'EOF'
REACT_APP_EMAIL_SERVICE=service_sxljepi
REACT_APP_EMAIL_TEMPLATE=template_1fg7wfl
REACT_APP_EMAIL_USER_ID=XZ3rtnOZg0S8kq68e
EOF

# Restart development server
npm start
```

## File Structure

```
personal-website/
├── .env                    # ← Created with EmailJS credentials
├── package.json
├── src/
│   └── components/
│       └── Contact.js     # ← Updated with EmailJS integration
└── EMAILJS_SETUP.md       # ← This file
```

## Environment Variables Reference

| Variable | Description | Value |
|----------|-------------|-------|
| `REACT_APP_EMAIL_SERVICE` | EmailJS service ID | `service_sxljepi` |
| `REACT_APP_EMAIL_TEMPLATE` | EmailJS template ID | `template_1fg7wfl` |
| `REACT_APP_EMAIL_USER_ID` | EmailJS user ID | `XZ3rtnOZg0S8kq68e` |

## How It Works

1. **EmailJS Integration**: The contact form uses EmailJS to send emails without a backend server
2. **Environment Variables**: All EmailJS credentials are stored in the `.env` file for security
3. **Dynamic Loading**: EmailJS script is loaded dynamically when the Contact component mounts
4. **Form Validation**: Built-in form validation ensures all required fields are filled
5. **User Feedback**: Loading states and success/error messages provide clear feedback

## Testing the Setup

1. **Create the .env file** using the commands above
2. **Restart your server**: `npm start`
3. **Open the contact form** in your browser
4. **Fill out the form** and submit
5. **Check the console** for any error messages
6. **Verify success** - you should see "Message sent successfully!"

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "EmailJS not loaded" | Check internet connection, refresh page |
| "EmailJS not initialized" | Restart development server after creating .env |
| "Service not found" | Verify service ID in EmailJS dashboard |
| "Template not found" | Verify template ID in EmailJS dashboard |
| "User ID invalid" | Verify user ID in EmailJS dashboard |
| "Environment variables not loading" | Ensure .env file is in project root and restart server |

## EmailJS Dashboard Setup

Make sure your EmailJS account has:

1. **Service**: A Gmail, Outlook, or custom email service configured
2. **Template**: An email template with variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`
3. **User ID**: Your public EmailJS user ID

## Security Notes

- The `.env` file is automatically ignored by Git (included in .gitignore)
- Environment variables are only accessible in the browser for React apps
- EmailJS user ID is public and safe to expose
- Service and template IDs are also safe to expose

## Troubleshooting

If you encounter issues:

1. **Check browser console** for error messages
2. **Verify .env file** exists and has correct values
3. **Restart development server** after any .env changes
4. **Check EmailJS dashboard** for service/template status
5. **Test with a simple form** to isolate issues

## Support

For EmailJS-specific issues, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Community](https://community.emailjs.com/)
- [EmailJS GitHub](https://github.com/emailjs/emailjs-com)
