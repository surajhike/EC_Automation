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

test(`TC-11 - View tasks by Type @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickonfilterIcon();
  await ecdashboardPage.clickAndSelectTypeFromDropdown();
  await ecdashboardPage.clickOnFiterButton();
  await ecdashboardPage.validateFilteredType();
});

test(`TC-12 - View tasks by Status @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickonfilterIcon();
  await ecdashboardPage.clickAndSelectStatusFromDropdown();
  await ecdashboardPage.clickOnFiterButton();
  await ecdashboardPage.validateFilteredStatus();
});

test(`TC-13 - View tasks by start and end date @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickonfilterIcon();
  await ecdashboardPage.clickAndSelectStartDate();
  await ecdashboardPage.clickAndSelectEndDate();
  await ecdashboardPage.clickOnFiterButton();
  await ecdashboardPage.validateFilteredStartAndEndDate();
});

test('TC- 14 - Approve/reject task ', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnTaskName();
  await ecdashboardPage.validateTaskPage();
  await ecdashboardPage.clickOnApproveButton();

});

test(`TC-15 - View tasks in table view @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnViewButton();
  await ecdashboardPage.clickOnTableIcon();
  await ecdashboardPage.validateTableView();
});

test(`TC-16 - View tasks in monthly calendar view @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnViewButton();
  await ecdashboardPage.clickOnCalenderIcon();
  await ecdashboardPage.validateCalenderView();
});

test(`TC-17 - View a specific task @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnTaskName();
  await ecdashboardPage.validateTaskPage();
});


test(`TC-18 - View My Department tasks @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnMyDepartmentTab();
  await ecdashboardPage.validateDepartmentPage();
});

test(`TC-19 - View all tasks @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnAllTaskTab();
  await ecdashboardPage.validateAllTaskPage();
});
test(`TC- 20 - Add event @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnCalender();
  await ecdashboardPage.validateCalenderPage();
  await ecdashboardPage.addEvent(`Test090`);
  await ecdashboardPage.validateAddedEvent(`Test090`);
});

test(`TC-21 - View calendar in quarterly/monthly/yearly view @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnCalender();
  await ecdashboardPage.validateCalenderPage();
  await ecdashboardPage.selectView('Yearly');
  await ecdashboardPage.validateYearlyView();
  await ecdashboardPage.selectView('Monthly');
  await ecdashboardPage.validateMonthlyView();
  await ecdashboardPage.selectView('Quarterly View');
  await ecdashboardPage.validateQuaterlyView();

});

test(`TC-22 - Add and activate frameworks @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnSettings();
  await ecdashboardPage.clickOnFrameworkSettings();
  await ecdashboardPage.validateFrameWorkPage();
  await ecdashboardPage.clickOnFrameWorkCheckbox();
  await ecdashboardPage.clickOnSaveButton();
  await ecdashboardPage.validateSuccessMsg();

});

test(`TC-23 - Add a framework by cloning from library @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnAddFrameworkButton();
  await ecdashboardPage.clickOnCloneFromLibrary();
  await ecdashboardPage.validateFrameworkPopUp();
  await ecdashboardPage.clickAndSelectAvalableFramework();
  await ecdashboardPage.clickAndSelectSubFramework();
  await ecdashboardPage.enterClonedFrameworkName();
  await ecdashboardPage.enterClonedFrameworkShortName();
  await ecdashboardPage.clickOnCloneButton();
  await ecdashboardPage.validateSuccessMsg();
  await ecdashboardPage.validateClonedFramework();
  await ecdashboardPage.validateSuccessMsg();

});
test(`TC-24 - Add a required evidence (RFI) to a control from “Evidences” @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnEvidenceTab();
  await ecdashboardPage.clickAndvalidateRequiredEvidenceTab();
  await ecdashboardPage.clickOnAddEvidence();
  await ecdashboardPage.enterEvidenceName(`Testing10`);
  await ecdashboardPage.enterEvidenceNameArabic("test10");
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.selectFramework();
  await ecdashboardPage.clickOnMap();
  await ecdashboardPage.clickAndSelectStatus();
  await ecdashboardPage.clickEvidenceSaveButton();
  await ecdashboardPage.validateSuccessMsg();
});
test(`TC-25 - Add evidence to a control @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnAddEvidece();
  await ecdashboardPage.enterName(`Test09`);
  await ecdashboardPage.enterDescription(`Description`);
  await ecdashboardPage.addControl();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickOnAddApproverBUtton();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnAddEvidenceButton();
  await ecdashboardPage.validateEvidenceAdded();

});


test(`TC-26 - Activate the “Always require approval for management of evidences” feature when adding or editing an evidence which requires the approval from a selected user @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnSettings();
  await ecdashboardPage.clickOnEvidenceSetting();
  await ecdashboardPage.clickAndValidateCheckbox();
  await ecdashboardPage.enterCount("4");
  await ecdashboardPage.clickEvidenceSaveButton();
  await ecdashboardPage.validateSuccessMsg();

});

test(`TC-27 - Map a Document a control @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnMapDocButton();
  await ecdashboardPage.selectDocCheckbox();
  await ecdashboardPage.clickOnMap();
  await ecdashboardPage.validateSuccessMsg();

});

