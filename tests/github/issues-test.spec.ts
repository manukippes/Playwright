import test, { expect } from "@playwright/test";

const REPO = 'KIMATestingFake';
const USER = 'manukippes';
let apiContext;

test.describe('Github API Test', () => {

    test.beforeEach(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({
            baseURL: 'https://api.github.com',
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
        const newIssue = await apiContext.post(`/repos/${USER}/${REPO}/issues`, {
            data: {
                title: issueTitle,
            }
        });
        expect(newIssue.ok()).toBeTruthy();
        await page.goto(`https://github.com/${USER}/${REPO}/issues`);
        const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
        
        await expect(firstIssue).toHaveText(issueTitle);
    })
    
    
})
