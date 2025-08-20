# Configuration

## Environment Variables

Create a `.env` file for any API keys or configuration:

```bash
REACT_APP_EMAIL_SERVICE=your_email_service
REACT_APP_EMAIL_TEMPLATE=your_template_id
REACT_APP_EMAIL_USER_ID=your_user_id
```

## Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. Set up an email service (EmailJS, Formspree, etc.)
2. Update the form submission logic in `Contact.js`
3. Add proper error handling and validation

### Current EmailJS Configuration

The contact form is configured to use EmailJS with the following default values:
- Service ID: `service_sxljepi`
- Template ID: `template_1fg7wfl`
- User ID: `XZ3rtnOZg0S8kq68e`

You can override these by setting the environment variables above.