test(`TC-28 - View the required evidence for a particular framework @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickAndvalidateRequiredEvidenceTab();

});

test(`TC-29 - Request evidence @Sanity @Regression`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnTasksTab();
  await ecdashboardPage.clickOnRequestEvidenceButton();
  await ecdashboardPage.validateRequestEvidencePopUp();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickAndSelectTaskOwner();
  await ecdashboardPage.clickOnAddApproverBUtton();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnSendButton();
  await ecdashboardPage.validateSuccessMsg();

});

test('TC- 30 - Assign control owner (user and department)@Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDetailsTab();
  await ecdashboardPage.clickOnEdit();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.clickAndSelectOwner('SRC Updated');
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 31 - Edit departmental compliance information of a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDeptCompliance();
  await ecdashboardPage.clickOnHamberg();
  await ecdashboardPage.clickOnEditButton();
  await ecdashboardPage.clickAndSelectExpectedDate();
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 32 - Assign control stakeholders (user and department)@Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDetailsTab();
  await ecdashboardPage.clickOnEdit();
  await ecdashboardPage.clickAndSelectStakeholderDepartment('Updated Department');
  await ecdashboardPage.clickAndSelectStakeholderUser('Sumit Testing');
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 33 - Set an expected compliance date to a control@Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDetailsTab();
  await ecdashboardPage.clickOnEdit();
  await ecdashboardPage.clickAndSelectExpectedDate();
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 34 - Review the Department and owner details of the Control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDeptCompliance();
  await ecdashboardPage.validateDeptComplianceTable();
});


test('TC- 35 - Request an expected compliance date for a control in the form of a task @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDeptCompliance();
  await ecdashboardPage.clickOnHamberg();
  await ecdashboardPage.clickOnReqComplianceDate();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});



test('TC- 36 - Request compliance level for a control in the form of a task @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnDeptCompliance();
  await ecdashboardPage.clickOnHamberg();
  await ecdashboardPage.clickOnReqComplianceLevel();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickOnSaveButtonControl();
  await ecdashboardPage.validateSuccessMsg();
});



test('TC- 37 - Add a remark to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnRemarks();
  await ecdashboardPage.clickOnAddRemarkButton();
  await ecdashboardPage.enterRemarkTittle('Test');
  await ecdashboardPage.enterRemark('Testing');
  await ecdashboardPage.clickOnAddReamrk();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 38 - Edit a remark that is previously added to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnRemarks();
  await ecdashboardPage.clickOnRemarkHamberg();
  await ecdashboardPage.clickOnRemarkEdit();
  await ecdashboardPage.enterRemarkTittle('trsys');
  await ecdashboardPage.clickOnSaveRemark();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 39- View remark details in a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnRemarks();
  await ecdashboardPage.clickOnRemarkHamberg();
  await ecdashboardPage.clickOnRemarkDetails();
  await ecdashboardPage.validateRemarkdetailsPopUp();
});

test('TC- 40 - Delete a remark that has been previously added to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnRemarks();
  await ecdashboardPage.clickOnRemarkHamberg();
  await ecdashboardPage.clickOnRemarkDelete();
  await ecdashboardPage.validateDeleteConfirmationPopUp();
  await ecdashboardPage.clickOnYesButton();
  await ecdashboardPage.validateDeleteSuccessMsg();
});

test('TC- 41 - Add an initiative to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDotTab();
  await ecdashboardPage.clickOnIntiavite();
  await ecdashboardPage.clickOnNewIntiavateButton();
  await ecdashboardPage.enterIntivateTittle("Testing01");
  await ecdashboardPage.enterIntivateDesc('Automation09jii');
  await ecdashboardPage.clickOnRiskTreatmentButton();
  await ecdashboardPage.selectMapRiskCheckbox();
  await ecdashboardPage.clickOnMapRiskButton();
  await ecdashboardPage.clickOnRadioButton();
  await ecdashboardPage.clickAndSelectStartDate();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.SelectPurpose();
  await ecdashboardPage.SelectDepartment();
  await ecdashboardPage.SelectInitiativeOwner();
  await ecdashboardPage.clickOnCreate();
  await ecdashboardPage.validateSuccessMsg();

});

test('TC- 42 - Add a note to self to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnNoteToSelfIcon();
  await ecdashboardPage.enterNote();
  await ecdashboardPage.clickOnSendIcon();
  await ecdashboardPage.validateNoteAdded();
});

test('TC- 43 - Add a common control through Manage Cross-mapping @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnCommonControlTab();
  await ecdashboardPage.clickOnManageCrossMaping();
  await ecdashboardPage.clickOnCommonControl();
  await ecdashboardPage.enterControlName(0);
  await ecdashboardPage.enterControlDesc(0);
  await ecdashboardPage.clickOnCreateControl();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 44 - View the list of evidence from Compliance module @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnEvidence();
  await ecdashboardPage.validateEvidencetableVisible();
});

test('TC- 45 - Activate risk methodology @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnSettings();
  await ecdashboardPage.clickOnRiskSettings();
  await ecdashboardPage.clickOnAssesmentCritaria();
  await ecdashboardPage.clickOnMethelogyTab();
  await ecdashboardPage.selectMethelogyCheckbox();

});


test('TC- 46 - View Risk Profile and Risk History Timeline @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.validateRiskPage();
});


test('TC- 47 - View treatment history of a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnTreatmentHistioryButton();
  await ecdashboardPage.validateTreatmentHistoryPopUp();
});

test('TC- 48 - Review the risk assessment log @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnAssesmentHistioryButton();
  await ecdashboardPage.validateAssesmentHistoryPopUp();
});

test('TC- 49 - Export risk register as PDF @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickOnExportPdfIconValidatePreview();
});

test('TC- 50 - Add an exception to a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnExeptionTab();
  await ecdashboardPage.clickOnAddExeptionButton();
  await ecdashboardPage.enterExeptionDesc();
  await ecdashboardPage.selectExeptionStartDate();
  await ecdashboardPage.selectExeptionEndDate();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnSendButton();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 51 - Add notes to self to a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnRiskNote();
  await ecdashboardPage.enterNote();
  await ecdashboardPage.clickOnSendIcon();
  await ecdashboardPage.validateNoteAdded();
});

test('TC- 52 - View details of an initiative added to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDotTab();
  await ecdashboardPage.clickOnIntiavite();
  await ecdashboardPage.clickOnInitiativeHamberg();
  await ecdashboardPage.clickOnInitivateDetails();
  await ecdashboardPage.validateInitivateDetailsPage();
});

test('TC- 53 - Edit an initiative added to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDotTab();
  await ecdashboardPage.clickOnIntiavite();
  await ecdashboardPage.clickOnInitiativeHamberg();
  await ecdashboardPage.clickOnEditButton();
  await ecdashboardPage.editInitivateName();
  await ecdashboardPage.clickOnSave();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 54 - View the compliance level set and comments added by the auditor to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWorkUnderAudit();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDotTab();
  await ecdashboardPage.clickOnAudit();
  await ecdashboardPage.validateAuditPage();
});

test('TC- 55 - View audit details that have been added to a control by the auditor @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWorkUnderAudit();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnRemarks();
  await ecdashboardPage.clickOnThreeDotTab();
  await ecdashboardPage.clickOnAudit();
  await ecdashboardPage.clickOnInitiativeHamberg();
  await ecdashboardPage.clickOnAuditDetails();
  await ecdashboardPage.validateAuditDetailPopUp();
});

test('TC- 56 - Add an issue to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDot();
  await ecdashboardPage.clickOnIssue();
  await ecdashboardPage.clickOnAddIssueButton();
  await ecdashboardPage.enterIssueName();
  await ecdashboardPage.enterIssueDesc();
  await ecdashboardPage.enterIssueRemidiation();
  await ecdashboardPage.selectIssueType();
  await ecdashboardPage.selectIssuePriority();
  await ecdashboardPage.selectIssueOwner();
  await ecdashboardPage.selectIssueDepartment();
  await ecdashboardPage.clickOnTargetDateCalender();
  await ecdashboardPage.clickOnSaveIssue();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 57 - Create an issue remediation task that requires approval from the employee (user) @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDot();
  await ecdashboardPage.clickOnIssue();
  await ecdashboardPage.clickOnHamberg();
  await ecdashboardPage.clickOnRemediation();
  await ecdashboardPage.enterIssueDesc();
  await ecdashboardPage.enterRemediation('automation test');
  await ecdashboardPage.scroll();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnAddEvidenceButton();
  await ecdashboardPage.validateSuccessMsg();

});

test('TC- 58 - View details of an issue that is added to a control @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDot();
  await ecdashboardPage.clickOnIssue();
  await ecdashboardPage.clickOnHamberg();
  await ecdashboardPage.clickOnIssueDetails();
  await ecdashboardPage.validateIssueDetailsPopUp();
});


test('TC- 59 - Add treatment to a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.validateRiskPage();
  await ecdashboardPage.clickOnNewTreatement();
  await ecdashboardPage.enterTreatmentName();
  await ecdashboardPage.enterTreatmentDesc();
  await ecdashboardPage.enterTreatmentCost();
  await ecdashboardPage.clickAndSelectTreatmentOwner();
  await ecdashboardPage.clickOnTreatmentSave();
  await ecdashboardPage.validateSuccessMsg();
});


test('TC- 60 - Add an issue to a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnIssue();
  await ecdashboardPage.clickOnAddIssueButton();
  await ecdashboardPage.enterIssueName();
  await ecdashboardPage.enterIssueDesc();
  await ecdashboardPage.enterIssueRemidiation();
  await ecdashboardPage.selectIssueType();
  await ecdashboardPage.selectIssuePriority();
  await ecdashboardPage.selectIssueOwner();
  await ecdashboardPage.selectIssueDepartment();
  await ecdashboardPage.clickOnTargetDateCalender();
  await ecdashboardPage.clickOnSaveIssue();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 61 - Clone a risk template from Library @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clcikOnRiskTemplate();
  await ecdashboardPage.clickOnLibraryTab();
  await ecdashboardPage.selectTemplateCheckbox();
  await ecdashboardPage.clickOnCloneTemplateButton();
});

test('TC- 62 - Add key indicators to a risk @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnKeyIndicatorTab();
  await ecdashboardPage.clickOnNewIndicatorButton();
  await ecdashboardPage.enterIndicatorTittle();
  await ecdashboardPage.enterDataSource();
  await ecdashboardPage.enterMinTolrence();
  await ecdashboardPage.enterMaxTolrence();
  await ecdashboardPage.selectIndicatorFrequency();
  await ecdashboardPage.selectIndicatorMeserment();
  await ecdashboardPage.clickOnAddIndicator();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 63 - Add a new risk template @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clcikOnRiskTemplate();
  await ecdashboardPage.clickNewRiskTemplateButton();
  await ecdashboardPage.enterRiskTittle();
  await ecdashboardPage.enterRiskStatement();
  await ecdashboardPage.clickAndSelectCategory();
  await ecdashboardPage.clickAddRiskTemplate();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 64 - Add assets to the Risk Catalog @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.clickOnNewAssetButton();
  await ecdashboardPage.enterAssetEngName();
  await ecdashboardPage.enterAssetArbName();
  await ecdashboardPage.clickAndSelectAssertDept();
  await ecdashboardPage.clickAndSelectAssesrtOwner();
  await ecdashboardPage.clickOnAddAssert();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 65 - Add threats to the Risk Catalog @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.clickOnTHreats();
  await ecdashboardPage.clickOnNewThreatButton();
  await ecdashboardPage.enterThreatEngName();
  await ecdashboardPage.enterThreatArbName();
  await ecdashboardPage.clickAndSelectThreatType();
  await ecdashboardPage.clickOnThredSlider();
  await ecdashboardPage.clickOnThreatAdd();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 66 - Add vulnerabilities to the Risk Catalog @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.clickOnVulability();
  await ecdashboardPage.clickOnNewVulabilityButton();
  await ecdashboardPage.enterVulabilityEngName();
  await ecdashboardPage.enterVulabilityArbName();
  await ecdashboardPage.clickAndSelectVulabilitySource();
  await ecdashboardPage.clickOnMappedVulnerabilitySlider();
  await ecdashboardPage.clickOnVulabilityAdd();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 67 - Add process to the Risk Catalog @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.clickOnProcess();
  await ecdashboardPage.clickOnNewProcessButton();
  await ecdashboardPage.enterProcessEngName();
  await ecdashboardPage.enterProcessArbName();
  await ecdashboardPage.clickAndSelectProcessCategory();
  await ecdashboardPage.clickAndSelectProcessOwner();
  await ecdashboardPage.clickOnProcessSlider();
  await ecdashboardPage.clickOnProcessAdd();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 68 - Add a new initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickOnNewInitiative();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickOnNewInitiative();
  await ecdashboardPage.enterInitiativeTittle();
  await ecdashboardPage.enterInitiativeDesc();
  await ecdashboardPage.clickOnRadioButton();
  await ecdashboardPage.clickOnRiskTreatmentButton();
  await ecdashboardPage.selectMapRiskCheckbox();
  await ecdashboardPage.clickOnMapRiskButton();
  await ecdashboardPage.clickAndSelectStartDate();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.SelectPurpose();
  await ecdashboardPage.selectInitiativeDepartment();
  await ecdashboardPage.SelectInitiativeOwner();
  await ecdashboardPage.clickOnCreate();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 69 - Link a control to an initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnLinkControl();
  await ecdashboardPage.selectMapControlCheckbox();
  await ecdashboardPage.clickOnMapControlButton();
});

test('TC- 70 - Link Risk Treatment to initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnLinkRisktreatment();
  await ecdashboardPage.selectMapControlCheckbox();
  await ecdashboardPage.clickOnMapControlButton();
});

test('TC- 71 - Add a new Milestone to an initiative', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnMileStoneTab();
  await ecdashboardPage.clickOnNewMilestoneButton();
  await ecdashboardPage.enterMilestoneTittle();
  await ecdashboardPage.enterMilestoneDesc();
  await ecdashboardPage.clickAndSelectMilestoneStartDate();
  await ecdashboardPage.scrollCreateMilestone();
  await ecdashboardPage.clickAndSelectMileStoneDueDate();
  await ecdashboardPage.clickOnCreateMilestone();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 72 - Add key indicators to an initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnKeyIndicatorTab();
  await ecdashboardPage.clickOnNewIndicatorButton();
  await ecdashboardPage.enterIndicatorTittle();
  await ecdashboardPage.enterDataSource();
  await ecdashboardPage.enterMinTolrence();
  await ecdashboardPage.enterMaxTolrence();
  await ecdashboardPage.selectIndicatorFrequency();
  await ecdashboardPage.selectIndicatorMeserment();
  await ecdashboardPage.clickOnAddIndicator();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 73 - Add an issue to an initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnIssue();
  await ecdashboardPage.clickOnAddIssueButton();
  await ecdashboardPage.enterIssueName();
  await ecdashboardPage.enterIssueDesc();
  await ecdashboardPage.enterIssueRemidiation();
  await ecdashboardPage.selectIssueType();
  await ecdashboardPage.selectIssuePriority();
  await ecdashboardPage.selectIssueOwner();
  await ecdashboardPage.selectIssueDepartment();
  await ecdashboardPage.clickOnTargetDateCalender();
  await ecdashboardPage.clickOnSaveIssue();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 74 - Add an exception to an initiative @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnExeptionTab();
  await ecdashboardPage.clickOnAddExeptionButton();
  await ecdashboardPage.enterExeptionDesc();
  await ecdashboardPage.selectExeptionStartDate();
  await ecdashboardPage.selectExeptionEndDate();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnSendButton();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 75 - Add a new governance template @Sanity @Regression', async ({ ecdashboardPage, page }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnTemplates();
  await ecdashboardPage.validateTemplatePage();
  await ecdashboardPage.clickOnCreateTemplate();
  await ecdashboardPage.enterArabicName('Testingo');
  await ecdashboardPage.enterEnglishName('Testingjj');
  await ecdashboardPage.enterDocumentText('Textoj');
  await ecdashboardPage.uploadEvidenceFileGov(page);
  await ecdashboardPage.validateFileUploaded();
  await ecdashboardPage.clickOnCreateButtonGov();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 76 - View template content @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnTemplates();
  await ecdashboardPage.validateTemplatePage();
  await ecdashboardPage.clickOnTemplate();
  await ecdashboardPage.validateTemplateDetailsPopUp();
});

test('TC- 77 - Modification to a governance template @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnTemplates();
  await ecdashboardPage.validateTemplatePage();
  await ecdashboardPage.clickOnGovTemThreeDot();
  await ecdashboardPage.clickOnGovEdit();
  await ecdashboardPage.validateEditPage();
  await ecdashboardPage.clearEnlishName();
  await ecdashboardPage.enterEnglishName('Test01')
  await ecdashboardPage.clickOnGovSave();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC-  78 - Delete a template from governance @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnTemplates();
  await ecdashboardPage.validateTemplatePage();
  await ecdashboardPage.clickOnGovTemThreeDot();
  await ecdashboardPage.clickOnDelete();
  await ecdashboardPage.validateConfirmationPopUp();
  await ecdashboardPage.clickOnYesDeleteButton();
  await ecdashboardPage.validateDeleteSuccessMsg();
});

test('TC- 79 - Add a new document through "Create a document @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnNewDoc();
  await ecdashboardPage.clickOnCreateDoc();
  await ecdashboardPage.enterTittle('trsnds');
  await ecdashboardPage.enterDescriptionGov('testing');
  await ecdashboardPage.clickAndSelectType();
  await ecdashboardPage.clickAndSelectClarification();
  await ecdashboardPage.clickAndSelectShareing('Green')
  await ecdashboardPage.clickAndSelectdistribution('Cybersecurity');
  await ecdashboardPage.clickAndSelectFromDate();
  await ecdashboardPage.selectDate('8');
  await ecdashboardPage.clickAndSelectToDate();
  await ecdashboardPage.selectDate('15');
  await ecdashboardPage.clickONOwnerShhipButton();
  await ecdashboardPage.SelectDepartment();
  await ecdashboardPage.selectIssueOwnerGov();
  await ecdashboardPage.enterVersion('5');
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.enterDocText('Test');
  await ecdashboardPage.clickOnNextButton();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 80 - Add a new document through "Choose from a template @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnNewDoc();
  await ecdashboardPage.clickOnPicktemplate();
  await ecdashboardPage.clickOnUseTemplate();
  await ecdashboardPage.enterTittle('trsnds');
  await ecdashboardPage.enterDescriptionGov('testing');
  await ecdashboardPage.clickAndSelectType();
  await ecdashboardPage.clickAndSelectClarification();
  await ecdashboardPage.clickAndSelectShareing('Green')
  await ecdashboardPage.clickAndSelectdistribution('Cybersecurity');
  await ecdashboardPage.clickAndSelectFromDate();
  await ecdashboardPage.selectDate('8');
  await ecdashboardPage.clickAndSelectToDate();
  await ecdashboardPage.selectDate('15');
  await ecdashboardPage.clickONOwnerShhipButton();
  await ecdashboardPage.SelectDepartment();
  await ecdashboardPage.clickAndSelectOwner('SRC Updated');
  await ecdashboardPage.enterVersion('5');
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.enterDocText('Test');
  await ecdashboardPage.clickOnNextButton();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 81 - Add a new document through "Upload a document @Sanity @Regression', async ({ ecdashboardPage, page }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnNewDoc();
  await ecdashboardPage.clickOnUploadfromDevice();
  await ecdashboardPage.enterTittle('info');
  await ecdashboardPage.enterDescriptionGov('testing0');
  await ecdashboardPage.clickAndSelectType();
  await ecdashboardPage.clickAndSelectClarification();
  await ecdashboardPage.clickAndSelectShareing('Green')
  await ecdashboardPage.clickAndSelectdistribution('Cybersecurity');
  await ecdashboardPage.clickAndSelectFromDate();
  await ecdashboardPage.selectDate('18');
  await ecdashboardPage.clickAndSelectToDate();
  await ecdashboardPage.selectDate('20');
  await ecdashboardPage.clickONOwnerShhipButton();
  await ecdashboardPage.SelectDepartment();
  await ecdashboardPage.clickAndSelectOwner('SRC Updated');
  await ecdashboardPage.enterVersion('5');
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.uploadDocFile(page);
  await ecdashboardPage.validateFileUploaded();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});
test('TC- 82 - Add an Internal Control to a document @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnTableViewIfNotVisible();
  await ecdashboardPage.clickOnDocument();
  await ecdashboardPage.clickOnControlsGov();
  await ecdashboardPage.clickOnAddInternalControl();
  await ecdashboardPage.enterNameToArabicControlfield('test');
  await ecdashboardPage.enterNameToEngControlfield('test');
  await ecdashboardPage.clickOnGovControlSave();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 83 - Map an internal control to a document @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnTableViewIfNotVisible();
  await ecdashboardPage.clickOnDocument();
  await ecdashboardPage.clickOnControlsGov();
  await ecdashboardPage.clickOnMapInternalControl();
  await ecdashboardPage.clickMapCheckbox();
  await ecdashboardPage.clickOnMapButton();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 84 - Add internal controls @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickInternalControlTab();
  await ecdashboardPage.validateInternalIntControlPage();
  await ecdashboardPage.clickOnAddControl();
  await ecdashboardPage.enterNameToArabicControlfield('testing0');
  await ecdashboardPage.enterNameToEngControlfield('testing90');
  await ecdashboardPage.clickOnAddButton();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 85 - Modify an Internal controls @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickInternalControlTab();
  await ecdashboardPage.validateInternalIntControlPage();
  await ecdashboardPage.clickOnHambergGov();
  await ecdashboardPage.clickOnEditControl();
  await ecdashboardPage.enterNameToArabicControlfield('testing');
  await ecdashboardPage.enterNameToEngControlfield('testing');
  await ecdashboardPage.clickOnUpdate();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 86 - Add new vendor @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnVendorManagement();
  await ecdashboardPage.clickOnVendorTab();
  await ecdashboardPage.validateVendorPage();
  await ecdashboardPage.clickOnAddVendor();
  await ecdashboardPage.enterVendorName('Testing09');
  await ecdashboardPage.enterAddress('NoidaTest');
  await ecdashboardPage.clickAndSelectVendorType();
  await ecdashboardPage.clickAndSelectVendorDepartment();
  await ecdashboardPage.enterPhoneNumber();
  await ecdashboardPage.clickAndSelectVendorManager();
  await ecdashboardPage.clickAndSelectVendorRisk();
  await ecdashboardPage.enterProductName('jffjjd');
  await ecdashboardPage.enterWebsite('ygvgsdvjsd bj');
  await ecdashboardPage.enterDomain('test');
  await ecdashboardPage.enterVendorDesc('fdsfgwegfsjbfhshhsh');
  await ecdashboardPage.clickOnAddContact();
  await ecdashboardPage.enterConatactName('Test');
  await ecdashboardPage.enterPosition('tester');
  await ecdashboardPage.enterContactPhoneNumber();
  await ecdashboardPage.enterEmail();
  await ecdashboardPage.clickOnAddButton();
  await ecdashboardPage.clickOnCreatevendor();
  await ecdashboardPage.validateSuccessMsg();

});


test('TC- 87 - Add document to a vendor @Sanity @Regression', async ({ ecdashboardPage, page }) => {
  await ecdashboardPage.clickOnVendorManagement();
  await ecdashboardPage.clickOnVendorTab();
  await ecdashboardPage.validateVendorPage();
  await ecdashboardPage.clickOnVindorName();
  await ecdashboardPage.clickOnDocumentsTab();
  await ecdashboardPage.clickOnNewDocButton();
  await ecdashboardPage.clickSelectStatus();
  await ecdashboardPage.selectEffectivenessDate();
  await ecdashboardPage.uploadDocFile(page);
  await ecdashboardPage.validateFileUploaded();
  await ecdashboardPage.clickOnCreateDocVendor();
  await ecdashboardPage.validateDocAddedVendor();
});

test('TC - 88 - Add new contact to a vendor @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnVendorManagement();
  await ecdashboardPage.clickOnVendorTab();
  await ecdashboardPage.validateVendorPage();
  await ecdashboardPage.clickOnVindorName();
  await ecdashboardPage.clickOnContactTab();
  await ecdashboardPage.clickOnAddContactButton();
  await ecdashboardPage.enterContactNameVendor();
  await ecdashboardPage.enterPosition('tester');
  await ecdashboardPage.enterPhoneNumberVendor();
  await ecdashboardPage.enterEmail();
  await ecdashboardPage.clickOnCreate();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC - 89 - Edit vendor’s risk rating @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnVendorManagement();
  await ecdashboardPage.clickOnVendorTab();
  await ecdashboardPage.validateVendorPage();
  await ecdashboardPage.clickOnVindorName();
  await ecdashboardPage.clickOnVendorhreeDot();
  await ecdashboardPage.clickOnVendorEdit();
  await ecdashboardPage.clickVendoRadioButton();
  await ecdashboardPage.clickVendorSave();
  await ecdashboardPage.validateSuccessMsg();
});
test('TC - 90 - Create new audit @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnAuditManegement();
  await ecdashboardPage.clickOnAudits();
  await ecdashboardPage.clickOnNewAudit();
  await ecdashboardPage.enterAuditName();
  await ecdashboardPage.enterAuditDesc();
  await ecdashboardPage.clickAndSelectAuditorType();
  await ecdashboardPage.clickAndSelectFramework();
  await ecdashboardPage.SelectDepartment();
  await ecdashboardPage.clickAndSelectOwnervendor();
  await ecdashboardPage.clickAndSelectAuditor();
  await ecdashboardPage.clickOnCreateAudit();
  await ecdashboardPage.validateSuccessMsg();
});
test('TC - 91 - Re-evaluate controls of a framework that is under audit @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnAuditManegement();
  await ecdashboardPage.clickOnAudits();
  await ecdashboardPage.clickOnAuditName();
  await ecdashboardPage.clickOnAuditControl();
  await ecdashboardPage.clickControlExpand();
  await ecdashboardPage.selectAuditControl();
  await ecdashboardPage.clickOnAuditreview();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC - 92 - Add audit notes to an audit @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnAuditManegement();
  await ecdashboardPage.clickOnAudits();
  await ecdashboardPage.clickOnAuditName();
  await ecdashboardPage.clickOnAuditControl();
  await ecdashboardPage.clickControlExpand();
  await ecdashboardPage.selectAuditControl();
  await ecdashboardPage.clickOnNoteTab();
  await ecdashboardPage.clickOnNewNote();
  await ecdashboardPage.enterNoteTittle();
  await ecdashboardPage.enterNoteRemark();
  await ecdashboardPage.enterNoteProcedure();
  await ecdashboardPage.clickOnNoteAdd();

});
test('TC - 93 - Change audit status @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnAuditManegement();
  await ecdashboardPage.clickOnAudits();
  await ecdashboardPage.clickOnAuditName();
  await ecdashboardPage.clickOnAuditThreeDot();
  await ecdashboardPage.clickOnChangeStatus();
  await ecdashboardPage.clickStatusRadio();
  await ecdashboardPage.clickOnConfirmationCheckbox();
});

test('TC - 94 - View issues list @Sanity @Regression', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnIssueExeption();
  await ecdashboardPage.clickOnIssues();
  await ecdashboardPage.validateIssuePage();
});

test('TC - 95 - Delete an issue from the issues list', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnIssueExeption();
  await ecdashboardPage.clickOnIssues();
  await ecdashboardPage.validateIssuePage();
  await ecdashboardPage.clickOnIssueHamberg();
  await ecdashboardPage.clickOnIssueDelete();
  await ecdashboardPage.clickOnYesDeleteButton();
});
test('TC - 96 - View exceptions list', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnIssueExeption();
  await ecdashboardPage.clickOnExeptions();
  await ecdashboardPage.validateExeptionPage();
});
test('TC - 97 - Delete an exception from the exceptions list', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnIssueExeption();
  await ecdashboardPage.clickOnExeptions();
  await ecdashboardPage.validateExeptionPage();
  await ecdashboardPage.clickOnExeptionHamberg();
  await ecdashboardPage.clickOnExeptionDelete();
  await ecdashboardPage.clickOnYesDeleteButton();
  await ecdashboardPage.validateDeleteSuccessMsg();
});

test('TC - 98 - Review all existing reports in the platform', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
});

test('TC - 99 - Export reports as PDF (download)', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnReportType();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.clickOnExportReportPdfIcon();
});

test('TC - 100 - Create new delegation', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.clickOnNewDelegation();
  await ecdashboardPage.clickAndSelectDelegatioFrom();
  await ecdashboardPage.clickAndSelectDelegationTo();
  await ecdashboardPage.clickAndSelectDelegationStartDate();
  await ecdashboardPage.clickAndSelectDelegationEndDate();
  await ecdashboardPage.clickOnCreateDelegation();
  await ecdashboardPage.clickOnProceed();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC - 101 - Modify/edit delegation date and notes', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.clickOnDelegationHamberg();
  await ecdashboardPage.clickOnDelegationEdit();
  await ecdashboardPage.enterDelegationNote();
  await ecdashboardPage.clickOnUpdateDelegation();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC - 102 - Cancel delegation', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.clickOnDelegationHamberg();
  await ecdashboardPage.clickOnCancelDelegation();
});

test('TC - 103 - Delete delegation', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.clickOnDelegationHamberg();
  await ecdashboardPage.clickDeleteDelegation();
  await ecdashboardPage.validateDeleteSuccessMsg();
});

test('TC- 104 - Create a new escalation from the settings page', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnSettings();
  await ecdashboardPage.clickOnEscalationSetting();
  await ecdashboardPage.clickOnNewEscalation();
  await ecdashboardPage.clickAndSelectTaskAssignTo();
  await ecdashboardPage.clickAndSelectTaskType();
  await ecdashboardPage.clickOnAddEscalation();
  await ecdashboardPage.clickAndSelectEscalation();
  await ecdashboardPage.clickOnEscalationSave();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 105 - Create a new escalation', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnEscalations();
  await ecdashboardPage.clickOnEscalationButton();
  await ecdashboardPage.enterEscalationTittle();
  await ecdashboardPage.clickAndSelectTriggerEvent();
  await ecdashboardPage.clickAndSelectUsers();
  await ecdashboardPage.clickOnEscalationCreate();
  await ecdashboardPage.validateSuccessMsg();

});

test(`TC- 106 - verify that user is able to select same user in 'Delegate from' and 'Delegate To' or not'`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.clickOnNewDelegation();
  await ecdashboardPage.clickAndSelectDelegatioFrom();
  await ecdashboardPage.validateDelegationToOption();
});
test(`TC- 107 - verify that user is able to export PDF and Excel report of delegation`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickDelegationTab();
  await ecdashboardPage.clickOnDelegation();
  await ecdashboardPage.exportExcelIcon();
  await ecdashboardPage.clickOnExportPdfIcon();
});

