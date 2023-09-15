import axe from "axe-core";
import jira from "jira-client";
import configparser

config = configparser.ConfigParser()
config.read("jira_config.ini")

jira_username = config["jira"]["username"]
jira_password = config["jira"]["password"]
jira_url = config["jira"]["url"]

    Use the Jira credentials to create a JiraClient object.

from jira import JiraClient

jiraClient = JiraClient(username=jira_username, password=jira_password, url=jira_url)


const violations = axe.run(document);
const backlogIssues = [];

for (const violation of violations) {
  const issueKey = violation.id;

  // Check if the issue already exists in the backlog
  const issue = jiraClient.getIssue(issueKey);
  if (!issue) {
    // The issue doesn't exist, so create it
    const issueDetails = {
      projectId: "your-project-id",
      issueType: "Bug",
      summary: violation.description,
      components: ["Accessibility"],
    };
    jiraClient.createIssue(issueDetails);

    backlogIssues.push(issueKey);
  }
}

console.log("Added the following issues to the backlog:", backlogIssues);
