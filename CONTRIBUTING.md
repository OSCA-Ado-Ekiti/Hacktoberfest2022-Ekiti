# Send PR directly on Github

1. Fork the repository: forking a repository creates a copy of the repository on your accoount. This allows you to freely experiment changes without affecting the main repository.

![fork](https://user-images.githubusercontent.com/53593233/195101076-015c4c34-fbdf-4836-9f00-2ec67a580962.PNG)

After clicking the fork button in the image above, you'll complete the forking process by clicking the create fork button

![fork 1](https://user-images.githubusercontent.com/53593233/195101682-ce023d2a-ffe1-4aaf-b837-eecfcfddb778.PNG)

2. Create a branch of yours to make your contributions: creating a branch allows you to separate your changes from the main branch which can later be added to the main branch if there is no error or conflict. Else, discarded.

![branch](https://user-images.githubusercontent.com/53593233/195101930-5bcc6a38-9fa6-477c-a702-86147296aeac.PNG)

Input the name of your branch and then click "Create branch: branch-name" slightly below the branch name input area

3. When you are done creating the branch, you can start making your contributions.

![make_changes](https://user-images.githubusercontent.com/53593233/195103019-b3aaa155-1316-4301-84b3-9f46dac7b0a6.PNG)

4. When you're done making your contribution, compare & pull request

![compare and pull request](https://user-images.githubusercontent.com/53593233/195103835-8a279c89-a0e9-4aa3-abec-df5ac30803a0.PNG)

5. Finally, send your pull request.
   You can also leave a comment to explain your contribution.

![pull_request](https://user-images.githubusercontent.com/53593233/195104042-4b44473e-6292-4681-9b4e-ee422982ed14.PNG)

# Send PR with git

1. Fork the repository as in the first step above

2. Clone the forked repository to your local machine

```markdown
git clone https://github.com/OSCA-Ado-Ekiti/Hacktoberfest2022-Ekiti.git
```

3. Navigate to the cloned directory

```markdown
cd Hacktoberfest2022-Ekiti
```

4. Create a branch

```markdown
git checkout -b branch_name (Creates and switches to the new branch created)
```

5. Make your contributions

6. Add, commit and push changes

```markdown
git add file_name (use . to add every files and folders in the directory)
git commit -m 'commit message'
git push origin branch_name
```

If you are having any dificulty, check this article: [https://codesandbox.io/post/how-to-make-your-first-open-source-contribution](https://codesandbox.io/post/how-to-make-your-first-open-source-contribution)
