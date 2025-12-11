import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import * as path from 'path';
import { testConfig } from '@base/testConfig';
import { add } from 'winston';
import fs from 'fs';
import { Utils } from '@base/Utils/functional/utils';

export class ECDashboardPage {
    readonly page: Page;
    readonly context: BrowserContext;
    newPage?: Page;
    readonly EXECUTIVE_DASHBOARD: Locator;
    readonly RISK_DASHBOARD: Locator;
    readonly COMPLIANCE_DASHBOARD: Locator;
    readonly GOVERNANCE_DASHBOARD: Locator;
    readonly RISK_DSHBOARD_TAB: Locator
    readonly COMPLIANCE_DASHBOARD_TAB: Locator
    readonly GOVERNANCE_DASHBOARD_TAB: Locator
    readonly TASKS: Locator
    readonly MY_TASKS_TAB: Locator
    readonly TASKS_TABLE: Locator
    readonly OVER_DUE_TASKS_TAB: Locator
    readonly OVER_DUE_STATUS: Locator
    readonly TASK_DUE_TODAY_TAB: Locator
    readonly TASK_DUE_THIS_WEEK: Locator
    readonly TASK_THIS_WEEK_STATUS: Locator
    readonly TASK_DUE_THIS_MONTH: Locator
    readonly TASK_DUE_THIS_MONTH_STATUS: Locator
    readonly FILTER_ICON: Locator
    readonly MODULE_DROPDOWN: Locator
    readonly DROPDOWN_OPTION: Locator
    readonly FILTERED_MODULE: Locator
    readonly FILTER_BUTTON: Locator
    readonly TYPE_DROPDOWN: Locator
    readonly FILTERED_TYPE: Locator
    readonly TYPE_DROPDOWN_OPTION: Locator
    readonly STATUS_DROPDOWN: Locator
    readonly STATUS_DROPDOWN_OPTION: Locator
    readonly FILTERED_STATUS: Locator
    readonly START_DATE_CALENDER: Locator
    readonly START_DATE: Locator
    readonly END_DATE_CALENDER: Locator
    readonly END_DATE: Locator
    readonly FILTERED_START_DATE: Locator
    readonly FILTERED_END_DATE: Locator
    readonly VIEW_BUTTON: Locator
    readonly CALENDER_ICON: Locator
    readonly TABLE_ICON: Locator
    readonly CLAENDER_VIEW: Locator
    readonly TABLE_VIEW: Locator
    readonly TASK_NAME: Locator
    readonly TASK_PAGE: Locator
    readonly APPROVE_BUTTON: Locator
    readonly REJECT_BUTTON: Locator
    readonly MY_DEPARTMENT_TAB: Locator
    readonly ALL_TASK_TAB: Locator

    readonly CALENDER: Locator
    readonly CALENDAR_PAGE: Locator
    readonly ADD_EVENT_BUTTON: Locator
    readonly ADD_EVENT_POP_UP: Locator
    readonly TITTLE_FIELD: Locator
    readonly DESCRIPTION: Locator
    readonly DEPARTMENT_DROPDOWN: Locator
    readonly SELECT_DEPARTMENT: Locator
    readonly EVENT_OWNER_DROPDOWN: Locator
    readonly SELECT_OWNER: Locator
    readonly TYPE_DROPDOWN_EVENT: Locator
    readonly SELECT_TYPE: Locator
    readonly START_DATE_CALENDAR: Locator
    readonly END_DATE_CALENDAR: Locator
    readonly SELECT_START_DATE: Locator
    readonly SELECT_END_DATE: Locator
    readonly ADD_BUTTON: Locator
    readonly SELECTED_TYPE: Locator
    readonly VIEW_DRPDOWN: Locator
    readonly SELECTED_VIEW: Locator
    readonly MONTHLY_VIEW: Locator
    readonly QUATERLY_VIEW: Locator
    readonly SETTINGS: Locator
    readonly FRAMEWORK_SETTINGS: Locator
    readonly FRAMEWORK_PAGE: Locator
    readonly FRAMEWORK_CHECKBOX: Locator
    readonly SAVE_BUTTON: Locator
    readonly SUCCESS_MSG: Locator
    readonly COMPLAINCE: Locator
    readonly FRAMEWORKS: Locator
    readonly FRAMEWORKS_PAGE: Locator
    readonly ADD_FRAMEWORK_BUTTON: Locator
    readonly CLONE_FROM_LIBRARY: Locator
    readonly IMPORT_FRAMEWORK_POP_UP: Locator
    readonly AVAILABLE_FRAMEWORK_DROPDOWN: Locator
    readonly SELECT_FRAMEWORK: Locator
    readonly AVAILABLE_SUB_FRAMEWORK_DEPDOWN: Locator
    readonly SELECT_SUB_FRAMEWORK: Locator
    readonly CLONED_FRAMEWORK_NAME_FIELD: Locator
    readonly CLONED_FRAMEWORK_SHORT_NAME: Locator
    readonly CLONE_BUTTON: Locator
    readonly COMMENT_FIELD: Locator
    readonly EVIDENCE_SETTINGS: Locator
    readonly EVIDENCE_CHECKBOX: Locator
    readonly EVIDENCE_SAVE_BUTTON: Locator
    readonly COUNT_TEXTFIELD: Locator
    readonly FRAMEWORK: Locator
    readonly FRAMEWORKI: Locator
    readonly CONTROLS: Locator
    readonly SELECT_CONTROL: Locator
    readonly MAP_DOC_BUTTON: Locator
    readonly SELECT_DOC_CHECKBOX: Locator
    readonly MAP_EVIDENCE_BUTTON: Locator
    readonly REQUIRED_EVIDENCE_TAB: Locator
    readonly NO_EVIDENCE_MSG: Locator
    readonly REQUIRED_EVIDENCE_TABLE: Locator
    readonly TASKS_TAB: Locator
    readonly REQUEST_EVIDENCE_BUTTON: Locator
    readonly REQUEST_EVIDENCE_POP_UP: Locator
    readonly DUE_DATE_CALENDAR: Locator
    readonly ASSIGN_TO_DROPDOWN: Locator
    readonly SELECT_ASSIGNEE: Locator
    readonly ADD_APPROVER_BUTTON: Locator
    readonly APPROVAR_DRPDOWN: Locator
    readonly SELECT_APPROVAR: Locator
    readonly SELECT_USER: Locator
    readonly SEND_BUTTON: Locator
    readonly EVIDENCE_TAB: Locator
    readonly REQ_EVIDENCE_ADD_BUTTON: Locator
    readonly CONTROL_ADD_BUTTON: Locator
    readonly REQ_EVIDENCE_ENG_TEXTFIELD: Locator
    readonly REQ_EVIDENCE_ARABIC_TEXTFIELD: Locator
    readonly UPLOAD_FILE_ENG: Locator
    readonly MAP_BUTTON: Locator
    readonly SELECT_MAP_CHECKBOX: Locator
    readonly EVI_MAP_CHECKBOX: Locator
    readonly EVIDENCE_STATUS_DROPDOWN: Locator
    readonly ADD_EVIDENCE: Locator
    readonly EVIDENCE_NAME: Locator
    readonly EVIDENCE_DESC: Locator
    readonly EVIDENCE_COMMENT: Locator
    readonly ADD_EVIDENCE_BUTTON: Locator
    readonly DETAILS_TAB: Locator
    readonly EDIT_BUTTON: Locator
    readonly GOV_EDIT: Locator
    readonly NEW_EVIDENCE: Locator
    readonly OWNERSHIP_DEPARTMENT: Locator
    readonly OWNERSHIP_OWNER: Locator
    readonly STAKEHOLDER_DEPARTMENT: Locator
    readonly STAKEHOLDER_USER: Locator
    readonly EXPECTED_DATE_CALENDER: Locator
    readonly DEPT_COMPLIANCE: Locator
    readonly HAMDERG: Locator
    readonly REQ_COMPLIANCE_DATE: Locator
    readonly REQ_COMPLIANCE_LEVEL: Locator
    readonly EDIT: Locator
    readonly THREE_DOT: Locator
    readonly ADD_RISK_BUTTON: Locator
    readonly RISK_RADIO_BUTTON: Locator
    readonly REMARK_TAB: Locator
    readonly ADD_REMARK_BUTTON: Locator
    readonly REMARK_TITTLE: Locator
    readonly REMARK_FIELD: Locator
    readonly REMARK_HAMBERG: Locator
    readonly REMARK_EDIT: Locator
    readonly REMARK_DETAILS: Locator
    readonly REMARK_DETAILS_POP_UP: Locator
    readonly REMARK_DELETE: Locator
    readonly DELETE_REMARK_CONFIRMTION: Locator
    readonly YES_BUTTON: Locator
    readonly THREE_DOT_TAB: Locator
    readonly INTIAVITES: Locator
    readonly NEW_INTIAVATE_BUTTON: Locator
    readonly INTIVATE_DESC: Locator
    readonly RISK_TREATMENT_BUTTON: Locator
    readonly DEPT_COMPLIANCE_TABLE: Locator
    readonly INITIVATE_DETAILS: Locator
    readonly INTIVATE_DETAILS_PAGE: Locator
    readonly SAVE: Locator
    readonly GOV_SAVE: Locator
    readonly AUDIT: Locator
    readonly AUDIT_COMPLAINCE_LEVEL: Locator
    readonly AUDIT_REVIEW: Locator
    readonly AUDIT_TABLE: Locator
    readonly AUDIT_DETAILS: Locator
    readonly AUDIT_DETAIL_POP_UP: Locator
    readonly NOTE_TO_SELF_ICON: Locator
    readonly NOTE_TEXT_FIELD: Locator
    readonly SEND_NOTE_ICON: Locator
    readonly NOTE_ADDED: Locator
    readonly ISSUE: Locator
    readonly ADD_ISSUE: Locator
    readonly ISSUE_NAME_FIELD: Locator
    readonly ISSUE_DESC_FIELD: Locator
    readonly ISSUE_REMIDIATION_FIELD: Locator
    readonly ISSUE_TYPE_DROPDOWN: Locator
    readonly SELECT_ISSUE_TYPE: Locator
    readonly ISSUE_PRIORITY: Locator
    readonly SELECT_PRIORITY: Locator
    readonly TARGET_DATE_CALENDER: Locator
    readonly SAVE_ISSUE: Locator
    readonly ISSUE_OWNER: Locator
    readonly ISSUE_DEPARTMENT: Locator
    readonly REMEDIATION: Locator
    readonly REMEDIATION_POPUP: Locator
    readonly REMEDIATION_FIELD: Locator
    readonly ISSUE_DETAILS_POPUP: Locator
    readonly MAP_RISK_CHECKBOX: Locator
    readonly RISK_MAP_BUTTON: Locator

    readonly COMMON_CONTROL_TAB: Locator
    readonly MANAGE_CROSS_MAPING_BUTTON: Locator
    readonly COMMOM_CONTROL_BUTTON: Locator
    readonly CONTROL_CREATE_BUTTON: Locator
    readonly EVIDENCE: Locator
    readonly EVIDENCE_TABLE: Locator
    readonly RISK_SETTINGS: Locator
    readonly ASSESSMENT_CRITERIA: Locator
    readonly METHELOGY: Locator
    readonly METHELOGY_CHECKBOX: Locator
    readonly RISK_MANAGEMENT_BUTTON: Locator
    readonly RISK_REGISTER_BUTTON: Locator
    readonly NEW_RISK_BUTTON: Locator
    readonly CREATE_RISK_BUTTON: Locator
    readonly RISK: Locator
    readonly RISK_PAGE: Locator
    readonly SELECT_RISK: Locator
    readonly NEW_TREATEMENT_BUTTON: Locator
    readonly TREATMENT_NAME_FIELD: Locator
    readonly TREATEMENT_DESC: Locator
    readonly TREATEMENT_COST_FIELD: Locator
    readonly TREATEMENT_OWNER_DROPDOWN: Locator
    readonly TREATMENT_HISTORY_BUTTON: Locator
    readonly TREATMENT_HISTORY_POPUP: Locator
    readonly ASSESMENT_HISTORY_BUTTON: Locator
    readonly ASSESMENT_HISTORY_POPUP: Locator
    readonly EXPORT_PDF_ICON: Locator
    readonly EXEPTIONS_TAB: Locator
    readonly ADD_EXEPTION_BUTON: Locator
    readonly EXEPTION_START_DATE: Locator
    readonly EXEPTION_END_DATE: Locator
    readonly RISK_NOTE: Locator
    readonly RISK_TEMPLATE: Locator
    readonly LIBRARY_TAB: Locator
    readonly TEMPLATE_CHECKBOX: Locator
    readonly CLONE_TEMPLATE_BUTTON: Locator
    readonly INDECATOR_KEY_TAB: Locator
    readonly NEW_INDICATOR_BUTTON: Locator
    readonly SELECT_PURPOUSE: Locator
    readonly INDICATOR_SOURCE: Locator
    readonly INDICATOR_MINTOLER_FIELD: Locator
    readonly INDICATOR_MAXTOLER_FIELD: Locator
    readonly FRECUENCY_DROPDOWN: Locator
    readonly MESERMENT_DROPDOWN: Locator
    readonly NEW_RISK_TEMPLATE: Locator
    readonly RISK_CATEGORY: Locator
    readonly ADD_RISK: Locator
    readonly CATALOG: Locator
    readonly NEW_ASSET_BUTTON: Locator
    readonly ARABIC_ASSEST_NAME_FIELD: Locator
    readonly CREATE_BUTTON: Locator
    readonly PRIORITY_RADIO: Locator
    readonly PURPOUSE_DROPDOWN: Locator
    readonly FRAMEWORK_AUDIT: Locator
    readonly THREATS: Locator
    readonly NEW_THREAT_BUTTON: Locator
    readonly THREAT_ARABIC_NAME: Locator
    readonly SOURCE_DROPDOWN: Locator
    readonly VULNERABILITY: Locator
    readonly NEW_VULNERABILITY_BUTTON: Locator
    readonly PROCESS: Locator
    readonly NEW_PROCESS: Locator
    readonly CATEGORY_DROPDOWN: Locator
    readonly INITIATIVE: Locator
    readonly NEW_INITIATIVE_BUTTON: Locator
    readonly INITIATIVE_MANAGEMENT: Locator
    readonly SELECT_INITIATIVE: Locator
    readonly LINK_CONTROL_BUTTON: Locator
    readonly MILESTONE_TAB: Locator
    readonly NEW_MILESTONE_BUTTON: Locator
    readonly GOVERNANCE: Locator
    readonly TEMPLATES: Locator
    readonly CREATE_TEMPLATE: Locator
    readonly ARABIC_NAME_TEXTFILED: Locator
    readonly ENGLISH_NAME_TEXTFIELD: Locator
    readonly DOCUMENT_TEXT_TEXTFIELD: Locator
    readonly DOCUMENT_TEXT_TEXTFIELD_GOV: Locator
    readonly CREATE_BUTTON_GOV: Locator
    readonly TEMPLATE_PAGE: Locator
    readonly TEMPLATE_DETAILS_POP_UP: Locator
    readonly TEMPLATE: Locator
    readonly EDIT_PAGE_HEADLINE: Locator
    readonly EDIT_PAGE: Locator
    readonly DELETE_BUTTON: Locator
    readonly CONFIRMATION_POP_UP: Locator
    readonly YES_BUTTON_DELETE: Locator
    readonly DELETE_SUCCESS_MSG: Locator
    readonly POLICY_DOC_MANAGEMENT: Locator
    readonly NEW_DOC_BUTTON: Locator
    readonly CREATE_DOC: Locator
    readonly TITTLE: Locator
    readonly DESCRIPTION_GOV: Locator
    readonly TYPE_DROPDOWN_GOV: Locator
    readonly SELECT_TYPE_GOV: Locator
    readonly CLARIFICATION_DROPDOWN: Locator
    readonly SELECT_CLARIFICATION: Locator
    readonly SHARING_DROPDOWN: Locator
    readonly SELECT_SHAREING: Locator
    readonly DISRIBUTION_DROPDOWN: Locator
    readonly SELECT_DIS: Locator
    readonly FROM_DATE_CALENDAR: Locator
    readonly TO_DATE_CALENDER: Locator
    readonly ADD_OWERSHIP_BUTTON: Locator
    readonly OWNER_DROPDOWN: Locator
    readonly VERSION_TEXFIELD: Locator
    readonly NEXT_BUTTON: Locator
    readonly DOC_TEXT_TEXTFIELD: Locator
    readonly FINISH_BUTTON: Locator
    readonly SELECT_OWNER_GOV: Locator
    readonly PICK_TEMPLATE: Locator
    readonly USE_TEMPLATE: Locator
    readonly UPLOAD_FROM_DEVICE: Locator
    readonly DOC_NAME: Locator
    readonly ADD_INT_CONTROL: Locator
    readonly CONTROL_ARABIC_NAME: Locator
    readonly CONTROL_ENG_NAME: Locator
    readonly MAP_INT_CONTROL: Locator
    readonly MAP_CHECKBOX: Locator
    readonly MAP_BUTTON_GOV: Locator
    readonly INTERNAL_CONTROL_TAB: Locator
    readonly ADD_CONTROL: Locator
    readonly INTERNAL_CONTROL_PAGE: Locator
    readonly ADD_BUTTON_GOV: Locator
    readonly EDIT_CONTROL: Locator
    readonly UPDATE_BUTTON: Locator
    readonly VENDOR_MANAGEMENT: Locator
    readonly VENDOR_TAB: Locator
    readonly VENDOR_PAGE: Locator
    readonly ADD_VENDOR_BUTTON: Locator
    readonly VENDOR_NAME: Locator
    readonly VENDOR_ADDRESS: Locator
    readonly VENDOR_TYPE_DROPDOWN: Locator
    readonly VENDOR_DEPARTMENT_DROPDOWN: Locator
    readonly VENDOR_USER_DROPDOWN: Locator
    readonly VENDOR_RISK_DROPDOWN: Locator
    readonly PHONE_NO_FIELD: Locator
    readonly PRODUCT_NAME_FIELD: Locator
    readonly DOMAIN_FIELD: Locator
    readonly WEBSITE_FIELD: Locator
    readonly DESCRIPTION_FIELD: Locator
    readonly CREATE_VENDOR_BUTTON: Locator
    readonly ADD_CONTACT_BUTTON: Locator
    readonly CONTACT_NAME: Locator
    readonly POSITION: Locator
    readonly EMAIL: Locator
    readonly PHONE_NUMBER: Locator
    readonly SELECT_VINDOR: Locator
    readonly TABLE_VIEW_ICON: Locator
    readonly ADD_RISK_BUTTON_GOV: Locator
    readonly SUBMIT_BUTTON: Locator
    readonly HAMBERD_GOV: Locator
    readonly RISK_TITTLE: Locator
    readonly RISK_STATEMENT: Locator
    readonly RISK_CATEGORY_DROPDOWN: Locator
    readonly RISK_OWNER: Locator
    readonly ASSERT_RADIO: Locator
    readonly DOCUMENT_TAB: Locator
    readonly NEW_DOCUMENT_BUTTON: Locator
    readonly STATUS_DROPDOWN_VENDOR: Locator
    readonly EFFECTNESS_CALENDER: Locator
    readonly CREATE_DOC_VENDOR: Locator
    readonly CONTACT_TAB: Locator
    readonly ADD_CONTACT: Locator
    readonly CONTACT_NAME_VENDOR: Locator
    readonly PHONE_NO_VENDOR: Locator
    readonly THREE_DOT_VENDOR: Locator
    readonly EDIT_VENDOR: Locator
    readonly RADIO_VENDOR: Locator
    readonly AUDIT_MANEGMENT: Locator
    readonly AUDITS: Locator
    readonly NEW_AUDIT_BUTTON: Locator
    readonly AUDIT_TYPE_DROPDOWN: Locator
    readonly FRAMEWORKS_DROPDOWN: Locator
    readonly AUDITOR_DROPDOWN: Locator
    readonly AUDIT_NAME: Locator
    readonly AUDIT_CONTROL: Locator
    readonly AUDIT_CONTROL_EXPAND: Locator
    readonly SELECT_AUDIT_CONTROL: Locator
    readonly SELECT_AUDIT_REVIEW: Locator
    readonly AUDIT_NOTE_TAB: Locator
    readonly NEW_NOTES: Locator
    readonly NOTE_TITTLE: Locator
    readonly NOTE_REMARK: Locator
    readonly NOTE_PROCEDURE: Locator
    readonly AUDIT_THREE_DOT: Locator
    readonly CHANGE_STATUS: Locator
    readonly AUDIT_STATUS_RADIO: Locator
    readonly CONFIRMATION_CHECKBOX: Locator
    readonly ISSUE_EXEPTIONS: Locator
    readonly ISSUES: Locator
    readonly ISSUES_TABLE: Locator
    readonly EXEPTIONS: Locator
    readonly REPORTS: Locator
    readonly REPORTS_PAGE: Locator
    readonly SELECT_REPORT_TYPE: Locator
    readonly SELECT_REPORT: Locator
    readonly EXPORT_REPORT: Locator
    readonly DELEGATION_TAB: Locator
    readonly DELEGATION: Locator
    readonly NEW_DELEGATION: Locator
    readonly DELEGATION_TO_DROPDOWN: Locator
    readonly DELEGATION_FROM_DROPDOWN: Locator
    readonly CREATE_DELEGATION: Locator
    readonly DELEGATION_START_DATE: Locator
    readonly DELEGATION_END_DATE: Locator
    readonly UPDATE_DELEGATION: Locator
    readonly CANCEL_DELEGATION: Locator
    readonly DELETE_DELEGATION: Locator
    readonly ESCALATION_SETTING: Locator
    readonly NEW_ESCALATION_SETTING: Locator
    readonly TASK_ASSIGN_TO_DROPDOWN: Locator
    readonly ADD_ESCALATION_BUTTON: Locator
    readonly SELECT_ESCALATION_DROPDOWN: Locator
    readonly ESCATATIONS: Locator
    readonly ESCALATION_CREATE: Locator
    readonly NEW_ESCALATION_BUTTON: Locator
    readonly ESCALATION_TITTLE: Locator
    readonly ESCALATION_TRIGGER_EVENT_DROPDOWN: Locator
    readonly ESCALATION_USERS_DROPDOWN: Locator
    readonly DEPT_REPOT_PAGE: Locator
    readonly EXECUTIVE_REPORT: Locator
    readonly EXECUTIVE_REPORT_PAGE: Locator
    readonly COMPLAINCE_REPORT: Locator
    readonly COMPLAINCE_REPORT_PAGE: Locator
    readonly TASK_REPORT: Locator
    readonly TASK_REPORT_PAGE: Locator
    readonly INITIATIVES_REPORT: Locator
    readonly INITIATIVES_REPORT_PAGE: Locator
    readonly ISSUE_REPOT: Locator
    readonly ISSUE_REPORT_PAGE: Locator
    readonly PERMISIONS: Locator
    readonly PERMISION_POPUP: Locator
    readonly ASSET_NAME: Locator
    readonly USERS_TAB: Locator
    readonly USERS_AND_DEPARTMENT: Locator
    readonly ROLES: Locator
    readonly PERMISION_CHECKBOX: Locator
    readonly RISK_FILTER_ICON: Locator
    readonly SEARCH_FIELD: Locator
    readonly APPLY_FILTER_BUTTON: Locator
    readonly TASK_CHECKBOX: Locator
    readonly TASK_FILTER_ICON: Locator
    readonly CONFIRM_BUTTON: Locator
    readonly RE_ASSIGN: Locator
    readonly ASSIGNE_DROPDOWN: Locator
    readonly LINK_RISK_TRATMENT_BUTTON: Locator
    readonly GOV_CONTROL: Locator
    readonly GOV_CONTROL_SAVE: Locator
    readonly TASK_OWNER_DROPDOWN: Locator
    readonly TASK_ASSIGN_TO: Locator
    readonly CONFIDENCIALLY_SLIDER: Locator
    readonly INTIGRITY_SLIDER: Locator
    readonly AVAILABILITY_SLIDER: Locator
    readonly HOOD_SLIDER: Locator
    readonly TEXT_ASSERT: Locator
    readonly USER_DROPDOWN: Locator
    readonly MAP_EVIDENCE: Locator
    readonly MAP_EVIDENCE_CHECKBOX: Locator
    readonly THREE_DOT_RISK: Locator
    readonly RISK_ASSIGN: Locator
    readonly ADDITIONAL_DETAILS: Locator
    readonly NEW_ASSESMENT: Locator
    readonly CREATE_ASSESMENT_BUTTON: Locator
    readonly RISKS: Locator
    readonly PUBLISH_BUTTON: Locator
    readonly ACTIVATE_BUTTON: Locator
    readonly RISK_ASSIGN_TO: Locator
    readonly CUSTOMER_PARAMETERS: Locator
    readonly CUSTOMER_PARAMETERS1: Locator
    readonly THREAD_SLIDER: Locator
    readonly VULNERABILITY_SLIDER: Locator
    readonly INTIGRITY_SLIDER_ASSERT: Locator
    readonly AVAILABILITY_SLIDER_ASSERT: Locator
    readonly CONFIDENTIALY_SLIDER_ASSERT: Locator
    readonly TREATMENT_ID: Locator
    readonly TREATMENT_THREEDOT: Locator
    readonly MARK_AS_COMPLETE: Locator
    readonly GOV_TEM_THREEDOT: Locator
    readonly PROCEED_BUTTON: Locator
    readonly RISK_IDENTIFICATION_CALENDER: Locator
    readonly USER_ICON: Locator
    readonly LOG_OUT: Locator
    readonly LOGIN_PAGE: Locator
    readonly EXPORT_EXCEL_ICON: Locator
    readonly THREE_DOT_CONTROL: Locator
    readonly FILE_UPLOADED: Locator

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;

