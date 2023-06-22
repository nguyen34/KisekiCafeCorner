import smtplib
from backend.settings import HOST_EMAIL, HOST_PASSWORD, SECONDARY_HOST_EMAIL

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

TO_EMAILS = [HOST_EMAIL, SECONDARY_HOST_EMAIL]


def send_email_to_host(from_email: str, message: str, from_name: str) -> None:
    msg = MIMEMultipart()
    msg['From'] = HOST_EMAIL
    msg['To'] = ', '.join([HOST_EMAIL, SECONDARY_HOST_EMAIL])
    msg['Subject'] = f"New message from {from_name}"
    email_body = """\
    <html>
        <body>
            <h1>New message coming in from the Kiseki Cafe Corner</h1>
            <p>
            <b>From:</b> %s, %s
            </p>
            <hr>
            <p>
            %s
            </p>
            <hr>
            <p>
            <b>End of message. If you would like to reply, please do so via the sender's email above</b>
            </p>
        </body>
    </html>
    """ % (from_name, from_email, message)
    msg.attach(MIMEText(email_body, 'html'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(HOST_EMAIL, HOST_PASSWORD)
    text = msg.as_string()
    server.sendmail(HOST_EMAIL, [HOST_EMAIL, SECONDARY_HOST_EMAIL], text)
    server.quit()
