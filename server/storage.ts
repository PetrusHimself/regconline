import { 
  users, 
  contactSubmissions, 
  budgetSubmissions,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type BudgetSubmission,
  type InsertBudgetSubmission
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Budget calculator methods
  createBudgetSubmission(submission: InsertBudgetSubmission): Promise<BudgetSubmission>;
  getBudgetSubmissions(): Promise<BudgetSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private budgetSubmissions: Map<number, BudgetSubmission>;
  private userId: number;
  private contactSubmissionId: number;
  private budgetSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.budgetSubmissions = new Map();
    this.userId = 1;
    this.contactSubmissionId = 1;
    this.budgetSubmissionId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const createdAt = new Date();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id,
      createdAt
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  // Budget calculator methods
  async createBudgetSubmission(submission: InsertBudgetSubmission): Promise<BudgetSubmission> {
    const id = this.budgetSubmissionId++;
    const createdAt = new Date();
    const budgetSubmission: BudgetSubmission = { 
      ...submission, 
      id,
      createdAt
    };
    this.budgetSubmissions.set(id, budgetSubmission);
    return budgetSubmission;
  }
  
  async getBudgetSubmissions(): Promise<BudgetSubmission[]> {
    return Array.from(this.budgetSubmissions.values());
  }
}

export const storage = new MemStorage();
