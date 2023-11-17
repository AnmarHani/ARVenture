# ARVenture Project Overview

ARVenture is an idea of an AR Glasses that offers a system of making real world objects after wearing the glasses to virtual objects and tools. It consists of several components and systems. You can go to the docs page from here.

# Summary

Please refer to the document that includes all the files and documents of the ARVenture Project. [ARVenture Documents Home]()

Also, Github Repository [ARVenture Github Repo]()

## Credits

Anmar Hani (2140004) - Team Lead, Software Architect, Test Designer, and Project Manger.
Mohamad Alsaadwi (2140519) - Web Frontend Developer.
Raef Shah (2141165) - Fullstack Designer.
Yaser Kaid (2140847) - Mobile Developer.
Ziyad Alghamdi (2142017) - Backend Developer and Data Analyst.

<!-- Fawaz Khosifan - System Admin and Penetration Tester -->

# Table of contents:


# Live Examples

Frontend: url
Backend: url
Analysis Frontend: url
Analysis Backend: url

# How to Run Code Locally

### 1. First, clone the repository or download the zip code into your local desktop.

## 2a. Docker

1. Download [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Then, go to root directory, in terminal run `docker-compose -f docker-compose.yml up --build`

## 2b. Manual

1. Manual: Download [NodeJS](https://nodejs.org/en/download) and [Python 3.10+](https://www.python.org/downloads/) with Python.EXE in PATH checked in installer.
2. Then, go to root directory, open two terminals, one run `cd frontend` and the other run `cd backend`
3. In the frontend terminal run `npm install` to install all needed packages, In the backend terminal run `pip install -r requirements.txt`
4. In the frontend terminal run `npm run dev` and open the browser in http://localhost:5174
5. In the backend terminal run `python ARAPI.py`

## 1. Requirements Specification

In this stage we collected requirements, analysed, priotriezed it, and specified it.
[Go to Requirements Specification Document](./documents/project-management/execution/implementation.md)

## 2. Design

In this stage, System and Software Architecture is designed. Also, user interfaces are designed.
[Go to Design Document](./documents/project-management/execution/implementation.md)

## 3. Implementation

in this stage, We have several implementation stages:

- ARV API Backend (DONE)
- ARV Frontend Web (DONE)
- Analysis API Backend (ONGOING)
- Analysis Frontend Web (ONGOING)
- Mobile Application (LATER)
- VR Glasses and System (LATER)

[Go to Implementation Document](./documents/project-management/execution/implementation.md)

### ARV Frontend Web Technologies:

- HTML/CSS
- SvelteJS
- Bootstrap

### ARV API Backend Technologies:

- FastAPI
- PostegreSQL Database
- SQLAlchemy

### Analysis API Backend Technologies:

- FastAPI
- Pandas
- Numpy
- Matplotlib
- SQL

### Analysis Frontend Web Technologies:

- Streamlit

## 4. Verification and Validation
In this stage we organized and structured testing stages and testing methods.
[Go to Verification and Validation Document](./documents/project-management/execution/implementation.md)

## 5. Deployment and Evolution and Maintenance
In this stage we deployed the system and planned for scalability and evolution.
[Go to Evolution Document](./documents/project-management/execution/implementation.md)
