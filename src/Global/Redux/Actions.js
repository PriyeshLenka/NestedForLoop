import * as Constants from './Constants';

export const fetchWorkbookByWorkspaceId = (payload) => ({
  type: Constants.GET_ALL_WORKBOOKS,
  payload
});

export const fetchAllWorkbooksSuccess = (payload) => ({
  type: Constants.GET_ALL_WORKBOOKS_SUCCESS,
  payload
});

export const createNewWorkbook = (payload) => ({
  type: Constants.CREATE_WORKBOOK,
  payload
});

export const createNewWorkbookSuccess = (payload) => ({
  type: Constants.CREATE_WORKBOOK_SUCCESS,
  payload
});

export const fetchAllWorkspaces = () => ({
  type: Constants.GET_ALL_WORKSPACES
});

export const fetchAllWorkspaceSuccess = (payload) => ({
  type: Constants.GET_ALL_WORKSPACES_SUCCESS,
  payload
});

export const createNewWorkspace = (payload) => ({
  type: Constants.CREATE_WORKSPACE,
  payload
});

export const createNewWorkspaceSuccess = (payload) => ({
  type: Constants.CREATE_WORKSPACES_SUCCESS,
  payload
});
