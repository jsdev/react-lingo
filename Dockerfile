# Use the official Playwright image (v1.41.1 based on Ubuntu 22.04 LTS)
#FROM mcr.microsoft.com/playwright:v1.40.0-jammy

# Set the working directory inside the container
#WORKDIR /tests

# Copy your test files (including tests) into the container
#COPY . /tests

# Install dependencies (if needed)
#RUN npm install @axe-core/playwright

# Run your Playwright tests
#CMD ["npx", "playwright", "test", "--reporter=list"]

# use the official Cypress image as base
# FROM cypress/browsers:node13.6.0-chrome80-ff72

# best practice is to switch to non-root user, let's create non-root cypress user
# RUN useradd -u 8877 cypress
# install axe-core and cypress-axe
# RUN npm install axe-core chai cypress-axe

# Set the working directory inside the container
# WORKDIR /usr/local/lib/node_modules/cypress/bin/cypress

# RUN chmod +x /usr/local/lib/node_modules/cypress/bin/cypress

# copy the tests folder into the image
# COPY /e2e /e2e

# switch to non-root user cypress
# USER cypress

# run the tests
# CMD ["/usr/local/lib/node_modules/cypress/bin/cypress", "run", "--spec", "/tests/*.spec.js"]

FROM cypress/base:16.13.0

WORKDIR /e2e

# Mount external folders
COPY ./test-data /test-data
COPY ./cypress.config.ts .

# Install dependencies
RUN npm install axe-core axe-html-reporter

# Create output directory for reports
RUN mkdir -p output

# Start Cypress with accessibility report generation
CMD ["npx", "cypress", "run", "--reporter", "cypress-axe-reporter", "--reporter-options", "{ 'output': 'output/axe-report.html' }", "--record", "--env", "url=https://www.cypress.io/"]