"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.EventStatuses = exports.AuthorizationTypes = exports.EventTypes = exports.MessageTypes = exports.LogEventTypeId = exports.LogSeverityId = void 0;
var LogSeverityId;
(function (LogSeverityId) {
    LogSeverityId["None"] = "None";
    LogSeverityId["Error"] = "Error";
    LogSeverityId["Warning"] = "Warning";
    LogSeverityId["Info"] = "Info";
    LogSeverityId["Debug"] = "Debug";
    LogSeverityId["Trace"] = "Trace";
    LogSeverityId["Fetal"] = "Fetal";
    LogSeverityId["Security"] = "Security";
})(LogSeverityId = exports.LogSeverityId || (exports.LogSeverityId = {}));
var LogEventTypeId;
(function (LogEventTypeId) {
    LogEventTypeId["None"] = "None";
    LogEventTypeId["Create"] = "Create";
    LogEventTypeId["Read"] = "Read";
    LogEventTypeId["Update"] = "Update";
    LogEventTypeId["Delete"] = "Delete";
    LogEventTypeId["Search"] = "Search";
    LogEventTypeId["Validation"] = "Validation";
    LogEventTypeId["Information"] = "Information";
    LogEventTypeId["Debug"] = "Debug";
    LogEventTypeId["Error"] = "Error";
    LogEventTypeId["Login"] = "Login";
    LogEventTypeId["Upload"] = "Upload";
    LogEventTypeId["Unauthorized"] = "Unauthorized";
    LogEventTypeId["Security"] = "Security";
    LogEventTypeId["Trace"] = "Trace";
})(LogEventTypeId = exports.LogEventTypeId || (exports.LogEventTypeId = {}));
var MessageTypes;
(function (MessageTypes) {
    MessageTypes["Error"] = "Error";
    MessageTypes["Warning"] = "Warning";
    MessageTypes["Information"] = "Information";
    MessageTypes["Validation"] = "Validation";
    MessageTypes["Debug"] = "Debug";
    MessageTypes["Trace"] = "Trace";
})(MessageTypes = exports.MessageTypes || (exports.MessageTypes = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes["Error"] = "Error";
    EventTypes["Warning"] = "Warning";
    EventTypes["Information"] = "Information";
    EventTypes["Validation"] = "Validation";
    EventTypes["Debug"] = "Debug";
    EventTypes["Trace"] = "Trace";
})(EventTypes = exports.EventTypes || (exports.EventTypes = {}));
var AuthorizationTypes;
(function (AuthorizationTypes) {
    AuthorizationTypes[AuthorizationTypes["None"] = 0] = "None";
    AuthorizationTypes[AuthorizationTypes["NoAuth"] = 1] = "NoAuth";
    AuthorizationTypes[AuthorizationTypes["BearerToken"] = 2] = "BearerToken";
    AuthorizationTypes[AuthorizationTypes["BasicAuth"] = 3] = "BasicAuth";
    AuthorizationTypes[AuthorizationTypes["DigestAuth"] = 4] = "DigestAuth";
    AuthorizationTypes[AuthorizationTypes["OAuth1_0"] = 5] = "OAuth1_0";
    AuthorizationTypes[AuthorizationTypes["OAuth2_0"] = 6] = "OAuth2_0";
    AuthorizationTypes[AuthorizationTypes["NTLM"] = 7] = "NTLM";
})(AuthorizationTypes = exports.AuthorizationTypes || (exports.AuthorizationTypes = {}));
var EventStatuses;
(function (EventStatuses) {
    EventStatuses["None"] = "None";
    EventStatuses["Started"] = "Started";
    EventStatuses["Completed"] = "Completed";
    EventStatuses["Pending"] = "Pending";
    EventStatuses["Active"] = "Active";
    EventStatuses["Inactive"] = "Inactive";
    EventStatuses["Cancelled"] = "Cancelled";
    EventStatuses["Closed"] = "Closed";
    EventStatuses["NotStarted"] = "NotStarted";
    EventStatuses["Error"] = "Error";
    EventStatuses["ClientError"] = "ClientError";
    EventStatuses["ServerError"] = "ServerError";
})(EventStatuses = exports.EventStatuses || (exports.EventStatuses = {}));
/**
* Creates a string that can be used for dynamic id attributes
* Example:
* @returns {string}
*/
function generateId() {
    return (Math.random().toString(16) + '000000000').substr(2, 8);
}
exports.generateId = generateId;
/**
 * Class for System Event
 * */
class SystemEvent {
    /**
     * Creates an Event
     * @param text - Details of task
     * @param type - Event type
     * @param status - Event status
     *
     */
    constructor(text, type, status) {
        this.text = text;
        this.type = type;
        if (status) {
            this.status = status;
        }
        this.timestamp = Date.now();
    }
}
exports.default = SystemEvent;
