export enum LogSeverityId {
    None = "None",
    Error = "Error",
    Warning = "Warning",
    Info = "Info",
    Debug = "Debug",
    Trace = "Trace",
    Fetal = "Fetal",
    Security = "Security",
}

export enum LogEventTypeId {
    None = "None",
    Create = "Create",
    Read = "Read",
    Update = "Update",
    Delete = "Delete",
    Search = "Search",
    Validation = "Validation",
    Information = "Information",
    Debug = "Debug",
    Error = "Error",
    Login = "Login",
    Upload = "Upload",
    Unauthorized = "Unauthorized",
    Security = "Security",
    Trace = "Trace",
}

export enum MessageTypes {
    Error = "Error",
    Warning = "Warning",
    Information = "Information",
    Validation = "Validation",
    Debug = "Debug",
    Trace = "Trace"
}

export enum EventTypes {
    Error = "Error",
    Warning = "Warning",
    Information = "Information",
    Validation = "Validation",
    Debug = "Debug",
    Trace = "Trace"
}

export enum AuthorizationTypes {
  None = 0,
  NoAuth = 1,
  BearerToken = 2,
  BasicAuth = 3,
  DigestAuth = 4,
  OAuth1_0 = 5,
  OAuth2_0 = 6,
  NTLM = 7,
}

export enum EventStatuses {
  None = "None",
  Started = "Started",
  Completed = "Completed",
  Pending = "Pending",
  Active = "Active",
  Inactive = "Inactive",
  Cancelled = "Cancelled",
  Closed = "Closed",
  NotStarted = "NotStarted",
  Error = "Error",
  ClientError = "ClientError",
  ServerError = "ServerError"
}

    /**
   * Creates a string that can be used for dynamic id attributes
   * Example: 
   * @returns {string}
   */
export function generateId() {
      return (Math.random().toString(16) + '000000000').substr(2, 8);
    }
    

      /**
       * Add authorization to HTTP Client. If not HTTP client given, it creates a new one.
       * @param baseApiUrl: URL to access
       * @param type: type of authorization
       * @param token: token to add to authorization header
       * @param httpClient: http client 
       */
export function addAuthorizationHeader(baseApiUrl: string, type: AuthorizationTypes, token: string, httpClient: HttpClient): HttpClient {
        if (!httpClient) {
          httpClient = new HttpClient();
        } 
        httpClient.configure(config => {
          config
            .withBaseUrl(baseApiUrl)
        });
        switch (type) {
          case AuthorizationTypes.None:
            break;
          case AuthorizationTypes.NoAuth:
            break;
          case AuthorizationTypes.BearerToken:
            if (!token) {
              throw new TypeError("Authorization type " + type + " requres a token.")
            }
            httpClient.configure(config => {
              config.withDefaults({
                headers: {
                  'Authorization': 'Bearer ' + token
                }
              });
            });
            break;
          case AuthorizationTypes.NTLM:
            httpClient.configure(config => {
              config
                .useStandardConfiguration()
                .withDefaults({
                mode: "cors",
                credentials: 'include',
              });
            });
            break;
        }
        return httpClient;
  }


/**
 * Class for System Event
 * */
export default class SystemEvent {
  type: EventTypes;
  text: string;
  timestamp: number;
  status?: EventStatuses;

  /**
   * Creates an Event
   * @param text - Details of task
   * @param type - Event type
   * @param status - Event status
   *  
   */
  public constructor(text: string, type: EventTypes, status?: EventStatuses) {
    this.text = text;
    this.type = type;
    if (status) {
      this.status = status;
    }
    this.timestamp = Date.now();
  }

}