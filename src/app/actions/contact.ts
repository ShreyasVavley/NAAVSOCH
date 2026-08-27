"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitContactForm(prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    const stmt = db.prepare('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)');
    stmt.run(name, email, message);
    
    // Revalidate admin page so it shows new contacts
    revalidatePath("/admin");

    return { success: true };
  } catch (err) {
    console.error("Failed to save contact:", err);
    return { error: "Failed to submit form. Please try again." };
  }
}
