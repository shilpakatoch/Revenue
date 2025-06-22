 NSW Media Releases - Apply filters and reset filters

This project automates testing for the NSW Government Media Releases page to verify that filters applied by Minister name work correctly, and that clearing filters resets the page state.

Purpose
1. Validate that selecting a Minister from the "Ministers" filter list updates the media release cards accordingly
2. Verify that  clicking on "Clear all filters" resets the UI and media release list to its original state.

3. Verify dynamic testing that allowing any Minister’s name to be used as input.


Technologies used : 


- [Playwright](https://playwright.dev/) – Automation Framework
- Typescript(Node.js)
- Playwright Test Runner


 Instructions for Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nsw-media-tests.git
cd nsw-media-tests
2. Install Dependencies
bash
Copy
Edit
npm install
 How to Run Tests
Run all tests:

bash
Copy
Edit
npx playwright test
Run a specific test file (optional):

bash
Copy
Edit
npx playwright test tests/mediaFilter.spec.ts
🧪 Dynamic Input for Minister Name
Inside the test script (mediaFilter.spec.ts), the Minister name is stored in a variable like this:

js
Copy
Edit
const minister = "The Premier";
To test with other ministers (e.g., "Deputy Premier"), simply change the value of that variable:

js
Copy
Edit
const minister = "Deputy Premier";
This allows you to run the same test logic against different filter values without duplicating code.