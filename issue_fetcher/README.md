# Issue Fetcher

Issue fetcher is a python script that let's us fetch hacktoberfest good first issues from github for use in the frontend
app.

## How it works

Issue fetcher fetches issues from github via it's REST API.
It then parses it into a format compatible with the frontend.
These fetched issues are saved as `js` source files in the `issues` directory in the frontend of the application.

## Development Setup

Issue fetcher requires `python=3.11` and `pipenv`. If you don't have `pipenv` installed, you can install it with.
`pip install pipenv`.

After these requirements have been met from this issue scrapper
directory, run `pipenv install` after which you'll run `pipenv shell`.

Create a `.env` file in the `issue_fetcher` directory and populate it with a `GITHUB_TOKEN=<your-github-token>`

run the `issue_fetcher.py` file to generate issues in the frontend `issues` directory with `python issue_fetcher.py`

Note that the development setup and running the script
requires a descent internet connection.
