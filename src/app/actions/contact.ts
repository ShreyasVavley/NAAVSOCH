"use server";

import db from "@/lib/db";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = (formData.get("name") as string || "").trim();
  const email = (formData.get("email") as string || "").trim();
  const company = (formData.get("company") as string || "").trim();
  const interest = (formData.get("interest") as string || "").trim();
  const message = (formData.get("message") as string || "").trim();

  if (!name || !email || !message) {
    return { error: "Name, email, and project details are required." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  try {
    const stmt = db.prepare('INSERT INTO contacts (name, email, company, interest, message) VALUES (?, ?, ?, ?, ?)');
    stmt.run(name, email, company, interest, message);
    
    // Optional Webhook notification for Discord/Slack/Zapier/Make
    const webhookUrl = process.env.LEAD_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🎯 **New Lead from NaavSoch Studio Website**\n**Name:** ${name}\n**Email:** ${email}\n**Company:** ${company || "N/A"}\n**Interest:** ${interest || "General"}\n**Message:** ${message}`,
            name,
            email,
            company,
            interest,
            message,
            timestamp: new Date().toISOString()
          })
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return { success: true };
  } catch (err) {
    console.error("Failed to save contact:", err);
    return { error: "Failed to submit form. Please try again or reach out via WhatsApp." };
  }
}
