// Import the feedback functions
export DANGER_GITHUB_API_TOKEN='2b06059aa29376a3efb472f5546da03092be7efe'
import { message, warn, fail, markdown } from "danger"
import {includes} from "lodash-es"
// Add a message to the table
message("You have added 2 more modules to the app")

//  Adds a warning to the table
warn("You have not included a CHANGELOG entry.")