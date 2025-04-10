import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBudgetSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = express.Router();
  
  // Contact submission endpoint
  apiRouter.post('/contact', async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const result = await storage.createContactSubmission(submission);
      res.status(201).json({ 
        success: true,
        message: 'Contact submission received successfully',
        id: result.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: 'Validation error',
          errors: validationError.message
        });
      }
      res.status(500).json({ 
        success: false,
        message: 'An error occurred while processing your request' 
      });
    }
  });
  
  // Budget calculator submission endpoint
  apiRouter.post('/budget', async (req, res) => {
    try {
      const submission = insertBudgetSubmissionSchema.parse(req.body);
      const result = await storage.createBudgetSubmission(submission);
      res.status(201).json({ 
        success: true,
        message: 'Budget submission received successfully',
        id: result.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: 'Validation error',
          errors: validationError.message
        });
      }
      res.status(500).json({ 
        success: false,
        message: 'An error occurred while processing your request' 
      });
    }
  });
  
  // Get all contact submissions (admin only)
  apiRouter.get('/contact', async (req, res) => {
    try {
      // In a real app, you would add authentication middleware
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'An error occurred while retrieving contact submissions' 
      });
    }
  });
  
  // Get all budget submissions (admin only)
  apiRouter.get('/budget', async (req, res) => {
    try {
      // In a real app, you would add authentication middleware
      const submissions = await storage.getBudgetSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false,
        message: 'An error occurred while retrieving budget submissions' 
      });
    }
  });

  // Register the API router
  app.use('/api', apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