test(`TC-108 - verify that Risk reports present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnReportType();
  await ecdashboardPage.clickSelectDepatReport();
  await ecdashboardPage.validateDeptPage();
});

test(`TC-109 - verify that Executive report present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnExecutiveReport();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.validateExecutiveReportPage();
});
test(`TC-110 - verify that Compliance reports present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnComplainceReport();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.validateComplaineReportPage();
});

test(`TC-111 - verify that Task report present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnTaskReport();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.validateTaskReportPage();
});

test(`TC-112 - verify that Initiative report present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnInitiativeReport();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.validateInitiativeReportPage();
});

test(`TC-113 - Verify that Issue reports present in Report module`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnReports();
  await ecdashboardPage.validateReportPage();
  await ecdashboardPage.clickOnIssueReport();
  await ecdashboardPage.clickSelectReport();
  await ecdashboardPage.validateIssueReportPage();
});

test(`TC-114 - verify that Risk identification date field present on identification page while creating risk`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickOnNewRiskDropdown();
  await ecdashboardPage.clickOnCreateRisk();
  await ecdashboardPage.validateRiskIdentificationCalender();
});
test(`TC-115 - Verify that by default Owner and creator permission (Departments) added in asset when we created the asset or not`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.clickOnNewAssetButton();
  await ecdashboardPage.enterAssetEngName();
  await ecdashboardPage.enterAssetArbName();
  await ecdashboardPage.clickAndSelectAssertDept();
  await ecdashboardPage.clickAndSelectAssesrtOwner();
  await ecdashboardPage.intigritySliderAssert();
  await ecdashboardPage.availabilitySlider();
  await ecdashboardPage.confidentialySlider();
  await ecdashboardPage.clickOnAddAssert();
  await ecdashboardPage.clickOnAssetName();
  await ecdashboardPage.clickOnCatalogThreeDot();
  await ecdashboardPage.clickOnPermisions();
  await ecdashboardPage.validatePermisionPopUp();
});

test(`TC-116 - Verify that Asset value column present for Added assets or not`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnCatalog();
  await ecdashboardPage.validateAssetValueColumnPresence();
});


test(`TC-117 - verify that after unselecting the checkbox permission from a role that permission is working for the user who has assigned this role or not`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnUserAndDepartment();
  await ecdashboardPage.clickOnRoles();
  await ecdashboardPage.clickOnUserhamberg();
  await ecdashboardPage.clickOnUserEdit();
  await ecdashboardPage.uncheckPermisionCheckBox();
  await ecdashboardPage.clickOnUserSave();
});

test(`TC-118 - verify that after selecting the checkbox permission from a role that permission is working for the user who has assigned this role or not`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnUserAndDepartment();
  await ecdashboardPage.clickOnRoles();
  await ecdashboardPage.clickOnUserhamberg();
  await ecdashboardPage.clickOnUserEdit();
  await ecdashboardPage.checkPermisionCheckBox();
  await ecdashboardPage.clickOnUserSave();
});

test(`TC-119 - verify that search functionality working at Risk register filter or not`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickOnRiskFilterIcon();
  await ecdashboardPage.enterValueInSearchField();
  await ecdashboardPage.clickOnApplyFilter();
});

test(`TC-120 - View user is able to cancel the Task`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnAllTaskTab();
  await ecdashboardPage.validateAllTaskPage();
  await ecdashboardPage.clickOnTaskCheckbox();
  await ecdashboardPage.clickOnTasKFilter();
  await ecdashboardPage.clickOnTaskCancel();
  await ecdashboardPage.clickOnConfirmButton();
});

test(`TC-121 - View user is able to Delete the Task`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnAllTaskTab();
  await ecdashboardPage.validateAllTaskPage();
  await ecdashboardPage.clickOnTaskCheckbox();
  await ecdashboardPage.clickOnTasKFilter();
  await ecdashboardPage.clickOnTaskDelete();
  await ecdashboardPage.clickOnDelete();
  await ecdashboardPage.validateDeleteSuccessMsg();
});

test(`TC-122 - View user is able to Re assign the Task`, async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnTasks();
  await ecdashboardPage.clickOnAllTaskTab();
  await ecdashboardPage.validateAllTaskPage();
  await ecdashboardPage.clickOnTaskCheckbox();
  await ecdashboardPage.clickOnTasKFilter();
  await ecdashboardPage.clickOnReAssign();
  await ecdashboardPage.seletReAssignUser();
  await ecdashboardPage.clickSaveAssigne();

});

test('TC- 123 - Map evidence (that was previously added) to a control', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnMapEvidence();
  await ecdashboardPage.clickOnMapEviCheckbox();
  await ecdashboardPage.clickOnMapControlButton();
  await ecdashboardPage.validateSuccessMsg();
});
test('TC- 124 - Add risk from a control', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnComplaince();
  await ecdashboardPage.clickOnFarmeworkAndValidateThePage();
  await ecdashboardPage.clickOnFrameWork();
  await ecdashboardPage.clickOnControls();
  await ecdashboardPage.slectControl();
  await ecdashboardPage.clickOnThreeDotRisk();
  await ecdashboardPage.clickOnAddriskButton();
  await ecdashboardPage.clickOnRiskRadioButton();
  await ecdashboardPage.enterRiskTitle('control');
  await ecdashboardPage.enterRiskStatementC();
  await ecdashboardPage.enterCustomerParameter();
  await ecdashboardPage.clickSelectRiskCategory();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.SelectVendorUser();
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.clickOnAssertRadioButton();
  await ecdashboardPage.clickOnMapAssertButton();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickConfidenciallySlider();
  await ecdashboardPage.intigritySliderAssert();
  await ecdashboardPage.confidentialySlider();
  await ecdashboardPage.availabilitySlider();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickIfSliderVisibleItivate();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 125 - Add a new assessment to a risk', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnNewAssesment();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickOnCreateAssesment();
  await ecdashboardPage.validateAssismentAdded();

});

test('TC- 126 - Change the processing status to complete', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickAndSelectRisk();
  await ecdashboardPage.clickOnTreatmentID();
  await ecdashboardPage.clickOnTreatmentThreedot();
  await ecdashboardPage.clickMarkAsComplete();
});



test('TC- 127 - Add risk through assigning new risk to a user', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickOnNewRiskDropdown();
  await ecdashboardPage.clickOnRiskAssign();
  await ecdashboardPage.clickOnRiskRadioButton();
  await ecdashboardPage.enterRiskTitle('assign');
  await ecdashboardPage.enterRiskStatementC();
  await ecdashboardPage.clickSelectRiskCategory();
  await ecdashboardPage.clickOnAdditionalDetails();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.SelectVendorUser();
  await ecdashboardPage.enterCustomerParameter();
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.clickOnAssertRadioButton();
  await ecdashboardPage.clickOnMapAssertButton();
  await ecdashboardPage.clickAndSelectDueDate();
  await ecdashboardPage.clickAndSelectRiskAssignee();
  await ecdashboardPage.clickOnAddApproverBUtton();
  await ecdashboardPage.clickAndSelectApprovar();
  await ecdashboardPage.clickOnAdd();
  await ecdashboardPage.validateSuccessMsg();

});

test('TC- 128 - Add risk from an initiative', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnInitiativeManagement();
  await ecdashboardPage.clickOnInitiative();
  await ecdashboardPage.clickAndSelectInitiative();
  await ecdashboardPage.clickOnRisks();
  await ecdashboardPage.clickOnNewRiskButton();
  await ecdashboardPage.clickOnRiskRadioButton();
  await ecdashboardPage.enterRiskTitle('intivate');
  await ecdashboardPage.enterRiskStatementC();
  await ecdashboardPage.enterCustomerParameter();
  await ecdashboardPage.clickSelectRiskCategory();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.SelectVendorUser();
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.clickOnAssertRadioButton();
  await ecdashboardPage.clickOnMapAssertButton();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickConfidenciallySlider();
  await ecdashboardPage.intigritySliderAssert();
  await ecdashboardPage.confidentialySlider();
  await ecdashboardPage.availabilitySlider();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickIfSliderVisibleItivate();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC-129 - Add risk from a vendor', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnVendorManagement();
  await ecdashboardPage.clickOnVendorTab();
  await ecdashboardPage.validateVendorPage();
  await ecdashboardPage.clickOnVindorName();
  await ecdashboardPage.clickOnNewRisk();
  await ecdashboardPage.clickOnRiskRadioButton();
  await ecdashboardPage.enterRiskTitle('Vendor');
  await ecdashboardPage.enterRiskStatementVendor();
  await ecdashboardPage.clickSelectRiskCategory();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.SelectVendorUser();
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.clickOnAssertRadioButton();
  await ecdashboardPage.clickOnMapAssertButton();
  await ecdashboardPage.enterCustomerParameter();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickConfidenciallySlider();
  await ecdashboardPage.intigritySliderAssert();
  await ecdashboardPage.confidentialySlider();
  await ecdashboardPage.availabilitySlider();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickIfSliderVisibleItivate();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC- 130 - Add risk through creating a new risk', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnRiskManagement();
  await ecdashboardPage.clickOnRiskRegister();
  await ecdashboardPage.clickOnNewRiskDropdown();
  await ecdashboardPage.clickOnCreateRisk();
  await ecdashboardPage.clickOnRiskRadioButton();
  await ecdashboardPage.enterRiskTitle('create');
  await ecdashboardPage.enterRiskStatementC();
  await ecdashboardPage.clickSelectRiskCategory();
  await ecdashboardPage.clickAndSelectDepartment('Updated Department');
  await ecdashboardPage.SelectVendorUser();
  await ecdashboardPage.enterCustomerParameter();
  await ecdashboardPage.clickOnMapVendor();
  await ecdashboardPage.clickOnAssertRadioButton();
  await ecdashboardPage.clickOnMapAssertButton();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.confidentialySlider();
  await ecdashboardPage.intigritySliderAssert();
  await ecdashboardPage.availabilitySlider();
  await ecdashboardPage.clickConfidenciallySlider();
  await ecdashboardPage.clickONNext();
  await ecdashboardPage.clickIfSliderVisible();
  await ecdashboardPage.clickOnFinish();
  await ecdashboardPage.validateSuccessMsg();
});

test('TC-131 - Activate document', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnTableViewIfNotVisible();
  await ecdashboardPage.clickOnHambergGov();
  await ecdashboardPage.clickActivateIfAvailable();
});

test('TC-132 - Publish a document to the employee portal', async ({ ecdashboardPage }) => {
  await ecdashboardPage.clickOnGovernance();
  await ecdashboardPage.clickOnPolicyAndDoc();
  await ecdashboardPage.clickOnTableViewIfNotVisible();
  await ecdashboardPage.clickOnHambergGov();
  await ecdashboardPage.clickPublishIfAvailable();
});

test('TC-133-Verify that the user is able to log out successfully.', async ({ ecdashboardPage }) => {
  await ecdashboardPage.validateAllDashboards();
  await ecdashboardPage.clickOnUserIcon();
  await ecdashboardPage.clickOnLogOut();
  await ecdashboardPage.validateLoginPage();
});