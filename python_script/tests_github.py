from unittest import TestCase, main
from src.github import fetch_issues, clean_issues, write_to_file

class TestGithub(TestCase):
	def test_fetch_issue_queried_issues(self):
		"""
		Test that it should return list of 
		issues from github's api
		"""
		result = fetch_issues('python','bugs',1)

		self.assertTrue(result)
		self.assertIsInstance(result, dict)

	def test_fetch_issue_not_queried_issues(self):
		"""
		Test that it should return None if parameters 
		are not set to query issues from github's api
		"""
		result = fetch_issues()
		self.assertIsNone(result)

	def test_clean_issues_worked(self):
		"""
		Test that it should return a list holding dict of
		issues
		"""
		github_issue = {'items': [{'url':'https://api.github.com/repos/test/',
				"title": "Test",
				"body": "This is just a test data",
				"labels": 'test',"assignees": [],"comments": 0,"created_at": "2022-10-22T18:40:56Z"}]}

		result = clean_issues(github_issue)

		self.assertTrue(result)
		self.assertIsInstance(result, list)

	def test_clean_issues_not_work(self):
		"""
		Test that it should return None
		"""
		result = clean_issues(None)
		
		self.assertIsNone(result)
	
	def test_write_to_file_work(self):
		"""
		Test should write to file
		"""
		data = [{"issues": "https://test.com/","title": "Test","body": "This is just a test data",
     			"labels": 'test', "assignees": 0, "comments": 0, "created_at": "2022-10-22T18:40:56Z"},    
     		{"issues": "https://test.com/","title": "Test","body": "This is just a test data",
        		"labels": 'test',"assignees": 0,"comments": 0,"created_at": "2022-10-22T18:40:56Z"}]
		
		result = write_to_file('test.json', data)

		self.assertTrue(result)
		self.assertEqual(result, 'File saved successfully.')


	def test_write_to_file_work(self):
		"""
		Test should not write to file
		"""		
		result = write_to_file('test.json', None)

		self.assertEqual(result, 'Opps! who should we blame, network?')

if __name__ == '__main__':
	main()
