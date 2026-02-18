import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3001';
const TOTAL_PROJECTS = 6;

// Wait for stagger animations to complete
const ANIMATION_SETTLE_MS = 1500;

/**
 * Category pills and tag chips share names (e.g. "Backend", "Frontend").
 * Category pills appear in the first .flex.flex-wrap container (line 83),
 * tag chips in the second (line 112). Use these scoped helpers.
 */
function categoryButton(page, name) {
  // Category pills container is the first flex-wrap div inside the filters
  const categorySection = page.locator('.flex.flex-wrap.gap-2').first();
  return categorySection.getByRole('button', { name, exact: true });
}

function tagButton(page, name) {
  // Tag chips container is the second flex-wrap div
  const tagSection = page.locator('.flex.flex-wrap.gap-2').nth(1);
  return tagSection.getByRole('button', { name, exact: true });
}

/** Get project title h3 elements inside the grid */
function getProjectTitles(page) {
  return page.locator('.grid h3');
}

/**
 * Assert every project card in the grid is fully visible (opacity ~1).
 * The core bug caused new StaggerItems to mount with opacity: 0 and stay invisible.
 * Returns the count of visible project titles.
 */
async function assertAllCardsVisible(page, expectedCount) {
  const titles = getProjectTitles(page);
  await expect(titles).toHaveCount(expectedCount);

  for (let i = 0; i < expectedCount; i++) {
    const title = titles.nth(i);
    await expect(title).toBeVisible();

    // Check computed opacity of the nearest ancestor that may have an inline style
    // (framer-motion applies opacity via style attribute on the StaggerItem div)
    const opacity = await title.evaluate((el) => {
      let node = el;
      while (node && node !== document.body) {
        const style = window.getComputedStyle(node);
        const op = parseFloat(style.opacity);
        if (op < 0.9) return op;
        node = node.parentElement;
      }
      return 1;
    });

    expect(opacity, `Project card ${i} should not be invisible (opacity 0)`).toBeGreaterThanOrEqual(0.9);
  }

  return expectedCount;
}

test.describe('Project filter animation fix', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/projects`);
    await page.waitForTimeout(ANIMATION_SETTLE_MS);
  });

  test('all projects visible on initial load', async ({ page }) => {
    await assertAllCardsVisible(page, TOTAL_PROJECTS);
    await expect(
      page.getByText(`Showing ${TOTAL_PROJECTS} of ${TOTAL_PROJECTS} projects`),
    ).toBeVisible();
  });

  test('filtering by category shows correct items', async ({ page }) => {
    await categoryButton(page, 'Backend').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    // Backend: VPSGuard + FastAPI Starter
    await assertAllCardsVisible(page, 2);
    await expect(page.getByText('Showing 2 of 6 projects')).toBeVisible();
  });

  test('removing category filter restores all items visible (core bug)', async ({ page }) => {
    // Filter to Backend (2 items)
    await categoryButton(page, 'Backend').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);
    await assertAllCardsVisible(page, 2);

    // Click "All" to remove filter — this is where the bug manifested:
    // previously-hidden items would reappear with opacity 0
    await categoryButton(page, 'All').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    await assertAllCardsVisible(page, TOTAL_PROJECTS);
    await expect(
      page.getByText(`Showing ${TOTAL_PROJECTS} of ${TOTAL_PROJECTS} projects`),
    ).toBeVisible();
  });

  test('toggling a tag on and off restores all items visible', async ({ page }) => {
    // "Security" tag is unique to VPSGuard (1 project)
    await tagButton(page, 'Security').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);
    await assertAllCardsVisible(page, 1);

    // Deselect the tag
    await tagButton(page, 'Security').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    await assertAllCardsVisible(page, TOTAL_PROJECTS);
  });

  test('filtering by tag shows correct count', async ({ page }) => {
    // "Web" tag: 5 of 6 projects (all except VPSGuard)
    await tagButton(page, 'Web').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    await assertAllCardsVisible(page, 5);
    await expect(page.getByText('Showing 5 of 6 projects')).toBeVisible();
  });

  test('changing sort order keeps all items visible', async ({ page }) => {
    await page.getByRole('button', { name: /Newest|Oldest/ }).click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    await assertAllCardsVisible(page, TOTAL_PROJECTS);
  });

  test('filter → sort → clear restores all items', async ({ page }) => {
    // Filter to Fullstack category
    await categoryButton(page, 'Fullstack').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);
    await assertAllCardsVisible(page, 2);

    // Change sort to Title
    await page.locator('select').selectOption('title');
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    // Clear all filters
    await page.getByText('Clear filters').click();
    await page.waitForTimeout(ANIMATION_SETTLE_MS);

    await assertAllCardsVisible(page, TOTAL_PROJECTS);
  });
});
