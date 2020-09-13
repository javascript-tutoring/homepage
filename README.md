# javascript-tutoring-website

Website for the Javascript Tutoring community

## How to run

In order to run this website for development, you need to have [Node JS](https://nodejs.org/en/). I highly recommend installing the LTS version, whatever it might be.

Once you have Node installed, open up this code base and run `npm install` on the command line / terminal inside of this directory. This should create a folder calleed _node_modules_. Node modules holds some importand, downloaded code that will help us build our website, and run it.

Once `npm install` runs properly, you will need to open up two command line / terminal instances inside of this directory. On one of the terminals, run `npm run watch`. This script will convert our scss files to css files and bundle our JS files. By default, websites are unable to recognize scss, so we need to compile it to normal css. We want to use scss because it makes developing CSS _much_ easier!

In the second terminal, run `npm run dev`. This command will start up the development server at localhost:8080/. The website should open up automatically when the command is ran, and refresh automatically whenever any changes to the codebase are made.

## Contributing

When working on this website, please make sure the code you are writing is associated to a task on the github project. This helps us keep track of what people are working on, and avoid people working on duplicate tasks. When you find a task that you want to work on, please move it into the "in progress" column so everyone knows that it is being worked on. If you decide that you don't want to work on an issue anymore, there is no need to worry, just move it back into the "to do" column 🙂

### Branching

Once you have found a cool task to work on, moved it into the "in progress" column, it is now time to get coding! When working on a new feature, it is important that you work on a new git branch. We will be using a branching model called "github flow".

Our _default_ branch is the _develop_ branch. The _develop_ branch contains the newest code. Whenever you are creating a new feature branch, it is important that you "pull" the latest code from github on develop, and branching from that. This can be achieved by doing the following steps:

1. `git checkout develop` (switch to the develop branch)
2. `git pull origin develop` (pull the latest code down from github)
3. `git branch [new-branch-name]` (create a new branch. Substitute "new-branch-name" with what ever you want to name the new branch)
4. `git checkout [new-branch-name]` (switch to the branch you just created. Substitute "new-branch-name" with the name of the branch you made in the previous step)

### Committing

Please try your best to only work on one feature per branch. This will help tremendously with code reviews. The more often you commit, the better as well. Please also write meaningful commit messages. Committing can be done with the following steps.

1. `git add -u` (stage all changed files for commiting. This _only_ stages files that have already been commited at some point in time. If you need to add new files that you have just created, use the command `git add ./path/to/file`)
2. `git commit -m "[your commit message]"` (commit the file changes with a message, make sure to include the quotes!)
3. `git push origin [new-branch-name]` (replace "new-branch-name" with the name of the branch you are working on. This will "push" your branch up to github for others to see!)

### Pull Requests

Once you have pushed your new branch with your awesome new code up to github, it is time to create a pull request! A pull requests lets people know you are done working on your feature, and allows for others to review your code. All pull requests you make should be done against the develop branch.

To make a pull request, go to https://github.com/pchertude34/javascript-tutoring-website/pulls and click the big green "New pull request" button. Make sure the "base" branch on the left is set to "develop" and the "compare" branch on the right is set to the branch that you have been working on. Double check the differences between the two branches to make sure you selected the correct branch, there are no issues, and double check for mistakes. You wouldn't beleive the number of times I have personally caught mistakes at this point.

After you have checked everything, click "Create pull request" and someone will review it!

## BEM Model

We are using the BEM model for scss development. This helps us keep our code organized as well as avoid merge conflicts with other people's work. Merge conflicts can happen when people are working on the same file at the same time.

We try to separate out our SCSS into folders:

- **abstracts:**
  In the abstracts folder we put things that aren't necessarily scss classes, like variables, functions or mixins. We won't touch this stuff too often.
- **base:**
  The base directory holds classes that are shared througout the website. These are things like the spacing utility functions (such as `.m-lg`) that are used often in the website, but aren't entire components by themselves.
- **components:**
  This folder is what you will contribute to most often. Here is where we will create styles for our specific components — or pieces of the website. For instance, the "Featured Projects" card will have it's own file in this directory called **\_featured-project-card.scss**. Any time you are creating a new component, make sure it is contained in a new file to avoid clashing with other people's work.
- **layout:**
  The layout folder holds things that are used for laying out stuff on the website, like the css grid.
- **pages:**
  This folder contains scss sheets specific to each page. There should be a 1 to 1 ratio between files here, and pages in our website. In these sheets, we will put styles for things such as section background colors, section spacings, and anything that might differ from page to page.
- **main.scss:**
  The **main.scss** file's purpose is only for importing other files. **_NOTE:_** If you ever create a new **.scss** file, make sure you import it here, otherwise the website won't be able to access your beautiful code! We won't put any actual scss in here. When we run our compiler, it will look at this file, grab all of the imported scss files, and convert it into one big css file that the website can use. You can see this if you look in the **dist/css/main.css** file after running `npm run build`.