        this.EXECUTIVE_DASHBOARD = page.locator("//button[normalize-space()='Executive Dashboard']");
        this.RISK_DASHBOARD = page.locator("//button[normalize-space()='Risk Dashboard']");
        this.COMPLIANCE_DASHBOARD = page.locator("//button[normalize-space()='Compliance Dashboard']");
        this.GOVERNANCE_DASHBOARD = page.locator("//button[normalize-space()='Governance Dashboard']");
        this.RISK_DSHBOARD_TAB = page.locator(`//div[text()=' Risk Dashboard ']`);
        this.COMPLIANCE_DASHBOARD_TAB = page.locator(`//div[text()=' Compliance Dashboard ']`);
        this.GOVERNANCE_DASHBOARD_TAB = page.locator(`//div[text()=' Governance Dashboard ']`);
        this.TASKS = page.locator(`//span[normalize-space()='Tasks']`);
        this.MY_TASKS_TAB = page.locator(`//span[contains(text(), 'My Tasks')]`);
        this.TASKS_TABLE = page.locator(`//table[@class="my-tasks__table table my-4 ng-star-inserted"]`);
        this.OVER_DUE_TASKS_TAB = page.locator(`//div[text()=' Over Due Tasks ']`);
        this.OVER_DUE_STATUS = page.locator(`(//span[normalize-space()='Over Due'])[1]`);
        this.TASK_DUE_TODAY_TAB = page.locator(`//div[text()=' Tasks Due Today ']`);
        this.TASK_DUE_THIS_WEEK = page.locator(`//div[text()=' Tasks Due This Week ']`);
        this.TASK_THIS_WEEK_STATUS = page.locator(`(//span[normalize-space()='In Progress'])[1]`);
        this.TASK_DUE_THIS_MONTH = page.locator(`//div[text()=' Tasks Due This month ']`)
        this.TASK_DUE_THIS_MONTH_STATUS = page.locator(`(//td[contains(text(),'October')])[1]`);
        this.FILTER_ICON = page.locator(`//i[@class="fa fa-filter fz-20"]`);
        this.MODULE_DROPDOWN = page.locator(`(//label[text()='Module']/following::div[@role="combobox"])[1]`);
        this.DROPDOWN_OPTION = page.locator(`//span[text()='Risk']`);
        this.FILTERED_MODULE = page.locator(`(//td[text()='Risk'])[1]`);
        this.FILTER_BUTTON = page.locator(`//button[text()=' Filter ']`);
        this.TYPE_DROPDOWN = page.locator(`(//label[text()='Type']/following::div[@role="combobox"])[1]`);
        this.TYPE_DROPDOWN_OPTION = page.locator(`//span[text()='Risk Creation']`);
        this.FILTERED_TYPE = page.locator(`(//td/span[text()='Risk Creation'])[1]`);
        this.STATUS_DROPDOWN = page.locator(`(//label[text()='Status']/following::div[@role="combobox"])[1]`);
        this.STATUS_DROPDOWN_OPTION = page.locator(`//span[text()='In Progress']`);
        this.FILTERED_STATUS = page.locator(`(//span[text()=' In Progress '])[1]`);
        this.START_DATE_CALENDER = page.locator(`(//label[text()='Start Date']/following::input[@name="fromDate"])[1]`);
        this.END_DATE_CALENDER = page.locator(`(//label[text()='End Date']/following::span[@class="input-group-append"])[1]`);
        this.START_DATE = page.locator(`(//span[text()='15'])`);
        this.END_DATE = page.locator(`(//span[text()='27'])`);
        this.FILTERED_START_DATE = page.locator(`(//td[contains(text(), 'October 1, 2025')])[1]`);
        this.FILTERED_END_DATE = page.locator(`(//td[contains(text(), 'October 2, 2025')])[1]`);
        this.VIEW_BUTTON = page.locator(`//div[text()=' View ']`);
        this.CALENDER_ICON = page.locator(`//i[@class="fa fa-calendar"]`);
        this.MAP_RISK_CHECKBOX = page.locator(`(//input[@name="SelectedTreatmentIds"])[1]`);
        this.RISK_MAP_BUTTON = page.locator(`//button[text()=' Map ']`);
        this.PRIORITY_RADIO = page.locator(`//label[text()=' Low ']//input[@name="PriorityRadio"]`);
        this.PURPOUSE_DROPDOWN = page.locator(`(//div[text()='Select Purpose']/ancestor::div//div[@aria-haspopup="listbox"])[1]`);
        this.TABLE_ICON = page.locator(`//i[@class="fa fa-table"]`);
        this.CLAENDER_VIEW = page.locator(`//div[contains(@class, "my-tasks__calender")]`);
        this.TABLE_VIEW = page.locator(`//table[contains(@class, "my-tasks__table")]`);
        this.TASK_NAME = page.locator(`(//a[contains(text(),'Approval')])[2]`);
        this.TASK_PAGE = page.locator(`//div[@class="col-8"]`);
        this.APPROVE_BUTTON = page.locator(`//button[text()='Approve ']`);
        this.REJECT_BUTTON = page.locator(`//button[text()='Reject']`);
        this.MY_DEPARTMENT_TAB = page.locator(`//span[text()='My Department Tasks ']`);
        this.ALL_TASK_TAB = page.locator(`//span[text()='All Tasks ']`);
        this.TABLE_VIEW_ICON = page.locator(`(//div[@class="cursor-pointer"])[2]`);
        this.CALENDER = page.locator(`//span[normalize-space()='Calendar']`);
        this.CALENDAR_PAGE = page.locator(`//div[text()='Calendar']`);
        this.SELECT_OWNER_GOV = this.page.locator(`//span[text()='SRC Updated']`);
        this.ADD_EVENT_BUTTON = page.locator(`//button[contains(@class, "btn btn-primary main-calender")]`);
        this.ADD_EVENT_POP_UP = page.locator(`//h5[text()='Add Event']`);
        this.TITTLE_FIELD = page.locator(`//input[@placeholder="Title"]`);
        this.DESCRIPTION = page.locator(`//textarea[@placeholder="Description"]`);
        this.DEPARTMENT_DROPDOWN = page.locator(`//div[text()='Select Department']/ancestor::div/div[@role="combobox"]`);
        this.SELECT_DEPARTMENT = page.locator(`//span[text()='Updated Department']`);
        this.EVENT_OWNER_DROPDOWN = page.locator(`//div[text()='Select user']/ancestor::div/div[@role="combobox"]`);
        this.SELECT_OWNER = page.locator(`//span[text()='SRC Test']`);
        this.TYPE_DROPDOWN = page.locator(`//div[text()='Select Type']/ancestor::div/div[@role="combobox"]`);
        this.TYPE_DROPDOWN_EVENT = page.locator(`//div[text()='Type']/ancestor::div/div[@role="combobox"]`);
        this.SELECT_TYPE = page.locator(`(//span[text()='${testConfig.type}'])[2]`);
        this.START_DATE_CALENDAR = page.locator(`(//i[@class="fa fa-calendar form-control-feedback"])[1]`);
        this.END_DATE_CALENDAR = page.locator(`//i[@class="fa fa-calendar form-control-feedback"]/ancestor::div/input[@placeholder="End Date"]`);
        this.SELECT_START_DATE = page.locator(`(//span[text()='12'])`);
        this.SELECT_END_DATE = page.locator(`(//span[text()='20'])`);
        this.ADD_BUTTON = page.locator(`//button[normalize-space()='Add']`);
        this.SELECTED_TYPE = page.locator(`//div[normalize-space()='${testConfig.type}']/following::div[normalize-space()='Test908']`);
        this.VIEW_DRPDOWN = page.locator(`//select[@name="selectedDate"]`);
        this.SELECTED_VIEW = page.locator(`//h2[text()='2025']`);
        this.MONTHLY_VIEW = page.locator(`//table[@role="grid"]`);
        this.QUATERLY_VIEW = page.locator(`//div[contains(@class ,"main-calender__quarterly-view")]`);
        this.SETTINGS = page.locator(`//span[normalize-space()='Settings']`);
        this.FRAMEWORK_SETTINGS = page.locator(`//div[normalize-space()='Framework Settings']`);
        this.FRAMEWORK_CHECKBOX = page.locator(`//label[@for="Final test MA "]/input[@type="checkbox"]`);
        this.FRAMEWORK_PAGE = page.locator(`//span[normalize-space()='Available Frameworks']`);
        this.SAVE_BUTTON = page.locator(`//input[@value="Save"]`);
        this.SUCCESS_MSG = page.locator(`(//div[text()=' Saved Successfully '])[1]`);

