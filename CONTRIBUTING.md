# Contributing to Pclub Winter of Code

Thanks for contributing to programming club website as a part of winter of code. We hope you learn something new and this can help you during your further open source contributions.

# Development Setup for PClub WOC 4.0 Project

This guide will walk you through the steps to get the project up and running on your local machine.

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) **(v18 or later) (preferred any version >= 20)**
- [npm](https://www.npmjs.com/) (comes bundled with Node.js i.e. you do not need to install this seperately)
- [Git](https://git-scm.com/downloads)

## Getting Started

0. **Fork the repository**

   - In this repository, on the top-right side you can see an option to **fork**.
   - Once done, a _copy_ of this repository will be created in your github account

1. **Clone the Repository**

   First, clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/Your-Username/WOC-2024.git
   ```

   Replace `Your-Username` with your github username.

2. **Move to project directory**

   ```bash
   cd WOC-2024
   ```

3. **Install Dependencies**

   Install the required dependencies using npm:

   ```bash
   npm install
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   This will start the Vite development server, and you can view the project in your browser at `http://localhost:5173`.

If you are looking forward to contributing, please create a new _branch_ before making any changes. Learn more about it from [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

5. Create a new branch

   ```bash
   git checkout -b my-new-branch-name
   ```

   - branch name can be anything but you can keep it in align with the issue you are solving. For instance

     ```bash
     git checkout -b add-navbar
     ```

---

### Note:

Try to make sure you are working on latest codebase

- For this before working on any issue, you can headover to your forked repository and check for whether something like `update branch` is written there, make sure you update your branch with `Sync Fork` option (Make sure your branch is selected as `main` there)

---

You are all set now to make your changes. If there are any problem, feel free to contact us.

6. Add your changes

   ```bash
   git add .
   ```

   - If you just want few files to be part of the change that you made

     ```bash
     git add App.jsx App.css
     ```

7. Commit your changes

   ```bash
   git commit -m "my changes"
   ```

   again this commit message can be anything random, but good practice is to use meaningful commit message.
   Please have a look at this [link](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) to know more about this **best** practice

8. Push 🚀 your changes

   ```bash
   git push origin my-new-branch-name
   ```

Once you push the changes to your **cloned repository**, the Compare & pull request button will appear in that github repository that was created when you forked this repository.

---

We are looking forward to review your changes and hope you learn something new during this.
