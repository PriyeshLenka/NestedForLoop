import {
  all,
  call,
  delay,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  CREATE_WORKBOOK,
  GET_ALL_WORKBOOKS,
  GET_ALL_WORKSPACES
} from './Constants';
import {
  fetchAllWorkbooksSuccess,
  createNewWorkbookSuccess,
  fetchAllWorkspaceSuccess,
  fetchWorkbookByWorkspaceId
} from './Actions';

export function* handleGetAllWorkbooks(action) {
  try {
    yield console.log(action);
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetAllWorkspaces() {
  try {
    const response = yield call();
    const { data, ...res } = response;
    yield put(
      fetchAllWorkspaceSuccess({ workspaceDTO: data, response: res })
    );
    console.log('GET_ALL_WORKSPACES_RESPONSE', response);
  } catch (error) {
    console.log(error);
  }
}

export function* createNewWorkbookHandler(action) {
  try {
    const response = yield call(action.payload);
    yield put(createNewWorkbookSuccess({ response }));
    yield put(fetchWorkbookByWorkspaceId(action.payload.workspaceId));

    console.log(
      'DATA_AUTOMATION/CREATE/NEW/WORKBOOK/SUCCESS',
      response
    );
  } catch (error) {
    console.log(error);
  }
}

function* getAllWorkspacesWatcher() {
  yield takeLatest(GET_ALL_WORKSPACES, handleGetAllWorkspaces);
}

function* createNewWorkbookWatcher() {
  yield takeLatest(CREATE_WORKBOOK, createNewWorkbookHandler);
}
function* getWorbookByWorkspaceId() {
  yield takeLatest(GET_ALL_WORKBOOKS, handleGetAllWorkbooks);
}

export function* commonSagaWatcher() {
  yield all([
    getAllWorkspacesWatcher(),
    createNewWorkbookWatcher(),
    getWorbookByWorkspaceId()
  ]);
}