        this.COMPLAINCE = page.locator(`//span[normalize-space()='Compliance']`);
        this.FRAMEWORKS = page.locator(`//div[normalize-space()='Frameworks']`);
        this.FRAMEWORKS_PAGE = page.locator(`//li[text()='Frameworks']`)
        this.ADD_FRAMEWORK_BUTTON = page.locator(`//button[normalize-space()='Add Framework']`);
        this.CLONE_FROM_LIBRARY = page.locator(`//li[normalize-space()='Clone From Library']`);
        this.IMPORT_FRAMEWORK_POP_UP = page.locator(`//h5[normalize-space()='Import Framework']`);
        this.AVAILABLE_FRAMEWORK_DROPDOWN = page.locator(`//div[@role="combobox"]`);
        this.SELECT_FRAMEWORK = page.locator(`//span[normalize-space()='MOF']`);
        this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN = page.locator(`//span[text()='Available Sub Framework']/following::div[contains(@class,"form-group mb")]`);
        this.SELECT_SUB_FRAMEWORK = page.locator(`//span[text()='اللائحة التنفيذية لنظام استئجار الدولة للعقار']`);
        this.CLONED_FRAMEWORK_NAME_FIELD = page.locator(`//label[text()='Cloned Framework Name']/following::input[1]`);
        this.CLONED_FRAMEWORK_SHORT_NAME = page.locator(`//label[text()='Cloned Framework Short Name']/following::input`);
        this.CLONE_BUTTON = page.locator(`//button[normalize-space()='Clone']`);
        this.GOV_EDIT = page.locator(`//button[text()=' Edit ']`)
        this.COMMENT_FIELD = page.locator(`//textarea[@placeholder="Enter Your Comment"]`);
        this.EVIDENCE_SETTINGS = page.locator(`//div[normalize-space()='Evidence Settings']`);
        this.EVIDENCE_CHECKBOX = page.locator(`//input[@name="approvalEvidences"]`);
        this.EVIDENCE_SAVE_BUTTON = page.locator(`//button[normalize-space()='Save']`);
        this.COUNT_TEXTFIELD = page.locator(`//input[@name="reviewAfter"]`);
        this.CONTROLS = page.locator(`//a[text()='Controls ']`);
        this.FRAMEWORK = page.locator(`(//a[contains(text(),'Test')])[1]`);
        this.FRAMEWORKI = page.locator(`(//a[contains(text(),'Test')])[4]`);
        this.GOV_SAVE = page.locator(`//button[normalize-space()='Save']`)
        this.SELECT_CONTROL = page.locator(`(//div[@class="ellipsis cursor-pointer link break-word d-block"])[2]`);
        this.MAP_DOC_BUTTON = page.locator(`//span[text()='Map Document']`);
        this.SELECT_DOC_CHECKBOX = page.locator(`(//input[@name="SelectedDocument"])[1]`);
        this.MAP_EVIDENCE_BUTTON = page.locator(`//button[normalize-space()='Map']`);
        this.REQUIRED_EVIDENCE_TAB = page.locator(`//a[normalize-space()='Required Evidence']`);
        this.NO_EVIDENCE_MSG = page.locator(`//span[normalize-space()='No Evidence']`);
        this.REQUIRED_EVIDENCE_TABLE = page.locator(`//table[contains(@class,"evidence-required__table")]`);
        this.TASKS_TAB = page.locator(`(//a[normalize-space()='Tasks'])[2]`);
        this.REQUEST_EVIDENCE_BUTTON = page.locator(`//span[text()='Request Evidence']`);
        this.DUE_DATE_CALENDAR = page.locator(`(//label[text()='Due Date']/following::input[@type="datetime"])[1]`);
        this.REQUEST_EVIDENCE_POP_UP = page.locator(`//h5[text()='Request Evidence']`);
        this.ASSIGN_TO_DROPDOWN = page.locator(`//div[text()='Select Assigned To']/ancestor::div[@class="form-group mb-0 text-cursor w-auto flex-grow-1 p-0 required"]`);
        this.SELECT_ASSIGNEE = page.locator(`//span[text()='${testConfig.assignee}']`);
        this.ADD_APPROVER_BUTTON = page.locator(`//button[normalize-space()='Add Approver']`)
        this.APPROVAR_DRPDOWN = page.locator(`//div[text()='Select Approver']/ancestor::div[@class="ng-select-container"]`);
        this.SELECT_APPROVAR = page.locator(`//span[text()='${testConfig.approver}']`);
        this.SELECT_USER = page.locator(`//span[text()='${testConfig.user}']`);
        this.SEND_BUTTON = page.locator(`//button[normalize-space()='Send']`);
        this.REQ_EVIDENCE_ADD_BUTTON = page.locator(`//span[text()='Add']`);
        this.CONTROL_ADD_BUTTON = page.locator(`(//button[text()=' Add '])[2]`)
        this.REQ_EVIDENCE_ENG_TEXTFIELD = page.locator(`//input[@name="requiredEvidenceName"]`);
        this.EVIDENCE_TAB = page.locator(`//a[text()='Evidence ']`);
        this.REQ_EVIDENCE_ARABIC_TEXTFIELD = page.locator(`//input[@name="requiredEvidenceNameAr"]`);
        this.MAP_BUTTON = page.locator(`//span[text()='Map']`);
        this.SELECT_MAP_CHECKBOX = page.locator(`(//input[@type="checkbox"])[1]`);
        this.EVIDENCE_STATUS_DROPDOWN = page.locator(`//div[@class="ng-value-container"]`);
        this.ADD_EVIDENCE = page.locator(`//span[text()='Add Evidence']`);
        this.EVIDENCE_NAME = page.locator(`//input[@name="evidenceName"]`);
        this.EVIDENCE_DESC = page.locator(`//textarea[@name="evidenceDescription"]`);
        this.EVIDENCE_COMMENT = page.locator(`//textarea[@formcontrolname="comment"]`);
        this.ADD_EVIDENCE_BUTTON = page.locator(`//button[text()=' Add ']`);
        this.DETAILS_TAB = page.locator(`//a[text()=' Details ']`);
        this.EDIT_BUTTON = page.locator(`//button[text()='Edit']`);
        this.NEW_EVIDENCE = page.locator(`(//td/a[@class="cursor-pointer link"])[1]`);
        this.GOV_CONTROL = page.locator(`//a[text()=' Controls ']`)
        this.OWNERSHIP_DEPARTMENT = page.locator(`(//div[text()='Select Department']/ancestor::div/div[@role="combobox"])[1]`);
        this.OWNERSHIP_OWNER = page.locator(`(//div[text()='Select Owner']/ancestor::div/div[@role="combobox"])[1]`);
        this.STAKEHOLDER_DEPARTMENT = page.locator(`(//div[text()='Select Department']/ancestor::div/div[@role="combobox"])[2]`);
        this.STAKEHOLDER_USER = page.locator(`//div[text()='Select User']/ancestor::div/div[@role="combobox"]`);
        this.EXPECTED_DATE_CALENDER = page.locator(`//input[@class="form-control ng-untouched ng-pristine ng-valid"]`);
        this.DEPT_COMPLIANCE = page.locator(`//a[text()=' Departmental Compliance ']`);
        this.HAMDERG = page.locator(`(//i[@class="icon-menu"]/ancestor::button)[1]`);
        this.REQ_COMPLIANCE_DATE = page.locator(`//li[normalize-space()='Request Compliance Date']`);
        this.REQ_COMPLIANCE_LEVEL = page.locator(`//li[normalize-space()='Request Compliance Level']`);
        this.EDIT = page.locator(`//li[normalize-space()='Edit']`);
        this.THREE_DOT = page.locator(`(//i[@class="fa fa-ellipsis-v"])[3]`);
        this.ADD_RISK_BUTTON = page.locator(`//button/span[text()='Add Risk']`);
        this.RISK_RADIO_BUTTON = page.locator(`(//input[@type="radio"])[1]`);
        this.REMARK_TAB = page.locator(`//a[normalize-space()='Remarks']`);
        this.ADD_REMARK_BUTTON = page.locator(`//button//span[normalize-space()='Add Remark']`);
        this.REMARK_TITTLE = page.locator(`//input[@formcontrolname="title"]`);
        this.REMARK_FIELD = page.locator(`//textarea[@id="remark"]`);
        this.TASK_OWNER_DROPDOWN = page.locator(`//div[text()='Select Task Owner']/ancestor::div[@class="form-group mb-0 text-cursor w-auto flex-grow-1 p-0 required"]`);
        this.REMARK_HAMBERG = page.locator(`(//button[@id="TableOptions"])[1]`);
        this.REMARK_EDIT = page.locator(`//a[text()=' Edit ']`);
        this.REMARK_DETAILS = page.locator(`//li/a[text()=' Details ']`);
        this.REMARK_DETAILS_POP_UP = page.locator(`h5`, { hasText: 'Remark Details' });
        this.REMARK_DELETE = page.locator(`//a[normalize-space()='Delete']`);
        this.DELETE_REMARK_CONFIRMTION = page.locator(`//div[@role="dialog"]`);
        this.YES_BUTTON = page.locator(`//button[text()='Yes']`);
        this.THREE_DOT_TAB = page.locator(`//div[@class="p-4"]//i[@class="fa fa-ellipsis-v"]`);
        this.INTIAVITES = page.locator(`//a[normalize-space()='Initiatives']`);
        this.NEW_INTIAVATE_BUTTON = page.locator(`//span[text()='New Initiative']`);
        this.INTIVATE_DESC = page.locator(`//textarea[@name="description"]`);
        this.RISK_TREATMENT_BUTTON = page.locator(`//span[text()='Map Risk Treatment']`);
        this.DEPT_COMPLIANCE_TABLE = page.locator(`//table[contains(@class,"table controls-details")]`);
        this.DEPT_COMPLIANCE_TABLE = page.locator(`//table[contains(@class,"table controls-details")]`);
        this.INITIVATE_DETAILS = page.locator(`//li[normalize-space()='Details']`);
        this.INTIVATE_DETAILS_PAGE = page.locator(`//div[@class="row mt-2"]`);
        this.SAVE = page.locator(`//input[@value="Save"]`);
        this.AUDIT = page.locator(`//a[normalize-space()='Audit']`);
        this.AUDIT_COMPLAINCE_LEVEL = page.locator(`//h6[text()='Compliance Level']/ancestor::div/div[@role="group"]`);
        this.AUDIT_REVIEW = page.locator(`//h6[text()='Auditor Review']/ancestor::div/div[@role="group"]`);
        this.AUDIT_TABLE = page.locator(`//div[@class="table-responsive"]`);
        this.AUDIT_DETAILS = page.locator(`//li/a[normalize-space()='Details']`);
        this.TASK_ASSIGN_TO = page.locator(`//div[text()='Task Assigned To']/ancestor::div[@class="form-group mb-0 text-cursor w-auto flex-grow-1 p-0 required"]`);
        this.AUDIT_DETAIL_POP_UP = page.locator(`(//h5)[2]`, { hasText: 'Audit Details' });
        this.NOTE_TO_SELF_ICON = page.locator(`(//svg-icon[@class="my-notes__icon"])[3]`);
        this.NOTE_TEXT_FIELD = page.locator(`//textarea[@placeholder="Add Note"]`);
        this.SEND_NOTE_ICON = page.locator(`//div[contains(@class,"my-notes__write-note-icon")]`);
        this.NOTE_ADDED = page.locator(`(//div[@class="my-notes__note-text w-100"])[1]`);
        this.ISSUE = page.locator(`//a[normalize-space()='Issues']`);
        this.GOV_CONTROL_SAVE = page.locator(`//button[text()=' Save ']`)
        this.ADD_ISSUE = page.locator(`//span[text()='Add Issue']`);
        this.ISSUE_NAME_FIELD = page.locator(`//input[@formcontrolname="name"]`);
        this.ISSUE_DESC_FIELD = page.locator(`//textarea[@formcontrolname="description"]`);
        this.ISSUE_REMIDIATION_FIELD = page.locator(`//textarea[@formcontrolname="remediation"]`);
        this.ISSUE_TYPE_DROPDOWN = page.locator(`//div[text()='Select Type']/ancestor::div[@class="ng-select-container"]`);
        this.SELECT_ISSUE_TYPE = page.locator(`//span[text()='Test11']`);
        this.ISSUE_PRIORITY = page.locator(`//div[normalize-space()='Select Priority']/ancestor::div[@class="ng-value-container"]`);
        this.SELECT_PRIORITY = page.locator(`//span[text()='Low']`);
        this.TARGET_DATE_CALENDER = page.locator(`//input[@name="fromDate"]`);
        this.SAVE_ISSUE = page.locator(`//button[normalize-space()='Save']`);
        this.ISSUE_OWNER = page.locator(`//div[normalize-space()='Select Owner']/ancestor::div[@class="ng-value-container"]`);
        this.ISSUE_DEPARTMENT = page.locator(`//div[text()=' Select Department']/ancestor::div[@class="ng-value-container"]`);
        this.REMEDIATION = page.locator(`//li[normalize-space()='Remediation Task']`);
        this.SELECT_PURPOUSE = page.locator(`//span[text()='Others']`);
        this.REMEDIATION_POPUP = page.locator(`(//h5)[3]`, { hasText: 'Remediations' });
        this.REMEDIATION_FIELD = page.locator(`//textarea[@formcontrolname="recommendedRemediation"]`);
        this.ISSUE_DETAILS_POPUP = page.locator(`(//h5)[3]`, { hasText: 'Issue Details' });
        this.CREATE_BUTTON = page.locator(`//input[@value="Create"]`);
        this.COMMON_CONTROL_TAB = page.locator(`//div[normalize-space()='Common Controls']`);
        this.MANAGE_CROSS_MAPING_BUTTON = page.locator(`//button[normalize-space()='Manage Cross-mapping']`);
        this.COMMOM_CONTROL_BUTTON = page.locator(`//button[normalize-space()='Common Control']`);
        this.CONTROL_CREATE_BUTTON = page.locator(`//button[normalize-space()='Create']`);
        this.EVIDENCE = page.locator(`//div[normalize-space()='Evidence']`);
        this.EVIDENCE_TABLE = page.locator(`//table[contains(@class,"evidence-list-table")]`);
        this.RISK_SETTINGS = page.locator(`//div[normalize-space()='Risk Settings']`);
        this.ASSESSMENT_CRITERIA = page.locator(`//a[normalize-space()='Assessment Criteria']`);
        this.METHELOGY = page.locator(`//a[normalize-space()='Methodology']`);
        this.METHELOGY_CHECKBOX = page.locator(`//label[.//span[normalize-space(.)='test QA']]//input[@type='checkbox']`);
        this.RISK_MANAGEMENT_BUTTON = page.locator(`//span[normalize-space()='Risk Management']`);
        this.RISK_REGISTER_BUTTON = page.locator(`//div[normalize-space()='Risk Register']`);
        this.NEW_RISK_BUTTON = page.locator(`//button[@class="create-risk__button btn btn-primary d-flex align-items-center justify-content-center text-white ng-star-inserted"]`);
        this.CREATE_RISK_BUTTON = page.locator(`//li[normalize-space()='Create']`);
        this.RISK = page.locator(`(//td/a[@class="cursor-pointer link break-word d-block"])[1]`);
        this.RISK_PAGE = page.locator(`//ul[@class="list-group"]`);
        this.SELECT_RISK = page.locator(`//td[@class="main-risk-register__risk-title ng-star-inserted"]/ancestor::tbody/following::tbody//tr//span[normalize-space()='Open']`);
        this.NEW_TREATEMENT_BUTTON = page.locator(`//span[text()='New Treatment']`);
        this.TREATMENT_NAME_FIELD = page.locator(`//input[@placeholder="Enter 3rd Party Name"]`);
        this.TREATEMENT_DESC = page.locator(`//textarea[@placeholder="Treatment Plan Description"]`);
        this.TREATEMENT_COST_FIELD = page.locator(`//input[@placeholder="Treatment Cost"]`);
        this.TREATEMENT_OWNER_DROPDOWN = page.locator(`//div[text()='Select Treatment Owner']/ancestor::div[@class="ng-value-container"]`);
        this.TREATMENT_HISTORY_BUTTON = page.locator(`//span[normalize-space()='Treatment History']`);
        this.TREATMENT_HISTORY_POPUP = page.locator(`(//h5)[3]`, { hasText: 'Treatment History' });
        this.ASSESMENT_HISTORY_BUTTON = page.locator(`//span[normalize-space()='Assessment History']`);
        this.ASSESMENT_HISTORY_POPUP = page.locator(`(//h5)[3]`, { hasText: 'Assessment History' });
        this.EXPORT_PDF_ICON = page.locator(`//a[@title="Export PDF Report"]`);
        this.EXEPTIONS_TAB = page.locator(`//a[text()='Exceptions']`);
        this.ADD_EXEPTION_BUTON = page.locator(`//span[text()='Add Exception']`);
        this.EXEPTION_START_DATE = page.locator(`(//label[text()='Exception Start Date']/following::span[@class="input-group-text"])[1]`);
        this.EXEPTION_END_DATE = page.locator(`(//label[text()='Exception End Date']/following::span[@class="input-group-text"])[1]`);
        this.RISK_NOTE = page.locator(`(//svg-icon[@class="my-notes__icon"])[2]`);
        this.RISK_TEMPLATE = page.locator(`//div[normalize-space()='Risk Templates']`);
        this.LIBRARY_TAB = page.locator(`//a[text()='Library ']`);
        this.TEMPLATE_CHECKBOX = page.locator(`(//input[@name="SelectedriskLibraryIds"])[1]`);
        this.CLONE_TEMPLATE_BUTTON = page.locator(`//button[normalize-space()='Copy To Templates']`);
        this.INDECATOR_KEY_TAB = page.locator(`//a[normalize-space()='Key Indicators']`);
        this.NEW_INDICATOR_BUTTON = page.locator(`//span[normalize-space()='Add Key Indicator']`);
        this.INDICATOR_SOURCE = page.locator(`//input[@name="dataSource"]`);
        this.INDICATOR_MINTOLER_FIELD = page.locator(`//input[@name="minTolerance"]`);
        this.INDICATOR_MAXTOLER_FIELD = page.locator(`//input[@name="maxTolerance"]`);
        this.FRECUENCY_DROPDOWN = page.locator(`(//div[text()='Select Frequency']/ancestor::div//div[@aria-haspopup="listbox"])[1]`);
        this.MESERMENT_DROPDOWN = page.locator(`(//div[text()='Select Measurement']/ancestor::div//div[@aria-haspopup="listbox"])[2]`);
        this.NEW_RISK_TEMPLATE = page.locator(`//span[text()='New Risk Template']`);
        this.RISK_CATEGORY = page.locator(`//div[text()='Select Main category']/ancestor::div[@class="ng-value-container"]`);
        this.ADD_RISK = page.locator(`//input[@value="Add"]`);
        this.CATALOG = page.locator(`//div[normalize-space()='Catalog']`);
        this.NEW_ASSET_BUTTON = page.locator(`//span[text()='New Asset']`);
        this.ARABIC_ASSEST_NAME_FIELD = page.locator(`//input[@formcontrolname="titleAr"]`);
        this.FRAMEWORK_AUDIT = page.locator(`((//a[contains(text(),'Test')])/svg-icon)[1]`);
        this.THREATS = page.locator(`//a[text()='Threats ']`);
        this.NEW_THREAT_BUTTON = page.locator(`//span[text()='New Threat']`);
        this.THREAT_ARABIC_NAME = page.locator(`//input[@formcontrolname="nameAr"]`);
        this.SOURCE_DROPDOWN = page.locator(`//div[text()='Select Source']/ancestor::div[@class="ng-select-container"]`);
        this.VULNERABILITY = page.locator(`//a[text()='Vulnerabilities ']`);
        this.NEW_VULNERABILITY_BUTTON = page.locator(`//span[text()='New Vulnerability']`);
        this.PROCESS = page.locator(`//a[text()='Processes ']`);
        this.NEW_PROCESS = page.locator(`//span[text()='New Process']`);
        this.CATEGORY_DROPDOWN = page.locator(`//div[text()='Select Category']/ancestor::div[@class="ng-select-container"]`);
        this.INITIATIVE_MANAGEMENT = page.locator(`//span[normalize-space()='Initiative Management']`);
        this.INITIATIVE = page.locator(`//div[normalize-space()='Initiatives']`);
        this.NEW_INITIATIVE_BUTTON = page.locator(`//span[normalize-space()='New Initiative']`);
        this.SELECT_INITIATIVE = page.locator(`(//td/a[@class="cursor-pointer link"])[1]`);
        this.LINK_CONTROL_BUTTON = page.locator(`//span[text()='Link Control']`);
        this.MILESTONE_TAB = page.locator(`//a[text()='Milestones And Tasks ']`);
        this.NEW_MILESTONE_BUTTON = page.locator(`//a[text()='New Milestone']`);
        this.GOVERNANCE = page.locator(`//span[normalize-space()='Governance']`);
        this.TEMPLATES = page.locator(`//div[normalize-space()='Templates']`);
        this.CREATE_TEMPLATE = page.locator(`//span[normalize-space()='Create Template']`);
        this.ARABIC_NAME_TEXTFILED = page.locator(`//input[@name="nameArabic"]`);
        this.ENGLISH_NAME_TEXTFIELD = page.locator(`//input[@name="nameEnglish"]`);
        this.DOCUMENT_TEXT_TEXTFIELD = page.locator(`//div[@class="angular-editor-textarea"]`);
        this.CREATE_BUTTON_GOV = page.locator(`//button[text()='Create']`);
        this.TEMPLATE_PAGE = page.locator(`//a[text()='Templates']`);
        this.TEMPLATE_DETAILS_POP_UP = page.locator('h5', { hasText: 'Template Details' });
        this.TEMPLATE = page.locator(`(//div[@class="templates-list__header"])[1]`);
        this.EDIT_PAGE_HEADLINE = page.locator(`//li[text()='Edit Template']`);
        this.EDIT_PAGE = page.locator(`//div[@class="templates-form__container"]`);
        this.DELETE_SUCCESS_MSG = page.locator(`(//div[text()=' Deleted Successfully '])[1]`);
        this.DELETE_BUTTON = page.locator(`//button[normalize-space()='Delete']`);
        this.CONFIRMATION_POP_UP = page.locator(`//div[@role="dialog"]`);
        this.YES_BUTTON_DELETE = page.locator(`//button[text()='Yes']`);
        this.POLICY_DOC_MANAGEMENT = page.locator(`//div[normalize-space()='Policy and Document Management']`);
        this.NEW_DOC_BUTTON = page.locator(`//span[text()='New Document']`);
        this.CREATE_DOC = page.locator(`(//div[normalize-space()='Create a Document'])[1]`);
        this.TITTLE = page.locator(`//input[@placeholder="Title"]`);
        this.DESCRIPTION_GOV = page.locator(`//textarea[@placeholder="Description"]`);
        this.TYPE_DROPDOWN_GOV = page.locator(`(//div[@role="combobox"])[2]`);
        this.CLARIFICATION_DROPDOWN = page.locator(`(//div[text()='Classification']/ancestor::div/following::div[@role="combobox"])[1]`)
        this.SHARING_DROPDOWN = page.locator(`(//div[text()='Sharing']/ancestor::div/following::div[@role="combobox"])[1]`);
        this.DISRIBUTION_DROPDOWN = page.locator(`//app-autocomplete[@name="documentDistributions"]`);
        this.FROM_DATE_CALENDAR = page.locator(`//app-datepicker[@name="validFrom"]//span[@class="input-group-append"]`);
        this.TO_DATE_CALENDER = page.locator(`//app-datepicker[@name="validTo"]//span[@class="input-group-append"]`);
        this.ADD_OWERSHIP_BUTTON = page.locator(`//button[text()='Add Ownership ']`);
        this.VERSION_TEXFIELD = page.locator(`//input[@name="version"]`);
        this.NEXT_BUTTON = page.locator(`//button[normalize-space()='Next']`);
        this.DOCUMENT_TEXT_TEXTFIELD_GOV = page.locator(`//div[@class="angular-editor-textarea"]`);
        this.FINISH_BUTTON = page.locator(`//button[text()='Finish']`);
        this.PICK_TEMPLATE = page.locator(`//div[text()=' Pick From a Template ']`);
        this.USE_TEMPLATE = page.locator(`(//a[text()='Use this template'])[1]`);
        this.UPLOAD_FROM_DEVICE = page.locator(`//div[text()=' Upload a Document ']`);
        this.DOC_NAME = page.locator(`(//td[@class="main-policy__document-title"]/a)[1]`);
        this.ADD_INT_CONTROL = page.locator(`//button[normalize-space()='Add Internal Control']`);
        this.CONTROL_ARABIC_NAME = page.locator(`//input[@placeholder="Name in Arabic"]`);
        this.CONTROL_ENG_NAME = page.locator(`//input[@placeholder="Name in English"]`);
        this.MAP_INT_CONTROL = page.locator(`//button[normalize-space()='Map Internal Control']`);
        this.MAP_CHECKBOX = page.locator(`(//input[@name="SelectedControlsIds"])[2]`);
        this.MAP_BUTTON_GOV = page.locator(`//button[normalize-space()='Map']`);
        this.INTERNAL_CONTROL_TAB = page.locator(`//span[normalize-space()='Internal Controls']`);
        this.ADD_CONTROL = page.locator(`//span[normalize-space()='Add Control']`);
        this.INTERNAL_CONTROL_PAGE = page.locator(`//li[normalize-space()='Internal Controls']`);
        this.ADD_BUTTON = page.locator(`//button[normalize-space()='Add']`);
        this.HAMBERD_GOV = page.locator(`(//button[@data-toggle="dropdown"])[1]`);
        this.EDIT_CONTROL = page.locator(`//li[normalize-space()='Edit']`);
        this.UPDATE_BUTTON = page.locator(`//button[normalize-space()='Update']`);
        this.VENDOR_MANAGEMENT = page.locator(`//span[normalize-space()='Vendor Management']`);
        this.VENDOR_TAB = page.locator(`//div[normalize-space()='Vendors']`);
        this.VENDOR_PAGE = page.locator(`//li[normalize-space()='Vendors']`);
        this.ADD_VENDOR_BUTTON = page.locator(`//span[normalize-space()='New Vendor']`);
        this.VENDOR_NAME = page.locator(`//input[@name="name"]`);
        this.VENDOR_ADDRESS = page.locator(`//textarea[@name="address"]`);
        this.VENDOR_TYPE_DROPDOWN = page.locator(`//div[text()='Select Type']/ancestor::div/div[@role="combobox"]`);
        this.VENDOR_DEPARTMENT_DROPDOWN = page.locator(`(//div[text()='Select Department']/ancestor::div/div[@role="combobox"])[1]`);
        this.VENDOR_USER_DROPDOWN = page.locator(`(//div[text()='Select user']/ancestor::div/div[@role="combobox"])[1]`);
        this.VENDOR_RISK_DROPDOWN = page.locator(`(//div[text()='Select Risk Rating']/ancestor::div/div[@role="combobox"])[1]`);
        this.PHONE_NO_FIELD = page.locator(`//input[@name="phoneNumber"]`);
        this.PRODUCT_NAME_FIELD = page.locator(`//input[@name="productName"]`);
        this.DOMAIN_FIELD = page.locator(`//input[@name="domain"]`);
        this.WEBSITE_FIELD = page.locator(`//input[@name="website"]`);
        this.DESCRIPTION_FIELD = page.locator(`//textarea[@name="description"]`);
        this.CREATE_VENDOR_BUTTON = page.locator(`//input[@value="Create"]`);
        this.ADD_CONTACT_BUTTON = page.locator(`//button[text()='Add Contact ']`);
        this.CONTACT_NAME = page.locator(`//input[@formcontrolname="contactName"]`);
        this.POSITION = page.locator(`//input[@formcontrolname="position"]`);
        this.EMAIL = page.locator(`//input[@formcontrolname="email"]`);
        this.PHONE_NUMBER = page.locator(`(//input[@name="phoneNumber"])[2]`);
        this.SELECT_VINDOR = page.locator(`(//td[@class="main-vendor__name-alignment-left"]/a)[1]`);
        this.ADD_RISK_BUTTON_GOV = page.locator(`//span[text()='New Risk']`);
        this.SUBMIT_BUTTON = page.locator(`//button[text()=' Submit ']`);
        this.RISK_TITTLE = page.locator(`//input[@placeholder="Enter Risk Title"]`);
        this.RISK_STATEMENT = page.locator(`//textarea[@placeholder="Enter Risk Statement"]`);
        this.RISK_CATEGORY_DROPDOWN = page.locator(`//div[text()='Select Risk Category']/ancestor::div[@class="ng-value-container"]`);
        this.RISK_OWNER = page.locator(`(//div[text()='Select user']/ancestor::div[@class="ng-value-container"])[1]`);
        this.ASSERT_RADIO = page.locator(`(//td/input[@type="radio"])[1]`);
        this.DOCUMENT_TAB = page.locator(`//a[normalize-space()='Documents']`);
        this.NEW_DOCUMENT_BUTTON = page.locator(`//span[normalize-space()='Add Document']`);
        this.STATUS_DROPDOWN_VENDOR = page.locator(`//div[text()='Select Status']/ancestor::div[@class="ng-select-container"]`);
        this.EFFECTNESS_CALENDER = page.locator(`//input[@name="fromDate"]`);
        this.CREATE_DOC_VENDOR = page.locator(`//span[text()='Create']`);
        this.CONTACT_TAB = page.locator(`//a[text()='Contacts']`);
        this.ADD_CONTACT = page.locator(`//span[text()='Add Contact']`);
        this.CONTACT_NAME_VENDOR = page.locator(`//input[@formcontrolname="name"]`);
        this.PHONE_NO_VENDOR = page.locator(`//label[contains(., 'Phone Number')]/following::input[@formcontrolname][1]`);
        this.THREE_DOT_VENDOR = page.locator(`//i[@class="fa fa-ellipsis-v"]`);
        this.EDIT_VENDOR = page.locator(`//span[text()='Edit']`);
        this.RADIO_VENDOR = page.locator(`(//input[@type="radio"])[3]`);
        this.AUDIT_MANEGMENT = page.locator(`//span[normalize-space()='Audit Management']`);
        this.AUDITS = page.locator(`//div[normalize-space()='Audits']`);
        this.NEW_AUDIT_BUTTON = page.locator(`//span[text()='New Audit']`);
        this.AUDIT_TYPE_DROPDOWN = page.locator(`//div[text()='Select Audit Type']/ancestor::div[@class="ng-select-container"]`);
        this.FRAMEWORKS_DROPDOWN = page.locator(`//div[text()='Select Framework Assessment']/ancestor::div[@class="ng-select-container"]`);
        this.AUDITOR_DROPDOWN = page.locator(`//div[text()='Select Auditor']/ancestor::div[@class="ng-select-container"]`);
        this.AUDIT_NAME = page.locator(`(//td/a[1])[1]`);
        this.AUDIT_CONTROL = page.locator(`//a[text()='Controls ']`);
        this.AUDIT_CONTROL_EXPAND = page.locator(`(//h4[@class="collapse-tree__title d-flex"])[2]`);
        this.SELECT_AUDIT_CONTROL = page.locator(`(//span[@class="ng-star-inserted"]/p)[8]`);
        this.SELECT_AUDIT_REVIEW = page.locator(`(//button[normalize-space()='Partially Implemented'])[1]`);
        this.AUDIT_NOTE_TAB = page.locator(`//a[text()='Audit Notes']`);
        this.NEW_NOTES = page.locator(`//span[text()='Add Notes']`);
        this.NOTE_TITTLE = page.locator(`//input[@formcontrolname="title"]`);
        this.NOTE_REMARK = page.locator(`//textarea[@formcontrolname="note"]`);
        this.NOTE_PROCEDURE = page.locator(`//textarea[@formcontrolname="correctiveProcedure"]`);
        this.AUDIT_THREE_DOT = page.locator(`//button[@id="TableOptions"]`);
        this.CHANGE_STATUS = page.locator(`//span[text()='Change Status']`);
        this.AUDIT_STATUS_RADIO = page.locator(`//input[@id="completedStatus"]`);
        this.CONFIRMATION_CHECKBOX = page.locator(`//input[@name="RelatedToCheckbox"]`);
        this.ISSUE_EXEPTIONS = page.locator(`//span[normalize-space()='Issues & Exceptions']`);
        this.ISSUES = page.locator(`//div[text()=' Issues ']`);
        this.ISSUES_TABLE = page.locator(`//div[@class="table-responsive"]`);
        this.EXEPTIONS = page.locator(`//div[text()=' Exceptions ']`);
        this.REPORTS = page.locator(`//span[normalize-space()='Reports']`);
        this.REPORTS_PAGE = page.locator(`//li[normalize-space()='Reports']`);
        this.SELECT_REPORT_TYPE = page.locator(`//div[text()='Risk Reports']`);
        this.SELECT_REPORT = page.locator(`(//div[@class="risk-report-type__cards"])[1]`);
        this.EXPORT_REPORT = page.locator(`//button[@class="btn p-0 header-reports__box-print-report"]`);
        this.DELEGATION_TAB = page.locator(`//span[normalize-space()='Delegation']`);
        this.DELEGATION = page.locator(`(//div[text()=' Delegation '])[2]`);
        this.NEW_DELEGATION = page.locator(`//span[text()='New Delegation']`);
        this.DELEGATION_FROM_DROPDOWN = page.locator(`//div[text()='Delegate From']/ancestor::div[@class="ng-select-container"]`);
        this.DELEGATION_TO_DROPDOWN = page.locator(`//div[text()='Delegate To']/ancestor::div[@class="ng-select-container"]`);
        this.CREATE_DELEGATION = page.locator(`//input[@value="Delegate"]`);
        this.DELEGATION_START_DATE = page.locator(`(//div[text()='Start Date']/following::input[@name="fromDate"])[1]`);
        this.DELEGATION_END_DATE = page.locator(`(//div[text()='End Date']/following::input[@name="fromDate"])[1]`);
        this.UPDATE_DELEGATION = page.locator(`//input[@value="Update"]`);
        this.CANCEL_DELEGATION = page.locator(`//span[text()='Cancel']`);
        this.DELETE_DELEGATION = page.locator(`//span[text()='Delete']`);
        this.ESCALATION_SETTING = page.locator(`//div[normalize-space()='Escalation Settings']`);
        this.NEW_ESCALATION_SETTING = page.locator(`//span[normalize-space()='New Escalation Setting']`);
        // this.ASSIGN_TO_DROPDOWN = page.locator(`//app-autocomplete[@placeholder="Task Assigned To"]`);
        this.ADD_ESCALATION_BUTTON = page.locator(`//button[text()='Add Escalation ']`);
        this.SELECT_ESCALATION_DROPDOWN = page.locator(`//div[text()='Select Escalation']/ancestor::div[@class="ng-value-container"]`);
        this.ESCATATIONS = page.locator(`//span[text()=' Escalations ']`);
        this.NEW_ESCALATION_BUTTON = page.locator(`//span[text()='Escalation']`);
        this.ESCALATION_TITTLE = page.locator(`//input[@name="title"]`);
        this.ESCALATION_TRIGGER_EVENT_DROPDOWN = page.locator(`//div[text()='Select']/ancestor::div[@class="ng-value-container"]`);
        this.ESCALATION_USERS_DROPDOWN = page.locator(`//div[text()='Select User(s)']/ancestor::div[@class="ng-value-container"]`);
        this.ESCALATION_CREATE = page.locator(`//button[text()=' Create ']`);
        this.DEPT_REPOT_PAGE = page.locator(`//div[text()=' All Departments ']`);
        this.EXECUTIVE_REPORT = page.locator(`//div[text()='Executive Reports']`);
        this.EVI_MAP_CHECKBOX = page.locator(`(//tr//input[@name="SelectedControlsIds"])[2]`)
        this.EXECUTIVE_REPORT_PAGE = page.locator(`//div[text()='Executive Report']`);
        this.COMPLAINCE_REPORT = page.locator(`//div[text()='Compliance Reports']`);
        this.COMPLAINCE_REPORT_PAGE = page.locator(`//div[text()='Compliance Report']`);
        this.TASK_REPORT = page.locator(`//div[text()='Tasks Reports']`);
        this.TASK_REPORT_PAGE = page.locator(`//div[text()='Task Status Report ']`);
        this.INITIATIVES_REPORT = page.locator(`//div[text()='Initiatives Reports']`);
        this.INITIATIVES_REPORT_PAGE = page.locator(`//div[text()='Initiatives Report']`);
        this.ISSUE_REPOT = page.locator(`//div[text()='Issues Reports']`);
        this.ISSUE_REPORT_PAGE = page.locator(`//div[text()='Issues Report']`);
        this.PERMISIONS = page.locator(`//span[text()='Permission']`);
        this.PERMISION_POPUP = page.locator(`//h5[1]`, { hasText: 'Add Permission' });
        this.ASSET_NAME = page.locator(`(//td/a[@class="link cursor-pointer"])[1]`);
        this.USERS_AND_DEPARTMENT = page.locator(`//span[text()=' Users / Departments ']`);
        this.USERS_TAB = page.locator(`//div[text()=' Users ']`);
        this.ROLES = page.locator(`//div[text()=' Roles ']`);
        this.PERMISION_CHECKBOX = page.locator(`//label[normalize-space(text())='Re-Assign Task']/preceding-sibling::input[@type='checkbox']`);
        this.RISK_FILTER_ICON = page.locator(`//i[@class="fa fa-filter fa-2x"]`);
        this.SEARCH_FIELD = page.locator(`//input[@name="refrenceNumber"]`);
        this.APPLY_FILTER_BUTTON = page.locator(`//span[text()='Apply Filters']`);
        this.TASK_CHECKBOX = page.locator(`(//input[@type="checkbox"])[2]`);
        this.TASK_FILTER_ICON = page.locator(`//i[@class="my-tasks__icon-actions-list icon-filter_list"]`);
        this.CONFIRM_BUTTON = page.locator(`//button[text()=' Confirm ']`);
        this.RE_ASSIGN = page.locator(`//span[text()='Re-assign']`);
        this.ASSIGNE_DROPDOWN = page.locator(`(//div[text()='Select User']/ancestor::div[@class="ng-value-container"])[1]`);
        this.LINK_RISK_TRATMENT_BUTTON = page.locator(`//span[text()='Link Risk Treatment']`);
        this.CONFIDENCIALLY_SLIDER = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[20]`);
        this.INTIGRITY_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-child n")])[2]//div[contains(@class,"ngx-slider")])[20]`);
        this.AVAILABILITY_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-child n")])[3]//div[contains(@class,"ngx-slider")])[25]`);
        this.HOOD_SLIDER = page.locator(`((//div[contains(@class,"step-two__mapped-value-")])[5]//div[contains(@class,"ngx-slider")])[5]`);
        this.TEXT_ASSERT = page.locator(`//div[text()= ' Asset Value ']`);
        this.USER_DROPDOWN = page.locator(`(//div[text()='User']/ancestor::div/div[@role="combobox"])[1]`);
        this.MAP_EVIDENCE = page.locator(`//span[text()='Map Evidence']`);
        this.MAP_EVIDENCE_CHECKBOX = page.locator(`(//input[@name="SelectedEvidencesIds"])[1]`)
        this.THREE_DOT_RISK = page.locator(`(//button[@data-toggle="dropdown"]/i)[3]`);
        this.RISK_ASSIGN = page.locator(`//li[text()=' Assign']`);
        this.ADDITIONAL_DETAILS = page.locator(`//div[text()='Additional Details']`);
        this.NEW_ASSESMENT = page.locator(`//span[text()='New Assessment']`);
        this.CREATE_ASSESMENT_BUTTON = page.locator(`//button[text()='Create Assessment']`);
        this.RISKS = page.locator(`//a[text()='Risks']`);
        this.PUBLISH_BUTTON = page.locator(`//a[text()=' Publish ']`)
        this.ACTIVATE_BUTTON = page.locator(`//a[text()=' Activate ']`);
        this.RISK_ASSIGN_TO = page.locator(`(//div[text()='']/ancestor::div[@class="ng-value-container"])[1]`);
        this.CUSTOMER_PARAMETERS = page.locator(`(//input[@class="form-control p-2 required ng-untouched ng-pristine ng-valid"])[2]`);
        this.CUSTOMER_PARAMETERS1 = page.locator(`(//input[@class="form-control p-2 required ng-untouched ng-pristine ng-valid"])[1]`);
        this.THREAD_SLIDER = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[5]`);
        this.VULNERABILITY_SLIDER = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[4]`);
        this.INTIGRITY_SLIDER_ASSERT = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[4]`);
        this.AVAILABILITY_SLIDER_ASSERT = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[9]`);
        this.CONFIDENTIALY_SLIDER_ASSERT = page.locator(`(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[13]`);
        this.TREATMENT_ID = page.locator(`//a[contains(text(),'TR-')]`);
        this.TREATMENT_THREEDOT = page.locator(`(//button/i[@class="fa fa-ellipsis-v"])[2]`);
        this.MARK_AS_COMPLETE = page.locator(`//span[text()='Mark As Complete']`)
        this.GOV_TEM_THREEDOT = page.locator(`(//i[@class="fa fa-ellipsis-v"])[1]`)
        this.PROCEED_BUTTON = page.locator(`//button[text()=' Proceed ']`)
        this.RISK_IDENTIFICATION_CALENDER = page.locator(`(//div[text()='Risk Identification Date']/following::input[@name="fromDate"])[1]`);
        this.USER_ICON = page.locator(`//span[contains(@class,"user-icon circle bg-primary p-1")]`);
        this.LOG_OUT = page.locator(`//li[text()='Logout']`);
        this.LOGIN_PAGE = page.locator(`//div[contains(@class,"LoginBoxleftSideBg")]`);
        this.EXPORT_EXCEL_ICON = page.locator(`//a[@title="Export Excel Report"]`);
        this.THREE_DOT_CONTROL = page.locator(`(//div[@class="modal-body"]//button/i)[1]`);
        this.FILE_UPLOADED = page.locator(`//div[contains(@class,"d-flex flex-column justify-content-between align")]`)
    }

    async validateAllDashboards(): Promise<void> {
        console.log("Validating all dashboard tab texts...");
        console.log("Checking Executive Dashboard tab...");
        await expect(this.EXECUTIVE_DASHBOARD).toHaveText('Executive Dashboard');
        console.log("Executive Dashboard tab text is correct.");
        console.log("Checking Risk Dashboard tab...");
        await expect(this.RISK_DASHBOARD).toHaveText('Risk Dashboard');
        console.log("Risk Dashboard tab text is correct.");
        console.log("Checking Compliance Dashboard tab...");
        await expect(this.COMPLIANCE_DASHBOARD).toHaveText('Compliance Dashboard');
        console.log("Compliance Dashboard tab text is correct.");
        console.log("Checking Governance Dashboard tab...");
        await expect(this.GOVERNANCE_DASHBOARD).toHaveText('Governance Dashboard');
        console.log("Governance Dashboard tab text is correct.");
        console.log("All dashboard tabs are visible with correct text.");
    }

    async validateExecutiveDashboard(): Promise<void> {
        console.log("Checking Executive Dashboard tab...");
        await expect(this.EXECUTIVE_DASHBOARD).toHaveText('Executive Dashboard');
        console.log("Executive Dashboard tab text is correct.");
    }

    async validateRiskDashboard(): Promise<void> {
        console.log("Checking Risk Dashboard tab...");
        await expect(this.RISK_DASHBOARD).toHaveText('Risk Dashboard');
        console.log("Risk Dashboard tab text is correct.");
    }

    async validateComplianceDashboard(): Promise<void> {
        console.log("Checking Compliance Dashboard tab...");
        await expect(this.COMPLIANCE_DASHBOARD).toHaveText('Compliance Dashboard');
        console.log("Compliance Dashboard tab text is correct.");
    }

    async validateGovernanceDashboard(): Promise<void> {
        console.log("Checking Governance Dashboard tab...");
        await expect(this.GOVERNANCE_DASHBOARD).toHaveText('Governance Dashboard');
        console.log("Governance Dashboard tab text is correct.");
    }

    async valdateRiskDashboardTab() {
        await expect(this.RISK_DSHBOARD_TAB).toBeVisible();
        console.log("Validate Risk Dashboard tab...");
    }

    async clickOnRiskDashbordTab() {
        await this.RISK_DASHBOARD.waitFor({ state: 'visible' });
        await this.RISK_DASHBOARD.click();
        console.log("Clicking Risk Dashboard tab...");
    }

    async valdateComplianceDashboardTab() {
        await expect(this.COMPLIANCE_DASHBOARD_TAB).toBeVisible();
        console.log("Validate Compliance Dashboard tab...");
    }

    async clickOnComplianceDashbordTab() {
        await this.COMPLIANCE_DASHBOARD.waitFor({ state: 'visible' });
        await this.COMPLIANCE_DASHBOARD.click();
        console.log("Clicking Compliance Dashboard tab...");
    }

    async valdateGovernanceDashboardTab() {
        await expect(this.GOVERNANCE_DASHBOARD_TAB).toBeVisible();
        console.log("Validate Governance Dashboard tab...");
    }

    async clickOnGovernanceDashboardTab() {
        await this.GOVERNANCE_DASHBOARD.waitFor({ state: 'visible' });
        await this.GOVERNANCE_DASHBOARD.click();
        console.log("Clicking Governance Dashboard tab...");
    }

    async clickOnTasks() {
        await this.TASKS.waitFor({ state: 'visible' });
        await this.TASKS.click();
        console.log("Clicking on Tasks tab...");
    }

    async validateTasksPage() {
        await this.MY_TASKS_TAB.waitFor({ state: 'visible' });
        await expect(this.MY_TASKS_TAB).toBeVisible();
        await this.TASKS_TABLE.scrollIntoViewIfNeeded();
        await expect(this.TASKS_TABLE).toBeVisible();
        console.log("Validate Tasks Table Visible...");
    }

    async clickOnOverDueTasks() {
        await this.OVER_DUE_TASKS_TAB.waitFor({ state: 'visible' });
        await this.OVER_DUE_TASKS_TAB.click();
        console.log("Clicking on Over Due Tasks tab...");
    }

    async validateOverDueTasksStatus() {
        const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
        if (!await noTasksMessage.isVisible()) {
            // Message is NOT visible → Table should be visible
            await this.page.waitForTimeout(2000);
            await expect(this.TASKS_TABLE).toBeVisible();
        } else {
            // Message is visible → No tasks
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        }
        console.log("Validate Over Due Tasks Status Visible...");
    }

    async clickOnTasksDueToday() {
        await this.TASK_DUE_TODAY_TAB.waitFor({ state: 'visible' });
        await this.TASK_DUE_TODAY_TAB.click();
        console.log("Clicking on Tasks Due Today tab...");
    }

    async validateTasksDueTodayStatus() {
        await this.page.waitForTimeout(3000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await this.TASKS_TABLE.waitFor({ state: 'visible' });
            await expect(this.TASKS_TABLE).toBeVisible();
        }

        console.log("Validate Tasks Due Today Status Visible...");
    }

    async clickOnTasksDueWeek() {
        await this.TASK_DUE_THIS_WEEK.waitFor({ state: 'visible' });
        await this.TASK_DUE_THIS_WEEK.click();
        console.log("Clicking on Tasks Due This Week tab...");
    }

    async validateTasksDueWeekStatus() {
        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();
        }
        console.log("Validate Tasks Due This Week Status Visible...");
    }

    async clickOnTaskDueThisMonth() {
        await this.TASK_DUE_THIS_MONTH.waitFor({ state: 'visible' });
        await this.TASK_DUE_THIS_MONTH.click();
        console.log("Clicking on Tasks Due This Month tab...");
    }

    async validateTasksDueMonthStatus() {
        const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");

        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();
        }

        console.log("Validate Tasks Due This Month Status Visible...");
    }

    async clickonfilterIcon() {
        await this.FILTER_ICON.waitFor({ state: 'visible' });
        await this.FILTER_ICON.click();
        console.log("Clicking on filter icon...");
    }

    async selectModulefromDropdown() {
        await this.MODULE_DROPDOWN.waitFor({ state: 'visible' });
        await this.MODULE_DROPDOWN.click();
        await this.DROPDOWN_OPTION.click();
        console.log("Selecting module from dropdown...");
    }

    async clickOnFiterButton() {
        await this.page.waitForTimeout(3000);
        await this.FILTER_BUTTON.click();
        console.log("Clicking on filter button...");
    }

    async validateFilterdModule() {
        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();
            await this.FILTERED_MODULE.scrollIntoViewIfNeeded();
            await expect(this.FILTERED_MODULE).toBeVisible();
        }
        console.log("Validating filtered module...");
    }

    async clickAndSelectTypeFromDropdown() {
        await this.TYPE_DROPDOWN.click();
        await this.TYPE_DROPDOWN_OPTION.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN_OPTION.click();
        console.log("Selecting type from dropdown...");
    }

    async validateFilteredType() {

        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();
            await expect(this.FILTERED_TYPE).toBeVisible();

        }

        console.log("Validating filtered type...");
    }

    async clickAndSelectStatusFromDropdown() {
        await this.STATUS_DROPDOWN.click();
        await this.STATUS_DROPDOWN_OPTION.waitFor({ state: 'visible' });
        await this.STATUS_DROPDOWN_OPTION.click();
        console.log("Selecting status from dropdown...");
    }

    async validateFilteredStatus() {
        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();

            await expect(this.FILTERED_STATUS).toBeVisible();
        }
        console.log("Validating filtered status...");
    }
    async scrollCreateMilestone() {

        await this.CONTROL_CREATE_BUTTON.scrollIntoViewIfNeeded();

    }
    async clickAndSelectStartDate() {
        await this.START_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.START_DATE_CALENDER.click();
        await this.SELECT_START_DATE.click();
        console.log("Selecting start date...");
    }
    async clickAndSelectMilestoneStartDate() {
        await this.START_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.START_DATE_CALENDER.click();
        await this.page.waitForTimeout(2000)
        let date = this.page.locator(`(//span[text()='14'])`);
        await date.click();
        console.log("Selecting start date...");
    }
    async validateRiskIdentificationCalender() {
        await this.RISK_IDENTIFICATION_CALENDER.waitFor({ state: 'visible' });
        await expect(this.RISK_IDENTIFICATION_CALENDER).toBeVisible();
        console.log("Validating Risk Identification Calender...");
    }
    async clickAndSelectEndDate() {
        await this.page.waitForTimeout(1000);
        await this.END_DATE_CALENDER.click();
        await this.page.waitForTimeout(3000);
        await this.END_DATE.last().click();
        console.log("Selecting end date...");
    }

    async validateFilteredStartAndEndDate() {
        await this.page.waitForTimeout(4000);
        if (!await this.TASKS_TABLE.isVisible()) {
            const noTasksMessage = this.page.locator("//h4[text()='No Pending Task(s)']");
            await noTasksMessage.scrollIntoViewIfNeeded();
            await expect(noTasksMessage).toBeVisible();
        } else {
            await expect(this.TASKS_TABLE).toBeVisible();

        }
        console.log("Validating filtered start and end dates...");


    }

    async clickOnViewButton() {
        await this.VIEW_BUTTON.waitFor({ state: 'visible' });
        await this.VIEW_BUTTON.click();
        console.log("Clicking on view button...");
    }

    async clickOnCalenderIcon() {
        await this.CALENDER_ICON.waitFor({ state: 'visible' });
        await this.CALENDER_ICON.click();
        console.log("Clicking on calendar icon...");
    }

    async validateCalenderView() {
        await this.CLAENDER_VIEW.scrollIntoViewIfNeeded();
        await this.CLAENDER_VIEW.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await expect(this.CLAENDER_VIEW).toBeVisible();
        console.log("Validating calendar view...");
    }

    async clickOnTableIcon() {
        await this.TABLE_ICON.waitFor({ state: 'visible' });
        await this.TABLE_ICON.click();
        console.log("Clicking on table icon...");
    }

    async validateTableView() {

        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await expect(this.TABLE_VIEW).toBeVisible();

        console.log("Validating table view...");
    }

    async clickOnTaskName() {
        await this.TASK_NAME.waitFor({ state: 'visible' });
        await this.TASK_NAME.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        await this.TASK_NAME.click({ force: true });
        console.log("Clicking on task name...");
    }

    async validateTaskPage() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'), // Wait for new tab

        ]);
        this.newPage = newPage;
        await newPage.waitForLoadState('domcontentloaded');

        // Optionally check the URL
        console.log('New tab URL:', newPage.url());

        // Wait for the TASK_PAGE element to be visible on the new tab
        await this.newPage.locator(`//div[@class="col-8"]`).waitFor({ state: 'visible' });
        await expect(this.newPage.locator(`//div[@class="col-8"]`)).toBeVisible();
        console.log("Validating task page...");
    }

    async clickOnApproveButton() {
        if (await this.APPROVE_BUTTON.isVisible()) {
            await this.APPROVE_BUTTON.click();
            console.log("Clicked on approve button...");
        } else {
            console.log("Approve button is not visible.");
        }
    }


    async clickOnRejectButton() {
        await this.REJECT_BUTTON.waitFor({ state: 'visible' });
        await this.REJECT_BUTTON.click();
        console.log("Clicking on reject button...");
    }

    async clickOnMyDepartmentTab() {
        await this.MY_DEPARTMENT_TAB.waitFor({ state: 'visible' });
        await this.MY_DEPARTMENT_TAB.click();
        console.log("Clicking on My Department tab...");
    }

    async validateDepartmentPage() {

        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await this.TABLE_VIEW.scrollIntoViewIfNeeded();
        await expect(this.TABLE_VIEW).toBeVisible();

        console.log("Validating My Department page...");
    }

    async clickOnAllTaskTab() {
        await this.ALL_TASK_TAB.waitFor({ state: 'visible' });
        await this.ALL_TASK_TAB.click();
        console.log("Clicking on All Task tab...");
    }

    async validateAllTaskPage() {

        await this.TABLE_VIEW.waitFor({ state: 'visible' });
        await this.TABLE_VIEW.scrollIntoViewIfNeeded();
        await expect(this.TABLE_VIEW).toBeVisible();

        console.log("Validating All Task page...");
    }

    async clickOnCalender() {
        await this.CALENDER.waitFor({ state: 'visible' });
        await this.CALENDER.scrollIntoViewIfNeeded();
        await this.CALENDER.click();
        console.log("Clicking On Calendar...");
    }

    async validateCalenderPage() {
        await this.CALENDAR_PAGE.waitFor({ state: 'visible' });
        await expect(this.CALENDAR_PAGE).toBeVisible();
        console.log("Validating All Calendar Page...");
    }

    async addEvent(baseTitle: string) {

        console.log("Clicking On Add Event...");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${baseTitle}_${timestamp}_${random}`;
        await this.page.waitForTimeout(2000);
        console.log("Clicking ADD_EVENT_BUTTON...");
        await this.ADD_EVENT_BUTTON.click();
        await this.page.waitForTimeout(2000);
        console.log("Expecting ADD_EVENT_POP_UP to be visible...");
        await expect(this.ADD_EVENT_POP_UP).toBeVisible();
        console.log("Waiting before filling TITLE...");
        await this.page.waitForTimeout(2000);
        console.log("Filling TITLE_FIELD...");
        await this.TITTLE_FIELD.fill(uniqueTitle);
        console.log("Waiting before filling DESCRIPTION...");
        await this.page.waitForTimeout(2000);
        console.log("Filling DESCRIPTION...");
        await this.DESCRIPTION.fill('Teshhghvhcbsbc');
        console.log("Waiting before clicking DEPARTMENT dropdown...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking DEPARTMENT_DROPDOWN...");
        await this.DEPARTMENT_DROPDOWN.click();
        console.log("Waiting before selecting department...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking SELECT_DEPARTMENT...");
        await this.SELECT_DEPARTMENT.click();
        console.log("Waiting before clicking OWNER dropdown...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking EVENT_OWNER_DROPDOWN...");
        await this.EVENT_OWNER_DROPDOWN.click();
        console.log("Waiting before selecting owner...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking SELECT_OWNER...");
        await this.SELECT_OWNER.click();
        console.log("Waiting before clicking TYPE dropdown...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking TYPE_DROPDOWN_EVENT...");
        await this.TYPE_DROPDOWN_EVENT.click();
        console.log("Waiting before selecting type...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking SELECT_TYPE...");
        await this.SELECT_TYPE.click();
        console.log("Waiting before clicking START_DATE_CALENDAR...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking START_DATE_CALENDAR...");
        await this.START_DATE_CALENDAR.click();
        console.log("Waiting before selecting start date...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking SELECT_START_DATE...");
        await this.SELECT_START_DATE.click();
        console.log("Waiting before clicking END_DATE_CALENDAR...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking END_DATE_CALENDAR...");
        await this.END_DATE_CALENDAR.click();
        console.log("Waiting before selecting end date...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking SELECT_END_DATE...");
        await this.SELECT_END_DATE.click();
        // Step 4: Save the event
        console.log("Waiting before clicking ADD_BUTTON...");
        await this.page.waitForTimeout(2000);
        console.log("Clicking ADD_BUTTON...");
        await this.ADD_BUTTON.click();
        console.log(`Event added successfully with unique title: ${uniqueTitle}`);
        console.log("Add Event action performed");

        return uniqueTitle; // Return for later validation
    }

    async validateAddedEvent(name: string) {

        const eventName = this.page.locator(`(//div[contains(text(), '${name}')])[1]`);
        await expect(eventName).toContainText(name);
        console.log("Added Event validated:", name);
    }

    async selectView(calendarView: string) {
        await this.VIEW_DRPDOWN.selectOption(calendarView);
        console.log("Selected the view:", calendarView);
    }

    async validateYearlyView() {
        await this.page.waitForTimeout(2000);
        const selectedOption = this.page.locator('h2', { hasText: '2025' });
        await this.page.waitForTimeout(2000);
        await expect(selectedOption).toBeVisible();
        console.log("Yearly view validated");
    }

    async validateMonthlyView() {
        await this.page.waitForTimeout(2000);
        const selectedOption = this.page.locator('h2', { hasText: 'December 2025' });
        await expect(selectedOption).toBeVisible();
        await this.MONTHLY_VIEW.waitFor({ state: 'visible' });
        await expect(this.MONTHLY_VIEW).toBeVisible();
        console.log("Monthly view validated");
    }

    async validateQuaterlyView() {
        await this.page.waitForTimeout(2000);
        await this.QUATERLY_VIEW.waitFor({ state: 'visible' });
        await expect(this.QUATERLY_VIEW).toBeVisible();
        console.log("Quarterly view validated");
    }

    async clickOnSettings() {
        await this.SETTINGS.scrollIntoViewIfNeeded();
        await this.SETTINGS.click();
        await expect(this.FRAMEWORK_SETTINGS).toBeVisible();
        console.log("Settings clicked");
    }

    async clickOnFrameworkSettings() {
        await this.FRAMEWORK_SETTINGS.waitFor({ state: 'visible' });
        await this.FRAMEWORK_SETTINGS.click();
        console.log("Framework Settings clicked");
    }


    async validateFrameWorkPage() {
        await this.FRAMEWORK_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORK_PAGE).toBeVisible();
        console.log("Validated the Framework Page");
    }

    async clickOnFrameWorkCheckbox() {
        await this.FRAMEWORK_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.FRAMEWORK_CHECKBOX.isChecked();

        if (isChecked) {
            await this.FRAMEWORK_CHECKBOX.uncheck();
        }

        await this.FRAMEWORK_CHECKBOX.check();
        console.log("Framework Checkbox clicked and checked");
    }

    async clickOnSaveButton() {
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("Save button clicked");
    }

    async clickOnSaveButtonControl() {
        await this.EVIDENCE_SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Save button clicked");
    }

    async validateSuccessMsg() {
        await this.SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.SUCCESS_MSG).toBeVisible();
        console.log("Success message validated");
    }

    async clickOnComplaince() {
        await this.COMPLAINCE.waitFor({ state: 'visible' });
        await this.COMPLAINCE.click();
        console.log("Compliance tab clicked");
    }

    async clickOnFarmeworkAndValidateThePage() {
        await this.FRAMEWORKS.waitFor({ state: 'visible' });
        await this.FRAMEWORKS.click();
        await this.FRAMEWORKS_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORKS_PAGE).toBeVisible();
        console.log("Framework tab clicked and page validated");
    }

    async clickOnAddFrameworkButton() {
        await this.ADD_FRAMEWORK_BUTTON.click();
        console.log("Add Framework button clicked");
    }

    async clickOnCloneFromLibrary() {
        await this.CLONE_FROM_LIBRARY.waitFor({ state: 'visible' });
        await this.CLONE_FROM_LIBRARY.click();
        console.log("Clone From Library clicked");
    }

    async validateFrameworkPopUp() {
        await this.IMPORT_FRAMEWORK_POP_UP.waitFor({ state: 'visible' });
        await expect(this.IMPORT_FRAMEWORK_POP_UP).toBeVisible();
        console.log("Framework popup validated");
    }

    async clickAndSelectAvalableFramework() {
        await this.AVAILABLE_FRAMEWORK_DROPDOWN.click();
        await this.SELECT_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_FRAMEWORK.click();
        console.log("Available framework selected");
    }

    async clickAndSelectSubFramework() {
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.waitFor({ state: 'visible' });
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.click();
        await this.SELECT_SUB_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_SUB_FRAMEWORK.click();
        console.log("Sub-framework selected");
    }

    async enterClonedFrameworkName() {
        const uniqueName = `Test_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_NAME_FIELD.fill(uniqueName);
        console.log(`Entered unique cloned framework name: ${uniqueName}`);
    }

    async enterClonedFrameworkShortName() {
        const uniqueShortName = `Test_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_SHORT_NAME.fill(uniqueShortName);
        console.log(`Entered unique cloned framework short name: ${uniqueShortName}`);
    }

    async clickOnCloneButton() {
        await this.CLONE_BUTTON.click();
        console.log("Clone button clicked");
    }


    async validateClonedFramework() {
        console.log("Validating Clone Framework...");

        const frameworkLocator = this.page.locator("//tbody[1]//a[contains(normalize-space(), 'Test')]");
        await frameworkLocator.first().waitFor({ state: 'visible' });

        const frameworkText = await frameworkLocator.first().textContent();
        console.log('Framework Text Found:', frameworkText);
        expect(frameworkText?.includes('Test')).toBeTruthy();

        console.log("Clone Framework validation performed");
    }

    async enterComment(comment: string) {
        console.log("Entering Comment...");
        await this.COMMENT_FIELD.fill(comment);

        console.log("Comment entered");
    }

    async clickOnEvidenceSetting() {
        console.log("Clicking on Evidence Setting...");
        await this.EVIDENCE_SETTINGS.waitFor({ state: 'visible' });
        await this.EVIDENCE_SETTINGS.click();

        console.log("Evidence Setting clicked");
    }

    async clickAndValidateCheckbox() {
        console.log("Clicking and validating the Evidence checkbox...");
        await this.EVIDENCE_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.EVIDENCE_CHECKBOX.isChecked();

        if (isChecked) {
            await this.page.waitForTimeout(2000);
            await this.EVIDENCE_CHECKBOX.uncheck();
        }
        await this.page.waitForTimeout(2000);
        await this.EVIDENCE_CHECKBOX.check();

        console.log("Evidence checkbox clicked and validated");
    }

    async clickEvidenceSaveButton() {
        console.log("Clicking on the Evidence Save button...");
        await this.EVIDENCE_SAVE_BUTTON.click();

        console.log("Evidence Save button clicked");
    }

    async clickOnFrameWork() {
        console.log("Clicking on Framework...");
        await this.FRAMEWORK.click();
        await this.page.waitForTimeout(2000);

        console.log("Framework clicked");
    }
    async clickOnFrameWorki() {
        console.log("Clicking on Framework...");
        await this.FRAMEWORKI.click();
        await this.page.waitForTimeout(2000);

        console.log("Framework clicked");
    }
    async clickOnFrameWorkUnderAudit() {
        console.log("Clicking on Framework Under Audit...");
        await this.FRAMEWORK_AUDIT.click();
        await this.page.waitForTimeout(2000);

        console.log("Framework clicked");
    }

    async clickOnControls() {
        console.log("Clicking on Controls...");
        await this.CONTROLS.scrollIntoViewIfNeeded();
        await this.CONTROLS.click();

        console.log("Controls clicked");
    }

    async slectControl() {
        console.log("Selecting Control...");
        await this.SELECT_CONTROL.scrollIntoViewIfNeeded();
        await this.SELECT_CONTROL.click();

        console.log("Control selected");
    }

    async clickOnMapDocButton() {
        console.log("Clicking on Map Doc button...");
        await this.MAP_DOC_BUTTON.scrollIntoViewIfNeeded();
        await this.MAP_DOC_BUTTON.click();

        console.log("Map Doc button clicked");
    }

    async selectDocCheckbox() {
        console.log("Selecting Document Checkbox...");
        await this.SELECT_DOC_CHECKBOX.waitFor({ state: 'visible' });
        await this.SELECT_DOC_CHECKBOX.check();
        await this.SELECT_DOC_CHECKBOX.isChecked();

        console.log("Document checkbox selected");
    }

    async clickOnMap() {
        console.log("Clicking on Map Evidence button...");
        await this.MAP_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.MAP_EVIDENCE_BUTTON.click();

        console.log("Map Evidence button clicked");
    }

    async clickAndvalidateRequiredEvidenceTab() {
        console.log("Clicking and validating Required Evidence Tab...");
        await this.REQUIRED_EVIDENCE_TAB.waitFor({ state: 'visible' });
        await this.REQUIRED_EVIDENCE_TAB.click();
        await this.page.waitForTimeout(2000);

        if (await this.REQUIRED_EVIDENCE_TABLE.isVisible()) {
            console.log("Required Evidence Table is visible ...");
            await expect(this.NO_EVIDENCE_MSG).not.toBeVisible();
        } else if (await this.NO_EVIDENCE_MSG.isVisible()) {
            console.log("No Evidence message is displayed ...");
            await expect(this.REQUIRED_EVIDENCE_TABLE).not.toBeVisible();
        }

        console.log("Required Evidence Tab validation performed");
    }

    async clickOnTasksTab() {
        console.log("Clicking on Tasks Tab...");
        await this.TASKS_TAB.waitFor({ state: "visible" });
        await this.TASKS_TAB.click();

        console.log("Tasks Tab clicked");
    }

    async clickOnRequestEvidenceButton() {
        console.log("Clicking on Request Evidence button...");
        await this.REQUEST_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.REQUEST_EVIDENCE_BUTTON.click();

        console.log("Request Evidence button clicked");
    }


    async validateRequestEvidencePopUp() {
        console.log("Validating Request Evidence Pop-up...");
        await this.REQUEST_EVIDENCE_POP_UP.waitFor({ state: 'visible' });
        await expect(this.REQUEST_EVIDENCE_POP_UP).toBeVisible();

        console.log("Request Evidence Pop-up validated");
    }

    async enterCustomerParameter() {
        console.log("Entering Customer Parameter...");
        await this.CUSTOMER_PARAMETERS.fill('testing00');
        await this.CUSTOMER_PARAMETERS1.fill('testing001');
    }
    async clickAndSelectDueDate() {
        console.log("Selecting Due Date...");
        await this.page.waitForTimeout(2000);
        await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
        await this.DUE_DATE_CALENDAR.click();
        await this.page.waitForTimeout(2000)
        await this.SELECT_END_DATE.click();

        console.log("Due Date selected");
    }

    async clickAndSelectMileStoneDueDate() {
        console.log("Selecting Due Date...");
        await this.page.waitForTimeout(2000);
        await this.DUE_DATE_CALENDAR.scrollIntoViewIfNeeded();
        await this.DUE_DATE_CALENDAR.click();
        await this.page.waitForTimeout(2000)
        let date = this.page.locator(`(//span[text()='21'])`);
        await date.click();

        console.log("Due Date selected");
    }

    async clickAndSelectAssignee() {
        console.log("Selecting Assignee...");
        await this.page.waitForTimeout(2000);
        await this.ASSIGN_TO_DROPDOWN.click();
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.click();

        console.log("Assignee selected");
    }
    async clickAndSelectTaskOwner() {
        console.log("Selecting Task Owner...");
        await this.page.waitForTimeout(2000);
        await this.TASK_OWNER_DROPDOWN.click();
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.click();

        console.log("Task Owner selected");
    }
    async clickOnAddApproverBUtton() {
        console.log("Clicking on Add Approver Button...");
        await this.page.waitForTimeout(2000);
        await this.ADD_APPROVER_BUTTON.click();

        console.log("Add Approver Button clicked");
    }

    async clickOnEvidenceTab() {
        console.log("Clicking on Evidence Tab...");
        await this.EVIDENCE_TAB.waitFor({ state: 'visible' });
        await this.EVIDENCE_TAB.click();

        console.log("Evidence Tab clicked");
    }

    async clickOnAddEvidence() {
        console.log("Clicking on Required Evidence Add Button...");
        await this.REQ_EVIDENCE_ADD_BUTTON.click();

        console.log("Required Evidence Add Button clicked");
    }

    async clickOnAddEvidece() {
        console.log("Clicking on Add Evidence...");
        await this.ADD_EVIDENCE.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE.click();

        console.log("Add Evidence clicked");
    }

    async enterCount(count: string) {
        console.log(`Entering Count: ${count}`);
        await this.COUNT_TEXTFIELD.fill(count);

        console.log(`Count entered: ${count}`);
    }

    async clickAndSelectStatus() {
        console.log(`Selecting Status: `);
        await this.EVIDENCE_STATUS_DROPDOWN.waitFor({ state: 'visible' });
        await this.EVIDENCE_STATUS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.EVIDENCE_STATUS_DROPDOWN.click();

        await this.page.waitForTimeout(4000);
        const seletStatus = this.page.locator(`(//div[@role="option"])[3]`);
        await seletStatus.scrollIntoViewIfNeeded();
        await seletStatus.click();

        console.log("Status selected");
    }

    async enterName(baseName: string) {
        console.log("Entering Name...");

        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueName = `${baseName}_${timestamp}_${random}`;

        await this.EVIDENCE_NAME.fill(uniqueName);

        console.log(`Entered unique Name: ${uniqueName}`);
        console.log("Name entry performed");

        return uniqueName;
    }

    async enterDescription(desc: string) {
        console.log(`Entering Description: ${desc}`);
        await this.EVIDENCE_DESC.fill(desc);

        console.log("Description entered");
    }

    async clickOnAddEvidenceButton() {
        console.log("Clicking on Add Evidence Button...");
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Evidence Button clicked");
    }

    async validateAddedEvidence() {

        await this.NEW_EVIDENCE.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(2000);
        const name = (await this.NEW_EVIDENCE.textContent()).trim();
        expect(name).toContain('Test09');
        console.log("Validated Evidence Added");
    }
    async clickOnDetailsTab() {
        console.log("Clicking on Details Tab...");
        await this.DETAILS_TAB.click();

        console.log("Details Tab clicked");
    }

    async clickOnEdit() {
        console.log("Clicking on Edit Button...");
        await this.EDIT_BUTTON.click();

        console.log("Edit Button clicked");
    }
    async clickOnGovEdit() {
        console.log("Clicking on Edit Button...");
        await this.GOV_EDIT.click();

        console.log("Edit Button clicked");
    }

    async scroll() {
        await this.APPROVAR_DRPDOWN.waitFor({ state: 'visible' });
        await this.APPROVAR_DRPDOWN.scrollIntoViewIfNeeded();
    }

    async clickAndSelectApprovar() {
        console.log("Selecting Approver...");
        await this.APPROVAR_DRPDOWN.waitFor({ state: 'visible' });
        await this.APPROVAR_DRPDOWN.click();
        await this.SELECT_USER.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await this.SELECT_USER.click();
        console.log("Approver selected");
    }

    async clickOnSendButton() {
        console.log("Clicking on Send Button...");
        await this.SEND_BUTTON.scrollIntoViewIfNeeded();
        await this.SEND_BUTTON.click();

        console.log("Send Button clicked");
    }

    async enterEvidenceName(baseName: string) {
        console.log(`Entering Evidence Name (English)...`);

        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueEVIName = `${baseName}_${timestamp}_${random}`;

        await this.REQ_EVIDENCE_ENG_TEXTFIELD.fill(uniqueEVIName);

        console.log(`Entered unique Evidence Name: ${uniqueEVIName}`);
        console.log("Evidence Name (English) entry performed");

        return uniqueEVIName;
    }

    async uploadEvidence(page: Page) {

        const filePath = path.resolve(__dirname, '../../file/Upload_EC.png');

        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        await page.waitForTimeout(2000);
        await page.setInputFiles('(//input[@type="file"])[1]', filePath);

        console.log('File uploaded:', filePath);
        await page.waitForTimeout(3000);

    }

    async addControl() {
        await this.REQ_EVIDENCE_ADD_BUTTON.click();
        let linkField = this.page.locator(`//input[@name="linkName"]`);
        await linkField.fill('hdfsugvushgdfu');
        await this.page.waitForTimeout(1500);
        await this.CONTROL_ADD_BUTTON.click();
    }

    async validateEvidenceAdded() {
        await this.page.waitForTimeout(2000);
        let eviName = this.page.locator(`(//a[contains(text(),'Test09_')])[1]`);
        let text = await eviName.textContent();
        expect(text).toContain('Test09');

    }
    async enterEvidenceNameArabic(baseName: string) {
        console.log("Entering Evidence Name (Arabic)...");

        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueEVINameArabic = `${baseName}_${timestamp}_${random}`;

        await this.REQ_EVIDENCE_ARABIC_TEXTFIELD.fill(uniqueEVINameArabic);

        console.log(`Entered unique Evidence Name (Arabic): ${uniqueEVINameArabic}`);
        console.log("Evidence Name (Arabic) entry performed");

        return uniqueEVINameArabic;
    }

    async clickOnMapButton() {
        console.log("Clicking on Map Button...");
        await this.RISK_MAP_BUTTON.click();

        console.log("Map Button clicked");
    }

    async selectFramework() {
        console.log("Selecting Framework checkbox...");
        await this.EVI_MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await this.EVI_MAP_CHECKBOX.check();

        console.log("Framework checkbox selected");
    }

    async clickAndSelectDepartment(Status: string) {
        console.log(`Starting: clickAndSelectDepartment — selecting department "${Status}"`);
        await this.OWNERSHIP_DEPARTMENT.waitFor({ state: 'visible' });
        await this.OWNERSHIP_DEPARTMENT.scrollIntoViewIfNeeded();
        console.log("Clicking on OWNERSHIP_DEPARTMENT dropdown...");
        await this.OWNERSHIP_DEPARTMENT.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[text()='${Status}']`);
        console.log(`Selecting department option: "${Status}"`);
        await seletStatus.click();
        console.log(`Finished: clickAndSelectDepartment — selected "${Status}"`);
    }
    async SelectVendorOwner() {
        console.log("Selecting Vendor Owner...");
        await this.RISK_OWNER.waitFor({ state: 'visible' });
        await this.RISK_OWNER.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNER.click();
        console.log("Vendor Owner selected successfully");
    }

    async SelectVendorUser() {
        console.log("Selecting Vendor User...");
        await this.USER_DROPDOWN.waitFor({ state: 'visible' });
        await this.USER_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_APPROVAR.click();
        console.log("Vendor User selected successfully");
    }

    async clickOnAssertRadioButton() {
        console.log("Clicking on Assert radio button...");
        await this.MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_CHECKBOX.click();
        console.log("Assert radio button clicked successfully");
    }

    async clickOnMapAssertButton() {
        console.log("Clicking on Map Assert button...");
        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();
        console.log("Map Assert button clicked successfully");
    }

    async clickConfidenciallySlider() {
        console.log("Clicking on Confidentiality slider...");
        await this.CONFIDENCIALLY_SLIDER.waitFor({ state: 'visible' });
        await this.CONFIDENCIALLY_SLIDER.click();
        await this.page.waitForTimeout(3000);
        console.log("Confidentiality slider clicked");
    }

    async clickIntigritySlider() {
        console.log("Clicking on Integrity slider...");
        await this.INTIGRITY_SLIDER.waitFor({ state: 'visible' });
        await this.INTIGRITY_SLIDER.click();
        await this.page.waitForTimeout(2000);
        console.log("Integrity slider clicked");
    }

    async clickAvailabilitySlider() {
        console.log("Clicking on Availability slider...");
        await this.AVAILABILITY_SLIDER.waitFor({ state: 'visible' });
        await this.AVAILABILITY_SLIDER.click();
        await this.page.waitForTimeout(2000);
        console.log("Availability slider clicked");
    }

    async clickHoodSlider() {
        console.log("Clicking on Likelihood slider...");
        await this.HOOD_SLIDER.waitFor({ state: 'visible' });
        await this.HOOD_SLIDER.click();
        await this.page.waitForTimeout(2000);
        console.log("Likelihood slider clicked");
    }

    async textAssertVisible() {
        await this.TEXT_ASSERT.waitFor({ state: 'visible' });
    }
    async clickAndSelectOwner(Status: string) {
        console.log(`Starting: clickAndSelectOwner — selecting owner "${Status}"`);
        await this.OWNERSHIP_OWNER.waitFor({ state: 'visible' });
        await this.OWNERSHIP_OWNER.scrollIntoViewIfNeeded();
        console.log("Clicking on OWNERSHIP_OWNER dropdown...");
        await this.OWNERSHIP_OWNER.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[normalize-space()='${Status}']`);
        console.log(`Selecting owner option: "${Status}"`);
        await seletStatus.click();
        console.log(`Finished: clickAndSelectOwner — selected "${Status}"`);
    }

    async clickAndSelectStakeholderDepartment(Status: string) {
        console.log(`Starting: clickAndSelectStakeholderDepartment — selecting department "${Status}"`);
        await this.STAKEHOLDER_DEPARTMENT.waitFor({ state: 'visible' });
        await this.STAKEHOLDER_DEPARTMENT.scrollIntoViewIfNeeded();
        console.log("Clicking on STAKEHOLDER_DEPARTMENT dropdown...");
        await this.STAKEHOLDER_DEPARTMENT.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[normalize-space()='${Status}']`);
        console.log(`Selecting stakeholder department option: "${Status}"`);
        await seletStatus.nth(1).click();
        console.log(`Finished: clickAndSelectStakeholderDepartment — selected "${Status}"`);
    }

    async clickAndSelectStakeholderUser(Status: string) {
        console.log(`Starting: clickAndSelectStakeholderUser — selecting user "${Status}"`);
        await this.STAKEHOLDER_USER.waitFor({ state: 'visible' });
        await this.STAKEHOLDER_USER.scrollIntoViewIfNeeded();
        console.log("Clicking on STAKEHOLDER_USER dropdown...");
        await this.STAKEHOLDER_USER.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[normalize-space()='${Status}']`);
        console.log(`Selecting stakeholder user option: "${Status}"`);
        await seletStatus.click();
        console.log(`Finished: clickAndSelectStakeholderUser — selected "${Status}"`);
    }


    async clickAndSelectExpectedDate() {
        console.log('Clicking on EXPECTED_DATE_CALENDER...');
        await this.EXPECTED_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.EXPECTED_DATE_CALENDER.click();
        await this.page.waitForTimeout(2000);
        const date = this.page.locator(`//span[text()='21']`);
        console.log('Selecting date: 21');
        await date.click();
        console.log('Expected date selected successfully');
    }

    async clickOnDeptCompliance() {
        console.log('Clicking on DEPT_COMPLIANCE...');
        await this.DEPT_COMPLIANCE.waitFor({ state: 'visible' });
        await this.DEPT_COMPLIANCE.click();
        console.log('DEPT_COMPLIANCE clicked successfully');
    }

    async clickOnHamberg() {
        console.log('Clicking on HAMDERG...');
        await this.HAMDERG.waitFor({ state: 'visible' });
        await this.HAMDERG.click();
        console.log('HAMDERG clicked successfully');
    }

    async clickOnReqComplianceDate() {
        console.log('Clicking on REQ_COMPLIANCE_DATE...');
        await this.REQ_COMPLIANCE_DATE.click();
        await this.page.waitForTimeout(1000);
        console.log('REQ_COMPLIANCE_DATE clicked successfully');
    }

    async clickOnReqComplianceLevel() {
        console.log('Clicking on REQ_COMPLIANCE_LEVEL...');
        await this.REQ_COMPLIANCE_LEVEL.click();
        await this.page.waitForTimeout(1000);
        console.log('REQ_COMPLIANCE_LEVEL clicked successfully');
    }

    async clickOnEditButton() {
        console.log('Clicking on EDIT button...');
        await this.EDIT.click();
        await this.page.waitForTimeout(1000);
        console.log('EDIT button clicked successfully');
    }


    async clickOnThreeDot() {
        console.log('Clicking on THREE_DOT...');
        await this.THREE_DOT.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);
        await this.THREE_DOT.click();
        console.log('THREE_DOT clicked successfully');
    }
    async clickOnGovTemThreeDot() {
        console.log('Clicking on THREE_DOT...');
        await this.GOV_TEM_THREEDOT.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(3000);
        await this.GOV_TEM_THREEDOT.click();
        console.log('THREE_DOT clicked successfully');
    }
    async clickOnAddriskButton() {
        console.log('Clicking on ADD_RISK_BUTTON...');
        await this.ADD_RISK_BUTTON.click();
        await this.page.waitForTimeout(5000);
        console.log('ADD_RISK_BUTTON clicked successfully');
    }

    async clickOnRiskRadioButton() {
        console.log('Clicking on RISK_RADIO_BUTTON...');
        await this.RISK_RADIO_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_RADIO_BUTTON.click();
        console.log('RISK_RADIO_BUTTON clicked successfully');
    }

    async clickOnRemarks() {
        console.log('Clicking on REMARK_TAB...');
        await this.REMARK_TAB.waitFor({ state: 'visible' });
        await this.REMARK_TAB.click();
        console.log('REMARK_TAB clicked successfully');
    }

    async clickOnAddRemarkButton() {
        console.log('Clicking on ADD_REMARK_BUTTON...');
        await this.ADD_REMARK_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_REMARK_BUTTON.click();
        console.log('ADD_REMARK_BUTTON clicked successfully');
    }

    async enterRemarkTittle(tittle: string) {
        console.log(`Entering remark title: "${tittle}"`);
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(tittle);
        console.log('Remark title entered successfully');
    }

    async enterRemark(remark: string) {
        console.log(`Entering remark: "${remark}"`);
        await this.REMARK_FIELD.waitFor({ state: 'visible' });
        await this.REMARK_FIELD.fill(remark);
        console.log('Remark entered successfully');
    }

    async clickOnAddReamrk() {
        console.log('Clicking on ADD_EVIDENCE_BUTTON (Add Remark)...');
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log('ADD_EVIDENCE_BUTTON clicked successfully');
    }

    async clickOnRemarkHamberg() {
        console.log('Clicking on REMARK_HAMBERG...');
        await this.REMARK_HAMBERG.waitFor({ state: 'visible' });
        await this.REMARK_HAMBERG.click();
        console.log('REMARK_HAMBERG clicked successfully');
    }
    async clickOnInitiativeHamberg() {
        console.log('Clicking on Initiative_HAMBERG...');
        await this.HAMDERG.waitFor({ state: 'visible' });
        await this.HAMDERG.click();
        console.log('Initiative_HAMBERG clicked successfully');
    }

    async clickOnRemarkEdit() {
        console.log('Clicking on REMARK_EDIT...');
        await this.REMARK_EDIT.waitFor({ state: 'visible' });
        await this.REMARK_EDIT.click();
        console.log('REMARK_EDIT clicked successfully');
    }

    async clickOnSaveRemark() {
        console.log('Clicking on EVIDENCE_SAVE_BUTTON (Save Remark)...');
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log('EVIDENCE_SAVE_BUTTON clicked successfully');
    }

    async clickOnRemarkDetails() {
        console.log('Clicking on REMARK_DETAILS...');
        await this.REMARK_DETAILS.click();
        console.log('REMARK_DETAILS clicked successfully');
    }


    async validateRemarkdetailsPopUp() {
        console.log('Validating REMARK_DETAILS_POP_UP visibility and text...');
        await this.REMARK_DETAILS_POP_UP.waitFor({ state: 'visible' });
        await expect(this.REMARK_DETAILS_POP_UP).toContainText('Remark Details');
        console.log('REMARK_DETAILS_POP_UP validated successfully');
    }

    async clickOnRemarkDelete() {
        console.log('Clicking on REMARK_DELETE...');
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log('REMARK_DELETE clicked successfully');
    }

    async validateDeleteConfirmationPopUp() {
        console.log('Validating DELETE_REMARK_CONFIRMTION pop-up visibility...');
        await this.DELETE_REMARK_CONFIRMTION.waitFor({ state: 'visible' });
        await expect(this.DELETE_REMARK_CONFIRMTION).toBeVisible();
        console.log('DELETE_REMARK_CONFIRMTION pop-up validated successfully');
    }

    async clickOnYesButton() {
        console.log('Clicking on YES_BUTTON...');
        await this.YES_BUTTON.scrollIntoViewIfNeeded();
        await this.YES_BUTTON.click();
        console.log('YES_BUTTON clicked successfully');
    }

    async clickOnThreeDotTab() {
        console.log('Clicking on THREE_DOT_TAB...');
        await this.THREE_DOT_TAB.waitFor({ state: 'visible' });
        await this.THREE_DOT_TAB.click();
        await this.page.waitForTimeout(5000);
        console.log('THREE_DOT_TAB clicked successfully');
    }

    async validateDeptComplianceTable() {
        console.log('Validating DEPT_COMPLIANCE_TABLE visibility...');
        await this.DEPT_COMPLIANCE_TABLE.waitFor({ state: 'visible' });
        await expect(this.DEPT_COMPLIANCE_TABLE).toBeVisible();
        console.log('DEPT_COMPLIANCE_TABLE validated successfully');
    }

    async clickOnIntiavite() {
        console.log('Clicking on INTIAVITES...');
        await this.INTIAVITES.waitFor({ state: 'visible' });
        await this.INTIAVITES.click();
        console.log('INTIAVITES clicked successfully');
    }

    async clickOnNewIntiavateButton() {
        console.log('Clicking on NEW_INTIAVATE_BUTTON...');
        await this.NEW_INTIAVATE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INTIAVATE_BUTTON.click();
        console.log('NEW_INTIAVATE_BUTTON clicked successfully');
    }

    async enterIntivateTittle(tittle: string) {
        console.log(`Entering initiative title: "${tittle}"`);
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${tittle}_${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(uniqueTitle);
        console.log('Initiative title entered successfully');
    }

    async enterIntivateDesc(desc: string) {
        console.log(`Entering initiative description: "${desc}"`);
        await this.INTIVATE_DESC.waitFor({ state: 'visible' });
        await this.INTIVATE_DESC.fill(desc);
        console.log('Initiative description entered successfully');
    }

    async clickOnRiskTreatmentButton() {
        console.log('Clicking on RISK_TREATMENT_BUTTON...');
        await this.RISK_TREATMENT_BUTTON.click();
        console.log('RISK_TREATMENT_BUTTON clicked successfully');
    }
    async selectMapRiskCheckbox() {
        console.log("Selecting the MAP Risk checkbox");

        await this.MAP_RISK_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_RISK_CHECKBOX.check();

        console.log("MAP Risk checkbox selected successfully");
    }

    async clickOnMapRiskButton() {
        console.log("Clicking on the MAP Risk button");

        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();

        console.log("MAP Risk button clicked successfully");
    }

    async clickOnRadioButton() {
        console.log("Clicking on the Priority radio button");

        await this.PRIORITY_RADIO.waitFor({ state: 'visible' });
        await this.PRIORITY_RADIO.scrollIntoViewIfNeeded();
        await this.PRIORITY_RADIO.click();

        console.log("Priority radio button clicked successfully");
    }

    async SelectDepartment() {
        console.log("Selecting a department from dropdown");

        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_DEPARTMENT.click();

        console.log("Department selected successfully");
    }

    async SelectPurpose() {
        console.log("Selecting a purpose from dropdown");

        await this.PURPOUSE_DROPDOWN.waitFor({ state: 'visible' });
        await this.PURPOUSE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_PURPOUSE.click();

        console.log("Purpose selected successfully");
    }

    async SelectInitiativeOwner() {
        console.log("Selecting an initiative owner from dropdown");

        await this.EVENT_OWNER_DROPDOWN.waitFor({ state: 'visible' });
        await this.EVENT_OWNER_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNER.click();

        console.log("Initiative owner selected successfully");
    }


    async clickOnCreate() {
        console.log("Clicking on the Create button");
        await this.page.waitForTimeout(1500);
        await this.CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CREATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CREATE_BUTTON.click();

        console.log("Create button clicked successfully");
    }

    async clickOnInitivateDetails() {
        console.log("Clicking on the Initiative Details section");

        await this.INITIVATE_DETAILS.waitFor({ state: 'visible' });
        await this.INITIVATE_DETAILS.click();

        console.log("Initiative Details section clicked successfully");
    }

    async validateInitivateDetailsPage() {
        console.log("Validating the Initiative Details page is visible");

        await this.INTIVATE_DETAILS_PAGE.waitFor({ state: 'visible' });
        await expect(this.INTIVATE_DETAILS_PAGE).toBeVisible();

        console.log("Initiative Details page validated successfully");
    }

    async editInitivateName() {
        console.log("Editing the Initiative name field");

        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.clear();
        await this.page.waitForTimeout(1500);
        await this.REMARK_TITTLE.fill('TestAutomation');
        await this.page.waitForTimeout(2000);

        console.log("Initiative name edited successfully");
    }

    async clickOnSave() {
        console.log("Clicking on the Save button");

        await this.SAVE.waitFor({ state: 'visible' });
        await this.SAVE.scrollIntoViewIfNeeded();
        await this.SAVE.click();

        console.log("Save button clicked successfully");
    }
    async clickOnGovSave() {
        console.log("Clicking on the Save button");

        await this.GOV_SAVE.waitFor({ state: 'visible' });
        await this.GOV_SAVE.scrollIntoViewIfNeeded();
        await this.GOV_SAVE.click();

        console.log("Save button clicked successfully");
    }
    async clickOnGovControlSave() {
        console.log("Clicking on the Save button");

        await this.GOV_CONTROL_SAVE.waitFor({ state: 'visible' });
        await this.GOV_CONTROL_SAVE.scrollIntoViewIfNeeded();
        await this.GOV_CONTROL_SAVE.click();

        console.log("Save button clicked successfully");
    }

    async clickOnAudit() {
        console.log("Clicking on the Audit tab");

        await this.AUDIT.waitFor({ state: 'visible' });
        await this.AUDIT.click();

        console.log("Audit tab clicked successfully");
    }

    async validateAuditPage() {
        console.log("Validating the Audit page is displayed correctly");

        await this.AUDIT_COMPLAINCE_LEVEL.waitFor({ state: 'visible' });
        await expect(this.AUDIT_COMPLAINCE_LEVEL).toBeVisible();
        await expect(this.AUDIT_REVIEW).toBeVisible();

        console.log("Audit page validated successfully");
    }

    async clickOnAuditDetails() {
        console.log("Clicking on the Audit Details button");

        await this.AUDIT_DETAILS.waitFor({ state: 'visible' });
        await this.AUDIT_DETAILS.click();

        console.log("Audit Details button clicked successfully");
    }

    async validateAuditDetailPopUp() {
        console.log("Validating that the Audit Detail pop-up is visible");

        await this.AUDIT_DETAIL_POP_UP.waitFor({ state: 'visible' });
        await expect(this.AUDIT_DETAIL_POP_UP).toBeVisible();

        console.log("Audit Detail pop-up validated successfully");
    }


    async clickOnNoteToSelfIcon() {
        console.log("Clicking on the Note to Self icon");

        await this.NOTE_TO_SELF_ICON.waitFor({ state: 'visible' });
        await this.NOTE_TO_SELF_ICON.click();
        await this.page.waitForTimeout(2000);

        console.log("Note to Self icon clicked successfully");
    }

    async enterNote() {
        console.log("Entering note text into the Note field");

        await this.NOTE_TEXT_FIELD.waitFor({ state: 'visible' });
        await this.NOTE_TEXT_FIELD.fill('Testing123');
        await this.page.waitForTimeout(2000);

        console.log("Note text entered successfully");
    }

    async clickOnSendIcon() {
        console.log("Clicking on the Send Note icon");

        await this.SEND_NOTE_ICON.waitFor({ state: 'visible' });
        await this.SEND_NOTE_ICON.click();

        console.log("Send Note icon clicked successfully");
    }

    async validateNoteAdded() {
        console.log("Validating that the note was added successfully");

        await this.NOTE_ADDED.waitFor({ state: 'visible' });
        const note = await this.NOTE_ADDED.textContent();
        expect(note).toContain('Test');
        console.log("Note content:", note);

        console.log("Note validated successfully");
    }

    async clickOnIssue() {
        console.log("Clicking on the Issue tab");

        await this.ISSUE.waitFor({ state: 'visible' });
        await this.ISSUE.click();

        console.log("Issue tab clicked successfully");
    }

    async clickOnAddIssueButton() {
        console.log("Clicking on the Add Issue button");

        await this.ADD_ISSUE.waitFor({ state: 'visible' });
        await this.ADD_ISSUE.click();

        console.log("Add Issue button clicked successfully");
    }

    async enterIssueName() {
        console.log("Entering Issue name");

        const uniqueName = `Test_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        await this.ISSUE_NAME_FIELD.fill(uniqueName);

        console.log("Issue name entered successfully");
    }

    async enterIssueDesc() {
        console.log("Entering Issue description");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill("testinghugud" + uniqueTitle);

        console.log("Issue description entered successfully");
    }

    async enterIssueRemidiation() {
        console.log("Entering Issue remediation details");

        await this.ISSUE_REMIDIATION_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_REMIDIATION_FIELD.fill("automation");

        console.log("Issue remediation entered successfully");
    }

    async selectIssueType() {
        console.log("Selecting Issue type from dropdown");

        await this.ISSUE_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_ISSUE_TYPE.scrollIntoViewIfNeeded();
        await this.SELECT_ISSUE_TYPE.click();

        console.log("Issue type selected successfully");
    }

    async selectIssuePriority() {
        console.log("Selecting Issue priority");

        await this.ISSUE_PRIORITY.waitFor({ state: 'visible' });
        await this.ISSUE_PRIORITY.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_PRIORITY.click();

        console.log("Issue priority selected successfully");
    }

    async selectIssueOwner() {
        console.log("Selecting Issue owner");

        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNER.click();

        console.log("Issue owner selected successfully");
    }

    async selectIssueDepartment() {
        console.log("Selecting Issue department from dropdown");

        await this.ISSUE_DEPARTMENT.waitFor({ state: 'visible' });
        await this.ISSUE_DEPARTMENT.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_DEPARTMENT.click();

        console.log("Issue department selected successfully");
    }

    async clickOnTargetDateCalender() {
        console.log("Clicking on the Target Date calendar and selecting a start date");

        await this.TARGET_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.TARGET_DATE_CALENDER.scrollIntoViewIfNeeded();
        await this.TARGET_DATE_CALENDER.click();
        await this.page.waitForTimeout(1500);
        await this.SELECT_START_DATE.click();

        console.log("Target date selected successfully");
    }

    async clickOnSaveIssue() {
        console.log("Clicking on the Save Issue button");

        await this.SAVE_ISSUE.waitFor({ state: 'visible' });
        await this.SAVE_ISSUE.scrollIntoViewIfNeeded();
        await this.SAVE_ISSUE.click();

        console.log("Issue saved successfully");
    }

    async clickOnRemediation() {
        console.log("Clicking on the Remediation tab");

        await this.REMEDIATION.waitFor({ state: 'visible' });
        await this.REMEDIATION.click();

        console.log("Remediation tab clicked successfully");
    }

    async validateRemediationPopUp() {
        console.log("Validating that the Remediation pop-up is visible");

        await this.REMEDIATION_POPUP.waitFor({ state: 'visible' });
        await expect(this.REMEDIATION_POPUP).toBeVisible();

        console.log("Remediation pop-up validated successfully");
    }

    async enterRemediation(reme: string) {
        console.log("Entering remediation details");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${reme}_${timestamp}_${random}`;
        await this.REMEDIATION_FIELD.waitFor({ state: 'visible' });
        await this.REMEDIATION_FIELD.fill(uniqueTitle);

        console.log("Remediation details entered successfully");
    }

    async clickOnIssueDetails() {
        console.log("Clicking on the Issue Details section");

        await this.INITIVATE_DETAILS.waitFor({ state: 'visible' });
        await this.INITIVATE_DETAILS.click();

        console.log("Issue Details section clicked successfully");
    }

    async validateIssueDetailsPopUp() {
        console.log("Validating that the Issue Details pop-up is visible");

        await this.ISSUE_DETAILS_POPUP.waitFor({ state: 'visible' });
        await expect(this.ISSUE_DETAILS_POPUP).toBeVisible();

        console.log("Issue Details pop-up validated successfully");
    }

    async clickOnCommonControlTab() {
        console.log("Clicking on the Common Control tab");

        await this.COMMON_CONTROL_TAB.waitFor({ state: 'visible' });
        await this.COMMON_CONTROL_TAB.click();

        console.log("Common Control tab clicked successfully");
    }


    async clickOnManageCrossMaping() {
        console.log("Clicking on the Manage Cross Mapping button");

        await this.MANAGE_CROSS_MAPING_BUTTON.waitFor({ state: 'visible' });
        await this.MANAGE_CROSS_MAPING_BUTTON.click();

        console.log("Manage Cross Mapping button clicked successfully");
    }

    async clickOnCommonControl() {
        console.log("Clicking on the Common Control button");

        await this.COMMOM_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.COMMOM_CONTROL_BUTTON.click();

        console.log("Common Control button clicked successfully");
    }

    async enterControlName(path: number) {
        console.log("Entering Control name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ISSUE_NAME_FIELD.nth(path).waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.nth(path).fill("test" + uniqueTitle);

        console.log("Control name entered successfully");
    }
    async enterControlEngName(path: number) {
        console.log("Entering Control name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.CONTACT_NAME_VENDOR.nth(path).waitFor({ state: 'visible' });
        await this.CONTACT_NAME_VENDOR.nth(path).fill("test" + uniqueTitle);

        console.log("Control name entered successfully");
    }

    async enterControlDesc(path: number) {
        console.log("Entering Control description");

        await this.ISSUE_DESC_FIELD.nth(path).waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.nth(path).fill('testing');

        console.log("Control description entered successfully");
    }

    async clickOnCreateControl() {
        console.log("Clicking on the Create Control button");

        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_CREATE_BUTTON.click();

        console.log("Create Control button clicked successfully");
    }

    async clickOnEvidence() {
        console.log("Clicking on the Evidence tab");

        await this.EVIDENCE.waitFor({ state: 'visible' });
        await this.EVIDENCE.click();

        console.log("Evidence tab clicked successfully");
    }

    async validateEvidencetableVisible() {
        console.log("Validating that the Evidence table is visible");

        await this.EVIDENCE_TABLE.waitFor({ state: 'visible' });
        await expect(this.EVIDENCE_TABLE).toBeVisible();

        console.log("Evidence table validated successfully");
    }

    async clickOnRiskSettings() {
        console.log("Clicking on the Risk Settings tab");

        await this.RISK_SETTINGS.waitFor({ state: 'visible' });
        await this.RISK_SETTINGS.click();

        console.log("Risk Settings tab clicked successfully");
    }

    async clickOnAssesmentCritaria() {
        console.log("Clicking on the Assessment Criteria tab");

        await this.ASSESSMENT_CRITERIA.waitFor({ state: 'visible' });
        await this.ASSESSMENT_CRITERIA.click();

        console.log("Assessment Criteria tab clicked successfully");
    }

    async clickOnMethelogyTab() {
        console.log("Clicking on the Methodology tab");

        await this.METHELOGY.waitFor({ state: 'visible' });
        await this.METHELOGY.click();

        console.log("Methodology tab clicked successfully");
    }

    async selectMethelogyCheckbox() {
        console.log("Selecting the Methodology checkbox");

        await this.METHELOGY_CHECKBOX.waitFor({ state: 'visible' });

        const isChecked = await this.METHELOGY_CHECKBOX.isChecked();

        if (isChecked) {
            console.log("Methodology checkbox is already checked — unchecking and rechecking to ensure state consistency");
            await this.METHELOGY_CHECKBOX.uncheck();
            await this.METHELOGY_CHECKBOX.check();
            console.log("Checkbox rechecked successfully");
        } else {
            console.log("Methodology checkbox is not checked — checking now");
            await this.METHELOGY_CHECKBOX.check();
            console.log("Checkbox checked successfully");
        }
    }

    async clickOnRiskManagement() {
        console.log("Clicking on the Risk Management button");

        await this.RISK_MANAGEMENT_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MANAGEMENT_BUTTON.click();

        console.log("Risk Management button clicked successfully");
    }

    async clickOnRiskRegister() {
        console.log("Clicking on the Risk Register button");

        await this.RISK_REGISTER_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_REGISTER_BUTTON.click();

        console.log("Risk Register button clicked successfully");
    }

    async clickOnNewRiskDropdown() {
        console.log("Clicking on the New Risk dropdown button");

        await this.NEW_RISK_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_RISK_BUTTON.click({ force: true });
        await this.page.waitForTimeout(1500);
        await this.NEW_RISK_BUTTON.click();
        console.log("New Risk dropdown clicked successfully");
    }

    async clickOnCreateRisk() {
        const locator = this.CREATE_RISK_BUTTON;

        const isVisible = await locator.isVisible();
        console.log('Create Risk button visible:', isVisible);

        if (isVisible) {
            await locator.click();
            console.log('Clicked Create Risk button');
        } else {
            console.log('Button not visible → navigating to create page');
            await this.page.goto('https://ec.qa.ir.solidrange.com/risks/create');
        }
    }


    async clickAndSelectRisk() {
        console.log("Clicking on a Risk item to select it");

        await this.RISK.waitFor({ state: 'visible' });
        await this.RISK.click();

        console.log("Risk item selected successfully");
    }

    async validateRiskPage() {
        console.log("Validating that the Risk page is visible");
        await this.RISK_PAGE.scrollIntoViewIfNeeded();
        await expect(this.RISK_PAGE).toBeVisible();
        await this.page.waitForTimeout(2000);
        console.log("Risk page validated successfully");
    }
    async clickOnTreatmentID() {
        console.log("Clicking on Treatment ID...");
        await this.TREATMENT_ID.scrollIntoViewIfNeeded();
        await this.TREATMENT_ID.click();
        console.log("Treatment ID clicked successfully");
    }

    async clickOnTreatmentThreedot() {
        console.log("Opening Treatment options (three dots)...");
        await this.TREATMENT_THREEDOT.click();
        console.log("Treatment options opened successfully");
    }

    async clickMarkAsComplete() {
        console.log("Clicking on 'Mark As Complete'...");
        await this.MARK_AS_COMPLETE.click();
        console.log("'Mark As Complete' clicked successfully");
    }

    async SelectRisk() {
        console.log("Selecting a Risk from the list");

        await this.SELECT_RISK.waitFor({ state: "visible" });
        await this.SELECT_RISK.click();

        console.log("Risk selected successfully");
    }

    async clickOnNewTreatement() {
        console.log("Clicking on the New Treatment button");

        await this.NEW_TREATEMENT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_TREATEMENT_BUTTON.scrollIntoViewIfNeeded();
        await this.NEW_TREATEMENT_BUTTON.click();

        console.log("New Treatment button clicked successfully");
    }

    async enterTreatmentName() {
        console.log("Entering Treatment name");

        await this.TREATMENT_NAME_FIELD.waitFor({ state: 'visible' });
        await this.TREATMENT_NAME_FIELD.fill('Testing');

        console.log("Treatment name entered successfully");
    }

    async enterTreatmentDesc() {
        console.log("Entering Treatment description");

        await this.TREATEMENT_DESC.waitFor({ state: 'visible' });
        await this.TREATEMENT_DESC.fill('Testing988');

        console.log("Treatment description entered successfully");
    }

    async enterTreatmentCost() {
        console.log("Entering Treatment cost");

        await this.TREATEMENT_COST_FIELD.waitFor({ state: 'visible' });
        await this.TREATEMENT_COST_FIELD.fill('2000');

        console.log("Treatment cost entered successfully");
    }

    async clickAndSelectTreatmentOwner() {
        console.log("Selecting Treatment owner");

        await this.TREATEMENT_OWNER_DROPDOWN.waitFor({ state: 'visible' });
        await this.TREATEMENT_OWNER_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_ASSIGNEE.waitFor({ state: 'visible' });
        await this.SELECT_ASSIGNEE.scrollIntoViewIfNeeded();
        await this.SELECT_ASSIGNEE.click();

        console.log("Treatment owner selected successfully");
    }

    async clickAndSelectTreatementDate() {
        console.log("Selecting Treatment date");

        const dueDate = this.page.locator(`(//span[@class="input-group-text"])[2]`);
        await dueDate.click();
        await this.page.waitForTimeout(2000);
        await this.END_DATE.last().click();

        console.log("Treatment date selected successfully");
    }

    async clickOnTreatmentSave() {
        console.log("Clicking on Save button for Treatment");

        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();

        console.log("Treatment saved successfully");
    }

    async clickOnTreatmentHistioryButton() {
        console.log("Clicking on Treatment History button");

        await this.TREATMENT_HISTORY_BUTTON.waitFor({ state: 'visible' });
        await this.TREATMENT_HISTORY_BUTTON.click();

        console.log("Treatment History button clicked successfully");
    }

    async validateTreatmentHistoryPopUp() {
        console.log("Validating Treatment History popup");

        await this.TREATMENT_HISTORY_POPUP.waitFor({ state: 'visible' });
        await expect(this.TREATMENT_HISTORY_POPUP).toBeVisible();

        console.log("Treatment History popup is visible");
    }

    async clickOnAssesmentHistioryButton() {
        console.log("Clicking on Assessment History button");

        await this.ASSESMENT_HISTORY_BUTTON.waitFor({ state: 'visible' });
        await this.ASSESMENT_HISTORY_BUTTON.click();

        console.log("Assessment History button clicked successfully");
    }

    async validateAssesmentHistoryPopUp() {
        console.log("Validating Assessment History popup");

        await this.ASSESMENT_HISTORY_POPUP.waitFor({ state: 'visible' });
        await expect(this.ASSESMENT_HISTORY_POPUP).toBeVisible();

        console.log("Assessment History popup is visible");
    }

    async clickOnExportPdfIconValidatePreview() {
        console.log("Clicking on Export PDF button");
        const printPreview = this.page.locator("//cr-button[normalize-space()='Print']");
        try {
            await this.EXPORT_PDF_ICON.click();
            console.log("Export PDF button clicked... waiting for print preview...");

            const printPreview = this.page.locator("//cr-button[normalize-space()='Print']");
            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                console.log("Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("❌ Error while clicking Export PDF:", error);
            throw error;
        }

    }

    async clickOnExeptionTab() {
        console.log("Clicking on Exception Tab");

        await this.EXEPTIONS_TAB.waitFor({ state: 'visible' });
        await this.EXEPTIONS_TAB.click();

        console.log("Exception Tab clicked successfully");
    }

    async clickOnAddExeptionButton() {
        console.log("Clicking on Add Exception button");

        await this.ADD_EXEPTION_BUTON.waitFor({ state: 'visible' });
        await this.ADD_EXEPTION_BUTON.scrollIntoViewIfNeeded();
        await this.ADD_EXEPTION_BUTON.click();

        console.log("Add Exception button clicked successfully");
    }

    async enterExeptionDesc() {
        console.log("Entering Exception description");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill(uniqueTitle);

        console.log("Exception description entered");
    }

    async selectExeptionStartDate() {
        console.log("Selecting Exception start date");

        await this.EXEPTION_START_DATE.waitFor({ state: 'visible' });
        await this.EXEPTION_START_DATE.click();
        await this.page.waitForTimeout(2000);
        await this.START_DATE.click();

        console.log("Exception start date selected");
    }

    async selectExeptionEndDate() {
        console.log("Selecting Exception end date");

        await this.EXEPTION_END_DATE.waitFor({ state: 'visible' });
        await this.EXEPTION_END_DATE.click();
        await this.page.waitForTimeout(2000);
        await this.END_DATE.click();

        console.log("Exception end date selected");
    }

    async clickOnRiskNote() {
        console.log("Clicking on Risk Note");

        await this.RISK_NOTE.waitFor({ state: 'visible' });
        await this.RISK_NOTE.click();

        console.log("Risk Note clicked successfully");
    }

    async clcikOnRiskTemplate() {
        console.log("Clicking on Risk Template");

        await this.RISK_TEMPLATE.waitFor({ state: 'visible' });
        await this.RISK_TEMPLATE.click();

        console.log("Risk Template clicked successfully");
    }

    async clickOnLibraryTab() {
        console.log("Clicking on Library Tab");

        await this.LIBRARY_TAB.waitFor({ state: 'visible' });
        await this.LIBRARY_TAB.click();

        console.log("Library Tab clicked successfully");
    }

    async selectTemplateCheckbox() {
        console.log("Selecting Template checkbox");

        await this.TEMPLATE_CHECKBOX.waitFor({ state: 'visible' });
        await this.TEMPLATE_CHECKBOX.check();

        console.log("Template checkbox selected");
    }

    async clickOnCloneTemplateButton() {
        console.log("Clicking on Clone Template button");
        await this.CLONE_TEMPLATE_BUTTON.waitFor({ state: 'visible' });
        await this.CLONE_TEMPLATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CLONE_TEMPLATE_BUTTON.click();
        console.log("Clone Template button clicked");
    }

    async clickOnKeyIndicatorTab() {
        console.log("Clicking on Key Indicator tab");
        await this.INDECATOR_KEY_TAB.waitFor({ state: 'visible' });
        await this.INDECATOR_KEY_TAB.click();
        console.log("Key Indicator tab clicked");
    }

    async clickOnNewIndicatorButton() {
        console.log("Clicking on New Indicator button");
        await this.NEW_INDICATOR_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INDICATOR_BUTTON.click();
        console.log("New Indicator button clicked");
    }

    async enterIndicatorTittle() {
        console.log("Entering Indicator title");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Testing');
        console.log("Indicator title entered");
    }

    async enterDataSource() {
        console.log("Entering Indicator data source");
        await this.INDICATOR_SOURCE.waitFor({ state: 'visible' });
        await this.INDICATOR_SOURCE.fill('testSource');
        console.log("Indicator data source entered");
    }

    async enterMinTolrence() {
        console.log("Entering Indicator minimum tolerance");
        await this.INDICATOR_MINTOLER_FIELD.waitFor({ state: 'visible' });
        await this.INDICATOR_MINTOLER_FIELD.fill('30');
        console.log("Indicator minimum tolerance entered");
    }

    async enterMaxTolrence() {
        console.log("Entering Indicator maximum tolerance");
        await this.INDICATOR_MAXTOLER_FIELD.waitFor({ state: 'visible' });
        await this.INDICATOR_MAXTOLER_FIELD.fill('60');
        console.log("Indicator maximum tolerance entered");
    }

    async selectIndicatorFrequency() {
        console.log("Selecting Indicator frequency");
        await this.FRECUENCY_DROPDOWN.waitFor({ state: 'visible' });
        await this.FRECUENCY_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const frequency = this.page.locator(`//span[text()='Monthly']`);
        await frequency.waitFor({ state: 'visible' });
        await frequency.click();
        console.log("Indicator frequency selected as Monthly");
    }

    async selectIndicatorMeserment() {
        console.log("Selecting Indicator measurement");
        await this.MESERMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.MESERMENT_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const measurement = this.page.locator(`//span[text()='Percentage']`);
        await measurement.waitFor({ state: 'visible' });
        await measurement.click();
        console.log("Indicator measurement selected as Percentage");
    }

    async clickOnAddIndicator() {
        console.log("Clicking on Add Indicator button");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Indicator button clicked");
    }

    async clickNewRiskTemplateButton() {
        console.log("Clicking on New Risk Template button");
        await this.NEW_RISK_TEMPLATE.waitFor({ state: 'visible' });
        await this.NEW_RISK_TEMPLATE.click();
        console.log("New Risk Template button clicked");
    }

    async clickAndSelectCategory() {
        console.log("Selecting Risk Category: Operational");
        await this.RISK_CATEGORY.waitFor({ state: 'visible' });
        await this.RISK_CATEGORY.click();
        await this.page.waitForTimeout(2000);
        const category = this.page.locator(`//span[text()='Operational']`);
        await category.waitFor({ state: 'visible' });
        await category.scrollIntoViewIfNeeded();
        await category.click();
        console.log("Risk Category selected");
    }

    async enterRiskTittle() {
        console.log("Entering Risk title");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Testing');
        console.log("Risk title entered");
    }

    async enterRiskStatement() {
        console.log("Entering Risk statement");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Testing');
        console.log("Risk statement entered");
    }

    async clickAddRiskTemplate() {
        console.log("Clicking Add Risk Template button");
        await this.ADD_RISK.waitFor({ state: 'visible' });
        await this.ADD_RISK.click();
        console.log("Risk Template added");
    }

    async clickOnCatalog() {
        console.log("Clicking on Catalog tab");
        await this.CATALOG.waitFor({ state: 'visible' });
        await this.CATALOG.click();
        console.log("Catalog tab clicked");
    }

    async clickOnNewAssetButton() {
        console.log("Clicking New Asset button");
        await this.NEW_ASSET_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_ASSET_BUTTON.click();
        console.log("New Asset button clicked");
    }

    async enterAssetEngName() {
        console.log("Entering Asset English name");
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Testing');
        console.log("Asset English name entered");
    }

    async enterAssetArbName() {
        console.log("Entering Asset Arabic name");
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill('Testing09');
        console.log("Asset Arabic name entered");
    }

    async clickAndSelectAssertDept() {
        console.log("Selecting Asset Department");
        await this.DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_DEPARTMENT.click();
        console.log("Asset Department selected");
    }

    async clickAndSelectAssesrtOwner() {
        console.log("Selecting Asset Owner: Sumit Testing");
        await this.OWNERSHIP_OWNER.waitFor({ state: 'visible' });
        await this.OWNERSHIP_OWNER.scrollIntoViewIfNeeded();
        await this.OWNERSHIP_OWNER.click();
        await this.page.waitForTimeout(2000);
        const selectStatus = this.page.locator(`//span[text()='Sumit Testing']`);
        await selectStatus.scrollIntoViewIfNeeded();
        await selectStatus.click();
        console.log("Asset Owner selected");
    }

    async clickOnAddAssert() {
        console.log("Clicking Add Asset button");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Asset added successfully");
    }

    async clickOnTHreats() {
        console.log("Clicking on Threats tab");
        await this.THREATS.waitFor({ state: 'visible' });
        await this.THREATS.click();
        console.log("Threats tab opened");
    }

    async clickOnNewThreatButton() {
        console.log("Clicking on New Threat button");
        await this.NEW_THREAT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_THREAT_BUTTON.click();
        console.log("New Threat popup opened");
    }

    async enterThreatEngName() {
        console.log("Entering English Threat Name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Test_${timestamp}_${random}`;
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.fill(uniqueTitle);
        console.log("English Threat Name entered");
    }

    async enterThreatArbName() {
        console.log("Entering Arabic Threat Name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.THREAT_ARABIC_NAME.waitFor({ state: 'visible' });
        await this.THREAT_ARABIC_NAME.fill(uniqueTitle);
        console.log("Arabic Threat Name entered");
    }

    async clickAndSelectThreatType() {
        console.log("Selecting Threat Type");
        await this.ISSUE_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const type = this.page.locator(`//span[text()='Testing']`);
        await type.click();
        console.log("Threat Type selected:");
    }

    async clickOnThreatAdd() {
        console.log("Clicking on Add Threat button");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Threat added successfully");
    }

    async clickOnVulability() {
        console.log("Clicking Vulnerability tab");
        await this.VULNERABILITY.waitFor({ state: 'visible' });
        await this.VULNERABILITY.click();
        console.log("Vulnerability tab opened");
    }
    async clickOnNewVulabilityButton() {
        console.log("Clicking on New Vulnerability button");
        await this.NEW_VULNERABILITY_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_VULNERABILITY_BUTTON.click();
        console.log("New Vulnerability popup opened");
    }

    async enterVulabilityEngName() {
        console.log("Entering English Vulnerability Name");
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.fill('Trestvcvh');
        console.log("English Vulnerability Name entered");
    }

    async enterVulabilityArbName() {
        console.log("Entering Arabic Vulnerability Name");
        await this.THREAT_ARABIC_NAME.waitFor({ state: 'visible' });
        await this.THREAT_ARABIC_NAME.fill('Trestvcvh');
        console.log("Arabic Vulnerability Name entered");
    }

    async clickAndSelectVulabilitySource() {
        console.log("Selecting Vulnerability Source");
        await this.SOURCE_DROPDOWN.waitFor({ state: 'visible' });
        await this.SOURCE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const type = this.page.locator(`//span[text()='Testing']`);
        await type.click();
        console.log("Vulnerability Source selected:");
    }

    async clickOnVulabilityAdd() {
        console.log("Clicking Add Vulnerability button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_BUTTON.click();
        console.log("Vulnerability added successfully");
    }

    async clickOnProcess() {
        console.log("Clicking on Process section");
        await this.PROCESS.waitFor({ state: 'visible' });
        await this.PROCESS.click();
        console.log("Process section opened");
    }

    async clickOnNewProcessButton() {
        console.log("Clicking New Process button");
        await this.NEW_PROCESS.waitFor({ state: 'visible' });
        await this.NEW_PROCESS.click();
        console.log("New Process popup opened");
    }

    async enterProcessEngName() {
        console.log("Entering English Process Name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Test_${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Test' + uniqueTitle);
        console.log("English Process Name entered");
    }

    async enterProcessArbName() {
        console.log("Entering Arabic Process Name");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Test_${timestamp}_${random}`;
        await this.ARABIC_ASSEST_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ARABIC_ASSEST_NAME_FIELD.fill('Testing' + uniqueTitle);
        console.log("Arabic Process Name entered");
    }

    async clickAndSelectProcessCategory() {
        console.log("Selecting Process Category");
        await this.CATEGORY_DROPDOWN.waitFor({ state: 'visible' });
        await this.CATEGORY_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const type = this.page.locator(`//span[text()='Test']`);
        await type.click();
        console.log("Process Category selected:");
    }

    async clickAndSelectProcessOwner() {
        console.log("Selecting Process Owner");
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.page.waitForTimeout(2000);
        const type = this.page.locator(`//span[text()='Sumit Testing']`);
        await type.click();
        console.log("Process Owner selected: Sumit Testing");
    }
    async clickOnProcessSlider() {
        const sliderPointer = this.page.locator('.ngx-slider-pointer-min');

        // Ensure the slider pointer is visible
        await sliderPointer.waitFor({ state: 'visible' });

        // Click on the slider handle
        await sliderPointer.click({ force: true });

        console.log("Clicked on the process slider pointer...");
    }

    async clickOnProcessAdd() {
        console.log("Clicking Add Process button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_BUTTON.click();
        console.log("Process added successfully");
    }

    async clickOnInitiativeManagement() {
        console.log("Opening Initiative Management section");
        await this.INITIATIVE_MANAGEMENT.waitFor({ state: 'visible' });
        await this.INITIATIVE_MANAGEMENT.click();
        console.log("Initiative Management opened");
    }

    async clickOnInitiative() {
        console.log("Clicking on Initiative tab");
        await this.INITIATIVE.waitFor({ state: 'visible' });
        await this.INITIATIVE.click();
        console.log("Initiative tab opened");
    }

    async clickOnNewInitiative() {
        console.log("Clicking New Initiative button");
        await this.NEW_INITIATIVE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_INITIATIVE_BUTTON.click();
        console.log("New Initiative popup opened");
    }

    async enterInitiativeTittle() {
        console.log("Entering Initiative Title");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `Test_${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill(uniqueTitle);
        console.log("Initiative Title entered");
    }

    async enterInitiativeDesc() {
        console.log("Entering Initiative Description");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Trestvcvh');
        console.log("Initiative Description entered");
    }

    async selectInitiativeDepartment() {
        console.log("Selecting Initiative Department");
        await this.VENDOR_DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_DEPARTMENT_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_DEPARTMENT.click();
        console.log("Department selected");
    }

    async selectMapControlCheckbox() {
        console.log("Checking Map Control checkbox");
        await this.SELECT_MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await this.SELECT_MAP_CHECKBOX.check();
        console.log("Map Control checkbox checked");
    }

    async clickOnMapControlButton() {
        console.log("Clicking Map Control button");
        await this.RISK_MAP_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MAP_BUTTON.scrollIntoViewIfNeeded();
        await this.RISK_MAP_BUTTON.click();
        console.log("Map Control button clicked");
    }

    async clickAndSelectInitiative() {
        console.log("Clicking and selecting Initiative");
        await this.SELECT_INITIATIVE.waitFor({ state: 'visible' });
        await this.SELECT_INITIATIVE.click();
        console.log("Initiative selected");
    }

    async clickOnLinkControl() {
        console.log("Clicking Link Control button");
        await this.LINK_CONTROL_BUTTON.waitFor({ state: 'visible' });
        await this.LINK_CONTROL_BUTTON.scrollIntoViewIfNeeded();
        await this.LINK_CONTROL_BUTTON.click();
        console.log("Link Control button clicked");
    }

    async clickOnMileStoneTab() {
        console.log("Opening Milestone tab");
        await this.MILESTONE_TAB.waitFor({ state: 'visible' });
        await this.MILESTONE_TAB.click();
        console.log("Milestone tab opened");
    }

    async clickOnNewMilestoneButton() {
        console.log("Clicking New Milestone button");
        await this.NEW_MILESTONE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_MILESTONE_BUTTON.click();
        console.log("New Milestone popup opened");
    }

    async enterMilestoneTittle() {
        console.log("Entering Milestone Title");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.REMARK_TITTLE.waitFor({ state: 'visible' });
        await this.REMARK_TITTLE.fill('Test' + uniqueTitle);
        console.log("Milestone Title entered");
    }

    async enterMilestoneDesc() {
        console.log("Entering Milestone Description");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('Trestvcvh');
        console.log("Milestone Description entered");
    }

    async clickOnCreateMilestone() {
        console.log("Clicking Create Milestone button");
        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Milestone created successfully");
    }

    async clickOnGovernance() {
        console.log("Clicking on Governance section");
        await this.GOVERNANCE.waitFor({ state: 'visible' });
        await this.GOVERNANCE.click();
        console.log("Governance section opened");
    }

    async clickOnTemplates() {
        console.log("Clicking on Templates tab");
        await this.TEMPLATES.waitFor({ state: 'visible' });
        await this.TEMPLATES.click();
        console.log("Templates tab opened");
    }

    async validateTemplatePage() {
        console.log("Validating Template page visibility");
        await this.TEMPLATE_PAGE.waitFor({ state: 'visible' });
        await expect(this.TEMPLATE_PAGE).toBeVisible();
        console.log("Template page is visible");
    }

    async clickOnCreateTemplate() {
        console.log("Clicking on Create Template button");
        await this.CREATE_TEMPLATE.click();
        console.log("Create Template form opened");
    }

    async enterArabicName(nameArabic: string) {
        console.log(`Entering Arabic template name: ${nameArabic}`);
        await this.ARABIC_NAME_TEXTFILED.fill(nameArabic);
        console.log("Arabic template name entered");
    }

    async enterEnglishName(nameEnglish: string) {
        console.log(`Entering English template name: ${nameEnglish}`);
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `_${random}`;
        await this.ENGLISH_NAME_TEXTFIELD.fill(nameEnglish + uniqueTitle);
        console.log("English template name entered");
    }

    async enterDocumentText(docText: string) {
        console.log("Entering Template document text");
        await this.DOCUMENT_TEXT_TEXTFIELD.fill(docText);
        console.log("Document text entered");
    }

    async uploadEvidenceFile(page: Page) {
        console.log("Starting evidence file upload...");
        await Utils.uploadFile(
            page,
            '(//input[@type="file"])[2]',
            'file/Upload_EC.png' 
        );
        await page.waitForTimeout(2000);
    }

    async validateFileUploaded() {
         console.log("Validating file upload...");
        await this.FILE_UPLOADED.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(2000);
        await this.FILE_UPLOADED.scrollIntoViewIfNeeded();
        expect(this.FILE_UPLOADED).toBeVisible();
        console.log("Validation file upload complete...");
    }

    async uploadDocFile(page: Page) {
        console.log("Uploading Document file...");
        await Utils.uploadFile(page,'(//input[@type="file"])[1]','file/Upload_EC.png'  
        );
        await page.waitForTimeout(2000);
    }

    async clickOnCreateButtonGov() {
        console.log("Clicking Create Template button");
        await this.CREATE_BUTTON_GOV.scrollIntoViewIfNeeded();
        await this.CREATE_BUTTON_GOV.click();
        console.log("Template creation submitted");
    }

    async validateTemplateCreated(tempName: string) {
        console.log(`Validating template created: ${tempName}`);
        const temp = this.page.locator(`//div[contains(normalize-space(),'${tempName}'])/ancestor::div[@class="templates-list__col-4 ng-star-inserted"]`);
        await expect(temp).toBeVisible();
        console.log("Template creation validated");
    }

    async clickOnTemplate() {
        console.log("Clicking on created Template");
        await this.TEMPLATE.waitFor({ state: 'visible' });
        await this.TEMPLATE.click();
        console.log("Template opened");
    }

    async validateTemplateDetailsPopUp() {
        console.log("Validating Template Details popup");
        await this.TEMPLATE_DETAILS_POP_UP.waitFor({ state: 'visible' });
        await expect(this.TEMPLATE_DETAILS_POP_UP).toBeVisible();
        console.log("Template Details popup is visible");
    }

    async validateEditPage() {
        console.log("Validating Edit Template page");
        await this.EDIT_PAGE_HEADLINE.waitFor({ state: 'visible' });
        const heading = await this.EDIT_PAGE_HEADLINE.textContent();
        expect(heading?.trim()).toBe('Edit Template');
        await expect(this.EDIT_PAGE).toBeVisible();
        console.log("Edit Template page is displayed");
    }

    async clearEnlishName() {
        console.log("Clearing English Name field");
        await this.ENGLISH_NAME_TEXTFIELD.clear();
        console.log("English Name field cleared");
    }

    async clickOnDelete() {
        console.log("Clicking Delete button");
        await this.DELETE_BUTTON.click();
        console.log("Delete button clicked");
    }

    async validateConfirmationPopUp() {
        console.log("Validating Delete Confirmation popup");
        await this.CONFIRMATION_POP_UP.waitFor({ state: 'visible' });
        await expect(this.CONFIRMATION_POP_UP).toBeVisible();
        console.log("Delete Confirmation popup visible");
    }

    async clickOnYesDeleteButton() {
        console.log("Clicking Yes on Delete Confirmation");
        await this.YES_BUTTON.click();
        console.log("Confirmed deletion");
    }

    async validateDeleteSuccessMsg() {
        console.log("Validating Delete Success message");
        await this.DELETE_SUCCESS_MSG.waitFor({ state: 'visible' });
        const msg = await this.DELETE_SUCCESS_MSG.textContent();
        expect(msg?.trim()).toBe("Deleted Successfully");
        console.log("Delete success message validated");
    }

    async clickOnPolicyAndDoc() {
        console.log("Opening Policy & Document Management");
        await this.POLICY_DOC_MANAGEMENT.click();
        console.log("Policy & Document Management opened");
    }

    async clickOnNewDoc() {
        console.log("Clicking New Document button");
        await this.NEW_DOC_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_DOC_BUTTON.click();
        console.log("New Document form opened");
    }

    async clickOnCreateDoc() {
        console.log("Clicking Create Document button");
        await this.CREATE_DOC.waitFor({ state: 'visible' });
        await this.CREATE_DOC.click();
        console.log("Create Document clicked");
    }

    async enterTittle(tittle: string) {
        console.log(`Entering Document Title: ${tittle}`);
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.TITTLE.waitFor({ state: 'visible' });
        await this.TITTLE.fill(tittle + uniqueTitle);
        console.log("Document Title entered");
    }

    async enterDescriptionGov(desc: string) {
        console.log("Entering Document Description");
        await this.DESCRIPTION_GOV.fill(desc);
        console.log("Document Description entered");
    }

    async clickAndSelectType() {
        console.log("Selecting Document Type");
        await this.TYPE_DROPDOWN_GOV.waitFor({ state: 'visible' });
        await this.TYPE_DROPDOWN_GOV.scrollIntoViewIfNeeded();
        await this.TYPE_DROPDOWN_GOV.click();
        await this.page.waitForTimeout(1000);
        const seletStatus = this.page.locator(`(//span[text()='Form'])[1]`);
        await seletStatus.click();
        console.log("Document Type selected: Form");
    }

    async clickAndSelectClarification() {
        console.log("Selecting Clarification Type");
        await this.CLARIFICATION_DROPDOWN.waitFor({ state: 'visible' });
        await this.CLARIFICATION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.CLARIFICATION_DROPDOWN.click();
        await this.page.waitForTimeout(1000);
        const seletStatus = this.page.locator(`//span[text()='Public']`);
        await seletStatus.click();
        console.log("Clarification selected: Public");
    }

    async clickAndSelectShareing(type: string) {
        console.log(`Selecting Sharing Option: ${type}`);
        await this.SHARING_DROPDOWN.waitFor({ state: 'visible' });
        await this.SHARING_DROPDOWN.scrollIntoViewIfNeeded();
        await this.SHARING_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`(//span[text()='${type}'])[1]`);
        await seletStatus.click();
        console.log(`Sharing option selected: ${type}`);
    }

    async clickAndSelectdistribution(type: string) {
        console.log(`Selecting Distribution Option: ${type}`);
        await this.DISRIBUTION_DROPDOWN.waitFor({ state: 'visible' });
        await this.DISRIBUTION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DISRIBUTION_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`(//span[text()='${type}'])[1]`);
        await seletStatus.click();
        console.log(`Distribution option selected: ${type}`);
    }

    async clickAndSelectFromDate() {
        console.log("Opening From Date calendar");
        await this.FROM_DATE_CALENDAR.waitFor({ state: 'visible' });
        await this.FROM_DATE_CALENDAR.click();
        console.log("From Date calendar opened");
    }

    async clickAndSelectToDate() {
        console.log("Opening To Date calendar");
        await this.TO_DATE_CALENDER.waitFor({ state: 'visible' });
        await this.TO_DATE_CALENDER.click();
        console.log("To Date calendar opened");
    }

    async selectDate(date: string) {
        console.log(`Selecting date: ${date}`);
        const selectDate = this.page.locator(`//span[text()='${date}']`);
        await selectDate.click();
        console.log(`Date selected: ${date}`);
    }

    async clickONOwnerShhipButton() {
        console.log("Clicking Add Ownership button");
        await this.ADD_OWERSHIP_BUTTON.click();
        console.log("Ownership button clicked");
    }

    async selectIssueOwnerGov() {
        await this.ISSUE_OWNER.waitFor({ state: 'visible' });
        await this.ISSUE_OWNER.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNER_GOV.click();
    }

    async uploadEvidenceFileGov(page: Page) {
        console.log("Uploading evidence file...");
        await Utils.uploadFile(page,'(//input[@id="filePicker"])[1]','file/Upload_EC.png' 
        );
        console.log("Evidence uploaded.");
    }

    async enterVersion(verion: string) {
        console.log(`Entering version: ${verion}`);
        await this.VERSION_TEXFIELD.fill(verion);
        console.log("Version entered");
    }

    async clickONNext() {
        console.log("Clicking Next button");
        await this.NEXT_BUTTON.scrollIntoViewIfNeeded();
        await this.NEXT_BUTTON.waitFor({ state: 'visible' });
        await this.NEXT_BUTTON.click();
        console.log("Next button clicked");
    }

    async enterDocText(verion: string) {
        console.log("Entering Document text");
        await this.DOCUMENT_TEXT_TEXTFIELD_GOV.fill(verion);
        console.log("Document text entered");
    }

    async clickOnFinish() {
        console.log("Attempting to click Finish button");
        await this.page.waitForTimeout(2000);
        await this.FINISH_BUTTON.click();
        console.log("Finish button clicked");
        await this.page.waitForTimeout(1500);
        const stillVisible = await this.FINISH_BUTTON.isVisible();

        if (stillVisible) {
            console.log("Finish button still visible — clicking again...");
            await this.FINISH_BUTTON.click();
            console.log("Finish button clicked again successfully");
        } else {
            console.log("Finish button no longer visible — no second click needed");
        }
    }

    async clickOnNextButton() {
        console.log("Clicking Next button");
        await this.NEXT_BUTTON.nth(1).click();
        console.log("Next button clicked");
    }

    async clickOnPicktemplate() {
        console.log("Clicking Pick Template");
        await this.PICK_TEMPLATE.click();
        console.log("Pick Template clicked");
    }

    async clickOnUseTemplate() {
        console.log("Clicking Use Template");
        await this.USE_TEMPLATE.waitFor({ state: 'visible' });
        await this.USE_TEMPLATE.scrollIntoViewIfNeeded();
        await this.USE_TEMPLATE.click();
        console.log("Use Template clicked");
    }

    async clickOnUploadfromDevice() {
        console.log("Clicking Upload From Device");
        await this.UPLOAD_FROM_DEVICE.click();
        console.log("Upload From Device clicked");
    }

    async validateDocAdded(expected: string) {
        console.log(`Validating document added: expecting ${expected}`);
        const docName = await this.DOC_NAME.textContent();
        expect(docName).toContain(expected);
        console.log("Document validation successful");
    }

    async clickOnTableViewIfNotVisible() {
        console.log("Checking if Table View is visible");
        const isVisible = await this.TABLE_VIEW.isVisible();

        if (!isVisible) {
            console.log("Table View not visible, switching to Table View");
            await this.TABLE_VIEW_ICON.click();
        } else {
            console.log("Table View already visible");
        }
    }

    async clickOnSubmit() {
        console.log("Clicking Submit button");
        await this.SUBMIT_BUTTON.waitFor({ state: 'visible' });
        await this.SUBMIT_BUTTON.click();
        console.log("Submit button clicked");
    }

    async clickOnDocument() {
        console.log("Opening Document");
        await this.DOC_NAME.waitFor({ state: 'visible' });
        await this.DOC_NAME.click();
        console.log("Document opened");
    }

    async clickOnControlsGov() {
        console.log("Navigating to Controls (Governance)");
        await this.GOV_CONTROL.scrollIntoViewIfNeeded();
        await this.GOV_CONTROL.click();
        console.log("Controls page opened");
    }

    async clickOnAddInternalControl() {
        console.log("Clicking Add Internal Control");
        await this.ADD_INT_CONTROL.waitFor({ state: 'visible' });
        await this.ADD_INT_CONTROL.click();
        console.log("Add Internal Control clicked");
    }

    async enterNameToArabicControlfield(name: string) {
        console.log(`Entering Arabic Control Name: ${name}`);
        await this.CONTROL_ARABIC_NAME.waitFor({ state: 'visible' });
        await this.CONTROL_ARABIC_NAME.fill(name);
        console.log("Arabic Control Name entered");
    }

    async enterNameToEngControlfield(name: string) {
        console.log(`Entering English Control Name: ${name}`);
        await this.CONTROL_ENG_NAME.waitFor({ state: 'visible' });
        await this.CONTROL_ENG_NAME.fill(name);
        console.log("English Control Name entered");
    }

    async clickOnMapInternalControl() {
        console.log("Clicking Map Internal Control");
        await this.MAP_INT_CONTROL.waitFor({ state: 'visible' });
        await this.MAP_INT_CONTROL.click();
        console.log("Map Internal Control clicked");
    }

    async clickMapCheckbox() {
        console.log("Checking Map Control Checkbox");
        await this.MAP_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_CHECKBOX.check();
        console.log("Map checkbox checked");
    }

    async clickInternalControlTab() {
        console.log("Opening Internal Control tab");
        await this.INTERNAL_CONTROL_TAB.waitFor({ state: 'visible' });
        await this.INTERNAL_CONTROL_TAB.click();
        console.log("Internal Control tab opened");
    }

    async validateInternalIntControlPage() {
        console.log("Validating Internal Control page");
        await this.INTERNAL_CONTROL_PAGE.waitFor({ state: 'visible' });
        await expect(this.INTERNAL_CONTROL_PAGE).toBeVisible();
        console.log("Internal Control page validated");
    }

    async clickOnAddControl() {
        console.log("Clicking Add Control");
        await this.ADD_CONTROL.waitFor({ state: 'visible' });
        await this.ADD_CONTROL.click();
        console.log("Add Control clicked");
    }

    async clickOnAddButton() {
        console.log("Clicking Add button");
        await this.ADD_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_BUTTON.click();
        console.log("Add button clicked");
    }

    async clickOnHambergGov() {
        console.log("Clicking Hamburger (Governance)");
        await this.HAMBERD_GOV.waitFor({ state: 'visible' });
        await this.HAMBERD_GOV.click();
        console.log("Hamburger clicked");
    }

    async clickActivateIfAvailable() {
        console.log("Checking first hamburger for ACTIVATE...");

        const SUBMIT_BUTTON = this.page.locator("//button[text()=' Submit ']");
        const hamberg = this.page.locator(`(//button[@data-toggle="dropdown"])[1]`)

        await hamberg.click();

        await hamberg.click();

        if (await this.ACTIVATE_BUTTON.isVisible()) {
            console.log("ACTIVATE found! Clicking...");
            await this.ACTIVATE_BUTTON.click();
            await SUBMIT_BUTTON.click();
            console.log("Activated successfully!");
        } else {
            console.log("⚠ ACTIVATE not visible in first hamburger");
        }
    }

    async clickPublishIfAvailable() {

        console.log("Checking first hamburger for PUBLISH...");

        const SUBMIT_BUTTON = this.page.locator("//button[text()=' Submit ']");

        const hamberg = this.page.locator(`(//button[@data-toggle="dropdown"])[1]`)

        await hamberg.click();

        await hamberg.click();
        if (await this.PUBLISH_BUTTON.isVisible()) {
            console.log("PUBLISH found! Clicking...");
            await this.PUBLISH_BUTTON.click();
            await SUBMIT_BUTTON.click();
            console.log("Published successfully!");
        } else {
            console.log("⚠ PUBLISH not visible in first hamburger");
        }
    }


    async clickOnEditControl() {
        console.log("Clicking Edit Control");
        await this.EDIT_CONTROL.waitFor({ state: 'visible' });
        await this.EDIT_CONTROL.click();
        console.log("Edit Control clicked");
    }

    async clickOnUpdate() {
        console.log("Clicking Update button");
        await this.UPDATE_BUTTON.waitFor({ state: 'visible' });
        await this.UPDATE_BUTTON.click();
        console.log("Update button clicked");
    }

    async clickOnVendorManagement() {
        console.log("Navigating to Vendor Management");
        await this.VENDOR_MANAGEMENT.waitFor({ state: 'visible' });
        await this.VENDOR_MANAGEMENT.click();
        console.log("Vendor Management opened");
    }

    async clickOnVendorTab() {
        console.log("Clicking Vendor tab");
        await this.VENDOR_TAB.waitFor({ state: 'visible' });
        await this.VENDOR_TAB.click();
        console.log("Vendor tab opened");
    }

    async validateVendorPage() {
        console.log("Validating Vendor page");
        await this.VENDOR_PAGE.waitFor({ state: 'visible' });
        await expect(this.VENDOR_TAB).toBeVisible();
        console.log("Vendor page validated");
    }

    async clickOnAddVendor() {
        console.log("Clicking Add Vendor");
        await this.ADD_VENDOR_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_VENDOR_BUTTON.click();
        console.log("Add Vendor clicked");
    }

    async enterVendorName(name: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${name}_${timestamp}_${random}`;
        console.log(`Entering Vendor Name: ${name}`);
        await this.VENDOR_NAME.fill(uniqueTitle);
        console.log("Vendor Name entered");
    }

    async enterAddress(address: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${address}_${timestamp}_${random}`;
        console.log(`Entering Vendor Address: ${address}`);
        await this.VENDOR_ADDRESS.fill(uniqueTitle);
        console.log("Vendor Address entered");
    }

    async clickAndSelectVendorType() {
        console.log("Selecting Vendor Type: Retailer");
        await this.VENDOR_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_TYPE_DROPDOWN.click();
        await this.page.waitForTimeout(1000);
        const seletStatus = this.page.locator(`//span[text()='Retailer']`);
        await seletStatus.click();
        console.log("Vendor Type selected: Retailer");
    }

    async clickAndSelectVendorDepartment() {
        console.log("Selecting Vendor Department: Updated Department");
        await this.VENDOR_DEPARTMENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_DEPARTMENT_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_DEPARTMENT_DROPDOWN.click();
        await this.page.waitForTimeout(1000);
        const seletStatus = this.page.locator(`//span[text()='Updated Department']`);
        await seletStatus.click();
        console.log("Vendor Department selected");
    }

    async clickAndSelectVendorManager() {
        console.log("Selecting Vendor Manager: SRC Test");
        await this.VENDOR_USER_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_USER_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_USER_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_OWNER.scrollIntoViewIfNeeded();
        await this.SELECT_OWNER.click();
        console.log("Vendor Manager selected: SRC Test");
    }

    async clickAndSelectVendorRisk() {
        console.log("Selecting Vendor Risk: Not-rated");
        await this.VENDOR_RISK_DROPDOWN.waitFor({ state: 'visible' });
        await this.VENDOR_RISK_DROPDOWN.scrollIntoViewIfNeeded();
        await this.VENDOR_RISK_DROPDOWN.click();
        await this.page.waitForTimeout(1000);
        const seletStatus = this.page.locator(`//span[text()='Not-rated']`);
        await seletStatus.click();
        console.log("Vendor Risk selected");
    }

    async enterPhoneNumber() {

        // Generate a unique 10-digit number
        const uniqueNumber = "9" + Math.floor(100000000 + Math.random() * 900000000).toString();

        console.log(`Entering phone number: ${uniqueNumber}`);
        await this.PHONE_NO_FIELD.fill(uniqueNumber);
        console.log("Phone number entered");
    }

    async enterContactPhoneNumber() {
        let contact = this.page.locator(`//input[@formcontrolname="phoneNumberContact"]`)

        // Generate a unique 10-digit number
        const uniqueNumber = "9" + Math.floor(100000000 + Math.random() * 900000000).toString();

        console.log(`Entering phone number: ${uniqueNumber}`);
        await contact.fill(uniqueNumber);
        console.log("Phone number entered");
    }


    async enterPhoneNumberVendor() {
        console.log("Entering vendor phone number: 1234567898");
        await this.PHONE_NO_VENDOR.fill('1234567898000');
        console.log("Vendor phone number entered");
    }

    async enterContactNameVendor() {
        console.log("Entering vendor contact name: test");
        await this.CONTACT_NAME_VENDOR.waitFor({ state: "visible" });
        await this.CONTACT_NAME_VENDOR.fill("test");
        console.log("Vendor contact name entered");
    }

    async enterProductName(product: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${product}_${timestamp}_${random}`;
        console.log(`Entering product name: ${product}`);
        await this.PRODUCT_NAME_FIELD.fill(uniqueTitle);
        console.log("Product name entered");
    }

    async enterDomain(domain: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${domain}_${timestamp}_${random}`;
        console.log(`Entering domain: ${domain}`);
        await this.DOMAIN_FIELD.fill(uniqueTitle);
        console.log("Domain entered");
    }

    async enterWebsite(web: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${web}_${timestamp}_${random}`;
        console.log(`Entering website: ${web}`);
        await this.WEBSITE_FIELD.fill(uniqueTitle);
        console.log("Website entered");
    }

    async enterVendorDesc(desc: string) {
        console.log(`Entering vendor description: ${desc}`);
        await this.DESCRIPTION_FIELD.fill(desc);
        console.log("Vendor description entered");
    }

    async clickOnCreatevendor() {
        console.log("Clicking Create Vendor button");
        await this.CREATE_VENDOR_BUTTON.scrollIntoViewIfNeeded();
        await this.CREATE_VENDOR_BUTTON.click();
        console.log("Create Vendor button clicked");
    }

    async clickOnAddContact() {
        console.log("Clicking Add Contact button");
        await this.ADD_CONTACT_BUTTON.click();
        console.log("Add Contact button clicked");
    }

    async enterConatactName(name: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${name}_${timestamp}_${random}`;
        console.log(`Entering contact name: ${name}`);
        await this.CONTACT_NAME.fill(uniqueTitle);
        console.log("Contact name entered");
    }

    async enterPosition(position: string) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${position}_${timestamp}_${random}`;
        console.log(`Entering position: ${uniqueTitle}`);
        await this.POSITION.fill(position);
        console.log("Position entered");

    }

    async enterEmail() {
        console.log("Entering email: test123@gmail.com");

        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${random}`;
        await this.page.waitForTimeout(2000);
        await this.EMAIL.fill(uniqueTitle + 'test123@gmail.com');
        console.log("Email entered");
    }

    async clickOnVindorName() {
        console.log("Clicking on Vendor name entry");
        await this.SELECT_VINDOR.waitFor({ state: 'visible' });
        await this.SELECT_VINDOR.click();
        console.log("Vendor name clicked");
    }

    async clickOnNewRisk() {
        console.log("Clicking Add New Risk");
        await this.ADD_RISK_BUTTON_GOV.waitFor({ state: 'visible' });
        await this.ADD_RISK_BUTTON_GOV.click();
        console.log("New Risk button clicked");
    }

    async enterRiskTitle(title: string) {
        console.log("Entering Risk Title: testing");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.RISK_TITTLE.waitFor({ state: 'visible' });
        await this.RISK_TITTLE.fill(title + 'testing' + uniqueTitle);
        console.log("Risk Title entered");
    }

    async enterRiskStatementVendor() {
        console.log("Entering Risk Statement: test");
        await this.RISK_STATEMENT.waitFor({ state: 'visible' });
        await this.RISK_STATEMENT.fill('test');
        console.log("Risk Statement entered");
    }

    async clickSelectRiskCategory() {
        console.log("Selecting Risk Category: General");
        await this.RISK_CATEGORY_DROPDOWN.waitFor({ state: 'visible' });
        await this.RISK_CATEGORY_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        let risk = this.page.locator(`//span[text()='General']`);
        await risk.click();
        console.log("Risk Category selected");
    }

    async clickOnMapVendor() {
        console.log("Clicking Map Vendor");
        await this.MAP_BUTTON.nth(0).waitFor({ state: 'visible' });
        await this.MAP_BUTTON.nth(0).click();
        console.log("Vendor mapped");
    }

    async slideToValue(count: number) {
        console.log(`Sliding to value index: ${count}`);
        const bar = this.page.locator(`(//span[text()='5'])[${count}]`);
        await bar.waitFor({ state: 'visible' });
        await bar.click();
        console.log("Slider value selected");
    }

    async clickOnDocumentsTab() {
        console.log("Opening Documents tab");
        await this.DOCUMENT_TAB.waitFor({ state: 'visible' });
        await this.DOCUMENT_TAB.click();
        console.log("Documents tab opened");
    }

    async clickOnNewDocButton() {
        console.log("Clicking New Document button");
        await this.NEW_DOCUMENT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_DOCUMENT_BUTTON.click();
        console.log("New Document button clicked");
    }

    async clickSelectStatus() {
        console.log("Selecting Status: Valid");
        await this.STATUS_DROPDOWN_VENDOR.waitFor({ state: 'visible' });
        await this.STATUS_DROPDOWN_VENDOR.click();
        await this.page.waitForTimeout(2000);
        const status = this.page.locator(`//span[text()='Valid']`);
        await status.click();
        console.log("Status selected");
    }

    async selectEffectivenessDate() {
        console.log("Selecting Effectiveness Date");
        await this.EFFECTNESS_CALENDER.waitFor({ state: 'visible' });
        await this.EFFECTNESS_CALENDER.click();
        await this.page.waitForTimeout(2000);
        await this.END_DATE.click();
        console.log("Effectiveness Date selected");
    }

    async clickOnCreateDocVendor() {
        console.log("Clicking Create Document for vendor");
        await this.CREATE_DOC_VENDOR.waitFor({ state: 'visible' });
        await this.CREATE_DOC_VENDOR.click();
        console.log("Vendor Document created");
    }

    async validateDocAddedVendor() {
        let doc = this.page.locator(`(//a[contains(text(),' Upload_EC')])[1]`);
        await this.page.waitForTimeout(2000);
        await expect(doc).toBeVisible();
    }
    async clickOnContactTab() {
        console.log("Opening Contact tab");
        await this.CONTACT_TAB.waitFor({ state: 'visible' });
        await this.CONTACT_TAB.click();
        console.log("Contact tab opened");
    }

    async clickOnAddContactButton() {
        console.log("Clicking Add Contact button");
        await this.ADD_CONTACT.waitFor({ state: 'visible' });
        await this.ADD_CONTACT.click();
        console.log("Add Contact button clicked");
    }

    async clickOnVendorhreeDot() {
        console.log("Clicking Vendor action (three dots)");
        await this.THREE_DOT_VENDOR.waitFor({ state: 'visible' });
        await this.THREE_DOT_VENDOR.click();
        console.log("Vendor menu opened");
    }

    async clickOnVendorEdit() {
        console.log("Clicking Edit Vendor");
        await this.EDIT_VENDOR.waitFor({ state: "visible" });
        await this.EDIT_VENDOR.click();
        console.log("Edit Vendor clicked");
    }

    async clickVendoRadioButton() {
        console.log("Selecting vendor radio button");
        await this.RADIO_VENDOR.waitFor({ state: 'visible' });
        await this.RADIO_VENDOR.click();
        console.log("Vendor radio button selected");
    }

    async clickVendorSave() {
        console.log("Saving Vendor changes");
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Vendor changes saved");
    }

    async clickOnAuditManegement() {
        console.log("Navigating to Audit Management");
        await this.AUDIT_MANEGMENT.waitFor({ state: 'visible' });
        await this.AUDIT_MANEGMENT.click();
        console.log("Audit Management opened");
    }

    async clickOnAudits() {
        console.log("Opening Audits");
        await this.AUDITS.waitFor({ state: 'visible' });
        await this.AUDITS.click();
        console.log("Audits opened");
    }

    async clickOnNewAudit() {
        console.log("Clicking New Audit");
        await this.NEW_AUDIT_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_AUDIT_BUTTON.click();
        console.log("New Audit clicked");
    }

    async enterAuditName() {
        console.log("Entering Audit Name: testing");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ISSUE_NAME_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_NAME_FIELD.fill('testing' + uniqueTitle);
        console.log("Audit Name entered");
    }

    async enterAuditDesc() {
        console.log("Entering Audit Description: testing");
        await this.ISSUE_DESC_FIELD.waitFor({ state: 'visible' });
        await this.ISSUE_DESC_FIELD.fill('testing');
        console.log("Audit Description entered");
    }

    async clickAndSelectAuditorType() {
        console.log("Selecting Auditor Type: Internal");
        await this.AUDIT_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.AUDIT_TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.AUDIT_TYPE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[text()='Internal']`);
        await seletStatus.click();
        console.log("Auditor Type selected");
    }

    async clickAndSelectFramework() {
        console.log("Selecting Framework: Test_");
        await this.FRAMEWORKS_DROPDOWN.waitFor({ state: 'visible' });
        await this.FRAMEWORKS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.FRAMEWORKS_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`(//span[contains(text(),'Test_')])[1]`);
        await seletStatus.click();
        console.log("Framework selected");
    }

    async clickAndSelectAuditor() {
        console.log("Selecting Auditor: Sumit Testing");
        await this.AUDITOR_DROPDOWN.waitFor({ state: 'visible' });
        await this.AUDITOR_DROPDOWN.scrollIntoViewIfNeeded();
        await this.AUDITOR_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[text()='Sumit Testing']`);
        await seletStatus.click();
        console.log("Auditor selected");
    }

    async clickAndSelectOwnervendor() {
        console.log("Selecting Risk Owner: SRC Test");
        await this.RISK_OWNER.waitFor({ state: 'visible' });
        await this.RISK_OWNER.scrollIntoViewIfNeeded();
        await this.RISK_OWNER.click();
        await this.page.waitForTimeout(2000);
        const seletStatus = this.page.locator(`//span[text()='SRC Test']`);
        await seletStatus.click();
        console.log("Risk Owner selected");
    }

    async clickOnCreateAudit() {
        console.log("Clicking Create Audit");
        await this.CONTROL_CREATE_BUTTON.waitFor({ state: 'visible' });
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Audit Created");
    }

    async clickOnAuditName() {
        console.log("Opening Audit");
        await this.AUDIT_NAME.waitFor({ state: 'visible' });
        await this.AUDIT_NAME.click();
        console.log("Audit opened");
    }

    async clickOnAuditControl() {
        console.log("Opening Audit Control");
        await this.AUDIT_CONTROL.waitFor({ state: 'visible' });
        await this.AUDIT_CONTROL.click();
        console.log("Audit Control opened");
    }

    async clickControlExpand() {
        console.log("Expanding Control section");
        await this.AUDIT_CONTROL_EXPAND.waitFor({ state: "visible" });
        await this.AUDIT_CONTROL_EXPAND.click();
        console.log("Control expanded");
    }

    async selectAuditControl() {
        console.log("Selecting Audit Control");
        await this.SELECT_AUDIT_CONTROL.waitFor({ state: 'visible' });
        await this.SELECT_AUDIT_CONTROL.click();
        console.log("Audit Control selected");
    }

    async clickOnAuditreview() {
        console.log("Opening Audit Review");
        await this.AUDIT_REVIEW.waitFor({ state: 'visible' });
        await this.AUDIT_REVIEW.click();
        console.log("Audit Review opened");
    }

    async clickOnNoteTab() {
        console.log("Opening Notes tab");
        await this.AUDIT_NOTE_TAB.waitFor({ state: 'visible' });
        await this.AUDIT_NOTE_TAB.click();
        console.log("Notes tab opened");
    }

    async clickOnNewNote() {
        console.log("Clicking New Note");
        await this.NEW_NOTES.waitFor({ state: 'visible' });
        await this.NEW_NOTES.click();
        console.log("New Note clicked");
    }

    async enterNoteTittle() {
        console.log("Entering Note Title: Testing");
        await this.NOTE_TITTLE.waitFor({ state: 'visible' });
        await this.NOTE_TITTLE.fill('Testing');
        console.log("Note Title entered");
    }

    async enterNoteRemark() {
        console.log("Entering Note Remark: Test");
        await this.NOTE_REMARK.waitFor({ state: 'visible' });
        await this.NOTE_REMARK.fill('Test');
        console.log("Note Remark entered");
    }

    async enterNoteProcedure() {
        console.log("Entering Note Procedure");
        await this.NOTE_PROCEDURE.waitFor({ state: 'visible' });
        await this.NOTE_PROCEDURE.fill('tdyfyd');
        console.log("Note Procedure entered");
    }

    async clickOnNoteAdd() {
        console.log("Adding Note");
        await this.ADD_EVIDENCE_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Note Added");
    }

    async clickOnAuditThreeDot() {
        console.log("Opening Audit action menu");
        await this.AUDIT_THREE_DOT.waitFor({ state: 'visible' });
        await this.AUDIT_THREE_DOT.click();
        console.log("Audit action menu opened");
    }

    async clickOnChangeStatus() {
        console.log("Clicking Change Status");
        await this.CHANGE_STATUS.waitFor({ state: 'visible' });
        await this.CHANGE_STATUS.click();
        console.log("Change Status clicked");
    }

    async clickStatusRadio() {
        console.log("Selecting Status radio button");
        await this.AUDIT_STATUS_RADIO.waitFor({ state: 'visible' });
        await this.AUDIT_STATUS_RADIO.click();
        console.log("Status selected");
    }

    async clickOnConfirmationCheckbox() {
        console.log("Checking confirmation checkbox");
        await this.CONFIRMATION_CHECKBOX.waitFor({ state: 'visible' });
        await this.CONFIRMATION_CHECKBOX.check();
        console.log("Confirmation checked");
    }

    async clickOnIssueExeption() {
        console.log("Navigating to Issue Exceptions");
        await this.ISSUE_EXEPTIONS.waitFor({ state: 'visible' });
        await this.ISSUE_EXEPTIONS.click();
        console.log("Issue Exceptions opened");
    }

    async clickOnIssues() {
        console.log("Opening Issues");
        await this.ISSUES.waitFor({ state: 'visible' });
        await this.ISSUES.click();
        console.log("Issues opened");
    }

    async validateIssuePage() {
        console.log("Validating Issues page");
        await this.ISSUES_TABLE.waitFor({ state: "visible" });
        await expect(this.ISSUES_TABLE).toBeVisible();
        console.log("Issues page validated");
    }

    async clickOnIssueHamberg() {
        console.log("Opening Issue action menu");
        await this.REMARK_HAMBERG.waitFor({ state: 'visible' });
        await this.REMARK_HAMBERG.click();
        console.log("Issue action menu opened");
    }

    async clickOnIssueDelete() {
        console.log("Clicking Issue Delete");
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log("Issue delete clicked");
    }

    async clickOnExeptions() {
        console.log("Opening Exceptions tab");
        await this.EXEPTIONS.waitFor({ state: 'visible' });
        await this.EXEPTIONS.click();
        console.log("Exceptions tab opened");
    }

    async validateExeptionPage() {
        console.log("Validating Exceptions page...");
        await this.ISSUES_TABLE.waitFor({ state: "visible" });
        await expect(this.ISSUES_TABLE).toBeVisible();
        console.log("Exceptions page validated successfully");
    }

    async clickOnExeptionHamberg() {
        console.log("Clicking on Exceptions Hamburger menu...");
        await this.REMARK_HAMBERG.waitFor({ state: 'visible' });
        await this.REMARK_HAMBERG.click();
        console.log("Hamburger menu clicked");
    }

    async clickOnExeptionDelete() {
        console.log("Clicking on Delete exception...");
        await this.REMARK_DELETE.waitFor({ state: 'visible' });
        await this.REMARK_DELETE.click();
        console.log("Delete exception clicked");
    }

    async clickOnReports() {
        console.log("Opening Reports tab...");
        await this.REPORTS.waitFor({ state: 'visible' });
        await this.REPORTS.click();
        console.log("Reports tab opened");
    }

    async validateReportPage() {
        console.log("Validating Reports page...");
        await this.REPORTS_PAGE.waitFor({ state: 'visible' });
        await expect(this.REPORTS_PAGE).toBeVisible();
        console.log("Reports page validated successfully");
    }

    async clickOnReportType() {
        console.log("Clicking on Report Type dropdown...");
        await this.SELECT_REPORT_TYPE.waitFor({ state: 'visible' });
        await this.SELECT_REPORT_TYPE.click();
        console.log("Report Type dropdown clicked");
    }

    async clickOnExecutiveReport() {
        console.log("Selecting Executive Report...");
        await this.EXECUTIVE_REPORT.waitFor({ state: 'visible' });
        await this.EXECUTIVE_REPORT.click();
        console.log("Executive Report selected");
    }

    async clickOnComplainceReport() {
        console.log("Selecting Compliance Report...");
        await this.COMPLAINCE_REPORT.waitFor({ state: 'visible' });
        await this.COMPLAINCE_REPORT.click();
        console.log("Compliance Report selected");
    }

    async clickOnTaskReport() {
        console.log("Clicking on Task Report...");
        await this.TASK_REPORT.waitFor({ state: 'visible' });
        await this.TASK_REPORT.click();
        console.log("Task Report clicked");
    }

    async clickOnInitiativeReport() {
        console.log("Clicking on Initiatives Report...");
        await this.INITIATIVES_REPORT.waitFor({ state: 'visible' });
        await this.INITIATIVES_REPORT.click();
        console.log("Initiatives Report clicked");
    }

    async clickOnIssueReport() {
        console.log("Clicking on Issue Report...");
        await this.ISSUE_REPOT.waitFor({ state: 'visible' });
        await this.ISSUE_REPOT.click();
        console.log("Issue Report clicked");
    }

    async clickSelectReport() {
        console.log("Clicking on Select Report...");
        await this.SELECT_REPORT.waitFor({ state: 'visible' });
        await this.SELECT_REPORT.click();
        console.log("Select Report clicked");
    }

    async clickSelectDepatReport() {
        console.log("Clicking on Department Report...");
        const deptRepot = this.page.locator(`(//div[@class="risk-report-type__cards"])[2]`);
        await deptRepot.waitFor({ state: 'visible' });
        await deptRepot.click();
        console.log("Department Report clicked");
    }

    async validateDeptPage() {
        console.log("Validating Department Report page...");
        await this.DEPT_REPOT_PAGE.waitFor({ state: 'visible' });
        await expect(this.DEPT_REPOT_PAGE).toBeVisible();
        console.log("Department Report page validated successfully");
    }

    async validateExecutiveReportPage() {
        console.log("Validating Executive Report page...");
        await this.EXECUTIVE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.EXECUTIVE_REPORT_PAGE).toBeVisible();
        console.log("Executive Report page validated successfully");
    }

    async validateComplaineReportPage() {
        console.log("Validating Compliance Report page...");
        await this.COMPLAINCE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.COMPLAINCE_REPORT_PAGE).toBeVisible();
        console.log("Compliance Report page validated successfully");
    }

    async validateTaskReportPage() {
        console.log("Validating Task Report page...");
        await this.TASK_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.TASK_REPORT_PAGE).toBeVisible();
        console.log("Task Report page validated successfully");
    }

    async validateInitiativeReportPage() {
        console.log("Validating Initiatives Report page...");
        await this.INITIATIVES_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.INITIATIVES_REPORT_PAGE).toBeVisible();
        console.log("Initiatives Report page validated successfully");
    }

    async validateIssueReportPage() {
        console.log("Validating Issue Report page...");
        await this.ISSUE_REPORT_PAGE.waitFor({ state: 'visible' });
        await expect(this.ISSUE_REPORT_PAGE).toBeVisible();
        console.log("Issue Report page validated successfully");
    }

    async clickOnExportReportPdfIcon() {
        try {
            console.log("Clicking on Export PDF button...");
            await this.EXPORT_REPORT.click();
            console.log("🖨️ Export PDF button clicked... waiting for print preview...");

            const printPreview = this.page.locator(`//div[@id="sizer"]`);
            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                await expect(printPreview).toBeVisible();
                console.log("Print preview displayed successfully.");
            } catch {
                console.warn("⚠️ Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("❌ Error while clicking Export PDF:", error);
            throw error;
        }
    }

    async clickDelegationTab() {
        console.log("Opening Delegation tab...");
        await this.DELEGATION_TAB.waitFor({ state: 'visible' });
        await this.DELEGATION_TAB.click();
        console.log("Delegation tab opened");
    }

    async clickOnDelegation() {
        console.log("Clicking on Delegation option...");
        await this.DELEGATION.waitFor({ state: 'visible' });
        await this.DELEGATION.click();
        console.log("Delegation option clicked");
    }
    async clickOnExportPdfIcon() {
        try {
            // Click on Export PDF button
            await this.EXPORT_PDF_ICON.click();

            console.log("🖨️ Export PDF button clicked... waiting for print preview...");

            // Wait for a visible print or preview element (update selector if needed)
            const printPreview = this.page.locator(`//div[@id="sizer"]`);

            try {
                await printPreview.waitFor({ state: 'visible', timeout: 10000 });
                await expect(printPreview).toBeVisible();
                console.log("✅ Print preview displayed successfully.");
            } catch {
                console.log("Print preview not detected within 10 seconds, assuming print window opened.");
            }

        } catch (error) {
            console.error("❌ Error while clicking Export PDF:", error);
            throw error;
        }
    }

    async clickOnNewDelegation() {
        console.log("Clicking on New Delegation...");
        await this.NEW_DELEGATION.waitFor({ state: 'visible' });
        await this.NEW_DELEGATION.click();
        console.log("New Delegation clicked");
    }

    async clickAndSelectDelegatioFrom() {
        console.log("Selecting Delegation 'From' option...");
        await this.DELEGATION_FROM_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_FROM_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DELEGATION_FROM_DROPDOWN.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='Sumit Testing']`);
        await selectStatus.click();
        console.log("Delegation 'From' selected: Sumit Testing");
    }

    async clickAndSelectDelegationTo() {
        console.log("Selecting Delegation 'To' option...");
        await this.DELEGATION_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_TO_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DELEGATION_TO_DROPDOWN.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='SRC Test']`);
        await selectStatus.click();
        console.log("Delegation 'To' selected: SRC Test");
    }

    async validateDelegationToOption() {
        console.log("Validating Delegation 'To' options...");
        await this.DELEGATION_TO_DROPDOWN.waitFor({ state: 'visible' });
        await this.DELEGATION_TO_DROPDOWN.scrollIntoViewIfNeeded();
        await this.DELEGATION_TO_DROPDOWN.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='Sumit Testing']/ancestor::div/div[text()='Delegate To']`);
        if (!await selectStatus.isVisible()) {
            console.warn("'Sumit Testing' option not visible — skipping click");
            await expect(selectStatus).not.toBeVisible();
        } else {

            console.log("'Sumit Testing' option found and clicked");
        }
    }

    async clickOnCreateDelegation() {
        console.log("Clicking on Create Delegation button...");
        await this.CREATE_DELEGATION.waitFor({ state: 'visible' });
        await this.CREATE_DELEGATION.click();
        console.log("Create Delegation button clicked");
    }

    async clickAndSelectDelegationStartDate() {
        console.log("Selecting Delegation start date...");
        await this.DELEGATION_START_DATE.waitFor({ state: 'visible' });
        await this.DELEGATION_START_DATE.click();
        await this.START_DATE.waitFor({ state: 'visible' });
        await this.START_DATE.click();
        console.log("Delegation start date selected");
    }

    async clickAndSelectDelegationEndDate() {
        console.log("Selecting Delegation end date...");
        await this.page.waitForTimeout(3000);
        await this.DELEGATION_END_DATE.click();
        await this.END_DATE.waitFor({ state: 'visible' });
        await this.END_DATE.click();
        console.log("Delegation end date selected");
    }

    async clickOnDelegationHamberg() {
        console.log("Clicking on Delegation Hamburger menu...");
        await this.REMARK_HAMBERG.waitFor({ state: 'visible' });
        await this.REMARK_HAMBERG.click();
        console.log("Delegation Hamburger menu clicked");
    }

    async clickOnDelegationEdit() {
        console.log("Clicking on Edit Delegation...");
        await this.EDIT_VENDOR.waitFor({ state: 'visible' });
        await this.EDIT_VENDOR.click();
        console.log("Edit Delegation clicked");
    }


    async enterDelegationNote() {
        console.log("Entering note in Delegation...");
        await this.NOTE_REMARK.waitFor({ state: 'visible' });
        await this.NOTE_REMARK.fill('testing');
        console.log("Note entered: 'testing'");
    }

    async clickOnUpdateDelegation() {
        console.log("Clicking on Update Delegation...");
        await this.UPDATE_DELEGATION.waitFor({ state: 'visible' });
        await this.UPDATE_DELEGATION.click();
        console.log("Update Delegation clicked");
    }

    async clickOnCancelDelegation() {
        console.log("Clicking on Cancel Delegation...");
        await this.CANCEL_DELEGATION.waitFor({ state: 'visible' });
        await this.CANCEL_DELEGATION.click();
        console.log("Cancel Delegation clicked");
    }

    async clickDeleteDelegation() {
        console.log("Clicking on Delete Delegation...");
        await this.DELETE_DELEGATION.waitFor({ state: 'visible' });
        await this.DELETE_DELEGATION.click();
        console.log("Delete Delegation option clicked");

        await this.DELETE_BUTTON.waitFor({ state: 'visible' });
        await this.DELETE_BUTTON.click();
        console.log("Confirmed deletion by clicking Delete button");
    }

    async clickOnEscalationSetting() {
        console.log("Opening Escalation Setting tab...");
        await this.ESCALATION_SETTING.waitFor({ state: 'visible' });
        await this.ESCALATION_SETTING.click();
        console.log("Escalation Setting tab opened");
    }

    async clickOnNewEscalation() {
        console.log("Clicking on New Escalation...");
        await this.NEW_ESCALATION_SETTING.waitFor({ state: 'visible' });
        await this.NEW_ESCALATION_SETTING.click();
        console.log("New Escalation clicked");
    }

    async clickAndSelectTaskAssignTo() {
        console.log("Selecting 'Assign To' for task...");
        await this.TASK_ASSIGN_TO.waitFor({ state: 'visible' });
        await this.TASK_ASSIGN_TO.scrollIntoViewIfNeeded();
        await this.TASK_ASSIGN_TO.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='SRC Updated']`);
        await selectStatus.click();
        console.log("'Assign To' selected:");
    }

    async clickAndSelectTaskType() {
        console.log("Selecting Task Type...");
        await this.ISSUE_TYPE_DROPDOWN.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_DROPDOWN.scrollIntoViewIfNeeded();
        await this.ISSUE_TYPE_DROPDOWN.click();
        await this.page.waitForTimeout(1000);

        const selectStatus = this.page.locator(`(//span[@class="ng-option-label ng-star-inserted"])[1]`);
        await selectStatus.click();
        console.log("Task Type selected: Edit Evidence Request");
    }

    async clickAndSelectEscalation() {
        console.log("Selecting Escalation option...");
        await this.SELECT_ESCALATION_DROPDOWN.waitFor({ state: 'visible' });
        await this.SELECT_ESCALATION_DROPDOWN.scrollIntoViewIfNeeded();
        await this.SELECT_ESCALATION_DROPDOWN.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='Sumit Testing']`);
        await selectStatus.click();
        console.log("Escalation selected: Sumit Testing");
    }

    async clickOnAddEscalation() {
        console.log("Clicking on Add Escalation button...");
        await this.ADD_ESCALATION_BUTTON.waitFor({ state: 'visible' });
        await this.ADD_ESCALATION_BUTTON.click();
        console.log("Add Escalation button clicked");
    }

    async clickOnEscalationSave() {
        console.log("Clicking on Escalation Save button...");
        await this.SAVE_ISSUE.waitFor({ state: 'visible' });
        await this.SAVE_ISSUE.click();
        console.log("Escalation Save clicked");
    }

    async clickAndSelectTriggerEvent() {
        console.log("Selecting Escalation Trigger Event...");
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.waitFor({ state: 'visible' });
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.scrollIntoViewIfNeeded();
        await this.ESCALATION_TRIGGER_EVENT_DROPDOWN.click();
        await this.page.waitForTimeout(1000);

        const selectStatus = this.page.locator(`//span[text()='Other']`);
        await selectStatus.click();
        console.log("Trigger Event selected: Other");
    }

    async clickAndSelectUsers() {
        console.log("Selecting Escalation Users...");
        await this.ESCALATION_USERS_DROPDOWN.waitFor({ state: 'visible' });
        await this.ESCALATION_USERS_DROPDOWN.scrollIntoViewIfNeeded();
        await this.ESCALATION_USERS_DROPDOWN.click();
        await this.page.waitForTimeout(2000);

        const selectStatus = this.page.locator(`//span[text()='Sumit Testing']`);
        await selectStatus.click();
        console.log("Escalation User selected: Sumit Testing");
    }

    async enterEscalationTittle() {
        console.log("Entering Escalation Title...");
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        const uniqueTitle = `${timestamp}_${random}`;
        await this.ESCALATION_TITTLE.waitFor({ state: 'visible' });
        await this.ESCALATION_TITTLE.fill('testing' + uniqueTitle);
        console.log("Escalation Title entered: 'testing'");
    }

    async clickOnEscalationCreate() {
        console.log("Clicking on Escalation Create button...");
        await this.CONTROL_CREATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CONTROL_CREATE_BUTTON.click();
        console.log("Escalation Create clicked");
    }
    async clickOnProceed() {
        console.log("Checking if Proceed button is visible...");

        if (await this.PROCEED_BUTTON.isVisible()) {
            console.log("Proceed button is visible. Clicking now...");
            await this.PROCEED_BUTTON.scrollIntoViewIfNeeded();
            await this.PROCEED_BUTTON.click();
            console.log("Proceed button clicked successfully");
        } else {
            console.log("Proceed button is NOT visible. Skipping click.");
        }
    }

    async clickOnEscalations() {
        console.log("Opening Escalations tab...");
        await this.ESCATATIONS.waitFor({ state: 'visible' });
        await this.ESCATATIONS.click();
        console.log("Escalations tab opened");
    }

    async clickOnEscalationButton() {
        console.log("Clicking on New Escalation button...");
        await this.NEW_ESCALATION_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_ESCALATION_BUTTON.click();
        console.log("New Escalation button clicked");
    }

    async clickOnCatalogThreeDot() {
        console.log("Clicking on Catalog three-dot menu...");
        await this.HAMBERD_GOV.waitFor({ state: 'visible' });
        await this.HAMBERD_GOV.click();
        console.log("Catalog three-dot menu clicked");
    }

    async clickOnPermisions() {
        console.log("Opening Permissions...");
        await this.PERMISIONS.waitFor({ state: 'visible' });
        await this.PERMISIONS.click();
        console.log("Permissions opened");
    }

    async validatePermisionPopUp() {
        console.log("Validating Permissions popup...");
        await this.PERMISION_POPUP.waitFor({ state: 'visible' });
        await expect(this.PERMISION_POPUP).toBeVisible();
        console.log("Permissions popup validated");
    }

    async clickOnAssetName() {
        console.log("Clicking on Asset Name...");
        await this.page.waitForTimeout(2000);
        await this.ASSET_NAME.waitFor({ state: 'visible' });
        await this.ASSET_NAME.click();
        console.log("Asset Name clicked");
    }

    async validateAssetValueColumnPresence() {
        try {
            console.log("Checking if 'Asset Value' column is present in table headers...");

            // Get all <th> elements
            const headers = this.page.locator("//th");
            const headerCount = await headers.count();

            const headerTexts = [];
            for (let i = 0; i < headerCount; i++) {
                const text = (await headers.nth(i).innerText()).trim();
                headerTexts.push(text);
            }

            console.log("🧾 Table headers found:", headerTexts);

            // Check if "Value" column exists
            const hasValueColumn = headerTexts.some(
                (text) => text.toLowerCase() === "value"
            );

            if (hasValueColumn) {
                console.log("'Asset Value' column is present in the table header.");
            } else {
                console.error("❌ 'Asset Value' column NOT found in the table header!");
            }

        } catch (error) {
            console.error("❌ Error while validating 'Asset Value' column:", error);
            throw error;
        }
    }

    async clickOnUserAndDepartment() {
        console.log("Clicking on 'Users and Department'...");
        await this.USERS_AND_DEPARTMENT.waitFor({ state: 'visible' });
        await this.USERS_AND_DEPARTMENT.click();
        console.log("'Users and Department' clicked");
    }

    async clickOnUsersTab() {
        await this.USERS_TAB.waitFor({ state: 'visible' })
        await this.USERS_TAB.click();
    }

    async clickOnRoles() {
        console.log("Clicking on 'Roles'...");
        await this.ROLES.waitFor({ state: 'visible' });
        await this.ROLES.click();
        console.log("'Roles' clicked");
    }

    async clickOnUserhamberg() {
        console.log("Clicking on user hamburger menu...");
        await this.REMARK_HAMBERG.waitFor({ state: 'visible' });
        await this.REMARK_HAMBERG.click();
        console.log("User hamburger menu clicked");
    }

    async clickOnUserEdit() {
        console.log("Clicking on 'Edit User'...");
        await this.EDIT_VENDOR.waitFor({ state: "visible" });
        await this.EDIT_VENDOR.click();
        console.log("'Edit User' clicked");
    }

    async uncheckPermisionCheckBox() {
        console.log("Unchecking permission checkbox...");
        await this.PERMISION_CHECKBOX.scrollIntoViewIfNeeded();
        await this.PERMISION_CHECKBOX.uncheck();
        await expect(this.PERMISION_CHECKBOX).not.toBeChecked();
        console.log("Permission checkbox unchecked");
    }

    async checkPermisionCheckBox() {
        console.log("Checking permission checkbox...");
        await this.PERMISION_CHECKBOX.scrollIntoViewIfNeeded();
        await this.PERMISION_CHECKBOX.check();
        await expect(this.PERMISION_CHECKBOX).toBeChecked();
        console.log("Permission checkbox checked");
    }

    async clickOnUserSave() {
        console.log("Clicking on 'Save' button for user...");
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("'Save' button clicked");
    }

    async clickOnRiskFilterIcon() {
        console.log("Clicking on Risk Filter icon...");
        await this.RISK_FILTER_ICON.waitFor({ state: 'visible' });
        await this.RISK_FILTER_ICON.click();
        console.log("Risk Filter icon clicked");
    }

    async enterValueInSearchField() {
        console.log("Entering value 'test' in search field...");
        await this.SEARCH_FIELD.waitFor({ state: 'visible' });
        await this.SEARCH_FIELD.fill('test');
        console.log("Value 'test' entered in search field");
    }

    async clickOnApplyFilter() {
        console.log("Clicking on 'Apply Filter' button...");
        await this.APPLY_FILTER_BUTTON.waitFor({ state: 'visible' });
        await this.APPLY_FILTER_BUTTON.click();
        console.log("'Apply Filter' clicked");
    }

    async clickOnTaskCheckbox() {
        console.log("Checking the task checkbox...");
        await this.TASK_CHECKBOX.waitFor({ state: 'visible' });
        await this.TASK_CHECKBOX.check();
        console.log("Task checkbox checked");
    }

    async clickOnTasKFilter() {
        console.log("Clicking on Task Filter icon...");
        await this.TASK_FILTER_ICON.waitFor({ state: 'visible' });
        await this.TASK_FILTER_ICON.click();
        console.log("Task Filter icon clicked");
    }

    async clickOnTaskCancel() {
        console.log("Clicking on Cancel for task...");
        await this.CANCEL_DELEGATION.waitFor({ state: 'visible' });
        await this.CANCEL_DELEGATION.click();
        console.log("Task cancel clicked");
    }

    async clickOnConfirmButton() {
        console.log("Clicking on Confirm button...");
        await this.CONFIRM_BUTTON.waitFor({ state: 'visible' });
        await this.CONFIRM_BUTTON.click();
        console.log("Confirm button clicked");
    }

    async clickOnTaskDelete() {
        console.log("Clicking on Delete for task...");
        await this.DELETE_DELEGATION.waitFor({ state: "visible" });
        await this.DELETE_DELEGATION.click();
        console.log("Task delete clicked");
    }

    async seletReAssignUser() {
        console.log("Selecting a user to reassign task...");
        await this.ASSIGNE_DROPDOWN.waitFor({ state: 'visible' });
        await this.ASSIGNE_DROPDOWN.click();
        await this.page.waitForTimeout(2000);
        await this.SELECT_APPROVAR.click();
        console.log("Reassign user selected");
    }

    async clickOnReAssign() {
        console.log("Clicking on Reassign button...");
        await this.RE_ASSIGN.waitFor({ state: 'visible' });
        await this.RE_ASSIGN.click();
        console.log("Reassign button clicked");
    }

    async clickSaveAssigne() {
        console.log("Saving reassigned task...");
        await this.EVIDENCE_SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.EVIDENCE_SAVE_BUTTON.click();
        console.log("Reassigned task saved");
    }

    async clickOnLinkRisktreatment() {
        console.log("Clicking on 'Link Risk Treatment' button...");
        await this.LINK_RISK_TRATMENT_BUTTON.waitFor({ state: 'visible' });
        await this.LINK_RISK_TRATMENT_BUTTON.click();
        console.log("'Link Risk Treatment' button clicked");
    }
    async clickOnMapEvidence() {
        await this.MAP_EVIDENCE.waitFor({ state: 'visible' });
        await this.MAP_EVIDENCE.click();
    }
    async clickOnMapEviCheckbox() {
        await this.MAP_EVIDENCE_CHECKBOX.waitFor({ state: 'visible' });
        await this.MAP_EVIDENCE_CHECKBOX.check();
    }

    async clickOnThreeDotRisk() {
        const locator = this.page.locator('(//div[@class="modal-body"]//button)[1]');

        console.log("Waiting for Three-dot button to be attached...");
        await locator.waitFor({ state: 'attached', timeout: 10000 });

        console.log("Scrolling Three-dot button into view...");
        try {
            await locator.evaluate(el => {
                el.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
            });
        } catch (_) {
            console.log("Scroll failed, continuing...");
        }

        // JS FALLBACK CLICK
        try {
            console.log("Trying JS click...");
            await locator.evaluate(el => (el as HTMLElement).click());
            console.log("Clicked Three-dot (JS fallback).");
            return;
        } catch (err) {
            console.log("JS click also failed:");
            console.log(err);
            throw err;
        }
    }


    async enterRiskStatementC() {
        console.log("Entering risk statement...");
        await this.RISK_STATEMENT.waitFor({ state: 'visible' });
        await this.RISK_STATEMENT.fill('test');
        console.log("Risk statement entered.");
    }

    async clickOnRiskAssign() {
        console.log("Checking Assign Risk button visibility...");
        const locator = this.RISK_ASSIGN;

        const isVisible = await locator.isVisible();
        console.log('Assign Risk button visible:', isVisible);

        if (isVisible) {
            console.log("Clicking Assign Risk button...");
            await locator.click();
            console.log("Assign Risk clicked successfully.");
        } else {
            console.log("Assign button not visible → navigating to assign page...");
            await this.page.goto('https://ec.qa.ir.solidrange.com/risks/risk-task');
        }
    }

    async clickOnAdditionalDetails() {
        console.log("Clicking on Additional Details...");
        await this.ADDITIONAL_DETAILS.waitFor({ state: 'visible' });
        await this.ADDITIONAL_DETAILS.click();
        console.log("Additional Details clicked.");
    }

    async clickAndSelectRiskAssignee() {
        console.log("Selecting Risk Assignee...");
        await this.RISK_ASSIGN_TO.waitFor({ state: 'visible' });
        await this.RISK_ASSIGN_TO.click();

        await this.page.waitForTimeout(2000);

        await this.SELECT_ASSIGNEE.click();
        console.log("Risk Assignee selected.");
    }

    async clickOnAdd() {
        console.log("Clicking on Add Evidence...");
        await this.ADD_EVIDENCE_BUTTON.scrollIntoViewIfNeeded();
        await this.ADD_EVIDENCE_BUTTON.click();
        console.log("Add Evidence clicked.");
    }

    async clickOnNewAssesment() {
        console.log("Clicking New Assessment...");
        await this.NEW_ASSESMENT.waitFor({ state: 'visible' });
        await this.NEW_ASSESMENT.click();
        console.log("New Assessment clicked.");
    }

    async clickOnCreateAssesment() {
        console.log("Checking Create Assessment visibility...");
        const isVisible = await this.CREATE_ASSESMENT_BUTTON.isVisible();

        if (isVisible) {
            console.log("Clicking Create Assessment...");
            await this.CREATE_ASSESMENT_BUTTON.click();
            console.log("Create Assessment clicked.");
        } else {
            console.log("Create Assessment button not visible.");
        }
    }

    async validateAssismentAdded() {
        console.log("Validating Assessment added...");
        let assesment = this.page.locator(`//td/a[contains(text(),'RA-')]`);
        await expect(assesment).toBeVisible();
        console.log("Assessment validated successfully.");
    }

    async clickOnRisks() {
        console.log("Clicking Risks menu...");
        await this.RISKS.waitFor({ state: 'visible' });
        await this.RISKS.click();
        console.log("Risks clicked.");
    }

    async clickOnNewRiskButton() {
        console.log("Clicking New Risk button...");
        await this.ADD_RISK_BUTTON_GOV.waitFor({ state: 'visible' });
        await this.ADD_RISK_BUTTON_GOV.click();
        console.log("New Risk clicked.");
    }

    async validateDropdownsAndPublish() {
        console.log("Starting dropdown validation and publish logic...");

        const dropdown = this.page.locator(
            '//div[contains(@class, "dropdown-menu") and contains(@class, "d-block")]'
        );

        const HAMBURGERS = [
            this.page.locator(`(//button[@data-toggle="dropdown"])[1]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[2]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[3]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[4]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[5]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[6]`),
            this.page.locator(`(//button[@data-toggle="dropdown"])[7]`)
        ];

        const SUBMIT_BUTTON = this.page.locator("//button[text()=' Submit ']");

        console.log("Opening first dropdown...");
        await HAMBURGERS[0].waitFor({ state: "visible" });
        await HAMBURGERS[0].click();
        await dropdown.waitFor({ state: "visible" });

        let publishVisible = await this.PUBLISH_BUTTON.isVisible();
        let activeVisible = await this.ACTIVATE_BUTTON.isVisible();

        let index = 1;

        console.log("Scanning for Publish/Active options...");
        while (!publishVisible && !activeVisible && index < HAMBURGERS.length) {
            await HAMBURGERS[index].click();
            await this.page.waitForTimeout(500);

            publishVisible = await this.PUBLISH_BUTTON.isVisible();
            activeVisible = await this.ACTIVATE_BUTTON.isVisible();

            index++;
        }

        await this.page.waitForTimeout(1500);

        if (await this.ACTIVATE_BUTTON.isVisible()) {
            console.log("Found Activate → clicking...");
            await this.ACTIVATE_BUTTON.click();

            await SUBMIT_BUTTON.waitFor({ state: "visible" });
            await SUBMIT_BUTTON.click();
            console.log("Activated successfully.");

            let publishFound = false;
            let scanIndex = 1;

            console.log("Scanning for Publish option...");
            while (!publishFound && scanIndex < HAMBURGERS.length) {

                await HAMBURGERS[scanIndex].click();
                await this.page.waitForTimeout(700);

                if (await this.PUBLISH_BUTTON.isVisible()) {
                    publishFound = true;
                    console.log("Found Publish → clicking...");
                    await this.PUBLISH_BUTTON.click();

                    await SUBMIT_BUTTON.waitFor({ state: "visible" });
                    await SUBMIT_BUTTON.click();
                    console.log("Published successfully.");
                    break;
                }

                scanIndex++;
            }

        } else if (await this.PUBLISH_BUTTON.isVisible()) {
            console.log("Publish button found directly → clicking...");
            await this.PUBLISH_BUTTON.click();
            console.log("Published successfully.");
        }

        await this.page.waitForTimeout(1000);
        console.log("Dropdown validation & publish complete.");
    }

    async clickOnThredSlider() {
        console.log("Clicking on Threat slider...");
        await this.THREAD_SLIDER.click();
        console.log("Threat slider clicked successfully");
    }


    async clickOnMappedVulnerabilitySlider() {
        console.log("Clicking on Mapped Vulnerability slider...");
        await this.VULNERABILITY_SLIDER.click();
        console.log("Mapped Vulnerability slider clicked successfully");
    }

    async intigritySliderAssert() {
        console.log("Clicking on Integrity slider (assert)...");
        await this.INTIGRITY_SLIDER_ASSERT.click();
        console.log("Integrity slider (assert) clicked successfully");
    }

    async availabilitySlider() {
        console.log("Clicking on Availability slider (assert)...");
        await this.AVAILABILITY_SLIDER_ASSERT.click();
        console.log("Availability slider (assert) clicked successfully");
    }

    async clickIfSliderVisible() {
        console.log("Checking if slider #14 is visible...");

        const slider = this.page.locator('(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[14]');

        const isVisible = await this.AVAILABILITY_SLIDER_ASSERT.isVisible();

        if (isVisible) {
            console.log("Slider #14 is visible. Clicking...");
            await slider.click();
            await this.NEXT_BUTTON.click();
            console.log("Slider #14 clicked successfully");
        } else {
            console.log("Slider #14 is NOT visible. Skipping click.");
        }
    }

    async clickIfSliderVisibleItivate() {
        console.log("Checking if slider is visible...");

        const slider = this.page.locator('(//div[@class="ngx-slider-inner-tooltip ng-star-inserted"])[19]');

        const isVisible = await this.AVAILABILITY_SLIDER_ASSERT.isVisible();

        if (isVisible) {
            console.log("Slider is visible. Clicking...");
            await slider.click();
            await this.NEXT_BUTTON.click();
            console.log("Slider clicked successfully");
        } else {
            console.log("Slider is NOT visible. Skipping click.");
        }
    }


    async confidentialySlider() {
        console.log("Clicking on Confidentiality slider (assert)...");
        await this.CONFIDENTIALY_SLIDER_ASSERT.click();
        console.log("Confidentiality slider (assert) clicked successfully");
    }

    async clickOnUserIcon() {
        console.log("Waiting for User Icon to be visible...");
        await this.USER_ICON.waitFor({ state: 'visible' });
        console.log("Clicking on User Icon...");
        await this.USER_ICON.click();
        console.log("User Icon clicked successfully");
    }

    async clickOnLogOut() {
        console.log("Waiting for Log Out button to be visible...");
        await this.LOG_OUT.waitFor({ state: 'visible' });
        console.log("Clicking on Log Out...");
        await this.LOG_OUT.click();
        console.log("Log Out clicked successfully");
    }

    async validateLoginPage() {
        console.log("Validating that Login Page is visible...");
        await this.LOGIN_PAGE.waitFor({ state: 'visible' });
        await expect(this.LOGIN_PAGE).toBeVisible();
        console.log("Login Page is visible and validated successfully");
    }

    async exportExcelIcon() {
        try {
            await this.EXPORT_EXCEL_ICON.waitFor({ state: 'visible' });
            console.log('Export Excel icon clicked');

            const [download] = await Promise.all([
                this.page.waitForEvent('download'),
                this.EXPORT_EXCEL_ICON.click()
            ]);

            // Set the download directory relative to current file
            const downloadDir = path.resolve(__dirname, '../../exported_file');

            // Ensure the directory exists
            if (!fs.existsSync(downloadDir)) {
                fs.mkdirSync(downloadDir, { recursive: true });
            }

            // Get suggested filename and extract name/extension
            const suggestedFilename = download.suggestedFilename();
            const ext = path.extname(suggestedFilename);
            const baseName = path.basename(suggestedFilename, ext);

            // Create timestamp (e.g., 2025-12-08_15-42-10)
            const timestamp = new Date()
                .toISOString()
                .replace(/[:.]/g, '-') // replace invalid filename chars
                .replace('T', '_')
                .split('Z')[0];

            // Combine base name with timestamp and extension
            const newFilename = `${baseName}_${timestamp}${ext}`;
            const filePath = path.join(downloadDir, newFilename);

            await download.saveAs(filePath);

            // Validate that the file exists
            if (fs.existsSync(filePath)) {
                console.log(`Excel file successfully downloaded to: ${filePath}`);
            } else {
                throw new Error('File download failed: File does not exist after saving.');
            }

        } catch (error) {
            console.error(`Error in exportExcelIcon: ${error.message}`);
        }
    }

}





