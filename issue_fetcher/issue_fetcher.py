import httpx
from dataclasses import dataclass, asdict

@dataclass
class Label:
    id: int
    node_id: str
    url: str
    name: str
    color: str
    default: bool
    description: str

@dataclass
class Issue:
    issues: str
    title: str
    body: str
    labels: list[Label]
    assignees: int
    comments: int
    created_at: str

@dataclass
class Search:
    keyword: str
    js_filename: str
    js_variable: str


class IssueFetcher:
    BASE_URL = "https://api.github.com"

    def __init__(self, token: str) -> None:
        self.token = token
        self.max_retries = 5
        self.retries = 0

    @property
    def headers(self):
        if self.token is None or self.token == "":
            raise ValueError("Token is missing")
        return {
            "Authorization": f"token {self.token}",
            "accept": "application/vnd.github+json",
        }

    def fetch_issues(
        self,
        keyword: str,
        labels: str = "label:hacktoberfest+label:good-first-issue",
        page: int = 1,
        per_page: int = 100,
    ) -> list[Issue] | None:
        """
        This method lets you fetch open issues from github.

        Args:
            keyword: This is the topic or the category of issues you want to fetch. e.g.
                if the keyword is `javascript`, the method will fetch issues related to 
                `javascript`.
            labels: The labels on the issues to fetch,
            page: The current page retrieved from github.
            per_page: Number of issues to retrieve from github
        """
        resource_path = (
            f"/search/issues?q={keyword}+is:issue+is:open+{labels}+sort:created-desc&per_page={per_page}&page={page}"
        )
        response = httpx.get(self.BASE_URL + resource_path, headers=self.headers)
        if response.status_code == 200:
            data =  response.json()
            issues_dict = data["items"]
            return [ self._parse_issue_from_dict(issue_dict) for issue_dict in issues_dict]
        else:
            print(response.status_code)
            print(response.json())
            if self.retries < self.max_retries:
                self.retries += 1
                return self.fetch_issues(
                    keyword=keyword, labels=labels, page=page, per_page=per_page
                )

    def _parse_issue_from_dict(self, value: dict) -> Issue:
        issues = value["url"]
        title = value["title"]
        body = value["body"]
        labels = [Label(**label_dict) for label_dict in value["labels"]]
        assignees = len(value["assignees"])
        comments = value["comments"]
        created_at = value["created_at"]
        return Issue(
            issues=issues,
            title=title,
            body=body,
            labels=labels,
            assignees=assignees,
            comments=comments,
            created_at=created_at
        )


if __name__ == "__main__":
    import os
    import json
    from dotenv import load_dotenv
    from pathlib import Path

    load_dotenv()
    
    BASE_PATH = Path().resolve().parent
    JS_ISSUES_PATH = BASE_PATH / "src/issues"
    GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
    

    searches = [
        Search(keyword="backend", js_filename="backend.js", js_variable="backendIssues"),
        Search(keyword="design", js_filename="design.js", js_variable="designIssues"),
        Search(keyword="ops", js_filename="devOps.js", js_variable="devOpsIssues"),
        Search(keyword="frontend", js_filename="frontend.js", js_variable="frontendIssues"),
        Search(keyword="react", js_filename="react.js", js_variable="reactIssues"),
        Search(keyword="security", js_filename="security.js", js_variable="securityIssues"),
        Search(keyword="writing", js_filename="technicalWriting.js", js_variable="technicalWritingIssues"),
    ]
    fetcher = IssueFetcher(token=GITHUB_TOKEN)
    
    if not JS_ISSUES_PATH.exists():
        os.mkdir(JS_ISSUES_PATH)

    for search in searches:
        issues = fetcher.fetch_issues(search.keyword)
        if issues:
            issues_dict = [asdict(issue) for issue in issues]
            with (JS_ISSUES_PATH / search.js_filename).open("w+") as js_file:
                js_file.write(f"export const {search.js_variable} = {json.dumps(issues_dict)}")
        

