var app = angular.module('demo', ['ngSanitize', 'jsonFormatter', 'ui.ace']);


app.controller('MainCtrl', function ($scope, SendCode) {

  $scope.complex = {
      "COMPANY_ID": 107,
      "APP_ID": 47,
      "APP_VERSION": 1,
      "COMPANY_IDENTIFER": "DEV",
      "COMPANY_NAME": "DEV",
      "AUTH_PROVIDER": [

      ],
      "META_TABLE": [
          {
              "ORCHESTRATION_ID": 107,
              "ORCHESTRATION_NAME": "DeviceRegistration",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/DeviceRegistration",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "DEVICE_REGISTRATION",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 107,
                      "TABLE_NAME": "DeviceRegistration_DeviceRegistration_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceRegistration_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceRegistration_DeviceRegistration_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_APP_TENANT_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEFAULT_USER",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MAC_ADDRESS",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MAKE",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MODEL",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_NAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_PLATFORM",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_SERIAL",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_TYPE",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "MOBILE_APP_BUNDLE_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 107,
                      "TABLE_NAME": "DeviceRegistration_DeviceRegistration_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceRegistration_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceRegistration_DeviceRegistration_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 107,
                      "TABLE_NAME": "DeviceRegistration_DeviceRegistration_CREATE_result",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "result",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceRegistration_DeviceRegistration_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "DeviceRegistration_CREATE"
                          }
                      ],
                      "CLASS_NAME": "DeviceRegistration_DeviceRegistration_CREATE_result_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "code",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "msg",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 108,
              "ORCHESTRATION_NAME": "DeviceMapFlagDetails",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/DeviceMapFlagDetails",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "DEVICE_MAPPING",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 108,
                      "TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceMapFlagDetails_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_APP_TENANT_ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "TRU_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "USER_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 108,
                      "TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceMapFlagDetails_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 108,
                      "TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_result",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "result",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ",
                              "PARENT_TABLE_OBJECT_NAME": "DeviceMapFlagDetails_READ"
                          }
                      ],
                      "CLASS_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_result_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "code",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 108,
                      "TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_result_msg",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "msg",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_result",
                              "PARENT_TABLE_OBJECT_NAME": "msg"
                          }
                      ],
                      "CLASS_NAME": "DeviceMapFlagDetails_DeviceMapFlagDetails_READ_result_msg_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "userAppMappingFlag",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "userDeviceMappingFlag",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 109,
              "ORCHESTRATION_NAME": "DeviceReMapping",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/DeviceReMapping",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "DEVICE_REMAPPING",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceReMapping_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "APP_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_APP_TENANT_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MAC_ADDRESS",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MAKE",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_MODEL",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_NAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_OWNERSHIP_TYPE",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_PLATFORM",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_SERIAL",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "DEVICE_TYPE",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "PUSH_NOTIFICATION_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "TRU_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "USER_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "DeviceReMapping_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_APP_BUNDLE_ID",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "MOBILE_APP_BUNDLE_ID",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "VALUE_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "DeviceReMapping_CREATE"
                          }
                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_APP_BUNDLE_ID_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "MOBILE_APP_BUNDLE_ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_NUMBER",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "MOBILE_NUMBER",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "DeviceReMapping_CREATE"
                          }
                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_NUMBER_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ALTERNATE1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ALTERNATE2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ALTERNATE3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ALTERNATE4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ALTERNATE5",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "PRIMARY",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "SECONDARY",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "TERTIARY",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_NUMBER_OTHERS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "OTHERS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "VALUE_ARRAY",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_NUMBER",
                              "PARENT_TABLE_OBJECT_NAME": "OTHERS"
                          }
                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_MOBILE_NUMBER_OTHERS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "OTHERS",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 109,
                      "TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE_result",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "result",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "DeviceReMapping_DeviceReMapping_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "DeviceReMapping_CREATE"
                          }
                      ],
                      "CLASS_NAME": "DeviceReMapping_DeviceReMapping_CREATE_result_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "code",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "msg",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 110,
              "ORCHESTRATION_NAME": "CSRFTokenGeneration",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/CSRFTokenGeneration",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": true,
              "ORCHESTRATION_CATEGORY": "TJ_END_POINT_LDAP_AUTHENTICATION",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 110,
                      "TABLE_NAME": "CSRFTokenGeneration_LocalDBUser_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LocalDBUser_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CSRFTokenGeneration_LocalDBUser_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "PASSWORD",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "USERNAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "COMPANY_NAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 110,
                      "TABLE_NAME": "CSRFTokenGeneration_LocalDBUser_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LocalDBUser_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CSRFTokenGeneration_LocalDBUser_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "StatusCode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "msg",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 111,
              "ORCHESTRATION_NAME": "BreakDownCREATE",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchBreakDownCREATE",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 111,
                      "TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "BreakDown_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 111,
                      "TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "BreakDown_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "result",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 111,
                      "TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "BreakdownCallInfo",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "BreakDown_CREATE"
                          }
                      ],
                      "CLASS_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Key",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 111,
                      "TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo_Location",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Location",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo",
                              "PARENT_TABLE_OBJECT_NAME": "Location"
                          }
                      ],
                      "CLASS_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo_Location_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Accuracy",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Altitude",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Latitude",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Longitude",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 111,
                      "TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo_MembershipDetails",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "MembershipDetails",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo",
                              "PARENT_TABLE_OBJECT_NAME": "MembershipDetails"
                          }
                      ],
                      "CLASS_NAME": "OrchBreakDownCREATE_BreakDown_CREATE_BreakdownCallInfo_MembershipDetails_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "MembershipNo",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "MobileNumber",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Name",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "VehicleReg",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 112,
              "ORCHESTRATION_NAME": "OneTimePassword",
              "ACTION_TYPE": [
                  "READ",
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OneTimePassword",
              "IS_RESTFUL": true,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePasswordValidate_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "OneTimePasswordValidate_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePasswordValidate_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "reference",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePasswordValidate_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "OneTimePasswordValidate_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePasswordValidate_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "expired",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "otp",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "reference",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePasswordValidate_READ_endpoint",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "endpoint",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OneTimePassword_OneTimePasswordValidate_READ",
                              "PARENT_TABLE_OBJECT_NAME": "OneTimePasswordValidate_READ"
                          }
                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePasswordValidate_READ_endpoint_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "otp",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "channel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "destination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "template_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "OneTimePassword_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePassword_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "reference",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "OneTimePassword_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePassword_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "expired",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "otp",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "reference",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE_endpoint",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "endpoint",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "OneTimePassword_CREATE"
                          }
                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePassword_CREATE_endpoint_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "channel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "destination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "template_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 112,
                      "TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE_endpoint",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "endpoint",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OneTimePassword_OneTimePassword_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "OneTimePassword_CREATE"
                          }
                      ],
                      "CLASS_NAME": "OneTimePassword_OneTimePassword_CREATE_endpoint_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "otp",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "channel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "destination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "template_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 152,
              "ORCHESTRATION_NAME": "EmailPhoneUpdate",
              "ACTION_TYPE": [
                  "UPDATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/EmailPhoneUpdate/CustomerUpdate_UPDATE|customerID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 152,
                      "TABLE_NAME": "EmailPhoneUpdate_CustomerUpdate_UPDATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerUpdate_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EmailPhoneUpdate_CustomerUpdate_UPDATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 152,
                      "TABLE_NAME": "EmailPhoneUpdate_CustomerUpdate_UPDATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerUpdate_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EmailPhoneUpdate_CustomerUpdate_UPDATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "preferred_comms",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 156,
              "ORCHESTRATION_NAME": "CustomerMiscellaneous",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/CustomerMiscellaneous/CustomerMiscellaneous_CREATE|customerID/<val>/CustomerMiscellaneous_CREATE|type/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 156,
                      "TABLE_NAME": "CustomerMiscellaneous_CustomerMiscellaneous_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerMiscellaneous_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CustomerMiscellaneous_CustomerMiscellaneous_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "type",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 156,
                      "TABLE_NAME": "CustomerMiscellaneous_CustomerMiscellaneous_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerMiscellaneous_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CustomerMiscellaneous_CustomerMiscellaneous_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "message",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "success",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 157,
              "ORCHESTRATION_NAME": "FormDefinitions",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/FormDefinitions",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 157,
                      "TABLE_NAME": "FormDefinitions_FormsDefinition_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsDefinition_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormDefinitions_FormsDefinition_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 157,
                      "TABLE_NAME": "FormDefinitions_FormsDefinition_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsDefinition_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormDefinitions_FormsDefinition_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 157,
                      "TABLE_NAME": "FormDefinitions_FormsDefinition_READ_links",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "links",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitions_FormsDefinition_READ",
                              "PARENT_TABLE_OBJECT_NAME": "FormsDefinition_READ"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitions_FormsDefinition_READ_links_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "rel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 159,
              "ORCHESTRATION_NAME": "FormDefinitionName",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/FormDefinitionName/FormDefinitionName_READ|name/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormDefinitionName_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "name",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormDefinitionName_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "fields",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ",
                              "PARENT_TABLE_OBJECT_NAME": "FormDefinitionName_READ"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question1",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question1",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question1"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question1_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question2",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question2",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question2"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question2_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question3",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question3",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question3"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question3_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question4",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question4",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question4"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question4_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question5",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question5",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question5"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question5_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 159,
                      "TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question6",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "prop_question6",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormDefinitionName_FormDefinitionName_READ_fields",
                              "PARENT_TABLE_OBJECT_NAME": "prop_question6"
                          }
                      ],
                      "CLASS_NAME": "FormDefinitionName_FormDefinitionName_READ_fields_prop_question6_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "datatype",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "description",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "disabled",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "label",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mandatory",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "orderid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "parameter",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 161,
              "ORCHESTRATION_NAME": "FormsCollection",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/FormsCollection/FormCollections_READ|customerID/<val>?FormCollections_READ|filter_formdefinition= ",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 161,
                      "TABLE_NAME": "FormsCollection_FormCollections_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormCollections_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormsCollection_FormCollections_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "filter_formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 161,
                      "TABLE_NAME": "FormsCollection_FormCollections_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormCollections_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormsCollection_FormCollections_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 161,
                      "TABLE_NAME": "FormsCollection_FormCollections_READ_formlinks",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "formlinks",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormsCollection_FormCollections_READ",
                              "PARENT_TABLE_OBJECT_NAME": "FormCollections_READ"
                          }
                      ],
                      "CLASS_NAME": "FormsCollection_FormCollections_READ_formlinks_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "lastupdatedon",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 162,
              "ORCHESTRATION_NAME": "GetForm",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/GetForm/FormsGetForm_READ|customerID/<val>/FormsGetForm_READ|formID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 162,
                      "TABLE_NAME": "GetForm_FormsGetForm_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsGetForm_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetForm_FormsGetForm_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 162,
                      "TABLE_NAME": "GetForm_FormsGetForm_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsGetForm_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetForm_FormsGetForm_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "lastupdatedon",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 162,
                      "TABLE_NAME": "GetForm_FormsGetForm_READ_fields",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "fields",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetForm_FormsGetForm_READ",
                              "PARENT_TABLE_OBJECT_NAME": "FormsGetForm_READ"
                          }
                      ],
                      "CLASS_NAME": "GetForm_FormsGetForm_READ_fields_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question5",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question6",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 163,
              "ORCHESTRATION_NAME": "FormsPost",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/FormsPost/FormsPost_CREATE|customerID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 163,
                      "TABLE_NAME": "FormsPost_FormsPost_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsPost_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormsPost_FormsPost_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 163,
                      "TABLE_NAME": "FormsPost_FormsPost_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsPost_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "FormsPost_FormsPost_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 163,
                      "TABLE_NAME": "FormsPost_FormsPost_CREATE_fields",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "fields",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormsPost_FormsPost_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "FormsPost_CREATE"
                          }
                      ],
                      "CLASS_NAME": "FormsPost_FormsPost_CREATE_fields_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question5",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question6",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 163,
                      "TABLE_NAME": "FormsPost_FormsPost_CREATE_links",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "links",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "FormsPost_FormsPost_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "FormsPost_CREATE"
                          }
                      ],
                      "CLASS_NAME": "FormsPost_FormsPost_CREATE_links_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "rel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 165,
              "ORCHESTRATION_NAME": "formUpdate",
              "ACTION_TYPE": [
                  "UPDATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/formUpdate/FormsUpdate_UPDATE|customerID/<val>/FormsUpdate_UPDATE|formID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 165,
                      "TABLE_NAME": "formUpdate_FormsUpdate_UPDATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsUpdate_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "formUpdate_FormsUpdate_UPDATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 165,
                      "TABLE_NAME": "formUpdate_FormsUpdate_UPDATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FormsUpdate_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "formUpdate_FormsUpdate_UPDATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "lastupdatedon",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 165,
                      "TABLE_NAME": "formUpdate_FormsUpdate_UPDATE_fields",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "fields",
                      "ACTION_TYPE": "UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "formUpdate_FormsUpdate_UPDATE",
                              "PARENT_TABLE_OBJECT_NAME": "FormsUpdate_UPDATE"
                          }
                      ],
                      "CLASS_NAME": "formUpdate_FormsUpdate_UPDATE_fields_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question5",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question6",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 165,
                      "TABLE_NAME": "formUpdate_FormsUpdate_UPDATE_fields",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "fields",
                      "ACTION_TYPE": "UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "formUpdate_FormsUpdate_UPDATE",
                              "PARENT_TABLE_OBJECT_NAME": "FormsUpdate_UPDATE"
                          }
                      ],
                      "CLASS_NAME": "formUpdate_FormsUpdate_UPDATE_fields_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "formdefinition",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question5",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "prop_question6",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 166,
              "ORCHESTRATION_NAME": "EligibleCustomer",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/EligibleCustomer?EligibleCustomerService_READ|account_number= &EligibleCustomerService_READ|date_of_birth= &EligibleCustomerService_READ|forename= &EligibleCustomerService_READ|postalcode= &EligibleCustomerService_READ|sortcode= &EligibleCustomerService_READ|surname= ",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 166,
                      "TABLE_NAME": "EligibleCustomer_EligibleCustomerService_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "EligibleCustomerService_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EligibleCustomer_EligibleCustomerService_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 166,
                      "TABLE_NAME": "EligibleCustomer_EligibleCustomerService_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "EligibleCustomerService_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EligibleCustomer_EligibleCustomerService_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "registered",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "title",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 167,
              "ORCHESTRATION_NAME": "GetCustomerWithID",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/GetCustomerWithID/GetCustom_READ|customerid/<val>?GetCustom_READ|representation=",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetCustom_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerid",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "representation",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetCustom_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "eligibility_assessment_completed",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "icobs_status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "medical_screening_required",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "preferred_comms",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "salutation_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ_address",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "address",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithID_GetCustom_READ",
                              "PARENT_TABLE_OBJECT_NAME": "GetCustom_READ"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_address_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ_security_questions",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_questions",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithID_GetCustom_READ",
                              "PARENT_TABLE_OBJECT_NAME": "GetCustom_READ"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_security_questions_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ_security_questions_security_question_one",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_question_one",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithID_GetCustom_READ_security_questions",
                              "PARENT_TABLE_OBJECT_NAME": "security_question_one"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_security_questions_security_question_one_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_answer",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_question_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 167,
                      "TABLE_NAME": "GetCustomerWithID_GetCustom_READ_security_questions_security_question_two",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_question_two",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithID_GetCustom_READ_security_questions",
                              "PARENT_TABLE_OBJECT_NAME": "security_question_two"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithID_GetCustom_READ_security_questions_security_question_two_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_answer",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_question_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 168,
              "ORCHESTRATION_NAME": "GetCustomerWithQuery",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/GetCustomerWithQuery?GetCustomer_READ|account_number= &GetCustomer_READ|date_of_birth= &GetCustomer_READ|forename= &GetCustomer_READ|postalcode= &GetCustomer_READ|representation= &GetCustomer_READ|sortcode= &GetCustomer_READ|surname= ",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetCustomer_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "representation",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetCustomer_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "eligibility_assessment_completed",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "icobs_status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "medical_screening_required",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "preferred_comms",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "salutation_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_address",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "address",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ",
                              "PARENT_TABLE_OBJECT_NAME": "GetCustomer_READ"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_address_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_questions",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ",
                              "PARENT_TABLE_OBJECT_NAME": "GetCustomer_READ"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions_security_question_one",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_question_one",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions",
                              "PARENT_TABLE_OBJECT_NAME": "security_question_one"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions_security_question_one_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_answer",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_question_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 168,
                      "TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions_security_question_two",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "security_question_two",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions",
                              "PARENT_TABLE_OBJECT_NAME": "security_question_two"
                          }
                      ],
                      "CLASS_NAME": "GetCustomerWithQuery_GetCustomer_READ_security_questions_security_question_two_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_answer",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "security_question_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 169,
              "ORCHESTRATION_NAME": "EligibleCustomerEmail",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/EligibleCustomerEmail?EligibleCustomerEmail_READ|email_address= ",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 169,
                      "TABLE_NAME": "EligibleCustomerEmail_EligibleCustomerEmail_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "EligibleCustomerEmail_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EligibleCustomerEmail_EligibleCustomerEmail_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 169,
                      "TABLE_NAME": "EligibleCustomerEmail_EligibleCustomerEmail_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "EligibleCustomerEmail_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "EligibleCustomerEmail_EligibleCustomerEmail_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "address_line_4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "registered",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "title",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 170,
              "ORCHESTRATION_NAME": "CustomerCreate",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/CustomerCreate",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 170,
                      "TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerCreate_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CustomerCreate_CustomerCreate_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_parties",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "password",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "salutation_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "work_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 170,
                      "TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerCreate_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "CustomerCreate_CustomerCreate_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "account_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "date_of_birth",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "eligibility_assessment_completed",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_address",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "email_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "forename",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "gender_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "home_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "icobs_status",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "medical_screening_required",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "middle_names",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_number",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "mobile_phone_verified",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "preferred_comms",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "salutation_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "sortcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "surname",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 170,
                      "TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE_address",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "address",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "CustomerCreate_CREATE"
                          }
                      ],
                      "CLASS_NAME": "CustomerCreate_CustomerCreate_CREATE_address_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 170,
                      "TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE_address",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "address",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "CustomerCreate_CustomerCreate_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "CustomerCreate_CREATE"
                          }
                      ],
                      "CLASS_NAME": "CustomerCreate_CustomerCreate_CREATE_address_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "country_code",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line1",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line2",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line3",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "line4",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "postalcode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 172,
              "ORCHESTRATION_NAME": "CustomerUpdatePasswordUPDATE",
              "ACTION_TYPE": [
                  "UPDATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchCustomerUpdatePasswordUPDATE/CustomerUpdatePassword_UPDATE|customerID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 172,
                      "TABLE_NAME": "OrchCustomerUpdatePasswordUPDATE_CustomerUpdatePassword_UPDATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerUpdatePassword_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchCustomerUpdatePasswordUPDATE_CustomerUpdatePassword_UPDATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "old_password",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "password",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 172,
                      "TABLE_NAME": "OrchCustomerUpdatePasswordUPDATE_CustomerUpdatePassword_UPDATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "UPDATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CustomerUpdatePassword_UPDATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchCustomerUpdatePasswordUPDATE_CustomerUpdatePassword_UPDATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "message",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "success",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "UPDATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 174,
              "ORCHESTRATION_NAME": "LogOutCREATE",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchLogOutCREATE/LogOut_CREATE|token/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 174,
                      "TABLE_NAME": "OrchLogOutCREATE_LogOut_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LogOut_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchLogOutCREATE_LogOut_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "username",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "token",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 174,
                      "TABLE_NAME": "OrchLogOutCREATE_LogOut_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LogOut_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchLogOutCREATE_LogOut_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "status",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 175,
              "ORCHESTRATION_NAME": "ValidateTokenCREATE",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchValidateTokenCREATE/ValidateToken_CREATE|token/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 175,
                      "TABLE_NAME": "OrchValidateTokenCREATE_ValidateToken_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "ValidateToken_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchValidateTokenCREATE_ValidateToken_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "username",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "token",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 175,
                      "TABLE_NAME": "OrchValidateTokenCREATE_ValidateToken_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "ValidateToken_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchValidateTokenCREATE_ValidateToken_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "memberof",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "status",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 198,
              "ORCHESTRATION_NAME": "avgresponsetime",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/avgresponsetime",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponsetime_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponsetime_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponsetime_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponsetime_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponsetime_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponsetime_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 199,
              "ORCHESTRATION_NAME": "avgmessagesize",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/avgmessagesize",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgmessagesize_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgmessagesize_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgmessagesize_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgmessagesize_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgmessagesize_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgmessagesize_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 200,
              "ORCHESTRATION_NAME": "cachehits",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/cachehits",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachehits_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/cachehits_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachehits_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/cachehits_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachehits_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachehits_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachehits_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachehits_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachehits_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachehits_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachehits_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachehits_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachehits_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 201,
              "ORCHESTRATION_NAME": "cachemisses",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/cachemisses",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachemisses_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/cachemisses_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachemisses_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/cachemisses_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachemisses_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachemisses_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachemisses_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachemisses_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachemisses_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachemisses_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/cachemisses_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/cachemisses_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/cachemisses_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 202,
              "ORCHESTRATION_NAME": "avgrequestlatency",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/avgrequestlatency",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgrequestlatency_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgrequestlatency_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgrequestlatency_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgrequestlatency_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgrequestlatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgrequestlatency_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 203,
              "ORCHESTRATION_NAME": "avgresponselatency",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/avgresponselatency",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponselatency_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponselatency_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponselatency_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponselatency_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/avgresponselatency_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/avgresponselatency_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 204,
              "ORCHESTRATION_NAME": "nummessages",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/nummessages",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/nummessages_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/nummessages_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/nummessages_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/nummessages_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/nummessages_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/nummessages_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/nummessages_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/nummessages_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/nummessages_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/nummessages_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/nummessages_Analytics_",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/nummessages_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/nummessages_Analytics__RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 205,
              "ORCHESTRATION_NAME": "numerrors",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/ax/endpoint/numerrors",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": true,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "ANALYTICS",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/numerrors_Analytics",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/numerrors_Analytics_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/numerrors_Analytics",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Analytics",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "ax/endpoint/numerrors_Analytics_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/numerrors_Analytics_RESOURCE",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESOURCE",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/numerrors_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/numerrors_Analytics_RESOURCE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/numerrors_Analytics_FUNCTIONS",
                      "TABLE_TYPE": "REQUEST",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "FUNCTIONS",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/numerrors_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/numerrors_Analytics_FUNCTIONS_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": null,
                      "TABLE_NAME": "ax/endpoint/numerrors_Analytics_RESULT",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "RESULT",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "ax/endpoint/numerrors_Analytics",
                              "PARENT_TABLE_OBJECT_NAME": "Analytics"
                          }
                      ],
                      "CLASS_NAME": "ax/endpoint/numerrors_Analytics_RESULT_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 214,
              "ORCHESTRATION_NAME": "Login",
              "ACTION_TYPE": [
                  "CREATE",
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/Login",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": true,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 214,
                      "TABLE_NAME": "Login_LocalDBUser_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LocalDBUser_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "Login_LocalDBUser_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "COMPANY_NAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "PASSWORD",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "USERNAME",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 214,
                      "TABLE_NAME": "Login_LocalDBUser_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "LocalDBUser_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "Login_LocalDBUser_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "StatusCode",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "msg",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 214,
                      "TABLE_NAME": "Login_Login_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Login_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "Login_Login_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "channel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "password",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "username",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 214,
                      "TABLE_NAME": "Login_Login_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "Login_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "Login_Login_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "memberof",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "token",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 214,
                      "TABLE_NAME": "Login_Login_CREATE_links",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "links",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "Login_Login_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "Login_CREATE"
                          }
                      ],
                      "CLASS_NAME": "Login_Login_CREATE_links_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "custID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "rel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 215,
              "ORCHESTRATION_NAME": "SAMLREAD",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchSAMLREAD?SAML_READ|customer_id= &SAML_READ|from= &SAML_READ|to= ",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 215,
                      "TABLE_NAME": "OrchSAMLREAD_SAML_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "SAML_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchSAMLREAD_SAML_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "from",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "to",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "QUERY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 215,
                      "TABLE_NAME": "OrchSAMLREAD_SAML_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "SAML_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchSAMLREAD_SAML_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "message",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "success",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 216,
              "ORCHESTRATION_NAME": "GetMessagesREAD",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchGetMessagesREAD/GetMessages_READ|customerID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 216,
                      "TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetMessages_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchGetMessagesREAD_GetMessages_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 216,
                      "TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetMessages_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchGetMessagesREAD_GetMessages_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 216,
                      "TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ_messages",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "messages",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ",
                              "PARENT_TABLE_OBJECT_NAME": "GetMessages_READ"
                          }
                      ],
                      "CLASS_NAME": "OrchGetMessagesREAD_GetMessages_READ_messages_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "createdDate",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageBody",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageDestination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageGroup",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageId",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageSource",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageTitle",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageType",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "priority",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 216,
                      "TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ_messages_links",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "links",
                      "ACTION_TYPE": "READ",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 3,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchGetMessagesREAD_GetMessages_READ_messages",
                              "PARENT_TABLE_OBJECT_NAME": "links"
                          }
                      ],
                      "CLASS_NAME": "OrchGetMessagesREAD_GetMessages_READ_messages_links_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "rel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 217,
              "ORCHESTRATION_NAME": "CreateMessageCREATE",
              "ACTION_TYPE": [
                  "CREATE"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchCreateMessageCREATE/CreateMessage_CREATE|customerID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 217,
                      "TABLE_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CreateMessage_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "actionedDate",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "createdDate",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageBody",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageDestination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageGroup",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageSource",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageTitle",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageType",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "snoozeUntilDate",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "BODY_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 217,
                      "TABLE_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "CREATE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "CreateMessage_CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageId",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 217,
                      "TABLE_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE_links",
                      "TABLE_TYPE": "RESPONSE",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "links",
                      "ACTION_TYPE": "CREATE",
                      "TABLE_OBJECT_TYPE": "OBJECT_ARRAY",
                      "TABLE_JOIN_ORDER": 2,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [
                          {
                              "PARENT_TABLE_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE",
                              "PARENT_TABLE_OBJECT_NAME": "CreateMessage_CREATE"
                          }
                      ],
                      "CLASS_NAME": "OrchCreateMessageCREATE_CreateMessage_CREATE_links_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "Number",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageId",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "href",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "rel",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "CREATE",
                              "PARAM_TYPE": "",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          },
          {
              "ORCHESTRATION_ID": 218,
              "ORCHESTRATION_NAME": "GetMessageWithIDREAD",
              "ACTION_TYPE": [
                  "READ"
              ],
              "ORCHESTRATION_URL": "http://54.76.142.238:4060/DEV/v1/DigitalHub/OrchGetMessageWithIDREAD/GetMessageWithID_READ|customerID/<val>/GetMessageWithID_READ|messageID/<val>",
              "IS_RESTFUL": false,
              "GROUP_ID": 106,
              "IS_SYSTEM_GENERATED": false,
              "IS_AUTHENTICATION": false,
              "ORCHESTRATION_CATEGORY": "NO_CACHE",
              "IS_LOCATION_CONTEXT_REQUIRED": false,
              "IS_DATA_TRANSIT_EPS": false,
              "ORCHESTRATION_TABLE": [
                  {
                      "ORCHESTRATION_ID": 218,
                      "TABLE_NAME": "OrchGetMessageWithIDREAD_GetMessageWithID_READ",
                      "TABLE_TYPE": "REQUEST",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetMessageWithID_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchGetMessageWithIDREAD_GetMessageWithID_READ_REQUEST",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "Authorization",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "company",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "customerID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "ID",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "HEADER_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageID",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": "PATH_PARAM",
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  },
                  {
                      "ORCHESTRATION_ID": 218,
                      "TABLE_NAME": "OrchGetMessageWithIDREAD_GetMessageWithID_READ",
                      "TABLE_TYPE": "RESPONSE",
                      "ACTION_TYPE": "READ",
                      "IS_DYNAMIC_TABLE": false,
                      "TABLE_OBJECT_NAME": "GetMessageWithID_READ",
                      "TABLE_OBJECT_TYPE": "OBJECT",
                      "TABLE_JOIN_ORDER": 1,
                      "GROUP_ID": 106,
                      "PARENT_TABLE": [

                      ],
                      "CLASS_NAME": "OrchGetMessageWithIDREAD_GetMessageWithID_READ_RESPONSE",
                      "ORCHESTRATION_TABLE_COLUMN": [
                          {
                              "COLUMN_NAME": "DATA_VERSION",
                              "DATA_TYPE": "REAL",
                              "ACTION_TYPE": null,
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": true,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "createdDate",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageBody",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageDestination",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageGroup",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageId",
                              "DATA_TYPE": "",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": true,
                              "INDEX_TYPE": "S",
                              "IS_PRIMARY_KEY": true,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageSource",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageTitle",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          },
                          {
                              "COLUMN_NAME": "messageType",
                              "DATA_TYPE": "String",
                              "ACTION_TYPE": "READ",
                              "PARAM_TYPE": null,
                              "IS_INDEX_REQUIRED": false,
                              "INDEX_TYPE": "N",
                              "IS_PRIMARY_KEY": false,
                              "IS_DYNAMIC_COLUMN": false,
                              "IS_ENCRYPTABLE": false
                          }
                      ]
                  }
              ],
              "ORCHESTRATION_AUTH_PROVIDER": [

              ],
              "APP_VERSION_NUMBER": [
                  1
              ]
          }
      ]
  };
  $scope.textData ="";
  $scope.formData = {};
  $scope.modes =["XML", "Java", "Csharp", "ObjectiveC", "JavaScript", "AppleScript", "C_CPP", "coffee", "HTML", "JSON", "Python" ];
  $scope.mode = $scope.modes[0];
  $scope.modeRen = $scope.modes[0];
  $scope.themes =["Clouds", "Github", "Chrome", "Eclipse", "XCode", "TextMate", "Monokai", "Twilight"];
  $scope.theme = $scope.themes[0];
  $scope.themeRen = $scope.themes[0];
  $scope.aceOptions ={
      mode: $scope.mode.toLowerCase(),
      theme:$scope.theme.toLowerCase(),
      onLoad: function (_ace) {

          // HACK to have the ace instance in the scope...
          $scope.modeChanged = function () {
              _ace.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
          };
          $scope.themeChanged = function(){
              _ace.setTheme("ace/theme/" + $scope.theme.toLowerCase());
          };

      }
  };
    $scope.aceOptionsRendered ={
        mode: $scope.mode.toLowerCase(),
        theme:$scope.theme.toLowerCase(),
        onLoad: function (_ace) {

            // HACK to have the ace instance in the scope...
            $scope.modeChangedRendered = function () {
                _ace.getSession().setMode("ace/mode/" + $scope.modeRen.toLowerCase());
            };
            $scope.themeChangedRendered = function(){
                _ace.setTheme("ace/theme/" + $scope.themeRen.toLowerCase());
            };

        }
    };
  $scope.renderedCode ='';
  var editor = ace.edit("editor");
  $scope.sendCode = function(){
      //console.log("sending data " + $scope.textData)
       var ValueNow = editor.getValue();
       console.log("Got the value " + ValueNow);
     $scope.renderedCodeResponse = SendCode.renderCode(ValueNow).success(function(data){
         console.log("data jere " + data);
         $scope.renderedCode = data;
     });
      console.log("rendered Code after service " + JSON.stringify($scope.renderedCode))

  };
  /*$scope.ClickMeAlso = function(){
      console.log("this is textData now " + $scope.textData);

  }*/
});

app.factory('SendCode',['$http', function($http, $scope){
    return {
        renderCode : function (data) {
            var SendCodeReq = {method: 'POST', url: 'http://localhost:5858/postXml', data:data};
            /*var responseSC = $http(SendCodeReq).then();
            console.log("response " + JSON.stringify(responseSC))*/
            return $http(SendCodeReq);
        }
    }
}]);
