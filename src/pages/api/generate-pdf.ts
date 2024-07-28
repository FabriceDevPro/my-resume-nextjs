import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const generatePDF = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = `http://${req.headers.host}/?print-pdf=true`;
  await page.goto(url, { waitUntil: 'networkidle0' });

  const pdf = await page.pdf({ format: 'A4' });

  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
  res.send(pdf);
};

export default generatePDF;
