#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const { getDateStamp, slugify } = require('./lib/lib');

const program = new Command();
      program.version('0.0.1');
      program.option('-f, --file', 'load file');
      program.arguments('<uri>')
        .action(async function (uri) {

          let targets = [];

          if(program.file) {
            // We're processing an input file. Our URI is the file we're loading.
            let files = fs.readFileSync(path.resolve(uri), 'utf8');
            targets = files.split('\n');
          } else {
            targets.push(uri);
          }

          let defaults = {
            fullPage: true,
          };

          let outputPath = path.resolve('./output');

          console.log(`Starting screenshot generation of ${targets.length} URLs.`);

          const dateStamp = getDateStamp();

          const browser = await puppeteer.launch({headless: true, slowMo: 250});

          console.log('Starting screenshot work...');

          for( let i = 0; i < targets.length; i++) {
            const page = await browser.newPage();
            await page.setViewport({ width: 1400, height: 1400 });
            await page.goto(targets[i], { waitUntil: 'networkidle2'});
            const pageTitle = await page.title();
            const title = (pageTitle !== '' ? '-' + slugify(pageTitle) : '');
            await page.screenshot({...defaults, path: `${outputPath}/${dateStamp}${title}.png`});
            console.log(`${i + 1}/${targets.length} completed. (${targets[i]})`);
          }

          await browser.close();

        });

program.parse(process.argv);






