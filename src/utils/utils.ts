import { ISegmentedCommitMessage } from "../types/types";

const getJiraIssues = (commitMessage: string): string[] => {
    let issues: any = [];
    const startScopeIndexOf = commitMessage.indexOf("(") + 1;
    const endScopeIndexOf = commitMessage.indexOf(")");
    issues = commitMessage.substr(startScopeIndexOf, endScopeIndexOf - startScopeIndexOf).split(",").map(issue => issue.trim()).filter(issue => issue.length > 0);
    return issues;
}

const getPartOfCommit = (commitMessage: string, separator: string, type: string): string => {
    let partToGet;
    let partOfCommit = "";
    switch (type) {
        case "footer":
            partToGet = 1;
            break;
        case "header":
            partToGet = 0;
            break;
        default:
            partToGet = 0;
            break;
    }
    partOfCommit = commitMessage.split(separator)[partToGet];
    return partOfCommit;
}

const getCommitType = (header: string): string => {
    let commitType = "";
    const startScopeIndexOf = header.indexOf("(");
    const endScopeIndexOf = header.indexOf(")") + 1;
    if (startScopeIndexOf > 0 && endScopeIndexOf > 0) {
        const stringToRemove = header.substr(startScopeIndexOf, endScopeIndexOf - startScopeIndexOf);
        commitType = header.replace(stringToRemove, "").replace(/\s/g, "");
    } else {
        commitType = header.replace(/\s/g, "");
    }
    return commitType;
}

/* 
    example: fix (JIR-233, JIRA-555): my message
    result = {
        issues: ["JIR-233, JIRA-555"],
        header: "fix (JIR-233, JIRA-555)",
        footer: "my message",
        state: "fix",
    }
*/
export const segmentCommitMessage = (commitMessage: string): ISegmentedCommitMessage => {
    const issues = getJiraIssues(commitMessage);
    const header = getPartOfCommit(commitMessage, ":", "header");
    const footer = getPartOfCommit(commitMessage, ":", "footer");
    const commitType  = getCommitType(header);
    return {
        issues,
        header,
        footer,
        commitType
    };
}