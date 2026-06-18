import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "./LeadCaptureForm.css";

// Initialize EmailJS using your public key
emailjs.init('fFEjcHdxdndYaVwBf');

const LeadCaptureForm = ({
  leadMagnet,
  buttonLabel = "Send It to Me",
  successMessage = "Thanks, check your inbox in the next few minutes.",
  downloadUrl,
  downloadLabel = "Download Now",
  extraFields = {},
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot, real users never see this field
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (company) return; // honeypot tripped, drop silently

    // FIX: Corrected email regex validation pattern matching
    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // Formulate a clean breakdown string from extraFields (e.g., calculator results)
      let customMessage = `Lead captured via tool: ${leadMagnet || "Website Tool"}\n\n`;
      
      if (Object.keys(extraFields).length > 0) {
        customMessage += "─── SELECTIONS & ESTIMATES ───\n";
        Object.entries(extraFields).forEach(([key, value]) => {
          const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
          customMessage += `${readableKey}: ${value}\n`;
        });
      } else {
        customMessage += "Requested downloadable document/checklist resource.";
      }

      // Map parameters directly to your existing working template variables
      const templateParams = {
        from_name: name.trim(),
        user_email: email.trim(),
        subject: `🔥 New Lead Magnet Download: ${leadMagnet || "Inbound Query"}`,
        message: customMessage,
        user_phone_no: "Not Provided via Lead Magnet", 
        user_company: "Not Provided via Lead Magnet"
      };

      const result = await emailjs.send(
        'service_jtdcbef',   // Your working Service ID
        'template_k0moa34',  // Your working Template ID
        templateParams
      );

      // Inside LeadCaptureForm.jsx -> handleSubmit -> success block
if (result.status === 200) {
  setStatus("success");
  setName("");
  setEmail("");
  
  // FIX: Force a reliable native browser file download instead of opening a window tab
  if (downloadUrl) {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", downloadUrl.split('/').pop()); // extracts filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("EmailJS Lead Magnet Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="lead-capture-wrapper">
      {status === "success" ? (
        <div className="lead-form-success">
          <p>{successMessage}</p>
          {downloadUrl && (
            <a href={downloadUrl} download className="btn btn-primary lead-form-download-btn" style={{ marginTop: '12px' }}>
              {downloadLabel}
            </a>
          )}
        </div>
      ) : (
        <form className="lead-capture-form" onSubmit={handleSubmit} noValidate>
          <div className="lead-form-row">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Your name"
              required
            />
            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Work email"
              required
            />
          </div>

          {/* Honeypot field for bot protection */}
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="lead-form-honeypot"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : buttonLabel}
          </button>

          {status === "error" && (
            <p className="lead-form-error">
              Please enter your name and a valid work email address.
            </p>
          )}

          <p className="lead-form-disclaimer">
            We'll only use this to send what you asked for. No spam, unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
};

export default LeadCaptureForm;