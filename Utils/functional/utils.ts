import fs from 'fs';
import path from 'path';
import { Page } from 'playwright';

export class Utils {
    static async generateRandomString(length: number): Promise<string> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters[randomIndex];
        }
        return result;
      }

    static async isSortedByWay(words: string[], sortWay: "asc" | "desc"): Promise<boolean> {
        for (let i = 0; i < words.length - 1; i++) {
            if (sortWay === "asc" && new Date(parseFloat(words[i].toLowerCase())) > new Date(parseFloat(words[i + 1].toLowerCase()))) {
                return false; // Not ascending
            }
            if (sortWay === "desc" && new Date(parseFloat(words[i].toLowerCase())) < new Date(parseFloat(words[i + 1].toLowerCase()))) {
                return false; // Not descending
            }
        }
        return true; // Sorted according to sortWay
    };

     static async uploadFile(page: Page, selector: string, relativePathFromProjectRoot: string): Promise<void> {
        // Build path WITHOUT any drive letter (relative to project root)
        const filePath = path.join(process.cwd(), relativePathFromProjectRoot);
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        console.log("Resolved File Path:", filePath);

        let input;

        // Detect if XPath
        if (selector.startsWith('//') || selector.startsWith('(')) {
            input = await page.$(selector);
        } else {
            await page.waitForSelector(selector, { state: 'attached' });
            input = await page.$(selector);
        }

        if (!input) {
            throw new Error(`Cannot find input element using selector: ${selector}`);
        }

        await input.setInputFiles(filePath);  
    }
}