import test from '@lib/BaseTest';
import { isAwaitKeyword } from 'typescript';


test(`TC-01 - Verify all dashboards are accessible after login @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.validateAllDashboards();
});

test(`TC-02 - The user with the required permission should be able to view main dashboard (Risk dashboard) @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskDashbordTab();
  await ecdashboardPage.valdateRiskDashboardTab();
});

test(`TC-03 - The user with the required permission should be able to view main dashboard (Compliance dashboard) @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplianceDashbordTab();
  await ecdashboardPage.valdateComplianceDashboardTab();
});

test(`TC-04 - The user with the required permission should be able to view main dashboard (Governance dashboard) @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernanceDashboardTab();
  await ecdashboardPage.valdateGovernanceDashboardTab();
});

test(`TC-05 - View the tasks assigned to the user @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.validateTasksPage();
});

test(`TC-06 - View Overdue tasks @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnOverDueTasks();
  await ecdashboardPage.validateOverDueTasksStatus();
});

test(`TC-07 - View user’s tasks that are due for the current day @Smoke @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnTasksDueToday();
  await ecdashboardPage.validateTasksDueTodayStatus();
});

test(`TC-08 - View user’s tasks that are due for the current week @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnTasksDueWeek();
  await ecdashboardPage.validateTasksDueWeekStatus();
});
test(`TC-09 - View user’s tasks that are due for the current month @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnTaskDueThisMonth();
  await ecdashboardPage.validateTasksDueMonthStatus();
});

test(`TC-10 - View tasks by module @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickonfilterIcon();
  await ecdashboardPage.selectModulefromDropdown();
  await ecdashboardPage.clickOnFiterButton();
  await ecdashboardPage.validateFilterdModule();
});
