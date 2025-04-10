import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  service: text("service").notNull(),
  budget: text("budget"),
  message: text("message").notNull(),
  files: json("files"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  service: true,
  budget: true,
  message: true,
  files: true,
});

// Budget calculator submissions
export const budgetSubmissions = pgTable("budget_submissions", {
  id: serial("id").primaryKey(),
  services: json("services").notNull(),
  addons: json("addons"),
  total: integer("total").notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBudgetSubmissionSchema = createInsertSchema(budgetSubmissions).pick({
  services: true,
  addons: true,
  total: true,
  email: true,
});

// Users
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertBudgetSubmission = z.infer<typeof insertBudgetSubmissionSchema>;
export type BudgetSubmission = typeof budgetSubmissions.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
