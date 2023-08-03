import * as React from "react";
import { TextField, Button } from "@mui/material";
import axiosConfig from "../plugins/axiosConfig";
import { CustomSnackbar } from "./CustomSnackbar";
import { validateEmail } from "../helpers/rules";

const EmailSendingForm: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [disableButton, setDisableButton] = React.useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axiosConfig
      .post("/api/send_email_to_host/", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        setResponse("success");
      })
      .catch((error) => {
        setResponse("error");
      });
  };

  React.useEffect(() => {
    const isValidEmail = validateEmail(email);
    if (name === "" || !isValidEmail || message === "") {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [name, email, message]);

  return (
    <div>
      <form
        id="email-form"
        onSubmit={handleSubmit.bind(this)}
        method="POST"
        className="flex flex-col justify-center w-6/12 mx-auto"
      >
        <div className="pb-4">
          <TextField
            error={name === ""}
            id="sender-name"
            className="w-96"
            label="Name"
            variant="filled"
            onChange={(event) => setName(event.target.value)}
            helperText={name === "" ? "Name is required" : ""}
          />
        </div>
        <div className="pb-4">
          <TextField
            error={validateEmail(email) === false}
            id="sender-email"
            className="w-96"
            label="Email"
            variant="filled"
            onChange={(event) => setEmail(event.target.value)}
            helperText={email === "" ? "Please enter a valid email" : ""}
          />
        </div>
        <div className="pb-4">
          <TextField
            error={message === ""}
            id="sender-message"
            className="w-96"
            label="Message"
            multiline
            rows={8}
            variant="filled"
            onChange={(event) => setMessage(event.target.value)}
            helperText={message === "" ? "Message is required" : ""}
          />
        </div>
        <div className="pb-4">
          <Button type="submit" variant="contained" disabled={disableButton}>
            Send Message
          </Button>
        </div>
      </form>
      {response === "success" && (
        <CustomSnackbar
          severity="success"
          vertical="bottom"
          onClose={() => {
            setResponse("");
          }}
        >
          Your message has been sent successfully
        </CustomSnackbar>
      )}
      {response === "error" && (
        <CustomSnackbar
          severity="error"
          onClose={() => {
            setResponse("");
          }}
        >
          There was an error sending your message
        </CustomSnackbar>
      )}
    </div>
  );
};

export default EmailSendingForm;
