import gql from 'graphql-tag';

const GET_PROCESS_INSTANCES = gql`
  query getProcessInstances(
    $where: ProcessInstanceArgument
    $offset: Int
    $limit: Int
  ) {
    ProcessInstances(
      where: $where
      pagination: { offset: $offset, limit: $limit }
    ) {
      id
      processId
      processName
      parentProcessInstanceId
      rootProcessInstanceId
      roles
      state
      start
      lastUpdate
      addons
      businessKey
      serviceUrl
      error {
        nodeDefinitionId
        message
      }
    }
  }
`;

const GET_CHILD_INSTANCES = gql`
  query getChildInstances($rootProcessInstanceId: String) {
    ProcessInstances(
      where: { rootProcessInstanceId: { equal: $rootProcessInstanceId } }
    ) {
      id
      processId
      processName
      parentProcessInstanceId
      rootProcessInstanceId
      roles
      state
      start
      lastUpdate
      serviceUrl
      addons
      businessKey
      error {
        nodeDefinitionId
        message
      }
    }
  }
`;

const GET_PROCESS_INSTANCE = gql`
  query getProcessInstanceById($id: String) {
    ProcessInstances(where: { id: { equal: $id } }) {
      id
      processId
      processName
      businessKey
      parentProcessInstanceId
      parentProcessInstance {
        id
        processName
        businessKey
      }
      roles
      variables
      state
      start
      lastUpdate
      end
      addons
      endpoint
      addons
      serviceUrl
      error {
        nodeDefinitionId
        message
      }
      childProcessInstances {
        id
        processName
        businessKey
      }
      nodes {
        id
        nodeId
        name
        enter
        exit
        type
        definitionId
      }
    }
  }
`;

const GET_COLUMN_PICKER_ATTRIBUTES = gql`
  query getColumnPickerAttributes($columnPickerType: String!) {
    __type(name: $columnPickerType) {
      name
      fields {
        name
        type {
          name
          kind
          fields {
            name
            type {
              name
              kind
            }
          }
        }
      }
    }
  }
`;

const GET_QUERY_TYPES = gql`
  query getQueryTypes {
    __schema {
      queryType: types {
        name
        kind
        fields {
          name
          type {
            name
            kind
          }
        }
        inputFields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  }
`;

const GET_QUERY_FIELDS = gql`
  query getQueryFields {
    __type(name: "Query") {
      name
      fields {
        name
        args {
          name
          type {
            kind
            name
          }
        }
        type {
          ofType {
            name
          }
        }
      }
    }
  }
`;

const GET_INPUT_FIELDS_FROM_QUERY = gql`
  query getInputFieldsFromQuery($currentQuery: String!) {
    __type(name: $currentQuery) {
      name
      inputFields {
        name
        type {
          name
          kind
          inputFields {
            name
            type {
              name
            }
          }
        }
      }
    }
  }
`;

const GET_INPUT_FIELDS_FROM_TYPES = gql`
  query getInputFieldsFromType($type: String!) {
    __type(name: $type) {
      name
      inputFields {
        name
        type {
          name
          kind
          enumValues {
            name
          }
          ofType {
            kind
            name
            enumValues {
              name
            }
          }
        }
      }
    }
  }
`;

const GET_USER_TASKS_BY_STATES = gql`
  query getUserTasksByStates($state: [String!]) {
    UserTaskInstances(where: { state: { in: $state } }) {
      id
      description
      name
      priority
      processInstanceId
      processId
      rootProcessInstanceId
      rootProcessId
      state
      actualOwner
      adminGroups
      adminUsers
      completed
      started
      excludedUsers
      potentialGroups
      potentialUsers
      inputs
      outputs
      referenceName
      endpoint
    }
  }
`;

const GET_USER_TASK = gql`
  query getUserTaskById($id: String) {
    UserTaskInstances(where: { id: { equal: $id } }) {
      id
      description
      name
      priority
      processInstanceId
      processId
      rootProcessInstanceId
      rootProcessId
      state
      actualOwner
      adminGroups
      adminUsers
      completed
      started
      excludedUsers
      potentialGroups
      potentialUsers
      inputs
      outputs
      referenceName
      endpoint
    }
  }
`;
