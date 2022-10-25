import json
import requests

def fetch_issues(query=None, labels=None, page=1):

    try:
        if query.lower() and labels.lower():
            issue_url = f"https://api.github.com/search/issues?q={query}&labels={labels}&page={page}"
            response = requests.get(issue_url)
            if response.status_code == 200:
                return response.json()
            return None
    except:
        return None 

def clean_issues():

    data_fetch_iss = fetch_issues('', 'hacktoberfest, hacktoberfest-accepted')

    if isinstance(data_fetch_iss, dict):
        data = {}
        clean_data = []
        for _ in data_fetch_iss['items']: 
            issues_url = _.get('url').replace(
                "https://api.github.com/repos/", "https://github.com/"
            )

            data['issues'], data['title'] = issues_url, _.get('title')
            data['body'], data['labels'] = _.get('body'), _.get('labels')
            data['assignees'],data['comments'] = len(_.get('assignees')), _.get('comments')  
            data['created_at'] = _.get('created_at')
            clean_data.append(data)
            data = {}

        return clean_data
    return None

def write_to_file(filename):

    if (clean_issue := clean_issues()):  
        with open(filename, 'a') as file:
            json.dump(clean_issue, file, indent=4)
            print('File saved successfully.')
    else:
        print('Opps! who should we blame, network?')

if '__main__' == __name__:
    write_to_file('files/.json')