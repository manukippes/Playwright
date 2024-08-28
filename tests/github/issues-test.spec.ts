import test, { expect } from "@playwright/test";

const REPO = process.env.GITHUB_REPO;
const USER = process.env.GITHUB_USER;
let apiContext;

test.describe('Github API Test', () => {

    test.beforeEach(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({
            baseURL: process.env.GITHUB_API_BASE_URL,
            extraHTTPHeaders: {
                'Accept': 'application/vnd.github.v3+json',
                'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            },
        })
    })

    test.afterEach(async ({ request, page }) => {
        await apiContext.dispose();
        await page.close();
    })

    test('Verify Github API', async ({ page }) => {
        let issueTitle = '[TEST] We are going to create a new issue'
        const newIssue = await apiContext.post(`/repos/manukippes/KIMATestingFake-DEPRECATED-/issues`, {
            data: {
                title: issueTitle,
            }
        });
        expect(newIssue.ok(), 'Issue was not created.').toBeTruthy();
        await page.goto(`https://github.com/manukippes/KIMATestingFake-DEPRECATED-/issues`);
        const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
        
        await expect(firstIssue, 'Issue has not a valid title.').toHaveText(issueTitle);
    })
    
    
})
