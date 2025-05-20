


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const puppeteer = require('puppeteer');

const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');
const Job = require('./models/jobs'); // ✅ Import Job model

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Scrape Naukri Jobs Function
async function scrapeNaukriJobs(url = "https://www.naukri.com/it-jobs?src=discovery_trendingWdgT_homepage_srch") {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    );

    await page.goto(url, { waitUntil: 'networkidle2', timeout: 0 });
    await page.waitForSelector('.srp-jobtuple-wrapper', { timeout: 45000 });

    const jobs = await page.$$eval('.srp-jobtuple-wrapper', (cards) => {
      return cards.map(card => {
        const title = card.querySelector('a.title')?.innerText || 'N/A';
        const company = card.querySelector('a.comp-name')?.innerText || 'N/A';
        const link = card.querySelector('a.title')?.href || 'N/A';
        const posted = card.querySelector('span.job-post-day')?.innerText || 'N/A';
        const location = card.querySelector('span.locWdth')?.innerText || 'N/A';
        const exp = card.querySelector('span.expwdth')?.innerText || 'N/A';
        return { title, company, link, posted ,location,exp};
      });
    });

    console.log("🔥 Job Listings Found:", jobs.length);

    // Optional: Clear old jobs if needed
    // await Job.deleteMany({});
    
    // Insert into MongoDB
    await Job.insertMany(jobs);
    console.log(jobs);
    
    console.log("✅ Jobs inserted into MongoDB");

    await browser.close();
  } catch (err) {
    console.error("❌ Error scraping jobs:", err.message);
  }
}

// Call the function on server start
scrapeNaukriJobs();

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
