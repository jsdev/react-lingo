# Use the official Playwright image (v1.41.1 based on Ubuntu 22.04 LTS)
FROM mcr.microsoft.com/playwright:v1.40.0-jammy

# Set the working directory inside the container
WORKDIR /tests

# Copy your test files (including tests) into the container
COPY . /tests

# Install dependencies (if needed)
RUN npm install @axe-core/playwright

# Run your Playwright tests
CMD ["npx", "playwright", "test", "--reporter=list"]